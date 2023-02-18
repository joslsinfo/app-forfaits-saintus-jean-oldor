import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'etablissement'
})
export class EtablissementPipe implements PipeTransform {



  transform(forfaits: Forfait[], etablissement: string): Forfait[] {
    return forfaits.filter(forfait => forfait.etablissement.nomEtablissement === etablissement);
    }

}
