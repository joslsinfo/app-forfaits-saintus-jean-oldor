import { Avis } from './avis';
import { Etablissement } from "./etablissement";

export interface Forfait {
    nom: string,
    description: string,
    code: string,
       
    categories: string[],

    etablissement: Etablissement,
    
    dateDebut: string,
    dateFin: string,
    prix: number,

    avis: Avis[]

   

}


