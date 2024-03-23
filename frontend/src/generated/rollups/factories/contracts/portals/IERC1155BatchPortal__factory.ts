/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type {
  IERC1155BatchPortal,
  IERC1155BatchPortalInterface,
} from '../../../contracts/portals/IERC1155BatchPortal'

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IERC1155',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_dapp',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '_tokenIds',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '_values',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: '_baseLayerData',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_execLayerData',
        type: 'bytes',
      },
    ],
    name: 'depositBatchERC1155Token',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getInputBox',
    outputs: [
      {
        internalType: 'contract IInputBox',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const

export class IERC1155BatchPortal__factory {
  static readonly abi = _abi
  static createInterface(): IERC1155BatchPortalInterface {
    return new utils.Interface(_abi) as IERC1155BatchPortalInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1155BatchPortal {
    return new Contract(address, _abi, signerOrProvider) as IERC1155BatchPortal
  }
}
