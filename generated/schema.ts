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

export class ArbitrableHistory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ArbitrableHistory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ArbitrableHistory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ArbitrableHistory", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ArbitrableHistory | null {
    return changetype<ArbitrableHistory | null>(
      store.get_in_block("ArbitrableHistory", id)
    );
  }

  static load(id: string): ArbitrableHistory | null {
    return changetype<ArbitrableHistory | null>(
      store.get("ArbitrableHistory", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get metaEvidence(): string {
    let value = this.get("metaEvidence");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set metaEvidence(value: string) {
    this.set("metaEvidence", Value.fromString(value));
  }

  get disputes(): DisputeLoader {
    return new DisputeLoader(
      "ArbitrableHistory",
      this.get("id")!.toString(),
      "disputes"
    );
  }
}

export class Dispute extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Dispute entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Dispute must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Dispute", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Dispute | null {
    return changetype<Dispute | null>(store.get_in_block("Dispute", id));
  }

  static load(id: string): Dispute | null {
    return changetype<Dispute | null>(store.get("Dispute", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get arbitrated(): Bytes {
    let value = this.get("arbitrated");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set arbitrated(value: Bytes) {
    this.set("arbitrated", Value.fromBytes(value));
  }

  get metaEvidenceId(): BigInt {
    let value = this.get("metaEvidenceId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set metaEvidenceId(value: BigInt) {
    this.set("metaEvidenceId", Value.fromBigInt(value));
  }

  get arbitrableHistory(): string | null {
    let value = this.get("arbitrableHistory");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set arbitrableHistory(value: string | null) {
    if (!value) {
      this.unset("arbitrableHistory");
    } else {
      this.set("arbitrableHistory", Value.fromString(<string>value));
    }
  }

  get ruling(): BigInt {
    let value = this.get("ruling");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set ruling(value: BigInt) {
    this.set("ruling", Value.fromBigInt(value));
  }

  get ruled(): boolean {
    let value = this.get("ruled");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set ruled(value: boolean) {
    this.set("ruled", Value.fromBoolean(value));
  }

  get period(): string {
    let value = this.get("period");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set period(value: string) {
    this.set("period", Value.fromString(value));
  }

  get createdAtBlock(): BigInt {
    let value = this.get("createdAtBlock");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set createdAtBlock(value: BigInt) {
    this.set("createdAtBlock", Value.fromBigInt(value));
  }

  get lastPeriodChange(): BigInt {
    let value = this.get("lastPeriodChange");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set lastPeriodChange(value: BigInt) {
    this.set("lastPeriodChange", Value.fromBigInt(value));
  }

  get evidenceGroup(): EvidenceGroupLoader {
    return new EvidenceGroupLoader(
      "Dispute",
      this.get("id")!.toString(),
      "evidenceGroup"
    );
  }
}

export class EvidenceGroup extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EvidenceGroup entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EvidenceGroup must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EvidenceGroup", id.toString(), this);
    }
  }

  static loadInBlock(id: string): EvidenceGroup | null {
    return changetype<EvidenceGroup | null>(
      store.get_in_block("EvidenceGroup", id)
    );
  }

  static load(id: string): EvidenceGroup | null {
    return changetype<EvidenceGroup | null>(store.get("EvidenceGroup", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dispute(): string {
    let value = this.get("dispute");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set dispute(value: string) {
    this.set("dispute", Value.fromString(value));
  }

  get length(): BigInt {
    let value = this.get("length");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set length(value: BigInt) {
    this.set("length", Value.fromBigInt(value));
  }

  get evidence(): EvidenceLoader {
    return new EvidenceLoader(
      "EvidenceGroup",
      this.get("id")!.toString(),
      "evidence"
    );
  }
}

export class Evidence extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Evidence entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Evidence must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Evidence", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Evidence | null {
    return changetype<Evidence | null>(store.get_in_block("Evidence", id));
  }

  static load(id: string): Evidence | null {
    return changetype<Evidence | null>(store.get("Evidence", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get group(): string {
    let value = this.get("group");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set group(value: string) {
    this.set("group", Value.fromString(value));
  }

  get creationTime(): BigInt {
    let value = this.get("creationTime");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set creationTime(value: BigInt) {
    this.set("creationTime", Value.fromBigInt(value));
  }

  get URI(): string {
    let value = this.get("URI");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set URI(value: string) {
    this.set("URI", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }
}

export class DisputeLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Dispute[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Dispute[]>(value);
  }
}

export class EvidenceGroupLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): EvidenceGroup[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<EvidenceGroup[]>(value);
  }
}

export class EvidenceLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Evidence[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Evidence[]>(value);
  }
}
