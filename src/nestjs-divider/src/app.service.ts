import { Injectable } from '@nestjs/common';
import { DivideRequest, DivideResponse } from './models/divide'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the NestJS Divider API!';
  }

  checkHealth(): string {
    return 'healthy'
  }

  getQuotient(request: DivideRequest): DivideResponse {
    if (request.secondNumber === 0) {
      return {
        quotient: Number.POSITIVE_INFINITY
      }
    }
    return {
      quotient: request.firstNumber / request.secondNumber
    }
  }
}
