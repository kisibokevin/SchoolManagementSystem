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
import { Admission } from "./Admission";
import { AdmissionCountArgs } from "./AdmissionCountArgs";
import { AdmissionFindManyArgs } from "./AdmissionFindManyArgs";
import { AdmissionFindUniqueArgs } from "./AdmissionFindUniqueArgs";
import { DeleteAdmissionArgs } from "./DeleteAdmissionArgs";
import { AdmissionService } from "../admission.service";
@graphql.Resolver(() => Admission)
export class AdmissionResolverBase {
  constructor(protected readonly service: AdmissionService) {}

  async _admissionsMeta(
    @graphql.Args() args: AdmissionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Admission])
  async admissions(
    @graphql.Args() args: AdmissionFindManyArgs
  ): Promise<Admission[]> {
    return this.service.admissions(args);
  }

  @graphql.Query(() => Admission, { nullable: true })
  async admission(
    @graphql.Args() args: AdmissionFindUniqueArgs
  ): Promise<Admission | null> {
    const result = await this.service.admission(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Admission)
  async deleteAdmission(
    @graphql.Args() args: DeleteAdmissionArgs
  ): Promise<Admission | null> {
    try {
      return await this.service.deleteAdmission(args);
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
