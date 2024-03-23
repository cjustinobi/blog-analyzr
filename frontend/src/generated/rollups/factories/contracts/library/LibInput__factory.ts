/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../common'
import type {
  LibInput,
  LibInputInterface,
} from '../../../contracts/library/LibInput'

const _abi = [
  {
    inputs: [],
    name: 'InputSizeExceedsLimit',
    type: 'error',
  },
] as const

const _bytecode =
  '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220fc9463db1bedbafa75fed2fe658949ee0cfd524c4366be049aa95928562c80ec64736f6c63430008130033'

type LibInputConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: LibInputConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class LibInput__factory extends ContractFactory {
  constructor(...args: LibInputConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibInput> {
    return super.deploy(overrides || {}) as Promise<LibInput>
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): LibInput {
    return super.attach(address) as LibInput
  }
  override connect(signer: Signer): LibInput__factory {
    return super.connect(signer) as LibInput__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): LibInputInterface {
    return new utils.Interface(_abi) as LibInputInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibInput {
    return new Contract(address, _abi, signerOrProvider) as LibInput
  }
}