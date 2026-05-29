import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCustomerDto): Promise<{
        id: number;
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
    }>;
    update(id: number, dto: UpdateCustomerDto): Promise<{
        id: number;
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
    }>;
    remove(id: number): Promise<void>;
}
