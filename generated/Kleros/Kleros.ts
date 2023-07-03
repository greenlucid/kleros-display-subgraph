// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class DisputeCreation extends ethereum.Event {
  get params(): DisputeCreation__Params {
    return new DisputeCreation__Params(this);
  }
}

export class DisputeCreation__Params {
  _event: DisputeCreation;

  constructor(event: DisputeCreation) {
    this._event = event;
  }

  get _disputeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _arbitrable(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AppealPossible extends ethereum.Event {
  get params(): AppealPossible__Params {
    return new AppealPossible__Params(this);
  }
}

export class AppealPossible__Params {
  _event: AppealPossible;

  constructor(event: AppealPossible) {
    this._event = event;
  }

  get _disputeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _arbitrable(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AppealDecision extends ethereum.Event {
  get params(): AppealDecision__Params {
    return new AppealDecision__Params(this);
  }
}

export class AppealDecision__Params {
  _event: AppealDecision;

  constructor(event: AppealDecision) {
    this._event = event;
  }

  get _disputeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _arbitrable(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewPeriod extends ethereum.Event {
  get params(): NewPeriod__Params {
    return new NewPeriod__Params(this);
  }
}

export class NewPeriod__Params {
  _event: NewPeriod;

  constructor(event: NewPeriod) {
    this._event = event;
  }

  get _disputeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _period(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class Kleros__appealPeriodResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getStart(): BigInt {
    return this.value0;
  }

  getEnd(): BigInt {
    return this.value1;
  }
}

export class Kleros extends ethereum.SmartContract {
  static bind(address: Address): Kleros {
    return new Kleros("Kleros", address);
  }

  disputeStatus(_disputeID: BigInt): i32 {
    let result = super.call("disputeStatus", "disputeStatus(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(_disputeID)
    ]);

    return result[0].toI32();
  }

  try_disputeStatus(_disputeID: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "disputeStatus",
      "disputeStatus(uint256):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(_disputeID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  currentRuling(_disputeID: BigInt): BigInt {
    let result = super.call(
      "currentRuling",
      "currentRuling(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_disputeID)]
    );

    return result[0].toBigInt();
  }

  try_currentRuling(_disputeID: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentRuling",
      "currentRuling(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_disputeID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  appealPeriod(_disputeID: BigInt): Kleros__appealPeriodResult {
    let result = super.call(
      "appealPeriod",
      "appealPeriod(uint256):(uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_disputeID)]
    );

    return new Kleros__appealPeriodResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_appealPeriod(
    _disputeID: BigInt
  ): ethereum.CallResult<Kleros__appealPeriodResult> {
    let result = super.tryCall(
      "appealPeriod",
      "appealPeriod(uint256):(uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(_disputeID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Kleros__appealPeriodResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  appealCost(_disputeID: BigInt, _extraData: Bytes): BigInt {
    let result = super.call(
      "appealCost",
      "appealCost(uint256,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_disputeID),
        ethereum.Value.fromBytes(_extraData)
      ]
    );

    return result[0].toBigInt();
  }

  try_appealCost(
    _disputeID: BigInt,
    _extraData: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "appealCost",
      "appealCost(uint256,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_disputeID),
        ethereum.Value.fromBytes(_extraData)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  arbitrationCost(_extraData: Bytes): BigInt {
    let result = super.call(
      "arbitrationCost",
      "arbitrationCost(bytes):(uint256)",
      [ethereum.Value.fromBytes(_extraData)]
    );

    return result[0].toBigInt();
  }

  try_arbitrationCost(_extraData: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "arbitrationCost",
      "arbitrationCost(bytes):(uint256)",
      [ethereum.Value.fromBytes(_extraData)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AppealCall extends ethereum.Call {
  get inputs(): AppealCall__Inputs {
    return new AppealCall__Inputs(this);
  }

  get outputs(): AppealCall__Outputs {
    return new AppealCall__Outputs(this);
  }
}

export class AppealCall__Inputs {
  _call: AppealCall;

  constructor(call: AppealCall) {
    this._call = call;
  }

  get _disputeID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _extraData(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class AppealCall__Outputs {
  _call: AppealCall;

  constructor(call: AppealCall) {
    this._call = call;
  }
}

export class CreateDisputeCall extends ethereum.Call {
  get inputs(): CreateDisputeCall__Inputs {
    return new CreateDisputeCall__Inputs(this);
  }

  get outputs(): CreateDisputeCall__Outputs {
    return new CreateDisputeCall__Outputs(this);
  }
}

export class CreateDisputeCall__Inputs {
  _call: CreateDisputeCall;

  constructor(call: CreateDisputeCall) {
    this._call = call;
  }

  get _choices(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _extraData(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class CreateDisputeCall__Outputs {
  _call: CreateDisputeCall;

  constructor(call: CreateDisputeCall) {
    this._call = call;
  }

  get disputeID(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
