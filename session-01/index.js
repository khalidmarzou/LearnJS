//c est un commentaire pour  une sel ligne
/* c est un commentaire pour plusieur lignes */
//////////////////////////////////////////////////////

/* Les Titres :
I-   Les variables
II-  Les fonction et les procedures
III- Let et var diference */

//////////////////////////////////////////////////////

//I- Les Variables :

    console.log("Hello Js world !!!")
    let nombreUn;
    let nombreDeux;
    let somme;

    nombreUn = 16;
    nombreDeux = 10;

    const PI = 3.14 ;
    /* la valeur du const en declare juste une seule fois,
                                jamais modifier cette valeur apres;  */ 

    somme = nombreUn + nombreDeux ;

    console.log(somme)

//////////////////////////////////////////////////////////

//II- Les fonction et Les procedures :
    //declaration - procedure -
    function greet(){
            console.log('Helloooo !!')
        }
    //execution
        greet()
    //example :
        function greetUn(nom){
            console.log('heloooo' + nom)
        }
        greetUn('MARZOUG')
        greetUn('Sidqui')
    //declaration fonction :
        function calculSomme(X,Y){
            return X+Y
        }
    //execution
        console.log(calculSomme(2,3))
//////////////////////////////////////////////////////////////////

//III-diference entre let et var :
    function inscrire(){
        let nom = "AAA";
        let prenom = "khalid";
        let age = 24;
        if (age == 24){
            let statut = "etudiant"
            console.log(statut)
        }
        console.log(age)
    }   
    inscrire()
    //connais juste dans sa blog
    //en a blog parent par ex function est un blog parent est if est child
    function inscrireUn(){
        let nom = "AAA";
        let prenom = "khalid";
        let age = 24;
        if (age == 24){
            var statut = "etudiant1"
        }
        console.log(statut)
    }   
    inscrireUn()
    //var defineded en toute blog
///////////////////////////////////////////////////////////////////