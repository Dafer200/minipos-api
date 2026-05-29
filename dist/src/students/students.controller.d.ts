import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly service;
    constructor(service: StudentsService);
    create(body: {
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
    detail(id: number): Promise<{
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
