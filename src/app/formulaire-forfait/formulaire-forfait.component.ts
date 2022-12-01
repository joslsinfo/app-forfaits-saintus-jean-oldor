import { compileComponentFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Forfait } from '../forfait';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
export class FormulaireForfaitComponent implements OnInit {


   forfait: Forfait = {

    nom: '',
    description: '',
    code: '',
    categories: [],
    etablissement: {
        nomEtablissement: '',
        coordonnees: 
            {
                adresse: '',
                ville: '',
                telephone: '',
                courriel: '',
                siteWeb: ''

            }
   },

  dateDebut: '',
  dateFin: '',
  prix: 0,
  avis: [
      {

          note: 0,
          commentaires: ''
     }

  ],
  nouveauPrix: 0,
  premium: false,
  imageUrl: '',
  rating: 0,
  rabais: 0

  

};

courriel = new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);


  constructor(private snackBar: MatSnackBar) { }

  // openSnackBar(message:string, action:any){
  //  let snackBarRef = this.snackBar.open(message, action, {duration: 5000});
  //  snackBarRef.afterDismissed().subscribe(() => {
  //   console.log('The snackbar was dismissed');
  //  });

  //  snackBarRef.onAction().subscribe(() =>{
  //   console.log('The snackbar action was triggered!');
  //  })
   
  // }


  openCustomSnackBar(){
    this.snackBar.openFromComponent(CustomSnackBarComponent, {duration: 5000})

   }
   

  ngOnInit(): void {
  }



}


@Component({
  selector: 'custom-snackbar',
  template: `<span style='color: orange'> L\ajout dans la base de données sera programmé après le congé des fêtes!'</span>`

})
export class CustomSnackBarComponent{}