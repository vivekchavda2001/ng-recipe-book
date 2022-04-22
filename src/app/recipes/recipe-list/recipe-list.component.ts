import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recepie } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recepies: Recepie[] = [];
  constructor(private recipeService: RecipeService) { }
  ngOnInit(): void {
    this.recepies = this.recipeService.getRecipe()
  }

}
