import { departmentsService } from './departments.service';
export declare class departmentsController {
    private readonly service;
    constructor(service: departmentsService);
    create(body: {
        name: string;
    }): Promise<{
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
    update(id: number, body: {
        name: string;
    }): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
