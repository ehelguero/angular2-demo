// angular browser
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// aplication module
//import { AppModule } from './app.module';

//platformBrowserDynamic().bootstrapModule(AppModule);


// CODE BY CODESCHOOL
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <ul>
    <li *ngFor="let carPart of carParts">
      <h2>{{carPart.name}}</h2>
      <p>{{carPart.description}}</p>
      <p *ngIf="carPart.inStock > 0">{{carPart.inStock}}</p>
      <p *ngIf="carPart.inStock === 0">Out of stock</p>
    </li>
  </ul>`
})

class AppComponent {
  title = 'Ultra Racing';
  carParts = [{
    "id": 1,
    "name": "Super Tires",
    "description": "These tires are the very best",
    "inStock": 5
  },
  {
    "id": 2,
    "name": "Super Bumpies",
    "description": "These bumpies are great",
    "inStock": 0
  },
  {
    "id": 3,
    "name": "Sup",
    "description": "These bum",
    "inStock": 10
  }];
}

bootstrap(AppComponent)
