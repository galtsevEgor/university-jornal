import {  AuthMethodEnum, UserRoleEnum } from 'prisma/__generated__';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { hash } from 'argon2';

@Injectable()
export class UserService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async findMany () {
    return await this.prismaService.user.findMany()
  }

  public async findById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
      include: {
        accounts: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User is not find');
    }

    return user;
  }

  public async findByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
      include: {
        accounts: true,
      },
    });

    // if (!user) {
    //   throw new NotFoundException('User is not find');
    // }

    return user;
  }

  public async create(
    email: string,
    password: string,
    displayName: string,
    role: UserRoleEnum,
    picture: string,
    method: AuthMethodEnum,
    isVerified: boolean,
    
  ) {
    const user = await this.prismaService.user.create({
      data: {
        email,
        password: password ? await hash(password) : '',
        displayName,
        role,
        picture,
        method,
        isVerified,
      },
      include: {
        accounts: true,
      },
    });
    
    return user
  }
}
