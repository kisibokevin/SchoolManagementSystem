import * as graphql from "@nestjs/graphql";
import { AssessmentResolverBase } from "./base/assessment.resolver.base";
import { Assessment } from "./base/Assessment";
import { AssessmentService } from "./assessment.service";

@graphql.Resolver(() => Assessment)
export class AssessmentResolver extends AssessmentResolverBase {
  constructor(protected readonly service: AssessmentService) {
    super(service);
  }
}
