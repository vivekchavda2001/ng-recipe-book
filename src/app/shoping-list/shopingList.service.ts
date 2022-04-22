import { Subject } from "rxjs";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model"


export class ShopingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 7),
    ]
    startedEditing = new Subject<number>();
    getIngredients() {
        return this.ingredients
    }
    getIngradient(index: number) {
        return this.ingredients.slice()[index];
    }
    pushIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient)
    }
    addIngradients(Ingredient: Ingredient[]) {
        this.ingredients.push(...Ingredient)
    }
    updateIngradients(index: number, newIngredients: Ingredient) {
        this.ingredients[index] = newIngredients;
    }
    deleteIngradient(index) {
        this.ingredients.splice(index, 1);
    }

}     