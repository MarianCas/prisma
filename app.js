// BANCO DE PREGUNTAS ASIGNADO (PARTE A)
const bancoPreguntas = [
    { t: "¿Cuál es el símbolo químico correcto del Potasio?", o: ["P", "K", "Pt", "Po"], c: 1, e: "El símbolo es la K, del latín 'Kalium'. La P representa al Fósforo." },
    { t: "¿Número de oxidación del Oxígeno en la mayoría de óxidos?", o: ["+2", "-1", "-2", "0"], c: 2, e: "Actúa con -2 porque pertenece al grupo de los anfígenos y tiende a ganar 2 electrones para estabilizarse." },
    { t: "¿Cuál es el símbolo químico del Sodio?", o: ["S", "So", "Na", "Sd"], c: 2, e: "Es Na, derivado de su denominación clásica en latín 'Natrium'." },
    { t: "En los hidruros metálicos (como el NaH), el Hidrógeno actúa con carga:", o: ["+1", "-1", "-2", "+2"], c: 1, e: "Frente a un metal, el Hidrógeno es más electronegativo y adopta el estado de oxidación -1." },
    { t: "El compuesto 'Trióxido de azufre' sigue la nomenclatura:", o: ["Tradicional", "Stock", "Sistemática (Prefijos)", "De sustitución"], c: 2, e: "Los prefijos numerales (mono-, di-, tri-) definen exclusivamente al modelo Sistemático IUPAC." },
    { t: "Fórmula simplificada de la combinación entre Calcio (+2) y Oxígeno (-2):", o: ["Ca2O2", "CaO", "CaO2", "Ca2O"], c: 1, e: "Las proporciones Ca₂O₂ se dividen por su máximo común divisor, quedando neutralizado como CaO." },
    { t: "¿Qué sufijo caracteriza al elemento más electronegativo en una sal binaria (ej: NaCl)?", o: ["-ato", "-ito", "-uro", "-ico"], c: 2, e: "La IUPAC establece la terminación '-uro' para el elemento no metálico situado a la derecha." },
    { t: "¿Cuál elemento forma parte de la familia de los Halógenos (Grupo 17)?", o: ["Cloro (Cl)", "Hierro (Fe)", "Calcio (Ca)", "Azufre (S)"], c: 0, e: "El Cloro (Cl) es un halógeno puro. El Azufre es anfígeno y el Calcio alcalinotérreo." },
    { t: "Prefijo de nomenclatura empleado para denotar 4 átomos de una especie:", o: ["Cuadri-", "Tetra-", "Hexa-", "Penta-"], c: 1, e: "El estándar internacional de la IUPAC utiliza el prefijo griego 'tetra-' para el número cuatro." },
    { t: "La nomenclatura del compuesto gaseoso HCl disuelto en agua es:", o: ["Ácido clórico", "Ácido clorhídrico", "Cloruro de hidrógeno", "Hidruro de cloro"], c: 1, e: "Al encontrarse en estado acuoso, los hidrácidos adoptan la estructura 'Ácido ...hídrico'." }
];

let elegidas = [];
let exitosContados = 0;

function switchView(v) {
    document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    if(v === 'alumno') {
        document.getElementById('view-alumno').classList.add('active');
        document.getElementById('nav-alumno').classList.add('active');
    } else {
        document.getElementById('view-gestion').classList.add('active');
        document.getElementById('nav-gestion').classList.add('active');
    }
}
