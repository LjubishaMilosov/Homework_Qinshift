let singleDigits, teens, tens, thousands;

fetch('numberWords.json')
    .then(response => response.json())
    .then(data => {
        singleDigits = data.singleDigits;
        teens = data.teens;
        tens = data.tens;
        thousands = data.thousands;
    })
    .catch(error => console.error('Error loading number words:', error));

function numberToWords(num) {
    if (!singleDigits || !teens || !tens || !thousands) {
        console.log("Error: Number words not loaded.");
        return "Error: Number words not loaded.";
    }

    console.log(`Converting number: ${num}`);

    if (num < 0 || num > 1000000 || !Number.isInteger(num)) {
        console.log("Error: Input must be a whole number between 0 and 1,000,000.");
        return "Error: Input must be a whole number between 0 and 1,000,000.";
    }

    if (num === 0) {
        console.log("Result: zero");
        return singleDigits[0];
    }

    if (num === 1000000) {
        console.log("Result: one million");
        return "one million";
    }

    let words = "";

    function convertHundreds(n) {
        console.log(`Converting hundreds: ${n}`);
        let str = "";
        if (n >= 100) {
            str += singleDigits[parseInt(n / 100)] + " hundred ";
            n = n % 100;
            console.log(`Hundreds: ${str.trim()}, Remaining: ${n}`);
        }
        if (n >= 20) {
            str += tens[parseInt(n / 10)] + " ";
            n = n % 10;
            console.log(`Tens: ${str.trim()}, Remaining: ${n}`);
        }
        if (n >= 10 && n < 20) {
            str += teens[n - 10] + " ";
            console.log(`Teens: ${str.trim()}`);
        } else if (n > 0 && n < 10) {
            str += singleDigits[n] + " ";
            console.log(`Single digits: ${str.trim()}`);
        }
        return str.trim();
    }

    let thousandCounter = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            const chunk = num % 1000;
            const chunkWords = convertHundreds(chunk);
            words = chunkWords + (thousands[thousandCounter] ? " " + thousands[thousandCounter] : "") + " " + words;
            console.log(`Chunk: ${chunk}, Words: ${chunkWords}, Combined: ${words.trim()}`);
        }
        num = parseInt(num / 1000);
        thousandCounter++;
    }

    console.log(`Final result: ${words.trim()}`);
    return words.trim();
}

document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numberInput = document.getElementById('numberInput').value;
    const result = numberToWords(parseInt(numberInput));
    document.getElementById('result').innerText = result;
});