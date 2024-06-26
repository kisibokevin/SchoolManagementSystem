/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Assessment } from "./Assessment";
import { AssessmentCountArgs } from "./AssessmentCountArgs";
import { AssessmentFindManyArgs } from "./AssessmentFindManyArgs";
import { AssessmentFindUniqueArgs } from "./AssessmentFindUniqueArgs";
import { DeleteAssessmentArgs } from "./DeleteAssessmentArgs";
import { AssessmentService } from "../assessment.service";
@graphql.Resolver(() => Assessment)
export class AssessmentResolverBase {
  constructor(protected readonly service: AssessmentService) {}

  async _assessmentsMeta(
    @graphql.Args() args: AssessmentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Assessment])
  async assessments(
    @graphql.Args() args: AssessmentFindManyArgs
  ): Promise<Assessment[]> {
    return this.service.assessments(args);
  }

  @graphql.Query(() => Assessment, { nullable: true })
  async assessment(
    @graphql.Args() args: AssessmentFindUniqueArgs
  ): Promise<Assessment | null> {
    const result = await this.service.assessment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Assessment)
  async deleteAssessment(
    @graphql.Args() args: DeleteAssessmentArgs
  ): Promise<Assessment | null> {
    try {
      return await this.service.deleteAssessment(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
