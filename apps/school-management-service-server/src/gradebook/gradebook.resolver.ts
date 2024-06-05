import * as graphql from "@nestjs/graphql";
import { GradebookResolverBase } from "./base/gradebook.resolver.base";
import { Gradebook } from "./base/Gradebook";
import { GradebookService } from "./gradebook.service";

@graphql.Resolver(() => Gradebook)
export class GradebookResolver extends GradebookResolverBase {
  constructor(protected readonly service: GradebookService) {
    super(service);
  }
}
