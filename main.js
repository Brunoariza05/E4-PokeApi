// traemos los elementos de html 

const formulario = document.getElementById("form");
const input = document.getElementById("input");
const btnEnviar = document.getElementById("enviar");
const body = document.getElementById("bodyy"); 
const divPrincipal = document.getElementById("card");
const PokeName = document.getElementById("card-nombre");
const PokeImg = document.getElementById("card-imagen"); 
const PokeTipo = document.getElementById("card-tipo");
const PokeAltura = document.getElementById("card-altura");
const PokePeso = document.getElementById("card-peso");
const PokeAdvertencia = document.getElementById("ingrese-valor");

//

function crearCard (nombre, imagen, tipo, altura, peso){

  divPrincipal.id = "card";

  PokeName.id = "card-nombre";
  PokeName.innerText = nombre;

  PokeImg.style.display = "flex";
  PokeImg.src = imagen;
  PokeImg.id = "card-imagen";

  PokeTipo.id = "card-tipo";
  PokeTipo.innerText = "Type =  " + tipo;
 
  PokeAltura.id = "card-altura";
  PokeAltura.innerText = "Height = " + altura + " MTS.";

  PokePeso.id = "card-peso";
  PokePeso.innerText = "Weight = " + peso + " KG.";

  PokeAdvertencia.style.display = "none";

  divPrincipal.appendChild(PokeName);
  divPrincipal.appendChild(PokeImg);
  divPrincipal.appendChild(PokeTipo);
  divPrincipal.appendChild(PokeAltura);
  divPrincipal.appendChild(PokePeso);
  body.appendChild(divPrincipal);
}

function numeroNoValido () {
  input.value = "";
  PokeName.innerText = "";
  PokeAltura.innerText = "";
  PokePeso.innerText = "";
  PokeTipo.innerText = "";
  PokeImg.style.display ="none";
  PokeAdvertencia.style.display = "flex";
  PokeAdvertencia.style.fontSize = "25px";
  PokeAdvertencia.innerText = "NUMERO NO VALIDO ingrese un numero menor a 1000"
  PokeAdvertencia.classList.add("numero-invalido");
}

function inputVacio () {
  PokeAdvertencia.style.display = "flex"
  PokeAdvertencia.style.fontSize = "25px";
  PokeAdvertencia.classList.add("numero-invalido");
  PokeAdvertencia.innerText = "INGRESE UN VALOR POR FAVOR";
  PokeImg.style.display = "none";
  PokeName.innerText = "";
  PokeAltura.innerText = "";
  PokePeso.innerText = "";
  input.value = "";
}

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const pokemonNumber = input.value;
    if (pokemonNumber === "") {
      inputVacio();
    }
    if (pokemonNumber < 1000) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
    .then(respuesta => respuesta.json())
    .then(data => {
      const nombre = data.name;
      const imagen = data.sprites.front_default;
      const id = data.id;
      const tipo = data.types[0].type.name;
      const altura = data.height / 10;
      const peso = data.weight / 10;
      crearCard(nombre, imagen, tipo, altura, peso);
    })
    .catch(error => {
      console.log("hubo error");
    })
    input.value = "";
  } else {
    numeroNoValido();
  }
});

// 

