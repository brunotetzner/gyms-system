import { prisma } from "@/lib/prisma";
import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../users-repository";

export class PrismaUsersRepository implements UsersRepository {
  findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
  findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({ data });

    return user;
  }
}