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
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ArbitrableHistory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ArbitrableHistory must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ArbitrableHistory", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): ArbitrableHistory | null {
    return changetype<ArbitrableHistory | null>(
      store.get_in_block("ArbitrableHistory", id.toHexString())
    );
  }

  static load(id: Bytes): ArbitrableHistory | null {
    return changetype<ArbitrableHistory | null>(
      store.get("ArbitrableHistory", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
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

  get arbitrableHistory(): Bytes | null {
    let value = this.get("arbitrableHistory");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set arbitrableHistory(value: Bytes | null) {
    if (!value) {
      this.unset("arbitrableHistory");
    } else {
      this.set("arbitrableHistory", Value.fromBytes(<Bytes>value));
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

  get nbChoices(): BigInt {
    let value = this.get("nbChoices");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set nbChoices(value: BigInt) {
    this.set("nbChoices", Value.fromBigInt(value));
  }

  get nbRounds(): BigInt {
    let value = this.get("nbRounds");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set nbRounds(value: BigInt) {
    this.set("nbRounds", Value.fromBigInt(value));
  }

  get rounds(): RoundLoader {
    return new RoundLoader("Dispute", this.get("id")!.toString(), "rounds");
  }

  get evidenceGroup(): EvidenceGroupLoader {
    return new EvidenceGroupLoader(
      "Dispute",
      this.get("id")!.toString(),
      "evidenceGroup"
    );
  }
}

export class Round extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Round entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Round must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Round", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): Round | null {
    return changetype<Round | null>(
      store.get_in_block("Round", id.toHexString())
    );
  }

  static load(id: Bytes): Round | null {
    return changetype<Round | null>(store.get("Round", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
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

  get jurors(): Array<Bytes> {
    let value = this.get("jurors");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set jurors(value: Array<Bytes>) {
    this.set("jurors", Value.fromBytesArray(value));
  }
}

export class Draw extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Draw entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Draw must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Draw", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Draw | null {
    return changetype<Draw | null>(store.get_in_block("Draw", id));
  }

  static load(id: string): Draw | null {
    return changetype<Draw | null>(store.get("Draw", id));
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

  get address(): Bytes {
    let value = this.get("address");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get appeal(): BigInt {
    let value = this.get("appeal");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set appeal(value: BigInt) {
    this.set("appeal", Value.fromBigInt(value));
  }

  get disputeID(): BigInt {
    let value = this.get("disputeID");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set disputeID(value: BigInt) {
    this.set("disputeID", Value.fromBigInt(value));
  }

  get voteID(): BigInt {
    let value = this.get("voteID");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set voteID(value: BigInt) {
    this.set("voteID", Value.fromBigInt(value));
  }
}

export class TokenAndETHShift extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenAndETHShift entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenAndETHShift must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenAndETHShift", id.toString(), this);
    }
  }

  static loadInBlock(id: string): TokenAndETHShift | null {
    return changetype<TokenAndETHShift | null>(
      store.get_in_block("TokenAndETHShift", id)
    );
  }

  static load(id: string): TokenAndETHShift | null {
    return changetype<TokenAndETHShift | null>(
      store.get("TokenAndETHShift", id)
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

  get ETHAmount(): BigInt {
    let value = this.get("ETHAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set ETHAmount(value: BigInt) {
    this.set("ETHAmount", Value.fromBigInt(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get disputeID(): BigInt {
    let value = this.get("disputeID");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set disputeID(value: BigInt) {
    this.set("disputeID", Value.fromBigInt(value));
  }

  get tokenAmount(): BigInt {
    let value = this.get("tokenAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenAmount(value: BigInt) {
    this.set("tokenAmount", Value.fromBigInt(value));
  }
}

export class StakeSet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StakeSet entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type StakeSet must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StakeSet", id.toString(), this);
    }
  }

  static loadInBlock(id: string): StakeSet | null {
    return changetype<StakeSet | null>(store.get_in_block("StakeSet", id));
  }

  static load(id: string): StakeSet | null {
    return changetype<StakeSet | null>(store.get("StakeSet", id));
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

  get address(): Bytes {
    let value = this.get("address");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get subcourtID(): BigInt {
    let value = this.get("subcourtID");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set subcourtID(value: BigInt) {
    this.set("subcourtID", Value.fromBigInt(value));
  }

  get stake(): BigInt {
    let value = this.get("stake");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set stake(value: BigInt) {
    this.set("stake", Value.fromBigInt(value));
  }

  get newTotalStake(): BigInt {
    let value = this.get("newTotalStake");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set newTotalStake(value: BigInt) {
    this.set("newTotalStake", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blocknumber(): BigInt {
    let value = this.get("blocknumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blocknumber(value: BigInt) {
    this.set("blocknumber", Value.fromBigInt(value));
  }

  get logIndex(): BigInt {
    let value = this.get("logIndex");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set logIndex(value: BigInt) {
    this.set("logIndex", Value.fromBigInt(value));
  }
}

export class EvidenceGroup extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EvidenceGroup entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type EvidenceGroup must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EvidenceGroup", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): EvidenceGroup | null {
    return changetype<EvidenceGroup | null>(
      store.get_in_block("EvidenceGroup", id.toHexString())
    );
  }

  static load(id: Bytes): EvidenceGroup | null {
    return changetype<EvidenceGroup | null>(
      store.get("EvidenceGroup", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get dispute(): string | null {
    let value = this.get("dispute");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set dispute(value: string | null) {
    if (!value) {
      this.unset("dispute");
    } else {
      this.set("dispute", Value.fromString(<string>value));
    }
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
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Evidence entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Evidence must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Evidence", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): Evidence | null {
    return changetype<Evidence | null>(
      store.get_in_block("Evidence", id.toHexString())
    );
  }

  static load(id: Bytes): Evidence | null {
    return changetype<Evidence | null>(store.get("Evidence", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get group(): Bytes {
    let value = this.get("group");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set group(value: Bytes) {
    this.set("group", Value.fromBytes(value));
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

export class RoundLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Round[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Round[]>(value);
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
