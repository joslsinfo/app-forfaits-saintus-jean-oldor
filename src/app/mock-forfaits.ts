
import { Forfait } from  "./forfait";

export const FORFAITS: Forfait[] = [
    {
        nom: 'forfait Smart phone',
        description: 'Iphone 13 Pro',
        code: 'f0001',
        categories: [
         
           
        ],
        etablissement: {
            nomEtablissement: 'Communication plus',
            coordonnees: 
                {
                    adresse: 'centre laval',
                    ville: 'laval',
                    telephone: '514-730-8206',
                    courriel: 'josaintus@gmail.com',
                    siteWeb: 'www.josaintus.com'

                }
            
     
        },

        dateDebut: '2022-10-18',
        dateFin: '2024-10-21',
        prix: 960,
    

        avis: [
            {

                note: 6,
                commentaires: 'Un forfait qui demande de réfléchir avant d\'embarquer là-dedans.'
           }

        ],
        nouveauPrix: 1060,
        premium: false,
        imageUrl: 'assets/img/iphone300.jpg',
        rating: 3.5,
        rabais: 0,
       
     
        
    
    },

    {
        nom: 'Forfait massage par groupe',
        description: 'Massage par groupe',
        code: 'f0002',
        categories: [
            'Détente', ' Hébergement'
        ],
        etablissement: {
            nomEtablissement: 'JOSLS Massage',
            coordonnees: 
                {
                    adresse: '33 rue Edith',
                    ville: 'Laval',
                    telephone: '514-730-8282',
                    courriel: 'josls@gmail.com',
                    siteWeb: 'www.joslsinfo.com'

                }
            
     
        },

        dateDebut: '2022-11-02',
        dateFin: '2022-12-31',
        prix: 400,

        avis: [
            {

                note: 10,
                commentaires: 'Un très bon forfait pour un bon massage.'
           }

        ],
        nouveauPrix: 300,
        premium: true,
        imageUrl: 'assets/img/massage11300.jpg',
        rating: 5,
        rabais: 0,
      
        
    
    },
    {
        nom: 'Forfait massage par couple',
        description: 'Massage par couple',
        code: 'f0003',
        categories: [
            'Détente', ' Hébergement'
        ],
        etablissement: {
            nomEtablissement: 'JOSLS Massage',
            coordonnees: 
                {
                    adresse: '33 rue Edith',
                    ville: 'Laval',
                    telephone: '514-730-8282',
                    courriel: 'josls@gmail.com',
                    siteWeb: 'www.joslsinfo.com'

                }
            
     
        },

        dateDebut: '2022-11-02',
        dateFin: '2022-12-31',
        prix: 500,

        avis: [
            {

                note: 10,
                commentaires: 'Un très bon forfait pour un bon massage.'
           }

        ],
        nouveauPrix: 400,
        premium: true,
        imageUrl: 'assets/img/img-massage-couple300.jpg',
        rating: 5,
        rabais: 0,
      
        
    
    },

    {
        nom: 'Forfait massage pour une personne',
        description: 'Massage pour une personne',
        code: 'f0004',
        categories: [
            'Détente', 'Restaurant'
        ],
        etablissement: {
            nomEtablissement: 'JOSLS Massage',
            coordonnees: 
                {
                    adresse: '33 rue Edith',
                    ville: 'Laval',
                    telephone: '514-730-8282',
                    courriel: 'josls@gmail.com',
                    siteWeb: 'www.joslsinfo.com'

                }
            
     
        },

        dateDebut: '2022-11-02',
        dateFin: '2022-12-31',
        prix: 200,

        avis: [
            {

                note: 9,
                commentaires: 'Un bon forfait.'
           }

        ],
        nouveauPrix: 150,
        premium: true,
        imageUrl: 'assets/img/massage2300.jpg',
        rating: 4,
        rabais: 0,
     
        
    
    },

    {
        nom: 'Forfait massage pour Bébé',
        description: 'Massage pour Bébé',
        code: 'f0005',
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
                    siteWeb: 'www.joslsinfo.com'

                }
            
     
        },

        dateDebut: '2022-11-02',
        dateFin: '2023-01-31',
        prix: 100,

        avis: [
            {

                note: 10,
                commentaires: 'J\'adore ce forfait pour Bébé.'
           }

        ],
        nouveauPrix: 70,
        premium: true,
        imageUrl: 'assets/img/massage3300.jpg',
        rating: 5,
        rabais: 0,
      
        
    
    },
    {
        nom: 'Forfait yoga en plein air',
        description: 'Yoga en plein air',
        code: 'f0006',
        categories: [
            'Détente'
        ],
        etablissement: {
            nomEtablissement: 'JOSLS Yoga',
            coordonnees: 
                {
                    adresse: '33 rue Edith',
                    ville: 'Laval',
                    telephone: '514-730-8282',
                    courriel: 'josls@gmail.com',
                    siteWeb: 'www.joslsinfo.com'

                }
            
     
        },

        dateDebut: '2022-12-25',
        dateFin: '2023-01-31',
        prix: 250,

        avis: [
            {

                note: 10,
                commentaires: 'J\'adore ce forfait en plein air.'
           }

        ],
        nouveauPrix: 200,
        premium: true,
        imageUrl: 'assets/img/yoga-beach300.jpg',
        rating: 5,
        rabais: 0,
      
        
    
    },
    {
        nom: 'Forfait yoga pour une personne',
        description: 'Yoga pour une personne',
        code: 'f0007',
        categories: [
            'Détente'
        ],
        etablissement: {
            nomEtablissement: 'JOSLS Yoga',
            coordonnees: 
                {
                    adresse: '33 rue Edith',
                    ville: 'Laval',
                    telephone: '514-730-8282',
                    courriel: 'josls@gmail.com',
                    siteWeb: 'www.joslsinfo.com'

                }
            
     
        },

        dateDebut: '2022-12-25',
        dateFin: '2023-01-31',
        prix: 150,

        avis: [
            {

                note: 10,
                commentaires: 'J\'adore ce forfait.'
           }

        ],
        nouveauPrix: 120,
        premium: true,
        imageUrl: 'assets/img/img-yoga-individuel300.jpg',
        rating: 5,
        rabais: 0,
      
        
    
    },
    {
        nom: 'Forfait Yoga à la plage',
        description: 'Yoga à la plage',
        code: 'f0008',
        categories: [
            'Détente'
        ],
        etablissement: {
            nomEtablissement: 'JOSLS Yoga',
            coordonnees: 
                {
                    adresse: '33 rue Edith',
                    ville: 'Laval',
                    telephone: '514-730-8282',
                    courriel: 'josls@gmail.com',
                    siteWeb: 'www.joslsinfo.com'

                }
            
     
        },

        dateDebut: '2022-11-02',
        dateFin: '2023-01-31',
        prix: 190,

        avis: [
            {

                note: 10,
                commentaires: 'J\'adore ce forfait.'
           }

        ],
        nouveauPrix: 150,
        premium: true,
        imageUrl: 'assets/img/img-yoga-beach300.jpg',
        rating: 5,
        rabais: 0,
      
        
    
    },
    {
        nom: 'Forfait Yoga',
        description: 'Yoga d\'équipe',
        code: 'f0009',
        categories: [
            'Détente'
        ],
        etablissement: {
            nomEtablissement: 'JOSLS Yoga',
            coordonnees: 
                {
                    adresse: '33 rue Edith',
                    ville: 'Laval',
                    telephone: '514-730-8282',
                    courriel: 'josls@gmail.com',
                    siteWeb: 'www.joslsinfo.com'

                }
            
     
        },

        dateDebut: '2022-11-19',
        dateFin: '2023-01-31',
        prix: 180,

        avis: [
            {

                note: 10,
                commentaires: 'Le plaisir de faire du yoga!'
           }

        ],
        nouveauPrix: 120,
        premium: false,
        imageUrl: 'assets/img/img-yoga300.jpg',
        rating: 5,
        rabais: 0,
      
        
    
    }
    ,
    {
        nom: 'Forfait Yoga entre les amis',
        description: 'Yoga en groupe d\'amis',
        code: 'f0010',
        categories: [
            'Détente'
        ],
        etablissement: {
            nomEtablissement: 'JOSLS Yoga',
            coordonnees: 
                {
                    adresse: '33 rue Edith',
                    ville: 'Laval',
                    telephone: '514-730-8282',
                    courriel: 'josls@gmail.com',
                    siteWeb: 'www.joslsinfo.com'

                }
            
     
        },

        dateDebut: '2022-12-01',
        dateFin: '2023-01-31',
        prix: 300,

        avis: [
            {

                note: 10,
                commentaires: 'Le plaisir de faire du yoga!'
           }

        ],
        nouveauPrix: 170,
        premium: true,
        imageUrl: 'assets/img/img-yoga300.jpg',
        rating: 5,
        rabais: 0,
      
        
    
    }


        

 
]

