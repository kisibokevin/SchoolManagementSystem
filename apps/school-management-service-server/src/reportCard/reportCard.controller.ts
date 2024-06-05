import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReportCardService } from "./reportCard.service";
import { ReportCardControllerBase } from "./base/reportCard.controller.base";

@swagger.ApiTags("reportCards")
@common.Controller("reportCards")
export class ReportCardController extends ReportCardControllerBase {
  constructor(protected readonly service: ReportCardService) {
    super(service);
  }
}
