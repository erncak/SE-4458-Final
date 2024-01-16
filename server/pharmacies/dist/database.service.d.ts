import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as sql from 'mssql';
export declare class DatabaseService implements OnModuleInit, OnModuleDestroy {
    onModuleDestroy(): void;
    pool: sql.ConnectionPool;
    onModuleInit(): Promise<void>;
}
