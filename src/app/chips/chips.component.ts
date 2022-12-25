import { OnInit } from '@angular/core';


import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  categorieCtrl = new FormControl('');
  filteredCategories: Observable<string[]>;
  categories: string[] = ['Détente'];
  allCategories: string[] = ['Détente', 'Hébergement', 'Restaurant'];

  @ViewChild('categorieInput') categorieInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredCategories = this.categorieCtrl.valueChanges.pipe(
      startWith(null),
      map((categorie: string | null) => (categorie ? this._filter(categorie) : this.allCategories.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our categorie
    if (value) {
      this.categories.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.categorieCtrl.setValue(null);
  }

  remove(categorie: string): void {
    const index = this.categories.indexOf(categorie);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.viewValue);
    this.categorieInput.nativeElement.value = '';
    this.categorieCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(categorie => categorie.toLowerCase().includes(filterValue));
  }
   // constructor() { }


  

  ngOnInit(): void {
  }

}
