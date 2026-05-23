import { CoursesService } from './courses.service';
export declare class CoursesController {
    private readonly service;
    constructor(service: CoursesService);
    create(body: {
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
    detail(id: number): Promise<{
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
    addTags(id: number, body: {
        tags: string[];
    }): Promise<{
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
