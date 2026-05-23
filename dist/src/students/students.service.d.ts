import { PrismaService } from '../prisma/prisma.service';
export declare class StudentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: {
        fullName: string;
        email: string;
    }): Promise<{
        fullName: string;
        email: string;
        createdAt: Date;
        id: number;
    }>;
    findAll(): Promise<{
        fullName: string;
        email: string;
        createdAt: Date;
        id: number;
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
        fullName: string;
        email: string;
        createdAt: Date;
        id: number;
    }>;
    enroll(studentId: number, courseId: number): Promise<{
        student: {
            fullName: string;
            email: string;
            createdAt: Date;
            id: number;
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
        status: import("@prisma/client").$Enums.EnrollmentStatus;
        enrolledAt: Date;
        courseId: number;
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
            status: import("@prisma/client").$Enums.EnrollmentStatus;
            enrolledAt: Date;
            courseId: number;
        })[];
    } & {
        fullName: string;
        email: string;
        createdAt: Date;
        id: number;
    }>;
}
