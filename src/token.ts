import {
  Transfer as TransferEvent
} from "../generated/Token/Token";
import { Doodle, User } from "../generated/schema";
import { log, ipfs, json, JSONValue } from "@graphprotocol/graph-ts";

const ipfsHash = "QmPMc4tcBsMqLRuCQtPmPe84bpSjrC3Ky7t3JWuHXYB4aS";

export function handleTransfer(event: TransferEvent): void {
  let doodle = Doodle.load(event.params.tokenId.toString());

  if (doodle == null) {
    doodle = new Doodle(event.params.tokenId.toString());
    doodle.tokenID = event.params.tokenId;
    doodle.tokenURI = "/" + event.params.tokenId.toString();

    let metadata = ipfs.cat(ipfsHash + doodle.tokenURI);
    if (metadata) {
      const value = json.fromBytes(metadata).toObject();
      if (value) {
        const name = value.get("name");
        if (name) {
          doodle.name = name.toString();
        }
      }
      let attributes: JSONValue[];
      let doodleAttributes = value.get("attributes");
      if (doodleAttributes) {
        attributes = doodleAttributes.toArray();

        for (let i = 0; i < attributes.length; i++) {
          let item = attributes[i].toObject();
          let trait: string;
          let traitName = item.get("trait_type");
          if (traitName) {
            trait = traitName.toString();
            let value: string;
            let traitValue = item.get("value");
            if (traitValue) {
              value = traitValue.toString();
              if (trait == "face") {
                doodle.faceStyle = value;
              }
              if (trait == "hair") {
                doodle.hairType = value;
              }
              if (trait =="background") {
                doodle.backgrondColor = value;
              }
              if (trait == "head") {
                doodle.headTop = value;
              }
              if (trait == "piercing") {
                doodle.accessoryAddon = value;
              }
            }
          }
        }
      }
    }
  }
  doodle.owner = event.params.to.toHexString();
  doodle.save();

  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
}