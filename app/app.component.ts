import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
// export class AppComponent {
//     persons = [
//         { name: 'gela', lastname: 'bendeliani', id:'1' },
//         { name: 'taso', lastname: 'gegenava', id:'2' },
//         { name: 'guja', lastname: 'gegenava', id:'3' },
//         { name: 'gela', lastname: 'bendeliani', id:'4' }
//     ];
// }
export class AppComponent {
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    addHero(newHero: string) {
        if (newHero) {
            this.heroes.push(newHero);
        }
    }
}
