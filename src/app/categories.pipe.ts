import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {

 
  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter(forfait => forfait.categories.includes('Restaurant' || 'Détente'));
    }


}
