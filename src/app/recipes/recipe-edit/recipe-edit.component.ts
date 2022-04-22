import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validator, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  editMode = false;
  id: number;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.editMode = params['id'] != null
      this.initForm()
    })
  }
  onAddIngradient() {
    (this.recipeForm.get('ingradients') as FormArray).push(
      new FormGroup({
        'name ': new FormControl(null),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }
  deleteIngradient(index: number): void {
    (this.recipeForm.get('ingradients') as FormArray).removeAt(index)
  }
  onCancel() {
    this.router.navigate(['../'], {
      relativeTo: this.route
    })
  }
  onSubmit(): void {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value)
    } else {
      this.recipeService.addRecipe(this.recipeForm.value)
    }
    this.onCancel()
  }
  getControls() {
    console.log((this.recipeForm.get('ingradients') as FormArray).controls);

    return (this.recipeForm.get('ingradients') as FormArray).controls;
  }
  private initForm(): void {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngradient = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeByID(this.id)
      recipeName = recipe.name,
        recipeImagePath = recipe.imagePath,
        recipeDescription = recipe.description
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngradient.push(
            new FormGroup(
              {
                'name': new FormControl(ingredient.name, Validators.required),
                'amount': new FormControl(ingredient.amount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
              }
            )
          )
        }

      }


    }
    this.recipeForm = new FormGroup(
      {
        'name': new FormControl(recipeName, Validators.required),
        'imagePath': new FormControl(recipeImagePath, Validators.required),
        'description': new FormControl(recipeDescription, Validators.required),
        'ingradients': recipeIngradient
      }
    )
  }

}
