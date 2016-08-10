// angular browser
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// aplication module
//import { AppModule } from './app.module';
//platformBrowserDynamic().bootstrapModule(AppModule);
// CODE BY CODESCHOOL
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Ultra Racing';
        this.carParts = [{
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
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n  <ul>\n    <li *ngFor=\"let carPart of carParts\">\n      <h2>{{carPart.name}}</h2>\n      <p>{{carPart.description}}</p>\n      <p *ngIf=\"carPart.inStock > 0\">{{carPart.inStock}}</p>\n      <p *ngIf=\"carPart.inStock === 0\">Out of stock</p>\n    </li>\n  </ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=main.js.map