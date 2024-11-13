import { Schedule, User } from './../../../prisma/__generated__/index.d';

export class UpdateGroupDto {
	name?: string

	students?: User[]

  schedule?: Schedule
}