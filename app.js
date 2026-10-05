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
// BANCO DE PREGUNTAS ASIGNADO (PARTE B - ALGORITMO Y EVALUACIÓN)
function iniciarTestAleatorio() {
    document.getElementById('panel-dashboard').style.display = 'none';
    document.getElementById('panel-analisis').style.display = 'none';
    document.getElementById('btn-evaluar').style.display = 'inline-block';
    
    // Mezclador aleatorio para garantizar baterías únicas en cada intento
    let copia = [...bancoPreguntas].sort(() => 0.5 - Math.random());
    elegidas = copia.slice(0, 10);
    
    const target = document.getElementById('questions-target');
    target.innerHTML = '';
    
    elegidas.forEach((q, idx) => {
        let opts = '';
        q.o.forEach((opt, oIdx) => {
            opts += `<label class="option-row"><input type="radio" name="q-${idx}" value="${oIdx}"><span>${opt}</span></label>`;
        });
        target.innerHTML += `<div class="question-item"><div class="question-text">${idx + 1}. ${q.t}</div><div class="options-list">${opts}</div></div>`;
    });
    document.getElementById('panel-test').style.display = 'block';
}

function evaluarTest() {
    let aciertos = 0;
    const target = document.getElementById('analisis-target');
    target.innerHTML = '';

    elegidas.forEach((q, idx) => {
        const checked = document.querySelector(`input[name="q-${idx}"]:checked`);
        const ans = checked ? parseInt(checked.value) : null;
        const ok = (ans === q.c);
        if (ok) aciertos++;

        target.innerHTML += `
            <div class="result-item ${ok ? 'result-correct' : 'result-incorrect'}">
                <strong>Desafío ${idx + 1}: ${ok ? '✔ CORRECTO' : '❌ INCORRECTO'}</strong><br>
                <span style="font-size:14px; color:var(--text-muted);">Tu elección: ${ans !== null ? q.o[ans] : "No contestado"} | Estándar: ${q.o[q.c]}</span>
                <div class="explanation"><strong>Explicación Científica:</strong> ${q.e}</div>
            </div>
        `;
    });

    // Validación estricta de la regla de los 3 éxitos (mínimo 8/10)
    if (aciertos >= 8 && exitosContados < 3) {
        document.getElementById(`dot-${exitosContados}`).classList.add('success');
        exitosContados++;
    }

    const porcBase = (exitosContados / 3) * 100;
    document.getElementById('progreso-txt').innerText = `${Math.round(porcBase)}%`;
    document.getElementById('progreso-bar').style.width = `${porcBase}%`;

    // Desbloqueo condicional del mapa de ruta
    if (exitosContados >= 3) {
        document.getElementById('status-repaso').className = "badge-status status-dominado";
        document.getElementById('status-repaso').innerText = "Dominado";
        document.getElementById('card-binarios').classList.remove('locked');
        document.getElementById('status-binarios').className = "badge-status status-progreso";
        document.getElementById('status-binarios').innerText = "Abierto";
    }

    document.getElementById('btn-evaluar').style.display = 'none';
    document.getElementById('panel-analisis').style.display = 'block';
    document.getElementById('panel-analisis').scrollIntoView({ behavior: 'smooth' });
}

function resetYVolver() {
    document.getElementById('form-test').reset();
    document.getElementById('panel-test').style.display = 'none';
    document.getElementById('panel-dashboard').style.display = 'block';
}

