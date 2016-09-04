import { Component, Input } from '@angular/core';

// import jq from 'https://ajax.googleapis.com/ajax/libs/spf/2.4.0/spf.js'


@Component({
  selector: 'angular-component-1',
  template: `
    <style>
    {{blend}}
    </style>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/spf/2.4.0/spf.js"></script> -->
    <div> nandesukakore</div>
    <input type='text' value='nandesuka' />
    <button onclick="alert(this.spf)">in component jquery button</button>

    <button class={{props.class_name}} onclick='alert("nansuka")'>{{btnMessage}}</button>
    <button class='max blend' [ngStyle]="blend" (click)="ose()">{{btnMessage}} {{blend}}</button>
    <span>now class is {{props.class_name}}</span>
    <li *ngFor="let char of props.arr" >
      {{char}}
    </li>
  `,
  styles: [`
    .max {
      background-color:#aef;
      font-size:25px;
    }
    .fire {
      margin:40px;
      background-color:#2aa;
      font-size:40px;
    }
    .water {
      border-radius:8px;
    }
  
  `]
})
class AngularComponent1 {
  @Input() props: Object;
  @Input() ose: Function;
  @Input() blend: string;
  btnMessage = 'ahhaahaa';
  // constructor() {
  //   this.spf = new spf();
  // }
}
// bootstrap(AngularComponent1);


@Component({
    selector: 'my-app',
    template: `
      <h1>My First Angular 2 App</h1>
      <angular-component-1 [props]="props" [ose]="clickk" [blend]="blendStyle" ></angular-component-1>
      <button onclick="alert(this.spf)">jquery button</button>
    `,
    directives: [AngularComponent1]
})
export class AppComponent {
  props = {
    class_name :  'fire water',
    arr: ['nan', 'desu', 'ka']
  };
  blendStyle = {
    'font-size': '80px',
    'margin-top': '180px'
  };
  clickk = () => {
    alert('clickk is clicked!');
  }
}





