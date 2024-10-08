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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface CCIPLocalSimulatorInterface extends utils.Interface {
  functions: {
    "configuration()": FunctionFragment;
    "getSupportedTokens(uint64)": FunctionFragment;
    "isChainSupported(uint64)": FunctionFragment;
    "requestLinkFromFaucet(address,uint256)": FunctionFragment;
    "supportNewToken(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "configuration"
      | "getSupportedTokens"
      | "isChainSupported"
      | "requestLinkFromFaucet"
      | "supportNewToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "configuration",
    values?: undefined
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
    functionFragment: "requestLinkFromFaucet",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportNewToken",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "configuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isChainSupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestLinkFromFaucet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportNewToken",
    data: BytesLike
  ): Result;

  events: {};
}

export interface CCIPLocalSimulator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CCIPLocalSimulatorInterface;

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
    configuration(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, string, string, string] & {
        chainSelector_: BigNumber;
        sourceRouter_: string;
        destinationRouter_: string;
        wrappedNative_: string;
        linkToken_: string;
        ccipBnM_: string;
        ccipLnM_: string;
      }
    >;

    getSupportedTokens(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    isChainSupported(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { supported: boolean }>;

    requestLinkFromFaucet(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportNewToken(
      tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  configuration(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, string, string, string] & {
      chainSelector_: BigNumber;
      sourceRouter_: string;
      destinationRouter_: string;
      wrappedNative_: string;
      linkToken_: string;
      ccipBnM_: string;
      ccipLnM_: string;
    }
  >;

  getSupportedTokens(
    chainSelector: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  isChainSupported(
    chainSelector: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  requestLinkFromFaucet(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportNewToken(
    tokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    configuration(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, string, string, string] & {
        chainSelector_: BigNumber;
        sourceRouter_: string;
        destinationRouter_: string;
        wrappedNative_: string;
        linkToken_: string;
        ccipBnM_: string;
        ccipLnM_: string;
      }
    >;

    getSupportedTokens(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    isChainSupported(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    requestLinkFromFaucet(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportNewToken(
      tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    configuration(overrides?: CallOverrides): Promise<BigNumber>;

    getSupportedTokens(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isChainSupported(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestLinkFromFaucet(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportNewToken(
      tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    configuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSupportedTokens(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isChainSupported(
      chainSelector: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requestLinkFromFaucet(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportNewToken(
      tokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
