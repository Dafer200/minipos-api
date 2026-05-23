import { Test, TestingModule } from '@nestjs/testing';
import { departmentsController } from './departments.controller';

describe('departmentsController', () => {
  let controller: departmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [departmentsController],
    }).compile();

    controller = module.get<departmentsController>(departmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
