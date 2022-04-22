import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recepie } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recepie;
  id: number;
  constructor(private recipeService: RecipeService, private activeRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeByID(this.id);
    })

  }
  addIngredientToShopping() {
    this.recipeService.addIngradient(this.recipe.ingredients)
  }
  onEditRecipeSelect() {
    this.route.navigate(['edit'], { relativeTo: this.activeRoute })
  }
  onRecipeDelete() {
    this.recipeService.deleteRecipe(this.id)
  }
}
