
for (let i = 1; i <= 100; i++) {

    // variable
    let result;

    // crea elemento nel DOM
    const inThe = document.createElement('div');


    // definisci la variabile result
    if ((i % 3 === 0) && (i % 5 === 0)) {
        result = 'FizzBuzz';
        inThe.style.backgroundColor = "red";
    } else if (i % 5 === 0) {
        result = 'Buzz';
        inThe.style.backgroundColor = "yellow";
    } else if (i % 3 === 0) {
        result = 'Fizz';
        inThe.style.backgroundColor = "green";
    } else {
        result = i;
        inThe.style.backgroundColor = "lightblue";
    }


    // inserisci il valore, la classe all'interno  dell'elemento creato
    inThe.append(result);
    inThe.classList.add("box");

    // aggiungi al container l'elemento creato
    const container = document.getElementById('container');
    container.append(inThe);


}

