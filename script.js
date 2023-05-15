const chave = "e4f737f3d53d2f21ca52dbe5c70afc76";

function colocarNaTela(dados) {
  console.log(dados);
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".text-prev").innerHTML = dados.weather[0].description;
  document.querySelector(".img-prev").src =
    "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

async function buscarCidade(cidade) {
  let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cidade +
      "&appid=" +
      chave +
      "&lang=pt_br" +
      "&units=metric"
  ).then((resposta) => resposta.json());

  colocarNaTela(dados);
}

function clickButton() {
  let cidade = document.querySelector(".input-city").value;

  buscarCidade(cidade);
}
