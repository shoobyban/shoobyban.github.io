import {Component, View, Inject} from 'angular2/core';
import {Http} from 'angular2/http';

import {

    @Component({
        providers: [Http]
    })

    export class RecipeService {
      constructor(@Inject(Http) private http: Http) {
      }

      getAllRecipes(): any {
            return this.http.get('index.php?c=index');
      }
    }
}