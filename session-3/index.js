// Ecriver dans le documents
document.write("to write in the document we use .write")
document.write("<h1>Test</h1>")
//window.print() pour imprimer la page

// Les Types primitives en JS:
    console.log(typeof(5));
    console.log(typeof(undefined));
    console.log(typeof("to be or not to be"));
    console.log(typeof(true))

// Les Types non primitives en JS -Composes-
    console.log(typeof(null))
    let numStagiaires = [1,2,3]
    console.log(typeof(numStagiaires))

    let cnumStagiaires = numStagiaires

    cnumStagiaires.push(5)

    console.log(numStagiaires)
    console.log(cnumStagiaires)

    //when we edit in the copy , if we change in one of them , they change all
    // pour copper sans modifier l origine , nous faire 

    let xnumStagiaires = [].concat(numStagiaires)

    xnumStagiaires.push(10)

    console.log(numStagiaires)
    console.log(xnumStagiaires)

    
// pour afficher les classe pere des variables :
    console.log(Object.prototype.toString.call(5));
    console.log(Object.prototype.toString.call(null));
    console.log(Object.prototype.toString.call(undefined));
    console.log(Object.prototype.toString.call([1,2,3]));
    console.log(Object(3) instanceof Number);
// spread operator (operation de propagation)
    let liste = [20,30,40]
    let cliste = [...liste]

    liste.push(80)

    console.log(cliste)

    //object :

    let st = {
        id :1,
        nom:"khalid",
    }
    let cst = {...st,age : 19}
    console.log(st)
    console.log(cst)

//  object.assign(a,b)
// [...[]]  {...{}}

    