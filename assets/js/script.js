/*✔️De forma dinamica, el sitio solicitara al usuario ingresar su 
✔️nombre, ✔️carrera, ✔️3 ramos con sus respectivas notas y 
la nota de aprobacion requerida.
✔️- El ultimo de los ramos solo permitira ingresar 2 notas, estando la tercera pendiente.
✔️- Los promedios seran calculados en base a las notas ingresadas y se mostraran en la
quinta columna.
✔️- El mensaje final (“para aprobar el ramo [ramo]...”), tambien sera calculado por el sistema
en base a las dos notas ingresadas de ese ramo y la nota de aprobacion indicada.
✔️- La ventana de dialogo, al solicitar las notas, indicara que nota esta ingresando y el ramo
al que corresponde
*/

verificarEdad();

// Función para verificar que el usuario es mayor de edad

function verificarEdad() {
    let edad = parseInt(prompt('Ingresa tu edad:', '18'));
    if (isNaN(edad)) {
        alert("Eso no es un número!");
        desactivarBoton();

    }
    else {
        if (edad >= 18) {
            alert("Eres mayor de edad. Puedes continuar.");
            pedirNombreyCarrera();
        }
        else {
            alert("Eres menor de edad, no puedes entrar a este sitio");
            desactivarBoton();
    
        }
    }
}
// Función para desactivar el botón para agregar datos
function desactivarBoton() {
    let boton = document.getElementById('btn')
    boton.disabled = true;
    boton.classList.add('btn-danger')
}

// Función para pedir nombre y carrera
function pedirNombreyCarrera() {
    let respNombre = prompt("Ingresa tu nombre:", "Juanita Perez");
    let respCarrera = prompt('Ingresa tu carrera:', 'Desarrollo Web');
    let nombre = document.getElementById('nombre');
    let carrera = document.getElementById('carrera');
    nombre.innerHTML = respNombre;
    carrera.innerHTML = respCarrera;     
}


let contadorRamos = 0; // Variable para contar los ramos ingresados

function pedirDatos() {
    let ramo = prompt("Ingresa tu ramo:", "Algoritmos");
    let nota1, nota2, nota3;

    do {
        dato1 = prompt('Ingresa tu primera nota para el ramo ' + ramo + ': ', '1.0');
    } while (isNaN(parseFloat(dato1)));
    do {
        dato2 = prompt('Ingresa tu segunda nota para el ramo ' + ramo + ': ', '1.0');
    } while (isNaN(parseFloat(dato2)));
    if (contadorRamos === 2) { // Si es el tercer ramo ingresado (Recordar que se cuenta desde 0(0,1,2))
        nota3 = null; // Dejamos nota3 como null
    } else { // Si no es el tercer ramo ingresado
        do {
            dato3 = prompt('Ingresa tu tercera nota para el ramo ' + ramo + ': ', '1.0');
        } while (isNaN(parseFloat(dato3)));
        nota3 = parseFloat(dato3);
    }

    nota1 = parseFloat(dato1);
    nota2 = parseFloat(dato2);

    agregarDatos(ramo, nota1, nota2, nota3);

    contadorRamos++; // Incrementamos el contador de ramos ingresados
}

function agregarDatos(ramo, nota1, nota2, nota3) {
    let tabla = document.getElementById('tabla-datos'); // Llama a la tabla desde HTML
    let row = tabla.insertRow(-1); // Agrega nueva fila hacia abajo
    let cell1 = row.insertCell(0); // Se agregan los datos ingresados por el usuario
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4); // Columna de Promedio

    let promedio; // Variable para guardar el dato 'Promedio'


    if (nota3 === null) { // Aqui valida que la nota 3 esté vacía
        promedio = ((nota1 + nota2) / 2).toFixed(1); // Calcula el promedio con sólo 2 notas
        cell1.innerHTML = ramo
        cell2.innerHTML = nota1.toFixed(1)
        cell3.innerHTML = nota2.toFixed(1)
        cell4.innerHTML = ""; // Deja la nota3 en blanco
        cell5.innerHTML = promedio
    } else {
        promedio = ((nota1 + nota2 + nota3) / 3).toFixed(1); // Si tiene 3 notas, calcula el promedio con las 3
        cell1.innerHTML = ramo
        cell2.innerHTML = nota1.toFixed(1) // Muestra las notas con 1 decimal
        cell3.innerHTML = nota2.toFixed(1)
        cell4.innerHTML = nota3.toFixed(1)
        cell5.innerHTML = promedio
    }

    // Validación promedio tercer Ramo ingresado, cálculo nota mínima para aprobar 
    
    if (contadorRamos === 2) { // Se asegura de que esté en el tercer ramo ingresado
        let promedioActual = ((nota1 + nota2) / 2).toFixed(1); // Calcula el promedio con las 2 notas de ingresadas por usuario
    
        if (promedioActual < 4.0) { // Si el promedio es menor a 4.0
            if (promedioActual < 2.4) {
                let textoNota = document.getElementById('notaMinima'); // Llama al párrafo    
                textoNota.innerHTML = 'Lo siento tus notas son demasido bajas, reprobaste.'; 
            }
            else {
                let notaFaltante = ((4.0 * 3) - (nota1 + nota2)) / 1; // Calcula la nota mínima necesaria
                let promedioFinal = ((nota1 + nota2 + notaFaltante) / 3).toFixed(1); // Calcula nuevo promedio con la nota calculada anteriormente
                let textoNota = document.getElementById('notaMinima') // Llama al párrafo    
                textoNota.innerHTML = 'La nota mínima que necesita para aprobar es ' + notaFaltante.toFixed(1) + ', obteniendo un promedio de '+ promedioFinal; // Agrega el texto con los datos obtenidos
            }
            

        } else { // Si el promedio actual es igual o mayor a 4.0
            let textoNota = document.getElementById('notaMinima');
            textoNota.innerHTML = 'Actualmente apruebas el ramo con un promedio de '+ promedioActual; // Agrega el texto de aprobación
        }
    }
}
