import * as graphql from "@nestjs/graphql";
import { SecurityResolverBase } from "./base/security.resolver.base";
import { Security } from "./base/Security";
import { SecurityService } from "./security.service";

@graphql.Resolver(() => Security)
export class SecurityResolver extends SecurityResolverBase {
  constructor(protected readonly service: SecurityService) {
    super(service);
  }
}
