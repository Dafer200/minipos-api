import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: { fullName: string; email: string }) {
    return this.prisma.student.create({ data });
  }

  async findAll() {
    return this.prisma.student.findMany({ orderBy: { id: 'asc' } });
  }

  async createOrUpdateProfile(studentId: number, data: { phone?: string; address?: string }) {
    // Verifica que el estudiante existe antes de crear un perfil
    const student = await this.prisma.student.findUnique({ where: { id: studentId } });
    if (!student) throw new NotFoundException(`Student ${studentId} no existe`);

    return this.prisma.studentProfile.upsert({
      where: { studentId },
      update: {
        // CORRECCIÓN: Usamos 'pone' y 'Address' con mayúscula como pide tu schema
        pone: data.phone, 
        Address: data.address,
      },
      create: { 
        studentId, 
        pone: data.phone, 
        Address: data.address 
      },
    });
  }

  async detail(studentId: number) {
    const student = await this.prisma.student.findUnique({
      where: { id: studentId },
      // CORRECCIÓN: Tu schema usa 'Profile' con P mayúscula
      include: { Profile: true }, 
    });

    if (!student) throw new NotFoundException(`Student ${studentId} no existe`);
    return student;
  }

  async enroll(studentId: number, courseId: number) {
    return this.prisma.enrollment.create({
      data: { studentId, courseId },
      include: { course: true, student: true },
    });
  }

  async studentEnrollments(studentId: number) {
    const student = await this.prisma.student.findUnique({
      where: { id: studentId },
      include: {
        enrollments: {
          include: { course: true },
          orderBy: { enrolledAt: 'desc' },
        },
      },
    });

    if (!student) throw new NotFoundException(`Student ${studentId} no existe`);
    return student;
  }
}