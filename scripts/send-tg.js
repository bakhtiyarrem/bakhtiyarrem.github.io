
document.querySelector('#submit').onclick = () => {
    console.log("321");
    const message = document.querySelector('#message').value
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const url = 'https://api.telegram.org/bot1092915866:AAHWq2Cq5CShnR_RISLtABBbtxqPfYmXFjg/sendMessage?chat_id=431924266&text=';
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + "Имя: " + name + ", Номер/Email: " + email + ", Сообщение: " + message, true);
    xhttp.send();
    location.reload()
}
