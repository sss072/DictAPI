
const input = document.getElementById('input');

const btn = document.getElementById('btn');

btn.addEventListener('click', myFunction);

function myFunction() {
    const inputValue = input.value;
    //create a async function
    async function getData() {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
        let data = await response.json();
        const new_data = data[0].meanings[0].definitions[0].definition
        displayData(new_data);
    }
    getData();

}


function displayData(data) {
    //create a p tag
    const p = document.createElement('p');
    // add data as text to p tag
    p.innerText = data;
    // append it to div with class container
    const container = document.querySelector('.container');
    container.appendChild(p);
}





    