import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recepie } from "../recipes/recipe.model";
Recepie
@Injectable({
    providedIn: 'root'
})
export class dataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {

    }
    storeRecipes() {
        const recipe = this.recipeService.getRecipe()
        this.http.put('https://ng-recipe-book-72e6f-default-rtdb.asia-southeast1.firebasedatabase.app/recipe.json', recipe).subscribe(data => {
            console.log(data);

        })
    }
    fetchRecipes() {

        this.http.get<Recepie[]>('https://ng-recipe-book-72e6f-default-rtdb.asia-southeast1.firebasedatabase.app/recipe.json').subscribe(recepies => {

            this.recipeService.setRecipes(recepies)
        })
    }
}