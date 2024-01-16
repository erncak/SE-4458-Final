import { ExcelService } from './excel.service';
import { DatabaseService } from './database.service';
export declare class UploadController {
    private readonly excelService;
    private readonly databaseService;
    constructor(excelService: ExcelService, databaseService: DatabaseService);
}
