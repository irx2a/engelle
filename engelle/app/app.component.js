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
var core_1 = require('@angular/core');
// import jq from 'https://ajax.googleapis.com/ajax/libs/spf/2.4.0/spf.js'
var AngularComponent1 = (function () {
    function AngularComponent1() {
        this.btnMessage = 'ahhaahaa';
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AngularComponent1.prototype, "props", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], AngularComponent1.prototype, "ose", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularComponent1.prototype, "blend", void 0);
    AngularComponent1 = __decorate([
        core_1.Component({
            selector: 'angular-component-1',
            template: "\n    <style>\n    {{blend}}\n    </style>\n    <!-- <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js\"></script> -->\n    <!-- <script src=\"https://ajax.googleapis.com/ajax/libs/spf/2.4.0/spf.js\"></script> -->\n    <div> nandesukakore</div>\n    <input type='text' value='nandesuka' />\n    <button onclick=\"alert(this.spf)\">in component jquery button</button>\n\n    <button class={{props.class_name}} onclick='alert(\"nansuka\")'>{{btnMessage}}</button>\n    <button class='max blend' [ngStyle]=\"blend\" (click)=\"ose()\">{{btnMessage}} {{blend}}</button>\n    <span>now class is {{props.class_name}}</span>\n    <li *ngFor=\"let char of props.arr\" >\n      {{char}}\n    </li>\n  ",
            styles: ["\n    .max {\n      background-color:#aef;\n      font-size:25px;\n    }\n    .fire {\n      margin:40px;\n      background-color:#2aa;\n      font-size:40px;\n    }\n    .water {\n      border-radius:8px;\n    }\n  \n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AngularComponent1);
    return AngularComponent1;
}());
// bootstrap(AngularComponent1);
var AppComponent = (function () {
    function AppComponent() {
        this.props = {
            class_name: 'fire water',
            arr: ['nan', 'desu', 'ka']
        };
        this.blendStyle = {
            'font-size': '80px',
            'margin-top': '180px'
        };
        this.clickk = function () {
            alert('clickk is clicked!');
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <h1>My First Angular 2 App</h1>\n      <angular-component-1 [props]=\"props\" [ose]=\"clickk\" [blend]=\"blendStyle\" ></angular-component-1>\n      <button onclick=\"alert(this.spf)\">jquery button</button>\n    ",
            directives: [AngularComponent1]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map