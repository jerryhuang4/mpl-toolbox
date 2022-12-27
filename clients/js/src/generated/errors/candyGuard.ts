/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Program, ProgramError } from '@lorisleiva/js-core';

type ProgramErrorConstructor = new (
  program: Program,
  cause?: Error
) => ProgramError;
const codeToErrorMap: Map<number, ProgramErrorConstructor> = new Map();
const nameToErrorMap: Map<string, ProgramErrorConstructor> = new Map();

/**
 * InvalidAccountSize: 'Could not save guard to account'
 * @category Errors
 */
class InvalidAccountSizeError extends ProgramError {
  readonly name: string = 'InvalidAccountSize';

  readonly code: number = 0x1770; // 6000

  constructor(program: Program, cause?: Error) {
    super('Could not save guard to account', program, cause);
  }
}
codeToErrorMap.set(0x1770, InvalidAccountSizeError);
nameToErrorMap.set('InvalidAccountSize', InvalidAccountSizeError);

/**
 * DeserializationError: 'Could not deserialize guard'
 * @category Errors
 */
class DeserializationErrorError extends ProgramError {
  readonly name: string = 'DeserializationError';

  readonly code: number = 0x1771; // 6001

  constructor(program: Program, cause?: Error) {
    super('Could not deserialize guard', program, cause);
  }
}
codeToErrorMap.set(0x1771, DeserializationErrorError);
nameToErrorMap.set('DeserializationError', DeserializationErrorError);

/**
 * PublicKeyMismatch: 'Public key mismatch'
 * @category Errors
 */
class PublicKeyMismatchError extends ProgramError {
  readonly name: string = 'PublicKeyMismatch';

  readonly code: number = 0x1772; // 6002

  constructor(program: Program, cause?: Error) {
    super('Public key mismatch', program, cause);
  }
}
codeToErrorMap.set(0x1772, PublicKeyMismatchError);
nameToErrorMap.set('PublicKeyMismatch', PublicKeyMismatchError);

/**
 * DataIncrementLimitExceeded: 'Exceeded account increase limit'
 * @category Errors
 */
class DataIncrementLimitExceededError extends ProgramError {
  readonly name: string = 'DataIncrementLimitExceeded';

  readonly code: number = 0x1773; // 6003

  constructor(program: Program, cause?: Error) {
    super('Exceeded account increase limit', program, cause);
  }
}
codeToErrorMap.set(0x1773, DataIncrementLimitExceededError);
nameToErrorMap.set(
  'DataIncrementLimitExceeded',
  DataIncrementLimitExceededError
);

/**
 * IncorrectOwner: 'Account does not have correct owner'
 * @category Errors
 */
class CgIncorrectOwnerError extends ProgramError {
  readonly name: string = 'CgIncorrectOwner';

  readonly code: number = 0x1774; // 6004

  constructor(program: Program, cause?: Error) {
    super('Account does not have correct owner', program, cause);
  }
}
codeToErrorMap.set(0x1774, CgIncorrectOwnerError);
nameToErrorMap.set('CgIncorrectOwner', CgIncorrectOwnerError);

/**
 * Uninitialized: 'Account is not initialized'
 * @category Errors
 */
class CgUninitializedError extends ProgramError {
  readonly name: string = 'CgUninitialized';

  readonly code: number = 0x1775; // 6005

  constructor(program: Program, cause?: Error) {
    super('Account is not initialized', program, cause);
  }
}
codeToErrorMap.set(0x1775, CgUninitializedError);
nameToErrorMap.set('CgUninitialized', CgUninitializedError);

/**
 * MissingRemainingAccount: 'Missing expected remaining account'
 * @category Errors
 */
class MissingRemainingAccountError extends ProgramError {
  readonly name: string = 'MissingRemainingAccount';

  readonly code: number = 0x1776; // 6006

