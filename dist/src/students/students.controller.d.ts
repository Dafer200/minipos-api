import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly service;
    constructor(service: StudentsService);
    create(body: {
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
    detail(id: number): Promise<{
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
    createOrUpdateProfile(id: number, body: {
        phone?: string;
        Address?: string;
    }): Promise<{
        id: number;
        studentId: number;
        pone: string | null;
        Address: string | null;
    }>;
    enroll(id: number, body: {
        courseId: number;
    }): Promise<{
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
    studentEnrollments(id: number): Promise<{
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
