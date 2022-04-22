import { Injectable } from "@angular/core";
import { Subject } from "rxjs"
import { Ingredient } from "../shared/ingredient.model";
import { Recepie } from "./recipe.model";
import { ShopingListService } from "../shoping-list/shopingList.service";
@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    selectedRecipe = new Subject<Recepie>()
    // private recepies: Recepie[] = [
    //     new Recepie('A Test Recepie',
    //         'This is a simply Test',
    //         'https://www.tasteofhome.com/wp-content/uploads/2017/10/Tuscan-Chicken_exps39402_SD1785600D22_RMS.jpg', [
    //         new Ingredient('Meat', 2)
    //     ]),
    //     new Recepie('Tomato Soupe',
    //         'This is a simply Test',
    //         'https://cookieandkate.com/images/2019/04/classic-healthy-tomato-soup-recipe-1.jpg',
    //         [
    //             new Ingredient('Meat', 2)
    //         ]),
    //     new Recepie('Veg Burger',
    //         'This is a simply Test',
    //         'https://www.blondelish.com/wp-content/uploads/2019/02/Easy-Veggie-Burger-Recipe-Vegan-Healthy-3-819x1024.jpg', [
    //         new Ingredient('Meat', 2)
    //     ]),
    //     new Recepie('Tomato Soupe',
    //         'This is a simply Test',
    //         'https://jfwonline.com/wp-content/uploads/2016/11/Plain-dosa-JFW-Article.jpg', [
    //         new Ingredient('Meat', 2),
    //         new Ingredient('Butter', 10)
    //     ]),
    //     new Recepie('Tomato Soupe',
    //         'This is a simply Test',
    //         'https://www.corriecooks.com/wp-content/uploads/2018/08/Instant-Pot-French-Fries.jpg', [
    //         new Ingredient('Meat', 2)
    //     ])
    // ];
    private recepies: Recepie[] = []
    constructor(private shopingList: ShopingListService) { }
    getRecipe() {
        return this.recepies;
    }
    addIngradient(ingredient: Ingredient[]) {
        this.shopingList.addIngradients(ingredient)
    }
    getRecipeByID(index: number) {
        return this.recepies.slice()[index];
    }
    addRecipe(recipe: Recepie) {
        this.recepies.push(recipe);
    }
    updateRecipe(index: number, recipe: Recepie) {
        this.recepies[index] = recipe;
    }
    deleteRecipe(index: number) {
        this.recepies.splice(index, 1)
    }
    setRecipes(recipes: Recepie[]) {
        this.recepies = recipes
    }


}