  constructor(program: Program, cause?: Error) {
    super('Missing expected remaining account', program, cause);
  }
}
codeToErrorMap.set(0x1776, MissingRemainingAccountError);
nameToErrorMap.set('MissingRemainingAccount', MissingRemainingAccountError);

/**
 * NumericalOverflowError: 'Numerical overflow error'
 * @category Errors
 */
class CgNumericalOverflowErrorError extends ProgramError {
  readonly name: string = 'CgNumericalOverflowError';

  readonly code: number = 0x1777; // 6007

  constructor(program: Program, cause?: Error) {
    super('Numerical overflow error', program, cause);
  }
}
codeToErrorMap.set(0x1777, CgNumericalOverflowErrorError);
nameToErrorMap.set('CgNumericalOverflowError', CgNumericalOverflowErrorError);

/**
 * RequiredGroupLabelNotFound: 'Missing required group label'
 * @category Errors
 */
class RequiredGroupLabelNotFoundError extends ProgramError {
  readonly name: string = 'RequiredGroupLabelNotFound';

  readonly code: number = 0x1778; // 6008

  constructor(program: Program, cause?: Error) {
    super('Missing required group label', program, cause);
  }
}
codeToErrorMap.set(0x1778, RequiredGroupLabelNotFoundError);
nameToErrorMap.set(
  'RequiredGroupLabelNotFound',
  RequiredGroupLabelNotFoundError
);

/**
 * GroupNotFound: 'Group not found'
 * @category Errors
 */
class GroupNotFoundError extends ProgramError {
  readonly name: string = 'GroupNotFound';

  readonly code: number = 0x1779; // 6009

  constructor(program: Program, cause?: Error) {
    super('Group not found', program, cause);
  }
}
codeToErrorMap.set(0x1779, GroupNotFoundError);
nameToErrorMap.set('GroupNotFound', GroupNotFoundError);

/**
 * ExceededLength: 'Value exceeded maximum length'
 * @category Errors
 */
class ExceededLengthError extends ProgramError {
  readonly name: string = 'ExceededLength';

  readonly code: number = 0x177a; // 6010

  constructor(program: Program, cause?: Error) {
    super('Value exceeded maximum length', program, cause);
  }
}
codeToErrorMap.set(0x177a, ExceededLengthError);
nameToErrorMap.set('ExceededLength', ExceededLengthError);

/**
 * CandyMachineEmpty: 'Candy machine is empty'
 * @category Errors
 */
class CgCandyMachineEmptyError extends ProgramError {
  readonly name: string = 'CgCandyMachineEmpty';

  readonly code: number = 0x177b; // 6011

  constructor(program: Program, cause?: Error) {
    super('Candy machine is empty', program, cause);
  }
}
codeToErrorMap.set(0x177b, CgCandyMachineEmptyError);
nameToErrorMap.set('CgCandyMachineEmpty', CgCandyMachineEmptyError);

/**
 * InstructionNotFound: 'No instruction was found'
 * @category Errors
 */
class InstructionNotFoundError extends ProgramError {
  readonly name: string = 'InstructionNotFound';

  readonly code: number = 0x177c; // 6012

  constructor(program: Program, cause?: Error) {
    super('No instruction was found', program, cause);
  }
}
codeToErrorMap.set(0x177c, InstructionNotFoundError);
nameToErrorMap.set('InstructionNotFound', InstructionNotFoundError);

/**
 * CollectionKeyMismatch: 'Collection public key mismatch'
 * @category Errors
 */
class CgCollectionKeyMismatchError extends ProgramError {
  readonly name: string = 'CgCollectionKeyMismatch';

  readonly code: number = 0x177d; // 6013

  constructor(program: Program, cause?: Error) {
    super('Collection public key mismatch', program, cause);
  }
}
codeToErrorMap.set(0x177d, CgCollectionKeyMismatchError);
nameToErrorMap.set('CgCollectionKeyMismatch', CgCollectionKeyMismatchError);

