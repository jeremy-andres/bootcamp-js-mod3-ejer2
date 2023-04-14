/*✔️De forma dinamica, el sitio solicitara al usuario ingresar su 
nombre, carrera, 3 ramos con sus respectivas notas y 
la nota de aprobacion requerida.
- El ultimo de los ramos solo permitira ingresar 2 notas, estando la tercera pendiente.
- Los promedios seran calculados en base a las notas ingresadas y se mostraran en la
quinta columna.
- El mensaje final (“para aprobar el ramo [ramo]...”), tambien sera calculado por el sistema
en base a las dos notas ingresadas de ese ramo y la nota de aprobacion indicada.
- La ventana de dialogo, al solicitar las notas, indicara que nota esta ingresando y el ramo
al que corresponde
*/
/* notaminaprob = nota1javascript+nota2javascript+nota3javascript=118.5*/

verificarEdad();

function verificarEdad(){
    let edad = parseInt(prompt('Ingresa tu edad:'));
    if (edad >= 18){
        alert("Eres mayor de edad. Puedes continuar.");
        pedirNombreyCarrera();
    }
    else {
        let boton = document.getElementById('btn')
        boton.disabled = true;
        boton.classList.add('btn-danger')
        alert("Eres menor de edad, no puedes entrar a este sitio");

    }
}

function pedirNombreyCarrera() {
    let respNombre = prompt("Ingresa tu nombre:");
    let respCarrera = prompt('Ingresa tu carrera:');
    let nombre = document.getElementById('nombre');
    let carrera = document.getElementById('carrera');

    nombre.innerHTML = respNombre;
    carrera.innerHTML = respCarrera;


}


function pedirDatos() {
    let ramo = prompt("Ingresa tu ramo:");
    let dato1 = prompt('Ingresa tu primera nota:');
    let dato2 = prompt('Ingresa tu segunda nota:');
    let dato3 = prompt('Ingresa tu tercera nota:');
    
    let nota1 = parseFloat(dato1)
    let nota2 = parseFloat(dato2)
    let nota3 = parseFloat(dato3)

    agregarDatos(ramo, nota1, nota2, nota3);
}

function agregarDatos(ramo, nota1, nota2, nota3) {
    let tabla = document.getElementById('tabla-datos');
    let row = tabla.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    let promedio = (nota1 + nota2 + nota3) / 3;

    cell1.innerHTML = ramo
    cell2.innerHTML = nota1
    cell3.innerHTML = nota2
    cell4.innerHTML = nota3

    cell5.innerHTML = promedio
}

