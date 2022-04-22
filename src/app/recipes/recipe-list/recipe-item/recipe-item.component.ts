import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recepie } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recepie;
  @Input() index: number;
  ngOnInit(): void {
  }


}
