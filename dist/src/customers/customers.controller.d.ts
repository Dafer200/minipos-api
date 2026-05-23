import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    list(user: any): Promise<{
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        id: number;
    }[]>;
    create(dto: CreateCustomerDto): Promise<{
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        id: number;
    }>;
    findOne(user: any, id: number): Promise<{
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        id: number;
    }>;
    update(id: number, dto: UpdateCustomerDto): Promise<{
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<void>;
}
