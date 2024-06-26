/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Parent as PrismaParent } from "@prisma/client";

export class ParentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ParentCountArgs, "select">): Promise<number> {
    return this.prisma.parent.count(args);
  }

  async parents<T extends Prisma.ParentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentFindManyArgs>
  ): Promise<PrismaParent[]> {
    return this.prisma.parent.findMany<Prisma.ParentFindManyArgs>(args);
  }
  async parent<T extends Prisma.ParentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentFindUniqueArgs>
  ): Promise<PrismaParent | null> {
    return this.prisma.parent.findUnique(args);
  }
  async createParent<T extends Prisma.ParentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentCreateArgs>
  ): Promise<PrismaParent> {
    return this.prisma.parent.create<T>(args);
  }
  async updateParent<T extends Prisma.ParentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentUpdateArgs>
  ): Promise<PrismaParent> {
    return this.prisma.parent.update<T>(args);
  }
  async deleteParent<T extends Prisma.ParentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentDeleteArgs>
  ): Promise<PrismaParent> {
    return this.prisma.parent.delete(args);
  }
}
