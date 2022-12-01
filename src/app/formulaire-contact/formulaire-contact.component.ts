import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface User {
  name: string;
}

interface Selection {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-formulaire-contact',
  templateUrl: './formulaire-contact.component.html',
  styleUrls: ['./formulaire-contact.component.css']
})
export class FormulaireContactComponent implements OnInit {


  prenom = new FormControl('', Validators.required);
  nom = new FormControl('', Validators.required);
  courriel = new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
  telephone = new FormControl('');
  preferencecourriel = new FormControl('');
  preferencetelephone = new FormControl('', [Validators.required, Validators.pattern("[7-9][0-9]{9}$/")]);
  motif1 = new FormControl('',Validators.required);
  motif2 = new FormControl('',Validators.required);
  motif3 = new FormControl('',Validators.required);
  message = new FormControl('', Validators.required);
  reponse = new FormControl('', Validators.required);
  selection = new FormControl('', Validators.required);
  chox1 = new FormControl('');
  choix2 = new FormControl('');
  choix3 = new FormControl('');
  toggleControl = new FormControl('', Validators.required);


  



// ========================Motif======================================

  myControl = new FormControl<string | User>('', Validators.required);
  options: User[] = [{name: 'Choix1'}, {name: 'Choix2'}, {name: 'Choix3'}];
  filteredOptions!: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  


  // =================Select========================================
  selections: Selection[] = [
    {value: 'internet', viewValue: 'Internet'},
    {value: 'television', viewValue: 'Télévision'},
    {value: 'journal', viewValue: 'Journal'},
  ];

  // constructor() { }

  // ngOnInit(): void {
  // }

}
