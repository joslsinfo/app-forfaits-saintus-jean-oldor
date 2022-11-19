
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { AppRoutingModule } from './app-routing.module';

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
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { FormulaireAvisComponent } from './formulaire-avis/formulaire-avis.component';
import { PrixComponent } from './prix/prix.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';


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
    FormulaireRechercheComponent

  

 
  ],
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
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
