import { Test, TestingModule } from '@nestjs/testing';
import { RepertoriosService } from './repertorios.service';

describe('RepertoriosService', () => {
  let service: RepertoriosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepertoriosService],
    }).compile();

    service = module.get<RepertoriosService>(RepertoriosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
