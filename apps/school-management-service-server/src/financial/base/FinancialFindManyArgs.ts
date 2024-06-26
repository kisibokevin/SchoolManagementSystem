/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinancialWhereInput } from "./FinancialWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FinancialOrderByInput } from "./FinancialOrderByInput";

@ArgsType()
class FinancialFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FinancialWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FinancialWhereInput, { nullable: true })
  @Type(() => FinancialWhereInput)
  where?: FinancialWhereInput;

  @ApiProperty({
    required: false,
    type: [FinancialOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FinancialOrderByInput], { nullable: true })
  @Type(() => FinancialOrderByInput)
  orderBy?: Array<FinancialOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FinancialFindManyArgs as FinancialFindManyArgs };
