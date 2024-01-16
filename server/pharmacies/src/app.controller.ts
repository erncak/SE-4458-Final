import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('prescription')
  async createPrescription(@Body() prescriptionData: any) {
    // Handle the prescription data, e.g., send it to Azure Queue
    // You can use any service or library to interact with Azure services
    console.log('Prescription Data:', prescriptionData);
    // Call a service or library to send data to Azure
    // e.g., azureService.sendPrescriptionToAzureQueue(prescriptionData);
    return 'Prescription received successfully.';
  }
}
