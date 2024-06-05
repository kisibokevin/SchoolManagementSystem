import * as graphql from "@nestjs/graphql";
import { FinancialResolverBase } from "./base/financial.resolver.base";
import { Financial } from "./base/Financial";
import { FinancialService } from "./financial.service";

@graphql.Resolver(() => Financial)
export class FinancialResolver extends FinancialResolverBase {
  constructor(protected readonly service: FinancialService) {
    super(service);
  }
}
