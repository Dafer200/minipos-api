import { PrismaService } from '../prisma/prisma.service';
export declare class CoursesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: {
        code: string;
        title: string;
        departmentId: number;
    }): Promise<{
        id: number;
        code: string;
        title: string;
        departmentId: number;
    }>;
    findAll(): Promise<({
        department: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        code: string;
        title: string;
        departmentId: number;
    })[]>;
    addTags(courseId: number, tagNames: string[]): Promise<{
        tags: {
            id: number;
            name: string;
        }[];
    } & {
        id: number;
        code: string;
        title: string;
        departmentId: number;
    }>;
    detail(courseId: number): Promise<{
        department: {
            id: number;
            name: string;
        };
        tags: {
            id: number;
            name: string;
        }[];
    } & {
        id: number;
        code: string;
        title: string;
        departmentId: number;
    }>;
}
