/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../../../common'

export interface CartesiMathV2Interface extends utils.Interface {
  functions: {
    'clz(uint256)': FunctionFragment
    'ctz(uint256)': FunctionFragment
    'getLog2Floor(uint256)': FunctionFragment
    'getLog2TableTimes1M(uint256)': FunctionFragment
    'isPowerOf2(uint256)': FunctionFragment
    'log2ApproxTimes1M(uint256)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'clz'
      | 'ctz'
      | 'getLog2Floor'
      | 'getLog2TableTimes1M'
      | 'isPowerOf2'
      | 'log2ApproxTimes1M'
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'clz',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'ctz',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'getLog2Floor',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'getLog2TableTimes1M',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'isPowerOf2',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'log2ApproxTimes1M',
    values: [PromiseOrValue<BigNumberish>]
  ): string

  decodeFunctionResult(functionFragment: 'clz', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'ctz', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getLog2Floor',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getLog2TableTimes1M',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'isPowerOf2', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'log2ApproxTimes1M',
    data: BytesLike
  ): Result

  events: {}
}

export interface CartesiMathV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: CartesiMathV2Interface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    /**
     * this a binary search implementation
     * count leading zeros
     * @param _num number you want the clz of
     */
    clz(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    /**
     * this a binary search implementation
     * count trailing zeros
     * @param _num number you want the ctz of
     */
    ctz(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    /**
     * get floor of log2 of number
     * @param _num number to take floor(log2) of
     */
    getLog2Floor(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>

    /**
     * navigates log2tableTimes1M
     * @param _num number to take log2 of
     */
    getLog2TableTimes1M(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    /**
     * checks if a number is Power of 2
     * @param _num number to check
     */
    isPowerOf2(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    /**
     * Approximates log2 * 1M
     * @param _num number to take log2 * 1M of
     */
    log2ApproxTimes1M(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>
  }

  /**
   * this a binary search implementation
   * count leading zeros
   * @param _num number you want the clz of
   */
  clz(
    _num: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  /**
   * this a binary search implementation
   * count trailing zeros
   * @param _num number you want the ctz of
   */
  ctz(
    _num: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  /**
   * get floor of log2 of number
   * @param _num number to take floor(log2) of
   */
  getLog2Floor(
    _num: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>

  /**
   * navigates log2tableTimes1M
   * @param _num number to take log2 of
   */
  getLog2TableTimes1M(
    _num: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  /**
   * checks if a number is Power of 2
   * @param _num number to check
   */
  isPowerOf2(
    _num: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>

  /**
   * Approximates log2 * 1M
   * @param _num number to take log2 * 1M of
   */
  log2ApproxTimes1M(
    _num: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  callStatic: {
    /**
     * this a binary search implementation
     * count leading zeros
     * @param _num number you want the clz of
     */
    clz(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    /**
     * this a binary search implementation
     * count trailing zeros
     * @param _num number you want the ctz of
     */
    ctz(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    /**
     * get floor of log2 of number
     * @param _num number to take floor(log2) of
     */
    getLog2Floor(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>

    /**
     * navigates log2tableTimes1M
     * @param _num number to take log2 of
     */
    getLog2TableTimes1M(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    /**
     * checks if a number is Power of 2
     * @param _num number to check
     */
    isPowerOf2(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>

    /**
     * Approximates log2 * 1M
     * @param _num number to take log2 * 1M of
     */
    log2ApproxTimes1M(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    /**
     * this a binary search implementation
     * count leading zeros
     * @param _num number you want the clz of
     */
    clz(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    /**
     * this a binary search implementation
     * count trailing zeros
     * @param _num number you want the ctz of
     */
    ctz(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    /**
     * get floor of log2 of number
     * @param _num number to take floor(log2) of
     */
    getLog2Floor(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    /**
     * navigates log2tableTimes1M
     * @param _num number to take log2 of
     */
    getLog2TableTimes1M(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    /**
     * checks if a number is Power of 2
     * @param _num number to check
     */
    isPowerOf2(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    /**
     * Approximates log2 * 1M
     * @param _num number to take log2 * 1M of
     */
    log2ApproxTimes1M(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    /**
     * this a binary search implementation
     * count leading zeros
     * @param _num number you want the clz of
     */
    clz(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    /**
     * this a binary search implementation
     * count trailing zeros
     * @param _num number you want the ctz of
     */
    ctz(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    /**
     * get floor of log2 of number
     * @param _num number to take floor(log2) of
     */
    getLog2Floor(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    /**
     * navigates log2tableTimes1M
     * @param _num number to take log2 of
     */
    getLog2TableTimes1M(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    /**
     * checks if a number is Power of 2
     * @param _num number to check
     */
    isPowerOf2(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    /**
     * Approximates log2 * 1M
     * @param _num number to take log2 * 1M of
     */
    log2ApproxTimes1M(
      _num: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
