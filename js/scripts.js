
//-----Efecto de label

const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map(
      (letter, idx) => `
		<span style="transition-delay:${idx * 50}ms"> ${letter}</span>`
    )
    .join("");
});

//-----------------------------------------------------


//Guardar los datos en la memoria local
function guardarDatos() 
{
  localStorage.setItem("nombreInput", document.getElementById("name").value);
  localStorage.setItem(
    "passwordInput",
    document.getElementById("password").value
  );
 
}



//----Mensaje Popup
/*
function welcome()
{
  Swal.fire({
    icon: 'success',
    title: `Bienvenida!`,
    text: `${nombre}`
  })
  diferentsOptions()
}
*/

if (window.location.target="second.html") 
{
  diferentsOptions();
}

function diferentsOptions()
{
pregPresupuesto.innerHTML = `Por favor escoge un rango del presupuesto estimado (en USD): `;

dropPrecio.onchange = () => {
  if (dropPrecio.options[dropPrecio.selectedIndex].innerText === "200$-500$") {
    pregPais.innerHTML = `Por favor escoge uno de los países disponibles`;
    pPais.innerHTML = `
      <select id="dropPais">
        <option>Selecciona un país</option>
        <option value="Argentina"> Argentina </option>
        <option value="Peru"> Perú </option>        
      </select>
      <button class="btn "id="btn" onClick="mostrarResultado()">Proceder</button>`;
  } else if (
    dropPrecio.options[dropPrecio.selectedIndex].innerText === "501$-600$"
  ) {
    pregPais.innerHTML = `Por favor escoge uno de los países disponibles`;
    pPais.innerHTML = `
      <select id="dropPais">
        <option>Selecciona un país</option>
        <option value="Argentina"> Argentina </option>
        <option value="Peru"> Perú </option>
        <option value="Colombia"> Colombia </option>
      </select>
      <button class="btn "id="btn" onClick="mostrarResultado()">Proceder</button>`;
  } else if (
    dropPrecio.options[dropPrecio.selectedIndex].innerText === "601$-700$"
  ) {
    pregPais.innerHTML = `Por favor escoge uno de los países disponibles`;
    pPais.innerHTML = `
      <select id="dropPais">
        <option>Selecciona un país</option>
        <option value="Argentina"> Argentina </option>
        <option value="Peru"> Perú </option>
        <option value="Colombia"> Colombia </option>
        <option value="Brasil"> Brasil </option>
      </select>
      <button class="btn "id="btn" onClick="mostrarResultado()">Proceder</button>`;
  } else if (
    dropPrecio.options[dropPrecio.selectedIndex].innerText === "701$ a más"
  ) {
    pregPais.innerHTML = `Por favor escoge uno de los países disponibles`;
    pPais.innerHTML = `
      <select id="dropPais">
        <option>Selecciona un país</option>
        <option value="Argentina"> Argentina </option>
        <option value="Peru"> Perú </option>
        <option value="Colombia"> Colombia </option>
        <option value="Brasil"> Brasil </option>
      </select>
      <button class="btn "id="btn" onClick="mostrarResultado()">Proceder</button>`;
  } else {
    pregPais.innerHTML = ``;
    pPais.innerHTML = ``;
  }
};

}

function mostrarResultado() {
  let presupuesto = document.getElementById("dropPrecio").value;
  let pais = document.getElementById("dropPais").value;
  let formu = document.getElementById("cliente");
  formu.innerHTML = "";
  let cards = document.createElement("div");

  if ((pais == "Argentina" || pais == "Peru") && presupuesto == "pre1") {
    cards.innerHTML = `    
	<div class="wrapper">
    	<div class="card">
    		<img src="img/paisaje.jpg">
    		<div class="info">
    			<h1>Paquete 1</h1>
    			<p>Hotel + Restaurante + Transporte + Tour turístico</p>
    		</div>
    	</div>

    </div>`;
  } else if ((pais == "Argentina" || pais == "Peru") && presupuesto == "pre2") {
    cards.innerHTML = `    
	<div class="wrapper">
    	<div class="card">
    		<img src="img/paisaje.jpg">
    		<div class="info">
    			<h1>Paquete 1</h1>
    			<p>Hotel + Restaurante + Transporte + Tour turístico</p>
    		</div>
    	</div>
    	
    	<div class="card">
    		<img src="img/paisaje2.jpg">
    		<div class="info">
    			<h1>Paquete 2</h1>
    			<p>Hotel + Restaurante + Transporte + Tour turístico</p>
    		</div>
    	</div>
    </div>`;
  } else if (pais == "Colombia" && presupuesto == "pre2") {
    cards.innerHTML = `    
	<div class="wrapper">
    	<div class="card">
    		<img src="img/paisaje.jpg">
    		<div class="info">
    			<h1>Paquete 1</h1>
    			<p>Hotel + Restaurante + Transporte + Tour turístico</p>
    		</div>
    	</div>
    	
	`;
  } else if (
    (pais == "Argentina" || pais == "Peru" || pais == "Colombia") &&
    presupuesto == "pre3"
  ) {
    cards.innerHTML = `    
	<div class="wrapper">
    	<div class="card">
    		<img src="img/paisaje.jpg">
    		<div class="info">
    			<h1>Paquete 1</h1>
    			<p>Hotel + Restaurante + Transporte + Tour turístico</p>
    		</div>
    	</div>
    	
    	<div class="card">
    		<img src="img/paisaje2.jpg">
    		<div class="info">
    			<h1>Paquete 2</h1>
    			<p>Hotel + Restaurante + Transporte + Tour turístico</p>
    		</div>
    	</div>
    </div>`;
  } else if (
    (pais == "Argentina" || pais == "Peru" || pais == "Colombia") &&
    presupuesto == "pre4"
  ) {
    cards.innerHTML = `    
	<div class="wrapper">
    	<div class="card">
    		<img src="img/paisaje.jpg">
    		<div class="info">
    			<h1>Paquete 1</h1>
    			<p>Hotel + Restaurante + Transporte + Tour turístico</p>
    		</div>
    	</div>
    	
    	<div class="card">
    		<img src="img/paisaje2.jpg">
    		<div class="info">
    			<h1>Paquete 2</h1>
    			<p>Hotel + Restaurante + Transporte + Tour turístico</p>
    		</div>
    	</div>
    </div>`;
  } else if (pais == "Brasil" && presupuesto == "pre3") {
    cards.innerHTML = `    
	<div class="wrapper">
    	<div class="card">
    		<img src="img/paisaje.jpg">
    		<div class="info">
    			<h1>Paquete 1</h1>
    			<p>Hotel + Restaurante + Transporte + Tour turístico</p>
    		</div>
    	</div>`;
  } else if (pais == "Brasil" && presupuesto == "pre4") {
    cards.innerHTML = `    
	<div class="wrapper">
    	<div class="card">
    		<img src="img/paisaje.jpg">
    		<div class="info">
    			<h1>Paquete 1</h1>
    			<p>Hotel + Restaurante + Transporte + Tour turístico</p>
    		</div>
    	</div>
    	    	<div class="card">
    		<img src="img/paisaje2.jpg">
    		<div class="info">
    			<h1>Paquete 1</h1>
    			<p>Hotel + Restaurante + Transporte + Tour turístico</p>
    		</div>
    	</div>
    	`;
  } else {
    alert("Hola");
  }
  formu.appendChild(cards);
}
