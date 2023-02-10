import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { ForfaitEtablissementComponent } from './forfait-etablissement/forfait-etablissement.component';
import { RechercheComponent } from './recherche/recherche.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { TableauForfaitsComponent } from './tableau-forfaits/tableau-forfaits.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeMiniForfaitsComponent } from './liste-mini-forfaits/liste-mini-forfaits.component';
import { ListeForfaitsCompletsComponent } from './liste-forfaits-complets/liste-forfaits-complets.component';

const routes: Routes = [

  { path: '', redirectTo: 'liste-des-forfaits', pathMatch: 'full' },
  // { path: 'liste-de-tous-les-forfaits', component: ListeForfaitsCompletsComponent },
  { path: 'liste-des-forfaits', component: ListeForfaitsComponent },
  { path: 'etablissement', component: ForfaitEtablissementComponent },
  { path: 'categorie', component: CategoriesComponent },
  { path: 'gestion-forfaits', component: TableauForfaitsComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: '**', component: PageNotFoundComponent },
  // { path: 'liste-forfaits-complets', component: ListeForfaitsCompletsComponent },
  // { path: 'liste-de-tous-les-forfaits', component: ListeForfaitsComponent },
  // { path: 'recherche', component: RechercheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
