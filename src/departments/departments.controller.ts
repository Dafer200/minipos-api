import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { departmentsService } from './departments.service';

@Controller('departments')
export class departmentsController {
  constructor(private readonly service: departmentsService) { }

  @Post()
  async create(@Body() body: { name: string }) {
    return this.service.create(body.name);
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id/courses')
  async findOneWithCourses(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOneWithCourses(id);
  }

  // Método para actualizar un departamento
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { name: string }
  ) {
    return this.service.update(id, body.name);
  }

  // 🌟 AGREGADO: Método para eliminar un departamento
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}