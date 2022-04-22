import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopingListService } from '../shopingList.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @ViewChild('f') ingForm: NgForm;
  constructor(private shopingList: ShopingListService) { }
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;
  ngOnInit(): void {
    this.subscription = this.shopingList.startedEditing.subscribe(index => {
      this.editMode = true;
      this.editItemIndex = index;
      this.editItem = this.shopingList.getIngradient(index);
      this.ingForm.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      })
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  onIngradientAdd(form: NgForm): void {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shopingList.updateIngradients(this.editItemIndex, newIngredient)
    } else {
      this.shopingList.pushIngredient(newIngredient)
    }
    this.editMode = false;
    form.reset()
  }
  onClear(): void {
    this.ingForm.reset()
    this.editMode = false;
  }
  onDelete(): void {
    this.shopingList.deleteIngradient(this.editItemIndex)
    this.onClear()
  }

}
