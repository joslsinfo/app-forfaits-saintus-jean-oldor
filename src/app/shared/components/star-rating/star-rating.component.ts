import { Component, Input, OnChanges} from '@angular/core';
import { Avis } from '../../../avis';
import { Etablissement } from '../../../etablissement';

import { Forfait } from '../../../forfait';



@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})

export class StarRatingComponent implements OnChanges {

  public starWidth?: number;

  public rating: number = 2;
  // @Input()
  @Input() forfait?: Forfait;
  @Input() avis?: Avis;
  @Input() etablissment?: Etablissement;

 
  // constructor() { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnChanges() {
    this.starWidth = this.forfait!.rating * 125 / 5 ; 
    console.log(this.starWidth);
  }

}
