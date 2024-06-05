import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssessmentServiceBase } from "./base/assessment.service.base";

@Injectable()
export class AssessmentService extends AssessmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
