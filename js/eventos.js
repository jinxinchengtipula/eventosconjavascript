// eventos.js
const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");

setTimeout(function(){
    subtitle.textContent = "Sabores Exquisitos";
    setTimeout(function(){
        subtitle2.textContent = "Descubre nuestras delicias y abominaciones culinarias";
    }, 1000);
}, 1000);

const comidasRicas = [
    {
        "nombre": "Pollo a la brasa",
        "descripcion": "Jugoso y sabroso, un clásico de la cocina.",
        "isRica": true
    },
    {
        "nombre": "Lomo saltado",
        "descripcion": "Tiernos trozos de carne con verduras y papas, un plato reconfortante.",
        "isRica": true
    },
    {
        "nombre": "Ceviche",
        "descripcion": "Pescado fresco marinado en limón y especias, una explosión de sabor.",
        "isRica": true
    },
    {
        "nombre": "Patacones con cecina",
        "descripcion": "Deliciosos plátanos verdes fritos acompañados de carne seca.",
        "isRica": true
    },
    {
        "nombre": "Estofado de pollo",
        "descripcion": "Pollo cocido lentamente con verduras y especias, perfecto para un día frío.",
        "isRica": true
    }
];

const comidasFeas = [
    {
        "nombre": "Mondongo italiano",
        "descripcion": "Un guiso a base de tripas de res, no apto para todos los paladares.",
        "isRica": false
    },
    {
        "nombre": "Cuy",
        "descripcion": "Un platillo tradicional en algunos lugares, pero puede resultar chocante para otros.",
        "isRica": false
    },
    {
        "nombre": "Cau cau",
        "descripcion": "Estómago de res cocido con papas y especias, una comida peculiar.",
        "isRica": false
    },
    {
        "nombre": "Hígado",
        "descripcion": "Un órgano rico en nutrientes, pero no siempre bien recibido en la mesa.",
        "isRica": false
    },
    {
        "nombre": "Sancochado",
        "descripcion": "Una sopa de carne y vegetales hervidos, con un aroma intenso.",
        "isRica": false
    }
];

const foodElement = document.getElementById("foods");
let contenido = "";

comidasRicas.forEach(function(comida) {    
    const template = `
        <div class="food">
            <div class="icon icon-rica"></div>
            <div class="data">
                <h4>${comida.nombre}</h4>
                <p>${comida.descripcion}</p>
            </div>
        </div>
    `;
    contenido = contenido + template;
});

comidasFeas.forEach(function(comida) {    
    const template = `
        <div class="food">
            <div class="icon icon-fea"></div>
            <div class="data">
                <h4>${comida.nombre}</h4>
                <p>${comida.descripcion}</p>
            </div>
        </div>
    `;
    contenido = contenido + template;
});

foodElement.innerHTML = contenido;
