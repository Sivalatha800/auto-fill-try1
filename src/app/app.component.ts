import { Component, VERSION } from '@angular/core';
declare function greetings(name: any): any;
declare function test(): any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {
    // call the externaljs functions
    // greetings('rohol'); // with param
    test();
  }
}
