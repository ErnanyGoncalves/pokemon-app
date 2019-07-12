import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  component: string = 'pokemon-data';

  manageComponent(component: string) {
    this.component = component;
  }

}
