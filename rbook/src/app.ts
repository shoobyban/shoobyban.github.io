//our root app component
import {Component,AfterContentInit,Inject} from 'angular2/core';
import {RecipeService} from './services/RecipeService';
import 'rxjs/add/operator/map';

import {
@Component({
    selector: 'my-app',
    providers: [RecipeService],
    templateUrl: `src/app.component.html`,
    directives: []
})
export class App implements AfterContentInit {
    Framework7:myapp;
    items = [ {entityType:'label',entityValue:'help'} ];
    bodytag = 'Loading...';
    currentRecipe = false;
    currentDisplay = 'none';
    selectedItem = false;

    constructor(@Inject(RecipeService) private recipeService: RecipeService) {
        this.name = 'Recipe Book';
        var recipes = [];
        if (recipes.length === undefined || recipes.length === 0) {
            recipeService.getAllRecipes()
            .map(r => r.json())
            .subscribe(recipes => {
                this.items = recipes.list;
            });
        } else {
            this.items = recipes.list;
        }
    }
    
    click(selected) {
        this.currentRecipe = selected;
        var mainview = document.getElementById('mainview');
        var display = mainview.currentStyle ? mainview.currentStyle.display :
            getComputedStyle(mainview, null).display;
        var body = '<style>.h { min-height: 50px; background: url("data:image/png;base64,#image#") no-repeat; background-position: 50% 50%; background-size: 100% auto; color: white; font: 36px Arial Rounded MT Bold; padding: 25px; text-align: center; text-shadow: 2px 2px black; vertical-align: middle; box-shadow: 5px 5px 5px gray; border: 1px solid gray; margin-top: 20px; } .b { font: 20px Georgia, Times; text-align: justify; white-space: pre-wrap; margin-top: 10px; } .hinner { -webkit-text-stroke-color: black; -webkit-text-stroke-width: 1px; display:box; -webkit-box-orient:horizontal; -webkit-box-pack:center; -webkit-box-align:center; vertical-align:middle; }</style><a href="#home" class="back">Back</a><div class="h"><div style="">#title#</div></div><div class="b">#body#</div>';
        $scope = $rootScope.$new();
        $scope.selectedItem = selected;
        var linkingFunction = $compile(body);
        var elem = linkingFunction($scope);
        var myElement = angular.element( document.querySelector( '#mainview' ) );        
        if (display == 'none') {
            var mainViewObj = this.myApp.addView('.view-left', {domCache: true});
            this.bodyTag = b;
        } else {
            myElement.html(elem);
        }
    }

    ngAfterContentInit() {
        // contentChild is updated after the content has been checked
        console.log('AfterContentInit: ');
        this.myApp = new Framework7({
            router: true,
            material: true
            // ... other parameters
        });

        ElementQueries.listen();

        var mainView = document.getElementById('mainview');
        this.currentDisplay = mainView.currentStyle ? mainView.currentStyle.display :
            getComputedStyle(mainView, null).display;
        new ResizeSensor(mainView, function() {
            console.log('change handing');
            console.log(this.currentRecipe);
            var display = mainView.currentStyle ? mainView.currentStyle.display :
                getComputedStyle(mainView, null).display;
            if (this.currentRecipe) {
                console.log('current recipe');
                if (this.currentDisplay != display) {
                    console.log('... different!');
                    var display = mainView.currentStyle ? mainView.currentStyle.display :
                        getComputedStyle(mainView, null).display;
                    var body = '<div class="recipecontent">' + this.currentRecipe.entryValue.body + '</div>';
                    if (display == 'none') {
                        var mainViewObj = this.myApp.addView('.view-left', {domCache: true});
                        this.bodytag = body;
                        mainViewObj.router.load({pageName: 'detail'});
                    } else {
                        document.getElementById('mainview').innerHTML = body;
                    }
                    if (display == 'block') {
                        var mainViewObj = this.myApp.addView('.view-left', {domCache: true});
                        this.bodytag = body;
                        mainViewObj.router.back();
                    }
                }
            }
            console.log('Changed to ' + mainView.clientWidth);
        });
    }

}