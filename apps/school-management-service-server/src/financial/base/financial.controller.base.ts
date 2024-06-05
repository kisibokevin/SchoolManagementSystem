/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FinancialService } from "../financial.service";
import { FinancialCreateInput } from "./FinancialCreateInput";
import { Financial } from "./Financial";
import { FinancialFindManyArgs } from "./FinancialFindManyArgs";
import { FinancialWhereUniqueInput } from "./FinancialWhereUniqueInput";
import { FinancialUpdateInput } from "./FinancialUpdateInput";

export class FinancialControllerBase {
  constructor(protected readonly service: FinancialService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Financial })
  async createFinancial(
    @common.Body() data: FinancialCreateInput
  ): Promise<Financial> {
    return await this.service.createFinancial({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Financial] })
  @ApiNestedQuery(FinancialFindManyArgs)
  async financials(@common.Req() request: Request): Promise<Financial[]> {
    const args = plainToClass(FinancialFindManyArgs, request.query);
    return this.service.financials({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Financial })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async financial(
    @common.Param() params: FinancialWhereUniqueInput
  ): Promise<Financial | null> {
    const result = await this.service.financial({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Financial })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFinancial(
    @common.Param() params: FinancialWhereUniqueInput,
    @common.Body() data: FinancialUpdateInput
  ): Promise<Financial | null> {
    try {
      return await this.service.updateFinancial({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Financial })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFinancial(
    @common.Param() params: FinancialWhereUniqueInput
  ): Promise<Financial | null> {
    try {
      return await this.service.deleteFinancial({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}