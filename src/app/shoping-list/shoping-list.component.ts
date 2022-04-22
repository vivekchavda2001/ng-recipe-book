import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from './shopingList.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
  providers: []
})

export class ShopingListComponent implements OnInit {

  ingredients: Ingredient[] = []
  constructor(private shopingList: ShopingListService) { }
  ngOnInit(): void {
    this.ingredients = this.shopingList.getIngredients()
  }
  onEditItem(index: number): void {
    this.shopingList.startedEditing.next(index)
  }
}
