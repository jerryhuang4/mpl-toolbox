/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Option,
  OptionOrNullable,
  Pda,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  publicKey as toPublicKey,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  mapSerializer,
  option,
  publicKey as publicKeySerializer,
  struct,
  u16,
  u32,
  u64,
  u8,
} from '@metaplex-foundation/umi-serializers';

export type AddressLookupTable = Account<AddressLookupTableAccountData>;

export type AddressLookupTableAccountData = {
  discriminator: number;
  deactivationSlot: bigint;
  lastExtendedSlot: bigint;
  lastExtendedStartIndex: number;
  authority: Option<PublicKey>;
  padding: number;
  addresses: Array<PublicKey>;
};

export type AddressLookupTableAccountDataArgs = {
  deactivationSlot: number | bigint;
  lastExtendedSlot: number | bigint;
  lastExtendedStartIndex: number;
  authority: OptionOrNullable<PublicKey>;
  addresses: Array<PublicKey>;
};

export function getAddressLookupTableAccountDataSerializer(): Serializer<
  AddressLookupTableAccountDataArgs,
  AddressLookupTableAccountData
> {
  return mapSerializer<
    AddressLookupTableAccountDataArgs,
    any,
    AddressLookupTableAccountData
  >(
    struct<AddressLookupTableAccountData>(
      [
        ['discriminator', u32()],
        ['deactivationSlot', u64()],
        ['lastExtendedSlot', u64()],
        ['lastExtendedStartIndex', u8()],
        ['authority', option(publicKeySerializer(), { fixed: true })],
        ['padding', u16()],
        ['addresses', array(publicKeySerializer(), { size: 'remainder' })],
      ],
      { description: 'AddressLookupTableAccountData' }
    ),
    (value) => ({ ...value, discriminator: 1, padding: 0 })
  ) as Serializer<
    AddressLookupTableAccountDataArgs,
    AddressLookupTableAccountData
  >;
}

export function deserializeAddressLookupTable(
  rawAccount: RpcAccount
): AddressLookupTable {
  return deserializeAccount(
    rawAccount,
    getAddressLookupTableAccountDataSerializer()
  );
}

export async function fetchAddressLookupTable(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<AddressLookupTable> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  assertAccountExists(maybeAccount, 'AddressLookupTable');
  return deserializeAddressLookupTable(maybeAccount);
}

export async function safeFetchAddressLookupTable(
  context: Pick<Context, 'rpc'>,
  publicKey: PublicKey | Pda,
  options?: RpcGetAccountOptions
): Promise<AddressLookupTable | null> {
  const maybeAccount = await context.rpc.getAccount(
    toPublicKey(publicKey, false),
    options
  );
  return maybeAccount.exists
    ? deserializeAddressLookupTable(maybeAccount)
    : null;
}

export async function fetchAllAddressLookupTable(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<AddressLookupTable[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'AddressLookupTable');
    return deserializeAddressLookupTable(maybeAccount);
  });
}

export async function safeFetchAllAddressLookupTable(
  context: Pick<Context, 'rpc'>,
  publicKeys: Array<PublicKey | Pda>,
  options?: RpcGetAccountsOptions
): Promise<AddressLookupTable[]> {
  const maybeAccounts = await context.rpc.getAccounts(
    publicKeys.map((key) => toPublicKey(key, false)),
    options
  );
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeAddressLookupTable(maybeAccount as RpcAccount)
    );
}

export function getAddressLookupTableGpaBuilder(
  context: Pick<Context, 'rpc' | 'programs'>
) {
  const programId = context.programs.getPublicKey(
    'splAddressLookupTable',
    'AddressLookupTab1e1111111111111111111111111'
  );
  return gpaBuilder(context, programId)
    .registerFields<{
      discriminator: number;
      deactivationSlot: number | bigint;
      lastExtendedSlot: number | bigint;
      lastExtendedStartIndex: number;
      authority: OptionOrNullable<PublicKey>;
      padding: number;
      addresses: Array<PublicKey>;
    }>({
      discriminator: [0, u32()],
      deactivationSlot: [4, u64()],
      lastExtendedSlot: [12, u64()],
      lastExtendedStartIndex: [20, u8()],
      authority: [21, option(publicKeySerializer(), { fixed: true })],
      padding: [54, u16()],
      addresses: [56, array(publicKeySerializer(), { size: 'remainder' })],
    })
    .deserializeUsing<AddressLookupTable>((account) =>
      deserializeAddressLookupTable(account)
    )
    .whereField('discriminator', 1);
}

export function findAddressLookupTablePda(
  context: Pick<Context, 'eddsa' | 'programs'>,
  seeds: {
    /** The address of the LUT's authority */
    authority: PublicKey;
    /** The recent slot associated with the LUT */
    recentSlot: number | bigint;
  }
): Pda {
  const programId = context.programs.getPublicKey(
    'splAddressLookupTable',
    'AddressLookupTab1e1111111111111111111111111'
  );
  return context.eddsa.findPda(programId, [
    publicKeySerializer().serialize(seeds.authority),
    u64().serialize(seeds.recentSlot),
  ]);
}

export async function fetchAddressLookupTableFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  seeds: Parameters<typeof findAddressLookupTablePda>[1],
  options?: RpcGetAccountOptions
): Promise<AddressLookupTable> {
  return fetchAddressLookupTable(
    context,
    findAddressLookupTablePda(context, seeds),
    options
  );
}

export async function safeFetchAddressLookupTableFromSeeds(
  context: Pick<Context, 'eddsa' | 'programs' | 'rpc'>,
  seeds: Parameters<typeof findAddressLookupTablePda>[1],
  options?: RpcGetAccountOptions
): Promise<AddressLookupTable | null> {
  return safeFetchAddressLookupTable(
    context,
    findAddressLookupTablePda(context, seeds),
    options
  );
}
