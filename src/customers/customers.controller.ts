import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @UseGuards(JwtAuthGuard)
  @Get() //Listar todos
  async list(@CurrentUser() user: any) {
    return this.customersService.findAll();
  }

  @Post() // Crear
  async create(@Body() dto: CreateCustomerDto) {
    return this.customersService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id') //Buscar uno
  async findOne(
    @CurrentUser() user: any,
    @Param('id', ParseIntPipe) id: number){
    return this.customersService.findOne(id);
  }

  @Patch(':id') // Actualizar
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCustomerDto,
  ) {
    return this.customersService.update(id, dto);
  }

  @Delete(':id') // Eliminar
  @HttpCode(204) // Devuelve 204 No Content si tiene éxito [cite: 239]
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.customersService.remove(id);
  }
}
