import { PickType } from "@nestjs/swagger";
import { CreateAccountDto } from "./create-account.dto";

export class UpdateBalanceDto extends PickType(CreateAccountDto, ['initial_balance'] as const) {}