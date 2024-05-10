import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Welcome to the NestJS Divider API!"', () => {
      expect(appController.getHello()).toBe('Welcome to the NestJS Divider API!');
    });
  });

  describe('health check', () => {
    it('should return "healthy"', () => {
      expect(appController.checkHealth()).toBe('healthy');
    });
  });

  describe('divide', () => {
    it('should divide numbers correctly', () => {
      expect(appController.getQuotient({ firstNumber: 2, secondNumber: 1 }).quotient).toBe(2);
    })

    it('should handle division by 0', () => {
      expect(appController.getQuotient({ firstNumber: 2, secondNumber: 0 }).quotient).toBe(Number.POSITIVE_INFINITY);
    })
  })

});
