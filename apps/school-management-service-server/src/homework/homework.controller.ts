import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HomeworkService } from "./homework.service";
import { HomeworkControllerBase } from "./base/homework.controller.base";

@swagger.ApiTags("homework")
@common.Controller("homework")
export class HomeworkController extends HomeworkControllerBase {
  constructor(protected readonly service: HomeworkService) {
    super(service);
  }
}
