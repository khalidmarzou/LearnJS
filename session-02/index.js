// Les operations :
        /*  ** : puissace
            %  : Modulo
            ++ : incrementation
            -- : decrimentation
            +  : Addition
            -  : sousstraction
            *  : Multiplication
            /  : Division       */
//////////////////////////////////////////////////////////////
    let i;
    let a = 200;
    console.log(a);
    i = 2;
    i ++ ;
    console.log(i)
    i += 2
    console.log(i)
    let x;
    let y;
    x = 10;
    y = 2;
    x%=y;
    console.log(x);
    console.log(11)
    // en fait ca avec tous les operations;

// concaténation :

    // deux string :
    let nom = "Marzoug";
    let prenom = "Khalid";
    console.log(nom + " " +prenom) 

    // un cc et nombre :
    let etudiant;
    etudiant = 'MARZOUG';
    console.log(etudiant + 6);
    /* en cas de chaine de caractere plus
                            un nombre, js maitre le nombre cc*/

// Les Conditions :
    
    let h = 10;
    let k = 15;
    if (h == k){
        var egal = true;
    } else {
        egal = false;
    };
    console.log(egal);
    let w = 10;
    let v = "10";
    if (w === v){
        var egall = true
    } else{
        egall = false
    };
    console.log(egall)
    // === comparaison du valeur et le type
    // !== comparaison du valeur et le type 
// Logique :
    // && Et , and
    // || ou , or
    // ! not , non logique
    let u = true;
    let p = false;
    console.log(" true Et false : ", u && p);
    console.log(" true Ou false : ", u || p);
    console.log(" not true",!true);
    // les variables par defaut make true leurs valeur :
    let statut = false;
    if (!statut){
        console.log("OKK")
    }
    ////////////////////////////////////////////////////////
    let nomm;
    if (!nomm){
        console.log("OKKKKKKKKK")
    }