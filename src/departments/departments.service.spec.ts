import { Test, TestingModule } from '@nestjs/testing';
import { departmentsService } from './departments.service';

describe('departmentsService', () => {
  let service: departmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [departmentsService],
    }).compile();

    service = module.get<departmentsService>(departmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
