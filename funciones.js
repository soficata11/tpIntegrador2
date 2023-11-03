function pagar() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('mail').value;
    const categoria = document.getElementById('categoria').value; 

    if (isNaN(cantidad) || nombre === "" || apellido === "" || email === "" || categoria === "") {
        alert("Complete todos los campos");
        return;
    }

    let descuento = 0;
    if (categoria === "estudiante") {
        descuento = 80;
    } else if (categoria === "trainee") {
        descuento = 50;
    } else if (categoria === "junior") {
        descuento = 15;
    }

    const precio = 200;
    const total = (cantidad * precio) - ((cantidad * precio * descuento) / 100);

    console.log(total)

    document.getElementById('pagar').textContent = total;
    document.getElementById('resultado').style.display = "block";
}


function enBlanco() {
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('mail').value = "";
    document.getElementById('cantidad').value = "";
    document.getElementById('categoria').value = "";
    document.getElementById('resultado').style.display = "none";
}

// Agregar eventos a los botones
document.getElementById('resumen').addEventListener('click', pagar);
document.getElementById('borrar').addEventListener('click', enBlanco);