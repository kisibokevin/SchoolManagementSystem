import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GradebookServiceBase } from "./base/gradebook.service.base";

@Injectable()
export class GradebookService extends GradebookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
