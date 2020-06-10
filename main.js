
// formule mathematique pour trouver son taux métabolique de base

/*-------    (10*kg) + (6,25*cm) - (5*âge) +5    ------*/ 

//on recupere le bouton grace au selecteur
let generer=document.querySelector("#bouton");

//on réagit à l'élément "click"
generer.addEventListener("click",()=> {

//    

// avec promt on récupère la saisie de l'utilisateur
let kg = prompt('Entrez votre poid');
let cm = prompt('Entrez votre taille en cm');
let age = prompt('Entrez votre age')

// fonction qui permet de faire le calcule 
function TMB(kg,cm,age){
 return (10*kg)+(6.25*cm)-(5*age) +5
};

alert(`${"bravo vous avez besoin de : "} ${TMB(kg,cm,age)} ${" kcal par jour"}`);

},false);






