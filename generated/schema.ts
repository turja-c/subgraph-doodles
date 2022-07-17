// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Doodle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Doodle entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Doodle must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Doodle", id.toString(), this);
    }
  }

  static load(id: string): Doodle | null {
    return changetype<Doodle | null>(store.get("Doodle", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get owner(): string | null {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set owner(value: string | null) {
    if (!value) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromString(<string>value));
    }
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get faceStyle(): string | null {
    let value = this.get("faceStyle");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set faceStyle(value: string | null) {
    if (!value) {
      this.unset("faceStyle");
    } else {
      this.set("faceStyle", Value.fromString(<string>value));
    }
  }

  get hairType(): string | null {
    let value = this.get("hairType");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set hairType(value: string | null) {
    if (!value) {
      this.unset("hairType");
    } else {
      this.set("hairType", Value.fromString(<string>value));
    }
  }

  get backgrondColor(): string | null {
    let value = this.get("backgrondColor");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set backgrondColor(value: string | null) {
    if (!value) {
      this.unset("backgrondColor");
    } else {
      this.set("backgrondColor", Value.fromString(<string>value));
    }
  }

  get headTop(): string | null {
    let value = this.get("headTop");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set headTop(value: string | null) {
    if (!value) {
      this.unset("headTop");
    } else {
      this.set("headTop", Value.fromString(<string>value));
    }
  }

  get accessoryAddon(): string | null {
    let value = this.get("accessoryAddon");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set accessoryAddon(value: string | null) {
    if (!value) {
      this.unset("accessoryAddon");
    } else {
      this.set("accessoryAddon", Value.fromString(<string>value));
    }
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get Doodles(): Array<string> | null {
    let value = this.get("Doodles");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set Doodles(value: Array<string> | null) {
    if (!value) {
      this.unset("Doodles");
    } else {
      this.set("Doodles", Value.fromStringArray(<Array<string>>value));
    }
  }
}