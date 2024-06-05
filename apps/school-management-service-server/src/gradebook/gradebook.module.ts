import { Module } from "@nestjs/common";
import { GradebookModuleBase } from "./base/gradebook.module.base";
import { GradebookService } from "./gradebook.service";
import { GradebookController } from "./gradebook.controller";
import { GradebookResolver } from "./gradebook.resolver";

@Module({
  imports: [GradebookModuleBase],
  controllers: [GradebookController],
  providers: [GradebookService, GradebookResolver],
  exports: [GradebookService],
})
export class GradebookModule {}
