function impots(){
    let age = document.getElementById('age').value
    let sexe = document.getElementById('sexe').value
    let imposable = ( age >= 20 && (sexe ==='Homme' || sexe ==='homme')) || (age >= 18 && age <= 35 && (sexe === 'Femme' || sexe === 'femme'))
    let nonImposable = ( age < 20 && (sexe === 'Homme' || sexe === 'homme')) || ((age < 18 || age > 35) && (sexe === 'Femme' || sexe === 'femme'))
    console.log(age);
    console.log(sexe);
if (imposable){
    console.log(`Vous êtes imposable`)
    document.getElementById('input3').value = 'Vous êtes imposable'
} else if (nonImposable){
    console.log(`Vous êtes non imposable`)
    document.getElementById('input3').value = 'Vous êtes non imposable'
} else{         
    console.log(`Information incorrect`)
    document.getElementById('input3').value = 'Information incorrect'
}
}