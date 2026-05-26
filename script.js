const urlParams = new URLSearchParams(window.location.search);
const codigoUrl = urlParams.get('id'); 

const datosInvitado = TABLA_INVITADOS.find(invitado => invitado.id === codigoUrl) || 
{ 
    nombre: "Invitado Especial", 
    pases: 1 
};

const TABLA_INVITADOS = [
    { id: "valencia4", nombre: "Familia Valencia Aguilar", pases: 4 },
    { id: "sanchez2",  nombre: "Carlos Sánchez y Acompañante", pases: 2 },
    { id: "alika15",   nombre: "Amigos", pases: 1 },
    { id: "madrina",   nombre: "Madrina Elena", pases: 3 }
];

export default TABLA_INVITADOS; 