/**
 * MissingCollectionAccounts: 'Missing collection accounts'
 * @category Errors
 */
class MissingCollectionAccountsError extends ProgramError {
  readonly name: string = 'MissingCollectionAccounts';

  readonly code: number = 0x177e; // 6014

  constructor(program: Program, cause?: Error) {
    super('Missing collection accounts', program, cause);
  }
}
codeToErrorMap.set(0x177e, MissingCollectionAccountsError);
nameToErrorMap.set('MissingCollectionAccounts', MissingCollectionAccountsError);

/**
 * CollectionUpdateAuthorityKeyMismatch: 'Collection update authority public key mismatch'
 * @category Errors
 */
class CollectionUpdateAuthorityKeyMismatchError extends ProgramError {
  readonly name: string = 'CollectionUpdateAuthorityKeyMismatch';

  readonly code: number = 0x177f; // 6015

  constructor(program: Program, cause?: Error) {
    super('Collection update authority public key mismatch', program, cause);
  }
}
codeToErrorMap.set(0x177f, CollectionUpdateAuthorityKeyMismatchError);
nameToErrorMap.set(
  'CollectionUpdateAuthorityKeyMismatch',
  CollectionUpdateAuthorityKeyMismatchError
);

/**
 * MintNotLastTransaction: 'Mint must be the last instructions of the transaction'
 * @category Errors
 */
class MintNotLastTransactionError extends ProgramError {
  readonly name: string = 'MintNotLastTransaction';

  readonly code: number = 0x1780; // 6016

