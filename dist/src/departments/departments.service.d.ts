import { PrismaService } from '../prisma/prisma.service';
export declare class departmentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(name: string): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOneWithCourses(id: number): Promise<{
        courses: {
            id: number;
            code: string;
            title: string;
            departmentId: number;
        }[];
    } & {
        id: number;
        name: string;
    }>;
    update(id: number, name: string): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
