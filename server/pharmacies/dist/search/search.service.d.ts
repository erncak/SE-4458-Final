import { DatabaseService } from '../database.service';
export declare class SearchService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    searchMedicine(query: string): Promise<any[]>;
}