  constructor(program: Program, cause?: Error) {
    super(
      'Mint must be the last instructions of the transaction',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x1780, MintNotLastTransactionError);
nameToErrorMap.set('MintNotLastTransaction', MintNotLastTransactionError);

/**
 * MintNotLive: 'Mint is not live'
 * @category Errors
 */
class MintNotLiveError extends ProgramError {
  readonly name: string = 'MintNotLive';

  readonly code: number = 0x1781; // 6017

  constructor(program: Program, cause?: Error) {
    super('Mint is not live', program, cause);
  }
}
codeToErrorMap.set(0x1781, MintNotLiveError);
nameToErrorMap.set('MintNotLive', MintNotLiveError);

/**
 * NotEnoughSOL: 'Not enough SOL to pay for the mint'
 * @category Errors
 */
class NotEnoughSOLError extends ProgramError {
  readonly name: string = 'NotEnoughSOL';

  readonly code: number = 0x1782; // 6018

  constructor(program: Program, cause?: Error) {
    super('Not enough SOL to pay for the mint', program, cause);
  }
}
codeToErrorMap.set(0x1782, NotEnoughSOLError);
nameToErrorMap.set('NotEnoughSOL', NotEnoughSOLError);

/**
 * TokenBurnFailed: 'Token burn failed'
 * @category Errors
 */
class TokenBurnFailedError extends ProgramError {
  readonly name: string = 'TokenBurnFailed';

  readonly code: number = 0x1783; // 6019

  constructor(program: Program, cause?: Error) {
    super('Token burn failed', program, cause);
  }
}
codeToErrorMap.set(0x1783, TokenBurnFailedError);
nameToErrorMap.set('TokenBurnFailed', TokenBurnFailedError);

/**
 * NotEnoughTokens: 'Not enough tokens on the account'
 * @category Errors
 */
class NotEnoughTokensError extends ProgramError {
  readonly name: string = 'NotEnoughTokens';

  readonly code: number = 0x1784; // 6020

  constructor(program: Program, cause?: Error) {
    super('Not enough tokens on the account', program, cause);
  }
}
codeToErrorMap.set(0x1784, NotEnoughTokensError);
nameToErrorMap.set('NotEnoughTokens', NotEnoughTokensError);

/**
 * TokenTransferFailed: 'Token transfer failed'
 * @category Errors
 */
class TokenTransferFailedError extends ProgramError {
  readonly name: string = 'TokenTransferFailed';

  readonly code: number = 0x1785; // 6021

  constructor(program: Program, cause?: Error) {
    super('Token transfer failed', program, cause);
  }
}
codeToErrorMap.set(0x1785, TokenTransferFailedError);
nameToErrorMap.set('TokenTransferFailed', TokenTransferFailedError);

/**
 * MissingRequiredSignature: 'A signature was required but not found'
 * @category Errors
 */
class MissingRequiredSignatureError extends ProgramError {
  readonly name: string = 'MissingRequiredSignature';

  readonly code: number = 0x1786; // 6022

  constructor(program: Program, cause?: Error) {
    super('A signature was required but not found', program, cause);
  }
}
codeToErrorMap.set(0x1786, MissingRequiredSignatureError);
nameToErrorMap.set('MissingRequiredSignature', MissingRequiredSignatureError);

/**
 * GatewayTokenInvalid: 'Gateway token is not valid'
 * @category Errors
 */
class GatewayTokenInvalidError extends ProgramError {
  readonly name: string = 'GatewayTokenInvalid';

  readonly code: number = 0x1787; // 6023

  constructor(program: Program, cause?: Error) {
    super('Gateway token is not valid', program, cause);
  }
}
codeToErrorMap.set(0x1787, GatewayTokenInvalidError);
nameToErrorMap.set('GatewayTokenInvalid', GatewayTokenInvalidError);

/**
 * AfterEndDate: 'Current time is after the set end date'
 * @category Errors
 */
class AfterEndDateError extends ProgramError {
  readonly name: string = 'AfterEndDate';

  readonly code: number = 0x1788; // 6024

  constructor(program: Program, cause?: Error) {
    super('Current time is after the set end date', program, cause);
  }
}
codeToErrorMap.set(0x1788, AfterEndDateError);
nameToErrorMap.set('AfterEndDate', AfterEndDateError);

/**
 * InvalidMintTime: 'Current time is not within the allowed mint time'
 * @category Errors
 */
class InvalidMintTimeError extends ProgramError {
  readonly name: string = 'InvalidMintTime';

  readonly code: number = 0x1789; // 6025

  constructor(program: Program, cause?: Error) {
    super('Current time is not within the allowed mint time', program, cause);
  }
}
codeToErrorMap.set(0x1789, InvalidMintTimeError);
nameToErrorMap.set('InvalidMintTime', InvalidMintTimeError);

/**
 * AddressNotFoundInAllowedList: 'Address not found on the allowed list'
 * @category Errors
 */
class AddressNotFoundInAllowedListError extends ProgramError {
  readonly name: string = 'AddressNotFoundInAllowedList';

  readonly code: number = 0x178a; // 6026

  constructor(program: Program, cause?: Error) {
    super('Address not found on the allowed list', program, cause);
  }
}
codeToErrorMap.set(0x178a, AddressNotFoundInAllowedListError);
nameToErrorMap.set(
  'AddressNotFoundInAllowedList',
  AddressNotFoundInAllowedListError
);

/**
 * MissingAllowedListProof: 'Missing allowed list proof'
 * @category Errors
 */
class MissingAllowedListProofError extends ProgramError {
  readonly name: string = 'MissingAllowedListProof';

  readonly code: number = 0x178b; // 6027

  constructor(program: Program, cause?: Error) {
    super('Missing allowed list proof', program, cause);
  }
}
codeToErrorMap.set(0x178b, MissingAllowedListProofError);
nameToErrorMap.set('MissingAllowedListProof', MissingAllowedListProofError);

/**
 * AllowedListNotEnabled: 'Allow list guard is not enabled'
 * @category Errors
 */
class AllowedListNotEnabledError extends ProgramError {
  readonly name: string = 'AllowedListNotEnabled';

  readonly code: number = 0x178c; // 6028

  constructor(program: Program, cause?: Error) {
    super('Allow list guard is not enabled', program, cause);
  }
}
codeToErrorMap.set(0x178c, AllowedListNotEnabledError);
nameToErrorMap.set('AllowedListNotEnabled', AllowedListNotEnabledError);

/**
 * AllowedMintLimitReached: 'The maximum number of allowed mints was reached'
 * @category Errors
 */
class AllowedMintLimitReachedError extends ProgramError {
  readonly name: string = 'AllowedMintLimitReached';

  readonly code: number = 0x178d; // 6029

  constructor(program: Program, cause?: Error) {
    super('The maximum number of allowed mints was reached', program, cause);
  }
}
codeToErrorMap.set(0x178d, AllowedMintLimitReachedError);
nameToErrorMap.set('AllowedMintLimitReached', AllowedMintLimitReachedError);

/**
 * InvalidNftCollection: 'Invalid NFT collection'
 * @category Errors
 */
class InvalidNftCollectionError extends ProgramError {
  readonly name: string = 'InvalidNftCollection';

  readonly code: number = 0x178e; // 6030

  constructor(program: Program, cause?: Error) {
    super('Invalid NFT collection', program, cause);
  }
}
codeToErrorMap.set(0x178e, InvalidNftCollectionError);
nameToErrorMap.set('InvalidNftCollection', InvalidNftCollectionError);

/**
 * MissingNft: 'Missing NFT on the account'
 * @category Errors
 */
class MissingNftError extends ProgramError {
  readonly name: string = 'MissingNft';

  readonly code: number = 0x178f; // 6031

  constructor(program: Program, cause?: Error) {
    super('Missing NFT on the account', program, cause);
  }
}
codeToErrorMap.set(0x178f, MissingNftError);
nameToErrorMap.set('MissingNft', MissingNftError);

/**
 * MaximumRedeemedAmount: 'Current redemeed items is at the set maximum amount'
 * @category Errors
 */
class MaximumRedeemedAmountError extends ProgramError {
  readonly name: string = 'MaximumRedeemedAmount';

  readonly code: number = 0x1790; // 6032

  constructor(program: Program, cause?: Error) {
    super(
      'Current redemeed items is at the set maximum amount',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x1790, MaximumRedeemedAmountError);
nameToErrorMap.set('MaximumRedeemedAmount', MaximumRedeemedAmountError);

/**
 * AddressNotAuthorized: 'Address not authorized'
 * @category Errors
 */
class AddressNotAuthorizedError extends ProgramError {
  readonly name: string = 'AddressNotAuthorized';

  readonly code: number = 0x1791; // 6033

  constructor(program: Program, cause?: Error) {
    super('Address not authorized', program, cause);
  }
}
codeToErrorMap.set(0x1791, AddressNotAuthorizedError);
nameToErrorMap.set('AddressNotAuthorized', AddressNotAuthorizedError);

/**
 * MissingFreezeInstruction: 'Missing freeze instruction data'
 * @category Errors
 */
class MissingFreezeInstructionError extends ProgramError {
  readonly name: string = 'MissingFreezeInstruction';

  readonly code: number = 0x1792; // 6034

  constructor(program: Program, cause?: Error) {
    super('Missing freeze instruction data', program, cause);
  }
}
codeToErrorMap.set(0x1792, MissingFreezeInstructionError);
nameToErrorMap.set('MissingFreezeInstruction', MissingFreezeInstructionError);

/**
 * FreezeGuardNotEnabled: 'Freeze guard must be enabled'
 * @category Errors
 */
class FreezeGuardNotEnabledError extends ProgramError {
  readonly name: string = 'FreezeGuardNotEnabled';

  readonly code: number = 0x1793; // 6035

  constructor(program: Program, cause?: Error) {
    super('Freeze guard must be enabled', program, cause);
  }
}
codeToErrorMap.set(0x1793, FreezeGuardNotEnabledError);
nameToErrorMap.set('FreezeGuardNotEnabled', FreezeGuardNotEnabledError);

/**
 * FreezeNotInitialized: 'Freeze must be initialized'
 * @category Errors
 */
class FreezeNotInitializedError extends ProgramError {
  readonly name: string = 'FreezeNotInitialized';

  readonly code: number = 0x1794; // 6036

  constructor(program: Program, cause?: Error) {
    super('Freeze must be initialized', program, cause);
  }
}
codeToErrorMap.set(0x1794, FreezeNotInitializedError);
nameToErrorMap.set('FreezeNotInitialized', FreezeNotInitializedError);

/**
 * MissingFreezePeriod: 'Missing freeze period'
 * @category Errors
 */
class MissingFreezePeriodError extends ProgramError {
  readonly name: string = 'MissingFreezePeriod';

  readonly code: number = 0x1795; // 6037

  constructor(program: Program, cause?: Error) {
    super('Missing freeze period', program, cause);
  }
}
codeToErrorMap.set(0x1795, MissingFreezePeriodError);
nameToErrorMap.set('MissingFreezePeriod', MissingFreezePeriodError);

/**
 * FreezeEscrowAlreadyExists: 'The freeze escrow account already exists'
 * @category Errors
 */
class FreezeEscrowAlreadyExistsError extends ProgramError {
  readonly name: string = 'FreezeEscrowAlreadyExists';

  readonly code: number = 0x1796; // 6038

  constructor(program: Program, cause?: Error) {
    super('The freeze escrow account already exists', program, cause);
  }
}
codeToErrorMap.set(0x1796, FreezeEscrowAlreadyExistsError);
nameToErrorMap.set('FreezeEscrowAlreadyExists', FreezeEscrowAlreadyExistsError);

/**
 * ExceededMaximumFreezePeriod: 'Maximum freeze period exceeded'
 * @category Errors
 */
class ExceededMaximumFreezePeriodError extends ProgramError {
  readonly name: string = 'ExceededMaximumFreezePeriod';

  readonly code: number = 0x1797; // 6039

  constructor(program: Program, cause?: Error) {
    super('Maximum freeze period exceeded', program, cause);
  }
}
codeToErrorMap.set(0x1797, ExceededMaximumFreezePeriodError);
nameToErrorMap.set(
  'ExceededMaximumFreezePeriod',
  ExceededMaximumFreezePeriodError
);

/**
 * ThawNotEnabled: 'Thaw is not enabled'
 * @category Errors
 */
class ThawNotEnabledError extends ProgramError {
  readonly name: string = 'ThawNotEnabled';

  readonly code: number = 0x1798; // 6040

  constructor(program: Program, cause?: Error) {
    super('Thaw is not enabled', program, cause);
  }
}
codeToErrorMap.set(0x1798, ThawNotEnabledError);
nameToErrorMap.set('ThawNotEnabled', ThawNotEnabledError);

/**
 * UnlockNotEnabled: 'Unlock is not enabled (not all NFTs are thawed)'
 * @category Errors
 */
class UnlockNotEnabledError extends ProgramError {
  readonly name: string = 'UnlockNotEnabled';

  readonly code: number = 0x1799; // 6041

  constructor(program: Program, cause?: Error) {
    super('Unlock is not enabled (not all NFTs are thawed)', program, cause);
  }
}
codeToErrorMap.set(0x1799, UnlockNotEnabledError);
nameToErrorMap.set('UnlockNotEnabled', UnlockNotEnabledError);

/**
 * DuplicatedGroupLabel: 'Duplicated group label'
 * @category Errors
 */
class DuplicatedGroupLabelError extends ProgramError {
  readonly name: string = 'DuplicatedGroupLabel';

  readonly code: number = 0x179a; // 6042

  constructor(program: Program, cause?: Error) {
    super('Duplicated group label', program, cause);
  }
}
codeToErrorMap.set(0x179a, DuplicatedGroupLabelError);
nameToErrorMap.set('DuplicatedGroupLabel', DuplicatedGroupLabelError);

/**
 * DuplicatedMintLimitId: 'Duplicated mint limit id'
 * @category Errors
 */
class DuplicatedMintLimitIdError extends ProgramError {
  readonly name: string = 'DuplicatedMintLimitId';

  readonly code: number = 0x179b; // 6043

  constructor(program: Program, cause?: Error) {
    super('Duplicated mint limit id', program, cause);
  }
}
codeToErrorMap.set(0x179b, DuplicatedMintLimitIdError);
nameToErrorMap.set('DuplicatedMintLimitId', DuplicatedMintLimitIdError);

/**
 * UnauthorizedProgramFound: 'An unauthorized program was found in the transaction'
 * @category Errors
 */
class UnauthorizedProgramFoundError extends ProgramError {
  readonly name: string = 'UnauthorizedProgramFound';

  readonly code: number = 0x179c; // 6044

  constructor(program: Program, cause?: Error) {
    super(
      'An unauthorized program was found in the transaction',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x179c, UnauthorizedProgramFoundError);
nameToErrorMap.set('UnauthorizedProgramFound', UnauthorizedProgramFoundError);

/**
 * ExceededProgramListSize: 'Exceeded the maximum number of programs in the additional list'
 * @category Errors
 */
class ExceededProgramListSizeError extends ProgramError {
  readonly name: string = 'ExceededProgramListSize';

  readonly code: number = 0x179d; // 6045

  constructor(program: Program, cause?: Error) {
    super(
      'Exceeded the maximum number of programs in the additional list',
      program,
      cause
    );
  }
}
codeToErrorMap.set(0x179d, ExceededProgramListSizeError);
nameToErrorMap.set('ExceededProgramListSize', ExceededProgramListSizeError);

/**
 * AllocationNotInitialized: 'Allocation PDA not initialized'
 * @category Errors
 */
class AllocationNotInitializedError extends ProgramError {
  readonly name: string = 'AllocationNotInitialized';

  readonly code: number = 0x179e; // 6046

  constructor(program: Program, cause?: Error) {
    super('Allocation PDA not initialized', program, cause);
  }
}
codeToErrorMap.set(0x179e, AllocationNotInitializedError);
nameToErrorMap.set('AllocationNotInitialized', AllocationNotInitializedError);

/**
 * AllocationLimitReached: 'Allocation limit was reached'
 * @category Errors
 */
class AllocationLimitReachedError extends ProgramError {
  readonly name: string = 'AllocationLimitReached';

  readonly code: number = 0x179f; // 6047

  constructor(program: Program, cause?: Error) {
    super('Allocation limit was reached', program, cause);
  }
}
codeToErrorMap.set(0x179f, AllocationLimitReachedError);
nameToErrorMap.set('AllocationLimitReached', AllocationLimitReachedError);

/**
 * AllocationGuardNotEnabled: 'Allocation guard must be enabled'
 * @category Errors
 */
class AllocationGuardNotEnabledError extends ProgramError {
  readonly name: string = 'AllocationGuardNotEnabled';

  readonly code: number = 0x17a0; // 6048

  constructor(program: Program, cause?: Error) {
    super('Allocation guard must be enabled', program, cause);
  }
}
codeToErrorMap.set(0x17a0, AllocationGuardNotEnabledError);
nameToErrorMap.set('AllocationGuardNotEnabled', AllocationGuardNotEnabledError);

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 */
export function getCandyGuardErrorFromCode(
  code: number,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = codeToErrorMap.get(code);
  return constructor ? new constructor(program, cause) : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 */
export function getCandyGuardErrorFromName(
  name: string,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = nameToErrorMap.get(name);
  return constructor ? new constructor(program, cause) : null;
}
