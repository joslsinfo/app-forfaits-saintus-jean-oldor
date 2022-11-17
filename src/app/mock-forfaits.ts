
import { Forfait } from  "./forfait";

export const FORFAITS: Forfait[] = [
    {
        nom: 'Forfait Smart phone',
        description: 'Iphone 13 Pro',
        code: 'f0001',
        categories: [
           
        ],
        etablissement: {
            nomEtablissement: 'Cummunication plus',
            coordonnees: 
                {
                    adresse: 'Centre Laval',
                    ville: 'Laval',
                    telephone: '514-730-8206',
                    courriel: 'josaintus@gmail.com',
                    siteWeb: 'josaintus.com'

                }
            
     
        },

        dateDebut: '2022-10-18',
        dateFin: '2024-10-21',
        prix: 960,

        avis: [
            {

                note: 6,
                commentaires: 'Un bon forfait'
           }

        ],
        nouveauPrix: 860,
        premium: false,
        imageUrl: 'assets/img/iphoneresize.jpg',
        rating: 3.5,
     
        
    
    },

    {
        nom: 'Forfait massage',
        description: 'Massage pour un couple',
        code: 'f0002',
        categories: [
            'Détente', ' Hebergement'
        ],
        etablissement: {
            nomEtablissement: 'JOSLS Massage',
            coordonnees: 
                {
                    adresse: '33 rue Edith',
                    ville: 'Laval',
                    telephone: '514-730-8282',
                    courriel: 'josls@gmail.com',
                    siteWeb: 'joslsinfo.com'

                }
            
     
        },

        dateDebut: '2022-11-02',
        dateFin: '2022-12-31',
        prix: 400,

        avis: [
            {

                note: 10,
                commentaires: 'Un très bon forfait pour un bon massage'
           }

        ],
        nouveauPrix: 300,
        premium: true,
        imageUrl: 'assets/img/massage1resize.jpg',
        rating: 5,
      
        
    
    },

    {
        nom: 'Forfait massage',
        description: 'Massage pour une personne',
        code: 'f0003',
        categories: [
            'Détente', ' Restaurant'
        ],
        etablissement: {
            nomEtablissement: 'JOSLS Massage',
            coordonnees: 
                {
                    adresse: '33 rue Edith',
                    ville: 'Laval',
                    telephone: '514-730-8282',
                    courriel: 'josls@gmail.com',
                    siteWeb: 'joslsinfo.com'

                }
            
     
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
        imageUrl: 'assets/img/massage2resize.jpg',
        rating: 4,
     
        
    
    },

    {
        nom: 'Forfait massage',
        description: 'Massage pour Bébé',
        code: 'f0004',
        categories: [
            'Détente'
        ],
        etablissement: {
            nomEtablissement: 'JOSLS Massage',
            coordonnees: 
                {
                    adresse: '33 rue Edith',
                    ville: 'Laval',
                    telephone: '514-730-8282',
                    courriel: 'josls@gmail.com',
                    siteWeb: 'joslsinfo.com'

                }
            
     
        },

        dateDebut: '2022-11-02',
        dateFin: '2022-01-31',
        prix: 100,

        avis: [
            {

                note: 10,
                commentaires: 'J\'adore ce forfait pour Bébé'
           }

        ],
        nouveauPrix: 70,
        premium: true,
        imageUrl: 'assets/img/massage3resize.jpg',
        rating: 5,
      
        
    
    }
    

        

 
]

