import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCustomerDto): Promise<{
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        id: number;
    }>;
    findAll(): Promise<{
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
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
