import { Forfait } from  "./forfait";

export const FORFAITS: Forfait[] = [
    {
        nom: 'Forfait de voyage',
        description: 'Description du forfait de voyage à ajouter',
        code: 'f0001',
        categories: [
            'Hebergement', 'Détente'
        ],
        etablissement: {
            nomEtablissement: 'Établissement X',
            coordonnees: [
                '10 Blvd XXXX', 'Laval', '514-730-8206', 'josaintus@josaintus.com','www.josaintus.com'
            ]
     
        },

        dateDebut: '2022-10-18',
        dateFin: '2022-10-21',
        prix: 100,

        avis: [
            {

                note: 8,
                commentaires: 'Un bon forfait'
           }

        ]

        
    
    }

    
    


]

