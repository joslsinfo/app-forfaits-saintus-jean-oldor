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

  {path: 'liste-mini-forfaits', component: ListeMiniForfaitsComponent},
  {path: 'liste-forfaits-complets', component: ListeForfaitsCompletsComponent},
  {path: 'liste-tous-les-forfaits', component: ListeForfaitsComponent},
  {path: 'tableau-forfaits', component: TableauForfaitsComponent},
  {path: 'a-propos', component: AProposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
