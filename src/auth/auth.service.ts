import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from 'src/user/user.service';
import { AuthMethodEnum, User } from 'prisma/__generated__';
import { Request, Response } from 'express';
import { LoginDto } from './dto/login.dto';
import { verify } from 'argon2';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  public constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  public async register(req: Request, dto: RegisterDto) {
    const isExist = await this.userService.findByEmail(dto.email);

    if (isExist) {
      throw new ConflictException('User exist!, use other email');
    }

    const newUser = await this.userService.create(
      dto.email,
      dto.password,
      dto.name,
      dto.role,
      '',
      AuthMethodEnum.CREDENTIALS,
      false,
    );

    return this.saveSession(req, newUser);
  }

  public async login(req: Request, dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.email);

    if (!user || !user.password) {
      throw new NotFoundException('User not found, tre again');
    }

    const isValidPassword = await verify(user.password, dto.password);

    if (!isValidPassword) {
      throw new UnauthorizedException('password is not correct');
    }

    return this.saveSession(req, user);
  }

  public async logout(req: Request, res: Response): Promise<void> {
    return new Promise((resolve, reject) => {
      req.session.destroy((err) => {
        if (err) {
          return reject(
            new InternalServerErrorException(
              'Session is end or server have problem',
            ),
          );
        }
      });

      res.clearCookie(this.configService.getOrThrow<string>('SESSION_NAME'));

      resolve()
    });
  }

  public async saveSession(req: Request, user: User) {
    return new Promise((resolve, reject) => {
      req.session.userId = user.id;

      req.session.save((err) => {
        if (err) {
          return reject(
            new InternalServerErrorException("Session doesn't saved"),
          );
        }

        resolve({ user });
      });
    });
  }
}
