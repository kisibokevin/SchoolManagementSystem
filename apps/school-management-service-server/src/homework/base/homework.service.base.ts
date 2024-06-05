/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Homework as PrismaHomework } from "@prisma/client";

export class HomeworkServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.HomeworkCountArgs, "select">): Promise<number> {
    return this.prisma.homework.count(args);
  }

  async homeworkItems<T extends Prisma.HomeworkFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HomeworkFindManyArgs>
  ): Promise<PrismaHomework[]> {
    return this.prisma.homework.findMany<Prisma.HomeworkFindManyArgs>(args);
  }
  async homework<T extends Prisma.HomeworkFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HomeworkFindUniqueArgs>
  ): Promise<PrismaHomework | null> {
    return this.prisma.homework.findUnique(args);
  }
  async createHomework<T extends Prisma.HomeworkCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HomeworkCreateArgs>
  ): Promise<PrismaHomework> {
    return this.prisma.homework.create<T>(args);
  }
  async updateHomework<T extends Prisma.HomeworkUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HomeworkUpdateArgs>
  ): Promise<PrismaHomework> {
    return this.prisma.homework.update<T>(args);
  }
  async deleteHomework<T extends Prisma.HomeworkDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HomeworkDeleteArgs>
  ): Promise<PrismaHomework> {
    return this.prisma.homework.delete(args);
  }
}
