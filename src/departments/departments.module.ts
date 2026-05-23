import { Module } from '@nestjs/common';
import { departmentsController } from './departments.controller';
import { departmentsService } from './departments.service';

@Module({
  controllers: [departmentsController],
  providers: [departmentsService]
})
export class departmentsModule {}
