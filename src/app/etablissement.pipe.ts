import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'etablissement'
})
export class EtablissementPipe implements PipeTransform {



  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter(forfait => forfait.etablissement.nomEtablissement === 'Communication plus');
    }

}
