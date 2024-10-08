/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../../../../common";

export declare namespace Client {
  export type EVMTokenAmountStruct = {
    token: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
  };

  export type EVMTokenAmountStructOutput = [string, BigNumber] & {
    token: string;
    amount: BigNumber;
  };

  export type EVM2AnyMessageStruct = {
    receiver: PromiseOrValue<BytesLike>;
    data: PromiseOrValue<BytesLike>;
    tokenAmounts: Client.EVMTokenAmountStruct[];
    feeToken: PromiseOrValue<string>;
    extraArgs: PromiseOrValue<BytesLike>;
  };

  export type EVM2AnyMessageStructOutput = [
    string,
    string,
    Client.EVMTokenAmountStructOutput[],
    string,
    string
  ] & {
    receiver: string;
    data: string;
    tokenAmounts: Client.EVMTokenAmountStructOutput[];
    feeToken: string;
    extraArgs: string;
  };

  export type Any2EVMMessageStruct = {
    messageId: PromiseOrValue<BytesLike>;
    sourceChainSelector: PromiseOrValue<BigNumberish>;
    sender: PromiseOrValue<BytesLike>;
    data: PromiseOrValue<BytesLike>;
    destTokenAmounts: Client.EVMTokenAmountStruct[];
  };

  export type Any2EVMMessageStructOutput = [
    string,
    BigNumber,
    string,
    string,
    Client.EVMTokenAmountStructOutput[]
  ] & {
    messageId: string;
    sourceChainSelector: BigNumber;
    sender: string;
    data: string;
    destTokenAmounts: Client.EVMTokenAmountStructOutput[];
  };
}

