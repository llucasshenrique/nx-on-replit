import { Injectable, Logger } from '@nestjs/common';
import { format } from 'date-fns';

@Injectable()
export class AppService {
  private readonly logger: Logger = new Logger(AppService.name);
  getData(): { message: string } {
    this.logger.log('Fetching data...');
    return {
      message: `Hello from the backend! At ${format(
        new Date(),
        'yyyy-MM-dd HH:mm:ss'
      )}`,
    };
  }
}
