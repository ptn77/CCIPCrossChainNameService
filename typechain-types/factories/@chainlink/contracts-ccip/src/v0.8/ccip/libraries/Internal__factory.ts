/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  Internal,
  InternalInterface,
} from "../../../../../../../@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Internal";

const _abi = [
  {
    inputs: [],
    name: "GAS_PRICE_BITS",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MESSAGE_FIXED_BYTES",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MESSAGE_FIXED_BYTES_PER_TOKEN",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61015b610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806318994e7a146100505780637a4bb2321461006e578063dc47c58b1461008c575b600080fd5b6100586100aa565b60405161006591906100d3565b60405180910390f35b6100766100b0565b604051610083919061010a565b60405180910390f35b6100946100b5565b6040516100a191906100d3565b60405180910390f35b61022081565b607081565b608081565b6000819050919050565b6100cd816100ba565b82525050565b60006020820190506100e860008301846100c4565b92915050565b600060ff82169050919050565b610104816100ee565b82525050565b600060208201905061011f60008301846100fb565b9291505056fea2646970667358221220ae95740207576282a159d828bca4c8e138fd4f1256ed45907ce43d5b9c49c4bf64736f6c63430008130033";

type InternalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InternalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Internal__factory extends ContractFactory {
  constructor(...args: InternalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Internal> {
    return super.deploy(overrides || {}) as Promise<Internal>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Internal {
    return super.attach(address) as Internal;
  }
  override connect(signer: Signer): Internal__factory {
    return super.connect(signer) as Internal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InternalInterface {
    return new utils.Interface(_abi) as InternalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Internal {
    return new Contract(address, _abi, signerOrProvider) as Internal;
  }
}