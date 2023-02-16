import { FormulaireForfaitComponent } from './../formulaire-forfait/formulaire-forfait.component';
import { ForfaitsService } from './../forfaits.service';
import { FORFAITS } from './../mock-forfaits';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Forfait } from '../forfait';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-tableau-forfaits',
  templateUrl: './tableau-forfaits.component.html',
  styleUrls: ['./tableau-forfaits.component.css']
})
export class TableauForfaitsComponent implements OnInit {

  // displayedColumns: string[] = ['nom', 'description', 'dateDebut', 'dateFin','prix', 'actions'];
  // displayedColumns: string[] = ['nom', 'description', 'dateDebut', 'dateFin','prix'];
  displayedColumns = ['nom', 'description', 'dateDebut', 'dateFin','prix', 'actions'];
  // dataSourceForfaits:  MatTableDataSource<Forfait> = new  MatTableDataSource (FORFAITS);
  dataSourceForfaits:  MatTableDataSource<Forfait> = new  MatTableDataSource;

  // newForfait: Forfait = {
  //   nom: '', description: '', dateDebut: '', dateFin: '', prix: 0,
  //   code: '',
  //   categories: [],
  //   etablissement: {
  //     nomEtablissement: '',
  //     coordonnees: {
  //       adresse: '',
  //       ville: '',
  //       telephone: '',
  //       courriel: '',
  //       siteWeb: '',

  //     }

  //   },
  //   avis: [{note: 0, commentaires: ''}],
  //   nouveauPrix: 0,
  //   premium: false,
  //   imageUrl: '',
  //   rating: 0,
  //   rabais: 0
  // };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tableForfait!: MatTable<Forfait>;

  ngAfterViewInit() {
    // this.dataSourceForfaits.paginator = this.paginator;
    // this.dataSourceForfaits.sort = this.sort;
  }
  errorMessage: string | undefined;

  constructor(private forfaitService: ForfaitsService, private _snackBar: MatSnackBar, public dialog: MatDialog){}

  ngOnInit(): void {
    this.getForfaits()
  }

  getForfaits(){
    this.forfaitService.getForfaits().subscribe(
      resultat => {
        console.log(resultat);
        this.dataSourceForfaits = new MatTableDataSource(resultat);
        this.dataSourceForfaits.paginator = this.paginator;
        this.dataSourceForfaits.sort = this.sort;
        this.tableForfait.renderRows();
        
      }
      ,
      error =>{
        console.error(error);
        this.errorMessage='Une erreur s\'est produite lors de la récupération des forfaits'
      }
    )
  }

  // addForfait(forfaitFormAjout: NgForm){
  //   if(forfaitFormAjout.valid){
  //     this.forfaitService.addForfait(this.newForfait).subscribe(
  //       _ => {
  //         forfaitFormAjout.resetForm();
  //         this.getForfaits();
  //       },
  //       error =>{
  //         console.error(error);
  //         this.errorMessage='Une erreur s\'est produite lors de l\'ajout du forfait'
  //       }
  //     );
  //   }
  // }

  openDialog(forfait?: Forfait) {
    console.log(forfait);
    const dialogRef = this.dialog.open(FormulaireForfaitComponent, {
    data: forfait,
    });
    
    dialogRef.afterClosed().subscribe(result => {
    console.log('Le dialog du formulaire de forfait a été fermé');
    this._snackBar.open(result, undefined, {
      duration : 2000
    });
    this.getForfaits();
    });
    }
   
  deleteForfait(id: number) { 
    this.forfaitService.deleteForfait(id).subscribe(
    _ => {
    this.getForfaits();
    this._snackBar.open("Forfait supprimé!", undefined, {
    duration: 2000
    });
    }
    ,
    error =>{
      console.error(error);
      this.errorMessage='Une erreur s\'est produite lors de la suppression d\'un forfait'
    }
    );
    }
  

  // constructor() {
  //   // Create 100 users
  //   // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

  //   // Assign the data to the data source for the table to render
  //   // this.dataSource = new MatTableDataSource(users);
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceForfaits.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceForfaits.paginator) {
      this.dataSourceForfaits.paginator.firstPage();
    }
  }


}


/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }