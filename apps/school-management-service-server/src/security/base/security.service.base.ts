/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Security as PrismaSecurity } from "@prisma/client";

export class SecurityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SecurityCountArgs, "select">): Promise<number> {
    return this.prisma.security.count(args);
  }

  async securities<T extends Prisma.SecurityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SecurityFindManyArgs>
  ): Promise<PrismaSecurity[]> {
    return this.prisma.security.findMany<Prisma.SecurityFindManyArgs>(args);
  }
  async security<T extends Prisma.SecurityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SecurityFindUniqueArgs>
  ): Promise<PrismaSecurity | null> {
    return this.prisma.security.findUnique(args);
  }
  async createSecurity<T extends Prisma.SecurityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SecurityCreateArgs>
  ): Promise<PrismaSecurity> {
    return this.prisma.security.create<T>(args);
  }
  async updateSecurity<T extends Prisma.SecurityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SecurityUpdateArgs>
  ): Promise<PrismaSecurity> {
    return this.prisma.security.update<T>(args);
  }
  async deleteSecurity<T extends Prisma.SecurityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SecurityDeleteArgs>
  ): Promise<PrismaSecurity> {
    return this.prisma.security.delete(args);
  }
}
