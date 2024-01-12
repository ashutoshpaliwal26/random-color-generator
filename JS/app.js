const getColor = () =>{
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomCode);
    const body = document.getElementById('main');
    body.style.backgroundColor=randomCode;
    const fontChange = document.getElementById('text');
    fontChange.innerText = randomCode;
}

document.getElementById('btn').addEventListener('click', getColor);