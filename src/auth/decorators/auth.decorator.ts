import { applyDecorators, UseGuards } from '@nestjs/common'
import { UserRoleEnum } from 'prisma/__generated__'
import { Roles } from './roles.decorator'
import { AuthGuard } from '../guard/auth.guard'
import { RolesGuard } from '../guard/roles.guard'


export function Authorization(...roles: UserRoleEnum[]) {
  if(roles.length > 0) {
    return applyDecorators(Roles(...roles), UseGuards(AuthGuard, RolesGuard))
  }

  return applyDecorators(UseGuards(AuthGuard))
}