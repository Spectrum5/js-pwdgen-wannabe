
//ESERCIZIO PER OGGI:
//chiedi nome
const firstName = prompt('Scrivi il tuo nome');
console.log(firstName);

//chiedi cognome
const surname = prompt('Scrivi il tuo cognome');
console.log(surname);

//chiedi colore preferito
const favColor = prompt('Qual è il tuo colore preferito?');
console.log(favColor);

//scrivi sulla pagina nomecognomecolorepreferito21

const psw = document.getElementById('my_psw');

psw.innerHTML = 'Password consigliata: ' + firstName + surname + favColor + '21';

console.log(psw);
console.log(psw.innerHTML);