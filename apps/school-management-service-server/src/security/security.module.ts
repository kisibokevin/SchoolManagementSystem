import { Module } from "@nestjs/common";
import { SecurityModuleBase } from "./base/security.module.base";
import { SecurityService } from "./security.service";
import { SecurityController } from "./security.controller";
import { SecurityResolver } from "./security.resolver";

@Module({
  imports: [SecurityModuleBase],
  controllers: [SecurityController],
  providers: [SecurityService, SecurityResolver],
  exports: [SecurityService],
})
export class SecurityModule {}
