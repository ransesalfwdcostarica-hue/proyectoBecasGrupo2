// --- BASE DE DATOS LOCAL ---
const DB = {
    // Obtener datos (usuarios, becas, postulaciones)
    obtener: (clave) => JSON.parse(localStorage.getItem(clave) || '[]'),
    
    // Guardar datos
    guardar: (clave, datos) => localStorage.setItem(clave, JSON.stringify(datos)),
    
    // Agregar un solo item
    agregar: (clave, item) => {
        const actual = DB.obtener(clave);
        actual.push({ id: Date.now(), ...item });
        DB.guardar(clave, actual);
    }
};

// --- GESTIÓN DE SESIÓN ---
const Sesion = {
    // Cerrar sesión y volver al inicio
    salir: () => {
        sessionStorage.clear();
        // Si estamos en views/ usamos ../ para salir
        const ruta = window.location.pathname.includes('views') ? '../index.html' : 'index.html';
        window.location.href = ruta;
    },
    
    // Verificar si hay alguien logueado
    verificar: (rolEsperado) => {
        const usuario = JSON.parse(sessionStorage.getItem('activeUser'));
        if (!usuario || (rolEsperado && usuario.rol !== rolEsperado)) {
            window.location.href = '../index.html';
        }
        return usuario;
    }
};