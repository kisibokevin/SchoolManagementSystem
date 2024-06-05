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
import { GradebookService } from "../gradebook.service";
import { GradebookCreateInput } from "./GradebookCreateInput";
import { Gradebook } from "./Gradebook";
import { GradebookFindManyArgs } from "./GradebookFindManyArgs";
import { GradebookWhereUniqueInput } from "./GradebookWhereUniqueInput";
import { GradebookUpdateInput } from "./GradebookUpdateInput";

export class GradebookControllerBase {
  constructor(protected readonly service: GradebookService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Gradebook })
  async createGradebook(
    @common.Body() data: GradebookCreateInput
  ): Promise<Gradebook> {
    return await this.service.createGradebook({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Gradebook] })
  @ApiNestedQuery(GradebookFindManyArgs)
  async gradebooks(@common.Req() request: Request): Promise<Gradebook[]> {
    const args = plainToClass(GradebookFindManyArgs, request.query);
    return this.service.gradebooks({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Gradebook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async gradebook(
    @common.Param() params: GradebookWhereUniqueInput
  ): Promise<Gradebook | null> {
    const result = await this.service.gradebook({
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
  @swagger.ApiOkResponse({ type: Gradebook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGradebook(
    @common.Param() params: GradebookWhereUniqueInput,
    @common.Body() data: GradebookUpdateInput
  ): Promise<Gradebook | null> {
    try {
      return await this.service.updateGradebook({
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
  @swagger.ApiOkResponse({ type: Gradebook })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGradebook(
    @common.Param() params: GradebookWhereUniqueInput
  ): Promise<Gradebook | null> {
    try {
      return await this.service.deleteGradebook({
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