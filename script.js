document.getElementById('currencyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const host = 'api.frankfurter.app';
    let EURamount = document.getElementById('amount').value;
    let toCur = document.getElementById('currency').value;

    fetch(`https://${host}/latest?amount=${EURamount}&to=${toCur}`)
        .then(resp => resp.json())
        .then(data => {
            const result = `${EURamount} EUR sind aktuell ${data.rates[toCur]} ${toCur}.`;
            document.getElementById('result').innerText = result;
        })
        .catch(error => {
            console.error('Fehler bei der Währungsumrechnung:', error);
            document.getElementById('result').innerText = 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.';
        });
});
