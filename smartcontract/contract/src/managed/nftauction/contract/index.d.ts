import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export enum AuctionState { CREATED = 0,
                           COMMIT = 1,
                           REVEAL = 2,
                           FINALIZED = 3,
                           CANCELLED = 4
}

export type CommitHash = Uint8Array;

export type BidAmount = bigint;

export type Timestamp = bigint;

export type DepositAmount = bigint;

export type PublicKey = Uint8Array;

export type AuctionConfig = { seller: PublicKey;
                              commitStart: Timestamp;
                              commitEnd: Timestamp;
                              revealEnd: Timestamp;
                              minDeposit: DepositAmount
                            };

export type NFTTokenId = Uint8Array;

export type NFTMetadata = { tokenId: NFTTokenId };

export type Witnesses<PS> = {
}

export type ImpureCircuits<PS> = {
  initAuction(context: __compactRuntime.CircuitContext<PS>,
              nftId_0: NFTTokenId,
              sellerAddr_0: PublicKey,
              startTime_0: Timestamp,
              endCommit_0: Timestamp,
              endReveal_0: Timestamp,
              minBid_0: DepositAmount): __compactRuntime.CircuitResults<PS, []>;
  escrowNFT(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  startCommitPhase(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  commitBid(context: __compactRuntime.CircuitContext<PS>,
            commitment_0: CommitHash,
            bidderPubKey_0: PublicKey): __compactRuntime.CircuitResults<PS, []>;
  startRevealPhase(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  revealBid(context: __compactRuntime.CircuitContext<PS>,
            bidderPubKey_0: PublicKey,
            bidAmount_0: BidAmount,
            nonce_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  penalizeNonReveal(context: __compactRuntime.CircuitContext<PS>,
                    bidderPubKey_0: PublicKey): __compactRuntime.CircuitResults<PS, []>;
  getHighestBid(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, BidAmount>;
  getHighestBidder(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, PublicKey>;
  finalizeAuction(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  canFinalize(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, boolean>;
  getAuctionResult(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, { hasWinner: boolean,
                                                                                                        winningBid: BidAmount,
                                                                                                        winner: PublicKey
                                                                                                      }>;
  commitBidWithDeposit(context: __compactRuntime.CircuitContext<PS>,
                       commitment_0: CommitHash,
                       bidderPubKey_0: PublicKey,
                       depositAmount_0: DepositAmount): __compactRuntime.CircuitResults<PS, []>;
  revealBidWithTracking(context: __compactRuntime.CircuitContext<PS>,
                        bidderPubKey_0: PublicKey,
                        bidAmount_0: BidAmount,
                        nonce_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  refundLoser(context: __compactRuntime.CircuitContext<PS>,
              bidderPubKey_0: PublicKey): __compactRuntime.CircuitResults<PS, []>;
  forfeitNonRevealer(context: __compactRuntime.CircuitContext<PS>,
                     bidderPubKey_0: PublicKey): __compactRuntime.CircuitResults<PS, []>;
  claimWinnerPayment(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  getDepositStatus(context: __compactRuntime.CircuitContext<PS>,
                   bidderPubKey_0: PublicKey): __compactRuntime.CircuitResults<PS, { hasCommitted: boolean,
                                                                                     hasRevealed: boolean,
                                                                                     isWinner: boolean,
                                                                                     canRefund: boolean,
                                                                                     canForfeit: boolean
                                                                                   }>;
}

export type PureCircuits = {
  hasCommitted(bidderPubKey_0: PublicKey): boolean;
}

export type Circuits<PS> = {
  initAuction(context: __compactRuntime.CircuitContext<PS>,
              nftId_0: NFTTokenId,
              sellerAddr_0: PublicKey,
              startTime_0: Timestamp,
              endCommit_0: Timestamp,
              endReveal_0: Timestamp,
              minBid_0: DepositAmount): __compactRuntime.CircuitResults<PS, []>;
  escrowNFT(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  startCommitPhase(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  commitBid(context: __compactRuntime.CircuitContext<PS>,
            commitment_0: CommitHash,
            bidderPubKey_0: PublicKey): __compactRuntime.CircuitResults<PS, []>;
  hasCommitted(context: __compactRuntime.CircuitContext<PS>,
               bidderPubKey_0: PublicKey): __compactRuntime.CircuitResults<PS, boolean>;
  startRevealPhase(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  revealBid(context: __compactRuntime.CircuitContext<PS>,
            bidderPubKey_0: PublicKey,
            bidAmount_0: BidAmount,
            nonce_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  penalizeNonReveal(context: __compactRuntime.CircuitContext<PS>,
                    bidderPubKey_0: PublicKey): __compactRuntime.CircuitResults<PS, []>;
  getHighestBid(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, BidAmount>;
  getHighestBidder(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, PublicKey>;
  finalizeAuction(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  canFinalize(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, boolean>;
  getAuctionResult(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, { hasWinner: boolean,
                                                                                                        winningBid: BidAmount,
                                                                                                        winner: PublicKey
                                                                                                      }>;
  commitBidWithDeposit(context: __compactRuntime.CircuitContext<PS>,
                       commitment_0: CommitHash,
                       bidderPubKey_0: PublicKey,
                       depositAmount_0: DepositAmount): __compactRuntime.CircuitResults<PS, []>;
  revealBidWithTracking(context: __compactRuntime.CircuitContext<PS>,
                        bidderPubKey_0: PublicKey,
                        bidAmount_0: BidAmount,
                        nonce_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  refundLoser(context: __compactRuntime.CircuitContext<PS>,
              bidderPubKey_0: PublicKey): __compactRuntime.CircuitResults<PS, []>;
  forfeitNonRevealer(context: __compactRuntime.CircuitContext<PS>,
                     bidderPubKey_0: PublicKey): __compactRuntime.CircuitResults<PS, []>;
  claimWinnerPayment(context: __compactRuntime.CircuitContext<PS>): __compactRuntime.CircuitResults<PS, []>;
  getDepositStatus(context: __compactRuntime.CircuitContext<PS>,
                   bidderPubKey_0: PublicKey): __compactRuntime.CircuitResults<PS, { hasCommitted: boolean,
                                                                                     hasRevealed: boolean,
                                                                                     isWinner: boolean,
                                                                                     canRefund: boolean,
                                                                                     canForfeit: boolean
                                                                                   }>;
}

export type Ledger = {
  readonly state: AuctionState;
  readonly config: AuctionConfig;
  readonly nftMetadata: NFTMetadata;
  readonly nftEscrowed: boolean;
  readonly round: bigint;
  readonly highestBid: BidAmount;
  readonly highestBidder: PublicKey;
  commitments: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: PublicKey): boolean;
    lookup(key_0: PublicKey): CommitHash;
    [Symbol.iterator](): Iterator<[PublicKey, CommitHash]>
  };
  deposits: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: PublicKey): boolean;
    lookup(key_0: PublicKey): DepositAmount;
    [Symbol.iterator](): Iterator<[PublicKey, DepositAmount]>
  };
  hasRevealed: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: PublicKey): boolean;
    lookup(key_0: PublicKey): boolean;
    [Symbol.iterator](): Iterator<[PublicKey, boolean]>
  };
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
