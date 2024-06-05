import * as graphql from "@nestjs/graphql";
import { ReportCardResolverBase } from "./base/reportCard.resolver.base";
import { ReportCard } from "./base/ReportCard";
import { ReportCardService } from "./reportCard.service";

@graphql.Resolver(() => ReportCard)
export class ReportCardResolver extends ReportCardResolverBase {
  constructor(protected readonly service: ReportCardService) {
    super(service);
  }
}
