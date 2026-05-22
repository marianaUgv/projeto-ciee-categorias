import { PickType } from "@nestjs/mapped-types";
import { CreateAccountDto } from "./create-account.dto";

export class UpdateBalanceDto extends PickType(CreateAccountDto, ['initial_balance'] as const) {}