// const apiName = "https://igboapi.com/api/v1/words?keyword="+word+"&dialects=true&examples=true"     
// const apiKey = 'ba00fc6f-8c74-4be8-a26f-86c54f312de4'
// const word = document.getElementById('searchBox').value

// curl -X 'GET' \
//   'https://undefined/api/v1/words?keyword=goat&page=1&range=1%2C1&strict=false&dialects=false&examples=true&pronunciation=false&nsibidi=false' \
//   -H 'accept: application/json' \
//   -H 'X-API-Key: b66e7848-5712-461c-a17e-85b6b2ffcda0'

// let http = new XMLHttpRequest();
// http.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//        var response = JSON.parse(http.responseText);
//        document.getElementsByClassName('Meanings').innerHtml = response
//     }
// }

// http.open("GET" , apiName, true );
// http.send();

document.getElementsByTagName('body').addEventListener('load', fetchData);
const fetchData = () =>{
    let http = new XMLHttpRequest();
    http.open = ('GET', 'https://igboapi.com/api/v1/words?keyword=boar&dialects=true&examples=true', true);
    http.onload = function(){
        if (this.status === 200) {
        console.log(this.responseText);

        http.send;
    }
        
    }
}