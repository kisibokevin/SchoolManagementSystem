import * as graphql from "@nestjs/graphql";
import { HomeworkResolverBase } from "./base/homework.resolver.base";
import { Homework } from "./base/Homework";
import { HomeworkService } from "./homework.service";

@graphql.Resolver(() => Homework)
export class HomeworkResolver extends HomeworkResolverBase {
  constructor(protected readonly service: HomeworkService) {
    super(service);
  }
}
