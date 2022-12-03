import { Avis } from './avis';
import { Etablissement } from "./etablissement";
import { Recherche } from './recherche';

export interface Forfait {
    nom: string;
    description: string;
    code: string;
       
    categories: string[];

    etablissement: Etablissement;
    
    dateDebut: string;
    dateFin: string;
    prix: number;

    avis: Avis[];
    nouveauPrix: number;
    premium: boolean;
    imageUrl: string;
    rating: number;
    rabais: number;

   
  

   

}


