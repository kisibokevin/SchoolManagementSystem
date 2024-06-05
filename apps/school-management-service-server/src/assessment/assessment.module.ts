import { Module } from "@nestjs/common";
import { AssessmentModuleBase } from "./base/assessment.module.base";
import { AssessmentService } from "./assessment.service";
import { AssessmentController } from "./assessment.controller";
import { AssessmentResolver } from "./assessment.resolver";

@Module({
  imports: [AssessmentModuleBase],
  controllers: [AssessmentController],
  providers: [AssessmentService, AssessmentResolver],
  exports: [AssessmentService],
})
export class AssessmentModule {}
