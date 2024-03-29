import { ForfaitsService } from './forfaits.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule} from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms'; 
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from '@angular/material/chips';


import { AppComponent } from './app.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { NavigationComponent } from './navigation/navigation.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';
// import { FormulaireForfaitComponent, CustomSnackBarComponent } from './formulaire-forfait/formulaire-forfait.component';
import { FormulaireForfaitComponent} from './formulaire-forfait/formulaire-forfait.component';
import { FormulaireAvisComponent } from './formulaire-avis/formulaire-avis.component';
import { PrixComponent } from './prix/prix.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { PremiumPipe } from './premium.pipe';
import { EtablissementPipe } from './etablissement.pipe';
import { TableauForfaitsComponent } from './tableau-forfaits/tableau-forfaits.component';
import { EnteteComponent } from './entete/entete.component';
import { ListeMiniForfaitsComponent } from './liste-mini-forfaits/liste-mini-forfaits.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ListeForfaitsCompletsComponent } from './liste-forfaits-complets/liste-forfaits-complets.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { ChipsComponent } from './chips/chips.component';
import { ForfaitEtablissementComponent } from './forfait-etablissement/forfait-etablissement.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesPipe } from './categories.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Graphique1Component } from './graphique1/graphique1.component';

import { NgChartsModule } from 'ng2-charts';
import { ClientChartComponent } from './client-chart/client-chart.component';
import { Graphique2Component } from './graphique2/graphique2.component';






@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    StarRatingComponent,
    NavigationComponent,
    FormulaireForfaitComponent,
    FormulaireAvisComponent,
    PrixComponent,
    FormulaireRechercheComponent,
    FormulaireContactComponent,
    // CustomSnackBarComponent,
    PremiumPipe,
    EtablissementPipe,
    TableauForfaitsComponent,
    EnteteComponent,
    ListeMiniForfaitsComponent,
    RechercheComponent,
    ListeForfaitsCompletsComponent,
    AProposComponent,
    PiedDePageComponent,
    ChipsComponent,
    ForfaitEtablissementComponent,
    CategoriesComponent,
    CategoriesPipe,
    PageNotFoundComponent,
    Graphique1Component,
    ClientChartComponent,
    Graphique2Component,


 
   
    



 
  ],
  // entryComponents: [CustomSnackBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatChipsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    NgChartsModule,

 
     
  
    
    
  
  ],
  providers: [ForfaitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
