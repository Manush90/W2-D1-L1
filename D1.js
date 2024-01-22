/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*String:*/
let messaggio = "Ciao epicode!";

/*cosi si concatenano delle stringhe*/
let saluto = "Ciao";
let nome = "Epicode";
let salutoCompleto = saluto + " " + nome + "!";

console.log(salutoCompleto);

/* " " questo crea uno spazio perchè lo spazio è a tutti gli effetti un carattere*/

/*Una stringa è come un treno. Ogni vagone è una lettera o un numero. Mettendo insieme questi vagoni, otteniamo un treno di parole o numeri.
Esempio: "Ciao, Nicoolo!" è una stringa, dove ogni lettera è un vagone.

Numeri (Numbers):*/

// Dichiarazione di due variabili numeriche
let numero1 = 10;
let numero2 = 20;

// Somma dei due numeri
let somma = numero1 + numero2;
console.log(somma);

/* let numero do un valore al numero, con console.log sommo i tre numeri

I numeri sono come i mattoncini con cui costruiamo delle torri. Possiamo usarli per fare dei calcoli, come sommare, sottrarre dividere o moltiplicare.
Esempio: 3 è un numero, e possiamo usarlo per contare il numero di torri.

Booleani (Booleans):*/

let vero = true;
let falso = false;

console.log("Variabile vero:", vero);
console.log("Variabile falso:", falso);

/*Descrizione: I booleani sono come interruttori che possono essere accesi o spenti. Li usiamo per prendere decisioni, come dire si o no.
Esempio: Vero o Falso. Ad esempio, "Hai fame?" può essere vero (sì) o falso (no).*/

/*Null e Undefined:

Descrizione: Null significa che non c'è nulla, è come una scatola vuota. Undefined significa che qualcosa non è definito o ancora pronto per essere usato.
Esempio: Se non abbiamo un giocattolo in mano, possiamo dire che abbiamo "null". Se abbiamo una scatola chiusa ma non sappiamo cosa c'è dentro, è "undefined".
L'unica differenza sta che quando si usa Null siamo stati noi intenzionalmente a volerlo usare*/

// Dichiarazione di una variabile senza assegnazione di valore (undefined di default)

// Dichiarazione di una variabile con valore NULL e UNDEFINED
let variabileNulla = null;

console.log("Variabile con valore null:", variabileNulla);

let variabileNonDefinita;

console.log("Variabile non definita:", variabileNonDefinita);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Manuel";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let risultato = 12 + 20;
console.log(risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

mynName = "Dell'Oste";
/*
console.log(myName)
const myDog = "Alice"
myDog = baldo;
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione = 4 - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";
console.log("name1 è uguale a name2?", name1 === name2);

/* in questo caso la risposta è FALSE perchè i due nome sono si uguali ma uno ha l'iniziale maiuscola.*/
console.log("Se la j è minuscola come name1 i nomi sono uguali");
console.log(name1.toLowerCase === name2.toLowerCase);
