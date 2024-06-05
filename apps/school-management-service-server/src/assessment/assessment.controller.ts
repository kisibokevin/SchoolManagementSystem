import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssessmentService } from "./assessment.service";
import { AssessmentControllerBase } from "./base/assessment.controller.base";

@swagger.ApiTags("assessments")
@common.Controller("assessments")
export class AssessmentController extends AssessmentControllerBase {
  constructor(protected readonly service: AssessmentService) {
    super(service);
  }
}
