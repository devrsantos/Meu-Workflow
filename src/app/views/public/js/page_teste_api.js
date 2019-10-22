const nome_usuario = document.querySelector("#nome_usuario").value;
const sobrenome_usuario = document.querySelector("#sobrenome_usuario").value;

const btn_enviar = document.querySelector("#btn_enviar");
const url = "http://localhost:3000/page_teste_api/post";

btn_enviar.addEventListener('click', e => {
    e.preventDefault();
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "nome": `${this.nome_usuario.value}`,
            "sobrenome": `${this.sobrenome_usuario.value}`
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => response.json().then(result => console.log(result)));
});


