
// Función para descargar la lista en PDF
function descargarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    

    const fecha = new Date().toLocaleDateString();
    doc.text(`Lista de Alumnos - ${fecha}`, 10, 10);

    const presentes = [];
    const checkboxes = document.querySelectorAll('.presente');

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            presentes.push(alumnos[index]);
        }
    });

    doc.text('Alumnos presentes:', 10, 20);
    presentes.forEach((alumno, index) => {
        doc.text(`${index + 1}. ${alumno}`, 10, 30 + index * 10);
    });

    doc.save(`lista_alumnos_${fecha}.pdf`);
}

// Lista de alumnos
const alumnos = [
    "Aranda García, Bruno",
    "Aranda García, Diego",
    "Brasa Pinilla, Marcos",
    "Jiménez Márquez, Daniel",
    "Mateos Machado, Elvira",
    "Núñez González, David",
    "Núñez González, Hugo",
    "Pinilla Muñoz, Pablo",
    "Rocha Quinteros, Rusev Eydryan",
    "Sánchez Cano, Nicolás Ramón",
    "Terrón Guerrero, Cristian"
];

// Función para mostrar los alumnos en la tabla
function mostrarAlumnos() {
    const tbody = document.getElementById('alumnos');
    
    tbody.innerHTML = ''; // Limpiar tabla

    alumnos.forEach(alumno => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${alumno}</td>
            <td>
                <input type="checkbox" class="presente">
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Mostrar los alumnos al cargar la página
window.onload = mostrarAlumnos;

