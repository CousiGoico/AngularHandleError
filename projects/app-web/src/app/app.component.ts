import { Component } from '@angular/core';
import { Exception } from '@microsoft/applicationinsights-web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-web';

  onClick(): void {
    throw new Error("Exception from AngularHandleError");
  }
}
