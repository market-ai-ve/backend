import { Body, Controller, Post } from '@nestjs/common';
import { CreateBuyerPersonDto } from './create-buyer-person.dto';

@Controller('contents')
export class ContentsController {
  @Post()
  createBuyer(@Body() payload: CreateBuyerPersonDto) {}
}
