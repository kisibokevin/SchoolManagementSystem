import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SecurityService } from "./security.service";
import { SecurityControllerBase } from "./base/security.controller.base";

@swagger.ApiTags("securities")
@common.Controller("securities")
export class SecurityController extends SecurityControllerBase {
  constructor(protected readonly service: SecurityService) {
    super(service);
  }
}
