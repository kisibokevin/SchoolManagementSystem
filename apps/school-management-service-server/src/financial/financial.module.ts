import { Module } from "@nestjs/common";
import { FinancialModuleBase } from "./base/financial.module.base";
import { FinancialService } from "./financial.service";
import { FinancialController } from "./financial.controller";
import { FinancialResolver } from "./financial.resolver";

@Module({
  imports: [FinancialModuleBase],
  controllers: [FinancialController],
  providers: [FinancialService, FinancialResolver],
  exports: [FinancialService],
})
export class FinancialModule {}
