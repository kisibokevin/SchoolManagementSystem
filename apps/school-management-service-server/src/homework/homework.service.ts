import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HomeworkServiceBase } from "./base/homework.service.base";

@Injectable()
export class HomeworkService extends HomeworkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
