use crate::error::TokenExtrasError;
use borsh::BorshDeserialize;
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint::ProgramResult,
    program::invoke,
    pubkey::Pubkey,
    rent::Rent,
    system_instruction, system_program,
    sysvar::Sysvar,
};
use solana_sdk::feature_set::{spl_associated_token_account_v1_1_0, spl_token_v3_4_0};

use crate::instruction::TokenExtrasInstruction;

pub struct Processor;

impl Processor {
    pub fn process_instruction(
        _program_id: &Pubkey,
        accounts: &[AccountInfo],
        instruction_data: &[u8],
    ) -> ProgramResult {
        let instruction: TokenExtrasInstruction =
            TokenExtrasInstruction::try_from_slice(instruction_data)?;
        match instruction {
            TokenExtrasInstruction::CreateTokenIfMissing => create_token_if_missing(accounts),
        }
    }
}

fn create_token_if_missing(accounts: &[AccountInfo]) -> ProgramResult {
    // Accounts.
    let account_info_iter = &mut accounts.iter();
    let token = next_account_info(account_info_iter)?;
    let mint = next_account_info(account_info_iter)?;
    let owner = next_account_info(account_info_iter)?;
    let ata = next_account_info(account_info_iter)?;
    let system_program = next_account_info(account_info_iter)?;
    let token_program = next_account_info(account_info_iter)?;
    let ata_program = next_account_info(account_info_iter)?;
    let computed_ata = get_associated_token_address(owner.key, mint.key);
    // let (computed_ata) = Pubkey::find_program_address(
    //     &[mint.key.as_ref(), spl_token_v3_4_0::id(), owner.key.as_ref()],
    //     ata_program.key,
    // );

    // Guards.
    if *system_program.key != system_program::id() {
        return Err(TokenExtrasError::InvalidSystemProgram.into());
    }
    if *token_program.key != spl_token_v3_4_0::id() {
        return Err(TokenExtrasError::InvalidTokenProgram.into());
    }
    if *ata_program.key != spl_associated_token_account_v1_1_0::id() {
        return Err(TokenExtrasError::InvalidAssociatedTokenProgram.into());
    }
    if *ata.key != computed_ata {
        return Err(TokenExtrasError::InvalidAssociatedTokenAccount.into());
    }

    // CPI to the System Program.
    // invoke(
    //     &system_instruction::create_account(
    //         payer.key,
    //         new_account.key,
    //         lamports,
    //         space,
    //         &program_owner,
    //     ),
    //     &[payer.clone(), new_account.clone(), system_program.clone()],
    // )?;

    Ok(())
}

