import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: `Hello from the backend! At ${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}` };
  }
}
