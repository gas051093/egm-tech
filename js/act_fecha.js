const fecha = document.getElementById("nav_day");

function actualizar_fecha() { 
    const hoy = new Date();

    const formato_fecha = { weekdat: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const fecha_formateada = hoy.toLocaleDateString('es-AR', formato_fecha);

    const horas = hoy.getHours().toString().padStart(2, '0');
    const minutos = hoy.getMinutes().toString().padStart(2, '0');
    const segundos = hoy.getSeconds().toString().padStart(2, '0');
    const hora_formateada = `${horas}:${minutos}:${segundos} Hs.`

    fecha.textContent = `${fecha_formateada} || ${hora_formateada}`
}

actualizar_fecha();
setInterval(actualizar_fecha, 1000); 
