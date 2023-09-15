import { ErrorHandler, Injectable } from '@angular/core';
import { InsightsService } from '../Insights/insights.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService implements ErrorHandler {

  insightsService: InsightsService;

  constructor(insightService: InsightsService) { 
    this.insightsService = insightService;
  }

  handleError(error:Error) {
       console.error(error.message);
       alert(error.message);
       this.insightsService.logException(error);
   }
}
