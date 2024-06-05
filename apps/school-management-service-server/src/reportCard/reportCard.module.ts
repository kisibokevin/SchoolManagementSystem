import { Module } from "@nestjs/common";
import { ReportCardModuleBase } from "./base/reportCard.module.base";
import { ReportCardService } from "./reportCard.service";
import { ReportCardController } from "./reportCard.controller";
import { ReportCardResolver } from "./reportCard.resolver";

@Module({
  imports: [ReportCardModuleBase],
  controllers: [ReportCardController],
  providers: [ReportCardService, ReportCardResolver],
  exports: [ReportCardService],
})
export class ReportCardModule {}
