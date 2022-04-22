import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { dataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: dataStorageService) { }
  ngOnInit(): void {
  }
  saveRecipe() {
    this.dataService.storeRecipes()
  }
  fetchData() {
    this.dataService.fetchRecipes()
  }

}
