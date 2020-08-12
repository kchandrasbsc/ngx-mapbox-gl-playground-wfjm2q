import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <mgl-map
    [style]="'mapbox://styles/mapbox/streets-v9'"
    [zoom]="[9]"
    [center]="[-74.50, 40]"
  ></mgl-map>
  `,
  styles: [`
    mgl-map {
      height: 100vh;
      width: 100vw;
    }
  `]
})
export class AppComponent {}