export interface MockCCIPRouterInterface extends utils.Interface {
  functions: {
    "DEFAULT_GAS_LIMIT()": FunctionFragment;
    "GAS_FOR_CALL_EXACT_CHECK()": FunctionFragment;
    "ccipSend(uint64,(bytes,bytes,(address,uint256)[],address,bytes))": FunctionFragment;
    "getFee(uint64,(bytes,bytes,(address,uint256)[],address,bytes))": FunctionFragment;
    "getOnRamp(uint64)": FunctionFragment;
    "getSupportedTokens(uint64)": FunctionFragment;
    "isChainSupported(uint64)": FunctionFragment;
    "isOffRamp(uint64,address)": FunctionFragment;
    "routeMessage((bytes32,uint64,bytes,bytes,(address,uint256)[]),uint16,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DEFAULT_GAS_LIMIT"
      | "GAS_FOR_CALL_EXACT_CHECK"
      | "ccipSend"
      | "getFee"
      | "getOnRamp"
      | "getSupportedTokens"
      | "isChainSupported"
      | "isOffRamp"
      | "routeMessage"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_GAS_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GAS_FOR_CALL_EXACT_CHECK",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ccipSend",
    values: [PromiseOrValue<BigNumberish>, Client.EVM2AnyMessageStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getFee",
    values: [PromiseOrValue<BigNumberish>, Client.EVM2AnyMessageStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getOnRamp",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportedTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isChainSupported",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isOffRamp",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "routeMessage",
    values: [
      Client.Any2EVMMessageStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_GAS_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GAS_FOR_CALL_EXACT_CHECK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ccipSend", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOnRamp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isChainSupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOffRamp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "routeMessage",
    data: BytesLike
  ): Result;

  events: {
    "MessageExecuted(bytes32,uint64,address,bytes32)": EventFragment;
    "MsgExecuted(bool,bytes,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MsgExecuted"): EventFragment;
}

export interface MessageExecutedEventObject {
  messageId: string;
  sourceChainSelector: BigNumber;
  offRamp: string;
  calldataHash: string;
}
export type MessageExecutedEvent = TypedEvent<
  [string, BigNumber, string, string],
  MessageExecutedEventObject
>;

export type MessageExecutedEventFilter = TypedEventFilter<MessageExecutedEvent>;

export interface MsgExecutedEventObject {
  success: boolean;
  retData: string;
  gasUsed: BigNumber;
}
export type MsgExecutedEvent = TypedEvent<
  [boolean, string, BigNumber],
  MsgExecutedEventObject
>;

export type MsgExecutedEventFilter = TypedEventFilter<MsgExecutedEvent>;

export interface MockCCIPRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockCCIPRouterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DEFAULT_GAS_LIMIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    GAS_FOR_CALL_EXACT_CHECK(overrides?: CallOverrides): Promise<[number]>;

    ccipSend(
      arg0: PromiseOrValue<BigNumberish>,
      message: Client.EVM2AnyMessageStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getFee(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: Client.EVM2AnyMessageStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fee: BigNumber }>;

    getOnRamp(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { onRampAddress: string }>;

    getSupportedTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    isChainSupported(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { supported: boolean }>;

    isOffRamp(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    routeMessage(
      message: Client.Any2EVMMessageStruct,
      gasForCallExactCheck: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  DEFAULT_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

  GAS_FOR_CALL_EXACT_CHECK(overrides?: CallOverrides): Promise<number>;

  ccipSend(
    arg0: PromiseOrValue<BigNumberish>,
    message: Client.EVM2AnyMessageStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getFee(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: Client.EVM2AnyMessageStruct,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOnRamp(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getSupportedTokens(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  isChainSupported(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOffRamp(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  routeMessage(
    message: Client.Any2EVMMessageStruct,
    gasForCallExactCheck: PromiseOrValue<BigNumberish>,
    gasLimit: PromiseOrValue<BigNumberish>,
    receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    GAS_FOR_CALL_EXACT_CHECK(overrides?: CallOverrides): Promise<number>;

    ccipSend(
      arg0: PromiseOrValue<BigNumberish>,
      message: Client.EVM2AnyMessageStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getFee(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: Client.EVM2AnyMessageStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOnRamp(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getSupportedTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    isChainSupported(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOffRamp(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    routeMessage(
      message: Client.Any2EVMMessageStruct,
      gasForCallExactCheck: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber] & {
        success: boolean;
        retData: string;
        gasUsed: BigNumber;
      }
    >;
  };

  filters: {
    "MessageExecuted(bytes32,uint64,address,bytes32)"(
      messageId?: null,
      sourceChainSelector?: null,
      offRamp?: null,
      calldataHash?: null
    ): MessageExecutedEventFilter;
    MessageExecuted(
      messageId?: null,
      sourceChainSelector?: null,
      offRamp?: null,
      calldataHash?: null
    ): MessageExecutedEventFilter;

    "MsgExecuted(bool,bytes,uint256)"(
      success?: null,
      retData?: null,
      gasUsed?: null
    ): MsgExecutedEventFilter;
    MsgExecuted(
      success?: null,
      retData?: null,
      gasUsed?: null
    ): MsgExecutedEventFilter;
  };

  estimateGas: {
    DEFAULT_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    GAS_FOR_CALL_EXACT_CHECK(overrides?: CallOverrides): Promise<BigNumber>;

    ccipSend(
      arg0: PromiseOrValue<BigNumberish>,
      message: Client.EVM2AnyMessageStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getFee(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: Client.EVM2AnyMessageStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOnRamp(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupportedTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isChainSupported(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOffRamp(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    routeMessage(
      message: Client.Any2EVMMessageStruct,
      gasForCallExactCheck: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_GAS_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GAS_FOR_CALL_EXACT_CHECK(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ccipSend(
      arg0: PromiseOrValue<BigNumberish>,
      message: Client.EVM2AnyMessageStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getFee(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: Client.EVM2AnyMessageStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOnRamp(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupportedTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isChainSupported(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOffRamp(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    routeMessage(
      message: Client.Any2EVMMessageStruct,
      gasForCallExactCheck: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
