import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReportCardServiceBase } from "./base/reportCard.service.base";

@Injectable()
export class ReportCardService extends ReportCardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
