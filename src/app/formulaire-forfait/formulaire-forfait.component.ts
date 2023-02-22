// import { compileComponentFromMetadata } from '@angular/compiler';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';


import { Forfait } from '../forfait';
import { Input } from '@angular/core';
import { Recherche } from '../recherche';
import { ForfaitsService } from '../forfaits.service';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCheckboxChange } from '@angular/material/checkbox';


@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})

export class FormulaireForfaitComponent implements OnInit {

// @Output() forfaitAjoute = new EventEmitter();

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

      // @Input() recherche!: Recherche;
      
      
      // courriel = new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
      
      errorMessage: string | undefined;
    
      
        constructor(private forfaitService: ForfaitsService, 
          private _snackBar: MatSnackBar, 
          public dialogRef: MatDialogRef<FormulaireForfaitComponent>,
          @Inject(MAT_DIALOG_DATA) public data: Forfait) { 
            if(data) {
              this.forfait = data;
            }

            
          }

        ngOnInit(): void {
        }
  
 
 

        addForfait(forfaitFormAjout: NgForm){
          console.log("Tester ajout:", forfaitFormAjout.value)
          if(forfaitFormAjout.valid){
            this.forfaitService.addForfait(this.forfait).subscribe(
            
              _ => {
                forfaitFormAjout.resetForm();
                this.dialogRef.close('Forfait ajouté avec succès !');
                // this.forfaitAjoute.emit();
                // this.getForfaits();
                // this._snackBar.open("Forfait enregistré avec succès!", undefined, {
                //   duration: 2000
                //   });
              }
              ,
              // (err) => {
              //   console.log("Impossible d'ajouter un forfait", + err);
              // }
              error =>{
                console.error("erreur provoquée par le service et interceptée par le formulaire");
                console.error(error);
                this.errorMessage='Une erreur s\'est produite lors de l\'ajout du forfait'
              }
            );
          }
      
        }

        updateForfait(forfaitFormAjout: NgForm){
          console.log("Tester Modification:", forfaitFormAjout.value)
          if(forfaitFormAjout.valid){
            this.forfaitService.updateForfait(this.forfait).subscribe(
              _=> {
                forfaitFormAjout.reset();
                this.dialogRef.close('Forfait modifié avec succès !');
              }
            );
          }


        }

        annuler() {
          this.dialogRef.close('Opération annulée');
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