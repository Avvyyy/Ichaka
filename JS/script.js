

document.getElementById("dictBox").addEventListener("submit", fetchData);

function fetchData(e) {

    let userInput = document.getElementById("searchBox").value;

  e.preventDefault();
  let xhttp = new XMLHttpRequest();
xhttp.open(
    "GET",
    "https://igboapi.com/api/v1/words?keyword=" + userInput + "&strict=false&dialects=true&examples=true&isStandardIgbo=true&pronunciation=false&nsibidi=false",
    true
);

xhttp.onload = function () {
    if (this.status == 200) {
        let data = JSON.parse(this.responseText);

        for (let i = 0; i < data.length; i++) {
            let record = data[i];
            let meanings = record["definitions"];
            let examples = record["examples"];
            // let word = record["word"];
            let dialects = record["dialects"];

            document.querySelector('.meanings').innerHTML = 'Meanings:';
            for (let j = 0; j < meanings.length; j++) {
              document.querySelector('.meanings').innerHTML += "<br> -`" + meanings[j];
            }

           

            document.querySelector('.examples').innerHTML = "Examples :";
            for (let k = 0; k < examples.length; k++) {
                document.querySelector('.examples').innerHTML +=   "<br> - " + examples[k]["igbo"] + ": " + examples[k]["english"];
            }

            document.querySelector('.dialects').innerHTML= "Dialects :";
            for (let l in dialects) {
                let dialect = dialects[l];
                document.querySelector('.dialects').innerHTML += "<br> - " + dialect["word"] + ": " + dialect["dialects"].join(", ");
            }
        }
    }
};

xhttp.setRequestHeader("X-API-Key", "465ef4c9-1935-42be-a5d7-5d7d3e299f3a");
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.setRequestHeader("Accept", "application/json");

xhttp.send();

}


const backspace = document.getElementById('closeButton');
// backspace.onclick => 