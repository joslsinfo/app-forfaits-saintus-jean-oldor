import { Forfait } from  "./forfait";

export const FORFAITS: Forfait[] = [
    {
        nom: 'Forfaits mobile Smart phone',
        description: 'Iphone 13 Pro',
        code: 'f0001',
        categories: [
           
        ],
        etablissement: {
            nomEtablissement: 'Vidéotron',
            coordonnees: [
                'Centre Laval'
            ]
     
        },

        dateDebut: '2022-10-18',
        dateFin: '2024-10-21',
        prix: 40.75,

        avis: [
            {

                note: 10,
                commentaires: 'Un très bon forfait'
           }

        ]

        
    
    },
    {
        nom: 'Forfaits vacances',
        description: 'Description des forfaits vacances à ajouter',
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

                note: 10,
                commentaires: 'Un très bon forfait'
           }

        ]

        
    
    }

 
]

