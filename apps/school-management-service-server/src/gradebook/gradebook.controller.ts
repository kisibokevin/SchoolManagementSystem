import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GradebookService } from "./gradebook.service";
import { GradebookControllerBase } from "./base/gradebook.controller.base";

@swagger.ApiTags("gradebooks")
@common.Controller("gradebooks")
export class GradebookController extends GradebookControllerBase {
  constructor(protected readonly service: GradebookService) {
    super(service);
  }
}
