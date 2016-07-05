import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    persons = [
        { name: 'gela', lastname: 'bendeliani', id:'1' },
        { name: 'taso', lastname: 'gegenava', id:'2' },
        { name: 'guja', lastname: 'mesxi', id:'3' },
        { name: 'kekela', lastname: 'pantani', id:'4' },
    ];
    title = 'test angular 2 title'

}