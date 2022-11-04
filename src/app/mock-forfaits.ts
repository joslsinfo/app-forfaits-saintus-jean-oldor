import { UrlHandlingStrategy } from "@angular/router";
import { Forfait } from  "./forfait";

export const FORFAITS: Forfait[] = [
    {
        nom: 'Forfaits Smart phone',
        description: 'Iphone 13 Pro',
        code: 'f0001',
        categories: [
           
        ],
        etablissement: {
            nomEtablissement: 'Cummunication plus',
            coordonnees: [
                'Centre Laval'
            ]
     
        },

        dateDebut: '2022-10-18',
        dateFin: '2024-10-21',
        prix: 960,

        avis: [
            {

                note: 10,
                commentaires: 'Un très bon forfait'
           }

        ],
        nouveauPrix: 860,
        premium: false,
        urlImage: "../assets/images/iphone.jpg"

        
    
    },
    {
        nom: 'Forfaits massages',
        description: 'Massage pour un couple',
        code: 'f0002',
        categories: [
            'Détente'
        ],
        etablissement: {
            nomEtablissement: 'JOSLS Massage',
            coordonnees: [
                '15 rue Edith ', 'Laval'
            ]
     
        },

        dateDebut: '2022-11-02',
        dateFin: '2022-12-31',
        prix: 400,

        avis: [
            {

                note: 10,
                commentaires: 'Un très bon forfait pour de bons massages'
           }

        ],
        nouveauPrix: 300,
        premium: true,
        urlImage: "../assets/images/iphone.jpg"

        
    
    },
    {
        nom: 'Forfaits massages',
        description: 'Massages pour une personne',
        code: 'f0003',
        categories: [
           'Détente'
        ],
        etablissement: {
            nomEtablissement: 'JOSLS Massage',
            coordonnees: [
                '15 rue Edith ', 'Laval'
            ]
     
        },

        dateDebut: '2022-11-02',
        dateFin: '2022-12-31',
        prix: 200,

        avis: [
            {

                note: 9,
                commentaires: 'Un bon forfait'
           }

        ],
        nouveauPrix: 150,
        premium: true,
        urlImage: "../assets/images/iphone.jpg"

        
    
    }

 
]

