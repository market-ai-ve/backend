import { applyDecorators } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiConflictResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

export class SwaggerDoc {
  static getDoc() {
    return applyDecorators(
      ApiOperation({ summary: 'Create buyer person with IA' }),
      ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
      }),
      ApiConflictResponse({ description: 'Conflict error with IA' }),
      ApiBadRequestResponse({ description: 'Bad request error' }),
    );
  }
}
