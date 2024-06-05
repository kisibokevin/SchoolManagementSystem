/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StaffWhereInput } from "./StaffWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StaffListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StaffWhereInput,
  })
  @ValidateNested()
  @Type(() => StaffWhereInput)
  @IsOptional()
  @Field(() => StaffWhereInput, {
    nullable: true,
  })
  every?: StaffWhereInput;

  @ApiProperty({
    required: false,
    type: () => StaffWhereInput,
  })
  @ValidateNested()
  @Type(() => StaffWhereInput)
  @IsOptional()
  @Field(() => StaffWhereInput, {
    nullable: true,
  })
  some?: StaffWhereInput;

  @ApiProperty({
    required: false,
    type: () => StaffWhereInput,
  })
  @ValidateNested()
  @Type(() => StaffWhereInput)
  @IsOptional()
  @Field(() => StaffWhereInput, {
    nullable: true,
  })
  none?: StaffWhereInput;
}
export { StaffListRelationFilter as StaffListRelationFilter };