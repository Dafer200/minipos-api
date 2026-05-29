import { PrismaService } from '../prisma/prisma.service';
export declare class StudentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: {
        fullName: string;
        email: string;
    }): Promise<{
        id: number;
        fullName: string;
        email: string;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        fullName: string;
        email: string;
        createdAt: Date;
    }[]>;
    createOrUpdateProfile(studentId: number, data: {
        phone?: string;
        address?: string;
    }): Promise<{
        id: number;
        studentId: number;
        pone: string | null;
        Address: string | null;
    }>;
    detail(studentId: number): Promise<{
        Profile: {
            id: number;
            studentId: number;
            pone: string | null;
            Address: string | null;
        } | null;
    } & {
        id: number;
        fullName: string;
        email: string;
        createdAt: Date;
    }>;
    enroll(studentId: number, courseId: number): Promise<{
        student: {
            id: number;
            fullName: string;
            email: string;
            createdAt: Date;
        };
        course: {
            id: number;
            code: string;
            title: string;
            departmentId: number;
        };
    } & {
        id: number;
        studentId: number;
        courseId: number;
        status: import("@prisma/client").$Enums.EnrollmentStatus;
        enrolledAt: Date;
    }>;
    studentEnrollments(studentId: number): Promise<{
        enrollments: ({
            course: {
                id: number;
                code: string;
                title: string;
                departmentId: number;
            };
        } & {
            id: number;
            studentId: number;
            courseId: number;
            status: import("@prisma/client").$Enums.EnrollmentStatus;
            enrolledAt: Date;
        })[];
    } & {
        id: number;
        fullName: string;
        email: string;
        createdAt: Date;
    }>;
}
