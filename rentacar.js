// rentacar.js
const preciosAutos = {
    sedan: 50,
    suv: 70,
    convertible: 100
};

// Obtener referencias a los elementos HTML
const autoSelect = document.getElementById('autoSelect');
const fechaInicioInput = document.getElementById('fechaInicio');
const fechaFinInput = document.getElementById('fechaFin');
const totalPagarElement = document.getElementById('totalPagar');

// Agregar event listener para actualizar el precio cuando se cambia el tipo de auto
autoSelect.addEventListener('change', actualizarPrecio);

// Agregar event listener para actualizar el precio cuando se cambia la fecha de inicio o fin
fechaInicioInput.addEventListener('change', actualizarPrecio);
fechaFinInput.addEventListener('change', actualizarPrecio);

function actualizarPrecio() {
    const autoSeleccionado = autoSelect.value;
    const precioAuto = preciosAutos[autoSeleccionado];

    // Obtener la cantidad de días seleccionados
    const cantidadDias = obtenerCantidadDias();

    // Verificar si las fechas son válidas y los valores numéricos
    if (!isNaN(precioAuto) && !isNaN(cantidadDias) && cantidadDias >= 0) {
        // Calcular el total a pagar
        const totalPagar = precioAuto * cantidadDias;

        // Actualizar el contenido del elemento HTML
        totalPagarElement.textContent = `$${totalPagar}`;
    } else {
        // Si hay algún problema, mostrar un mensaje de error o manejar la situación según sea necesario
        totalPagarElement.textContent = 'Error en el cálculo';
    }
}

function obtenerCantidadDias() {
    const fechaInicio = new Date(fechaInicioInput.value);
    const fechaFin = new Date(fechaFinInput.value);

    // Verificar si las fechas son válidas
    if (isNaN(fechaInicio.getTime()) || isNaN(fechaFin.getTime())) {
        return 0;
    }

    // Calcular la diferencia de días solo si la fecha de inicio es anterior a la fecha de fin
    if (fechaInicio <= fechaFin) {
        const diferenciaTiempo = fechaFin.getTime() - fechaInicio.getTime();
        const diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
        return diferenciaDias;
    } else {
        return 0;
    }
}

// La función alquilarAuto permanece sin cambios
function alquilarAuto() {
    // ... (código existente para la función alquilarAuto)
}


function alquilarAuto() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const nacionalidad = document.getElementById('nacionalidad').value;
    const tipoIdentificacion = document.getElementById('tipoIdentificacion').value;
    const numeroIdentificacion = document.getElementById('numeroIdentificacion').value;
    const tipoCarnetConducir = document.getElementById('tipoCarnetConducir').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;
    const autoSeleccionado = document.getElementById('autoSelect').value;
    const precioPorDia = preciosAutos[autoSeleccionado];
    const cantidadDias = obtenerCantidadDias();
    const totalPagar = precioPorDia * cantidadDias;

    if (nombre && apellido && fechaNacimiento && nacionalidad && tipoIdentificacion && numeroIdentificacion && tipoCarnetConducir && fechaInicio && fechaFin && autoSeleccionado && cantidadDias > 0) {
        alert(`Gracias por alquilar un ${autoSeleccionado} por ${cantidadDias} días. Total a pagar: $${totalPagar}.`);
    } else {
        alert('Por favor, complete todos los campos.');
    }
}
