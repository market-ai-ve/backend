import { Test, TestingModule } from '@nestjs/testing';
import { ContentsController } from './create-buyer-person.controller';
import { CreateBuyerPersonCommandHandler } from '@/components/marketing-content/application/use-cases/CreateBuyerPerson';
import { BuyerPersonAIServices } from '@/components/marketing-content/domain/services/AI/buyer-person.ai';
import { SDK_VERCEL_MODEL_GOOGLE } from '@/components/marketing-content/infraestructure/sdk/vercel-ai';


describe('ContentsController', () => {
  let controller: ContentsController;
  let serviceAI: BuyerPersonAIServices;
  let commandHandler: CreateBuyerPersonCommandHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentsController],
      providers: [CreateBuyerPersonCommandHandler, BuyerPersonAIServices],
    }).compile();

    controller = module.get<ContentsController>(ContentsController);

    serviceAI = new BuyerPersonAIServices();
    commandHandler = new CreateBuyerPersonCommandHandler(serviceAI);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a list of terms for creating a buyer persona using a mock commandHandler', async () => {
    const dto = {
        companyName: 'John Doe',
        companyDescription: 'john@example.com',
        dataSearch: ['Edad'],
    };
    // mock commandHandler
    jest.spyOn(commandHandler, 'run').mockResolvedValue({term: [
        'Hello 01',
        'Hello 02',
        'Hello 03',
        'Hello 04',
        'Hello 05',
    ]});

    const result = await controller.createBuyerPerson(dto);
    expect(result).toBe({term: [
        'Hello 01',
        'Hello 02',
        'Hello 03',
        'Hello 04',
        'Hello 05',
    ]});
  })
});
