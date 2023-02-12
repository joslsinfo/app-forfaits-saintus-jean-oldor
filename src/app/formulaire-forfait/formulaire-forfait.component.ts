// import { compileComponentFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { Forfait } from '../forfait';
import { Input } from '@angular/core';
import { Recherche } from '../recherche';
import { ForfaitsService } from '../forfaits.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})

export class FormulaireForfaitComponent implements OnInit {


           newForfait: Forfait = {
        
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
        
          dateDebut: '2023-02-01',
          dateFin: '2023-02-08',
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

      // @Input() recherche!: Recherche;
      
      
      // courriel = new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
      
      errorMessage: string | undefined;
      
        constructor(private forfaitService: ForfaitsService, private _snackBar: MatSnackBar, private snackBar: MatSnackBar) { }

        ngOnInit(): void {
        }
  
        addForfait(forfaitFormAjout: NgForm){
          if(forfaitFormAjout.valid){
            this.forfaitService.addForfait(this.newForfait).subscribe(
            
              _ => {
                forfaitFormAjout.resetForm();
                // this.getForfaits();
                this._snackBar.open("Forfait enregistré avec succès!", undefined, {
                  duration: 2000
                  });
              },
              error =>{
                console.error(error);
                this.errorMessage='Une erreur s\'est produite lors de l\'ajout du forfait'
              }
            );
          }
      
        }

     


      // ===================================================================================
      
        // openSnackBar(message:string, action:any){
        //  let snackBarRef = this.snackBar.open(message, action, {duration: 5000});
        //  snackBarRef.afterDismissed().subscribe(() => {
        //   console.log('The snackbar was dismissed');
        //  });
      
        //  snackBarRef.onAction().subscribe(() =>{
        //   console.log('The snackbar action was triggered!');
        //  })
         
        // }
      
      // openCustomSnackBar(){
      //   this.snackBar.openFromComponent(CustomSnackBarComponent, {duration: 5000})
    
      //  }
       
    
      

}


// @Component({
//   selector: 'custom-snackbar',
//   template: `<span style='color: orange'> L\ajout dans la base de données sera programmé après le congé des fêtes!</span>`

// })

// export class CustomSnackBarComponent{}