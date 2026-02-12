import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export enum AuctionState { CREATED = 0,
                           COMMIT = 1,
                           REVEAL = 2,
                           FINALIZED = 3,
                           CANCELLED = 4
}

export type Witnesses<PS> = {
}

export type ImpureCircuits<PS> = {
  initAuction(context: __compactRuntime.CircuitContext<PS>,
              sellerAddr_0: Uint8Array,
              startTime_0: bigint,
              endCommit_0: bigint,
              endReveal_0: bigint,
              minBid_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  startCommit(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  startReveal(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  finalize(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  cancel(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  pause(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  unpause(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  recordBid(context: __compactRuntime.CircuitContext<PS>,
            bidderAddr_0: Uint8Array,
            bidAmount_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  getState(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, AuctionState>;
  getHighestBid(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, bigint>;
  getHighestBidder(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
}

export type PureCircuits = {
}

export type Circuits<PS> = {
  initAuction(context: __compactRuntime.CircuitContext<PS>,
              sellerAddr_0: Uint8Array,
              startTime_0: bigint,
              endCommit_0: bigint,
              endReveal_0: bigint,
              minBid_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  startCommit(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  startReveal(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  finalize(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  cancel(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  pause(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  unpause(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  recordBid(context: __compactRuntime.CircuitContext<PS>,
            bidderAddr_0: Uint8Array,
            bidAmount_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  getState(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, AuctionState>;
  getHighestBid(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, bigint>;
  getHighestBidder(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, Uint8Array>;
}

export type Ledger = {
  readonly state: AuctionState;
  readonly seller: Uint8Array;
  readonly commitStart: bigint;
  readonly commitEnd: bigint;
  readonly revealEnd: bigint;
  readonly minDeposit: bigint;
  readonly round: bigint;
  readonly owner: Uint8Array;
  readonly paused: boolean;
  readonly highestBidAmount: bigint;
  readonly highestBidder: Uint8Array;
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<PS = any, W extends Witnesses<PS> = Witnesses<PS>> {
  witnesses: W;
  circuits: Circuits<PS>;
  impureCircuits: ImpureCircuits<PS>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<PS>): __compactRuntime.ConstructorResult<PS>;
}

export declare function ledger(state: __compactRuntime.StateValue | __compactRuntime.ChargedState): Ledger;
export declare const pureCircuits: PureCircuits;
