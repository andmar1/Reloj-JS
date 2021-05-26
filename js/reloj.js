
const mostrarReloj = () =>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());

    document.getElementById("hora").innerHTML = ` ${hr} : ${min} : ${seg}`;

    const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    let diaSemana = dias[fecha.getDay()];

    let dia = fecha.getDate();

    let mes = meses[fecha.getMonth()];

    let anio = fecha.getFullYear();
    
    let fechaTexto = `${diaSemana}, ${dia} ${mes} del ${anio}`;

    document.getElementById("fecha").innerHTML = `${fechaTexto}`;

    document.getElementById("contenedor").classList.toggle("animar");  //Llamar la animación
}

const formatoHora = (hora) =>{
    if(hora < 10) //preguntar si requiere mas de un digito
        hora = '0' + hora;    
    return hora;
    
}

//Llamar a la funcion repetidas veces

setInterval(mostrarReloj,1000);







//ejemplo de funciones flecha
const promedio = (nombre,calificaciones) =>{
    let suma = 0;
    calificaciones.forEach(element => {
        suma += element;
    });
    console.log("Suma de puntos "+suma);

    total =  suma / calificaciones.length;
    console.log("El promedio de "+nombre+" es de: ",total);
    console.log(`El promedio de ${nombre} es de: ${total}`);
}

promedio("Antonio", [9,8,7,9,8,7,8,9,8]);

