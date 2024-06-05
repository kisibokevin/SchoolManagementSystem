import { Module } from "@nestjs/common";
import { HomeworkModuleBase } from "./base/homework.module.base";
import { HomeworkService } from "./homework.service";
import { HomeworkController } from "./homework.controller";
import { HomeworkResolver } from "./homework.resolver";

@Module({
  imports: [HomeworkModuleBase],
  controllers: [HomeworkController],
  providers: [HomeworkService, HomeworkResolver],
  exports: [HomeworkService],
})
export class HomeworkModule {}
