// ==========================================
// 1. BANCO DE PREGUNTAS (ESTILO ALONSOFORMULA)
// ==========================================
const bancoPreguntas = [
    { t: "Dada la fórmula Fe2O3, ¿cuál es su nombre por Stock?", o: ["Óxido de hierro(II)", "Óxido de hierro(III)", "Trióxido de hierro", "Óxido ferroso"], c: 1, e: "El hierro actúa con número de oxidación +3, que se indica entre paréntesis." },
    { t: "Dado el nombre 'Óxido de calcio', ¿cuál es su fórmula química?", o: ["CaO", "Ca2O", "CaO2", "Ca2O2"], c: 0, e: "El calcio (+2) y el oxígeno (-2) se cruzan y se simplifican dando CaO." },
    { t: "Dada la fórmula Na2O, ¿cuál es su nombre sistemático?", o: ["Óxido de sodio", "Monóxido de disodio", "Dióxido de sodio", "Óxido de sodio(I)"], c: 1, e: "En la nomenclatura sistemática se leen estrictamente los prefijos multiplicadores." },
    { t: "Dado el nombre 'Trióxido de azufre', ¿cuál es su fórmula química?", o: ["SO", "SO2", "SO3", "S2O3"], c: 2, e: "El prefijo tri- indica tres átomos de oxígeno unidos a un azufre: SO₃." },
    { t: "Dada la fórmula HCl (en estado gaseoso), ¿cuál es su nombre?", o: ["Ácido clorhídrico", "Cloruro de hidrógeno", "Hidruro de cloro", "Monohidruro de cloro"], c: 1, e: "En estado gaseoso puro se nombra el no metal terminado en -uro seguido de 'de hidrógeno'." },
    { t: "Dado el nombre 'Ácido sulfhídrico', ¿cuál es su fórmula química?", o: ["HS", "H2S", "HS2", "H2S(aq)"], c: 3, e: "El sufijo -hídrico denota que el hidrácido se encuentra en disolución acuosa: H₂S(aq)." },
    { t: "Dada la fórmula NH3, ¿cuál es su nombre común aceptado?", o: ["Metano", "Azano", "Amoníaco", "Fosfano"], c: 2, e: "La IUPAC admite el nombre tradicional retenido de amoníaco para el NH₃." },
    { t: "Dado el nombre 'Hidruro de litio', ¿cuál es su fórmula química?", o: ["LiH", "LiH2", "Li2H", "HLi"], c: 0, e: "El litio (+1) se une al hidrógeno (-1) en un hidruro metálico puro: LiH." },
    { t: "Dada la fórmula AlH3, ¿cuál es su nombre sistemático?", o: ["Hidruro de aluminio", "Trihidruro de aluminio", "Hidruro de aluminio(III)", "Aluminio de hidruro"], c: 1, e: "Se lee directamente el número de hidrógenos con el prefijo tri-." },
    { t: "Dado el nombre 'Óxido de cobre(II)', ¿cuál es su fórmula química?", o: ["CuO", "Cu2O", "CuO2", "Cu2O2"], c: 0, e: "El cobre actúa con +2 y el oxígeno con -2; al cruzarse y simplificarse resulta CuO." },
    { t: "Dada la fórmula NaCl, ¿cuál es su nombre correcto?", o: ["Cloruro sódico", "Cloruro de sodio", "Monocloruro de sodio", "Clorato de sodio"], c: 1, e: "Es una sal binaria; el no metal termina en -uro seguido del metal." },
    { t: "Dado el nombre 'Difluoruro de magnesio', ¿cuál es su fórmula química?", o: ["MgF", "Mg2F", "MgF2", "Mg2F2"], c: 2, e: "El prefijo di- indica claramente dos átomos de flúor: MgF₂." },
    { t: "Dada la fórmula CO2, ¿cuál es su nombre por Stock?", o: ["Dióxido de carbono", "Óxido de carbono(IV)", "Óxido de carbono(II)", "Ananhídrido carbónico"], c: 1, e: "El carbono actúa con su número de oxidación +4, indicado con el romano (IV)." },
    { t: "Dado el nombre 'Monóxido de carbono', ¿cuál es su fórmula química?", o: ["CO", "CO2", "C2O", "CO3"], c: 0, e: "El prefijo mono- indica un único átomo de oxígeno: CO." },
    { t: "Dada la fórmula H2S (gaseoso), ¿cuál es su nombre correcto?", o: ["Ácido sulfhídrico", "Sulfuro de hidrógeno", "Hidruro de azufre", "Sulfuro de dihidrógeno"], c: 1, e: "Sin disolver en agua es un compuesto binario terminado en -uro." },
    { t: "Dado el nombre 'Dihidruro de hierro', ¿cuál es su fórmula química?", o: ["FeH", "Fe2H", "FeH2", "Fe3H2"], c: 2, e: "El prefijo di- especifica dos átomos de hidrógeno unidos al hierro: FeH₂." },
    { t: "Dada la fórmula PbO2, ¿cuál es su nombre por Stock?", o: ["Óxido de plomo(II)", "Óxido de plomo(IV)", "Dióxido de plomo", "Óxido de plomo"], c: 1, e: "Proviene de Pb₂O₄ simplificado; el plomo actúa con su estado de oxidación +4." },
    { t: "Dado el nombre 'Óxido de plata', ¿cuál es su fórmula química?", o: ["AgO", "Ag2O", "AgO2", "Ag2O2"], c: 1, e: "La plata tiene carga fija +1 y el oxígeno -2; al cruzarse resulta Ag₂O." },
    { t: "Dada la fórmula CuCl, ¿cuál es su nombre por Stock?", o: ["Cloruro de cobre(I)", "Cloruro de cobre(II)", "Monocloruro de cobre", "Cloruro de cobre"], c: 0, e: "El cobre actúa con su menor estado de oxidación, que es +1." },
    { t: "Dado el nombre 'Tricloruro de hierro', ¿cuál es su fórmula química?", o: ["FeCl", "FeCl2", "FeCl3", "Fe3Cl"], c: 2, e: "El prefijo tri- indica tres átomos de cloro unidos al hierro: FeCl₃." },
    { t: "Dada la fórmula HBr (en agua), ¿cuál es su nombre correcto?", o: ["Bromuro de hidrógeno", "Ácido bromhídrico", "Hidruro de bromo", "Ácido brómico"], c: 1, e: "Al estar disuelto en medio acuoso se antepone la palabra ácido y el sufijo -hídrico." },
    { t: "Dado el nombre 'Metano', ¿cuál es su fórmula química?", o: ["CH3", "CH4", "C2H4", "SiH4"], c: 1, e: "El metano es el nombre común aceptado por la IUPAC para el tetrahidruro de carbono, CH₄." },
    { t: "Dada la fórmula H2O2, ¿cuál es su nombre sistemático?", o: ["Óxido de hidrógeno", "Dióxido de dihidrógeno", "Peróxido de hidrógeno", "Agua oxigenada"], c: 1, e: "La nomenclatura estequiométrica lee directamente los subíndices: dióxido de dihidrógeno." },
    { t: "Dado el nombre 'Peróxido de sodio', ¿cuál es su fórmula química?", o: ["NaO", "NaO2", "Na2O", "Na2O2"], c: 3, e: "Los peróxidos contienen el grupo O₂²⁻; al cruzarse con el Na(+1) da Na₂O₂ sin simplificar." },
    { t: "Dada la fórmula K2O, ¿cuál es su nombre por Stock?", o: ["Óxido de potasio(I)", "Óxido de potasio", "Dióxido de potasio", "Óxido de potasio(II)"], c: 1, e: "El potasio tiene carga fija (+1); en Stock se prohíbe añadir el número romano." },
    { t: "Dado el nombre 'Óxido de zinc', ¿cuál es su fórmula química?", o: ["ZnO", "Zn2O", "ZnO2", "Zn2O2"], c: 0, e: "El zinc tiene carga fija +2 y el oxígeno -2; se simplifican a ZnO." },
    { t: "Dada la fórmula SF6, ¿cuál es su nombre sistemático?", o: ["Fluoruro de azufre", "Hexafluoruro de azufre", "Sulfuro de hexaflúor", "Fluoruro de azufre(VI)"], c: 1, e: "El prefijo hexa- indica la presencia de seis átomos de flúor." },
    { t: "Dado el nombre 'Yoduro de potasio', ¿cuál es su fórmula química?", o: ["KI", "K2I", "KI2", "IK"], c: 0, e: "Sal binaria neutra formada por K(+1) e I(-1): KI." },
    { t: "Dada la fórmula Au2O3, ¿cuál es su nombre por Stock?", o: ["Óxido de oro(I)", "Óxido de oro(III)", "Trióxido de dioro", "Óxido áurico"], c: 1, e: "El subíndice del oxígeno delata que el oro actúa con su estado de oxidación +3." },
    { t: "Dado el nombre 'Monohidruro de sodio', ¿cuál es su fórmula química?", o: ["NaH", "NaH2", "Na2H", "HNa"], c: 0, e: "Prefijo mono- para un hidrógeno unido a un sodio: NaH." }
];

// ==========================================
// 2. LOGICA DE CONTROL DE INTERFAZ Y NAVEGACIÓN
// ==========================================
let elegidas = [];
let exitosContados = 0;
let bolsaErrores = [];

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

function iniciarTestAleatorio() {
    document.getElementById('panel-dashboard').style.display = 'none';
    document.getElementById('panel-analisis').style.display = 'none';
    document.getElementById('btn-evaluar').style.display = 'inline-block';
    
    // Mezclador Fisher-Yates para barajar el pozo de preguntas
    let copia = [...bancoPreguntas].sort(() => 0.5 - Math.random());
    elegidas = copia.slice(0, 10);
    
    const target = document.getElementById('questions-target');
    target.innerHTML = '';
    
    elegidas.forEach((q, idx) => {
        let opts = '';
        
        // CORRECCIÓN CLAVE: Detecta si los datos usan '.o' o '.options' para evitar la congelación
        const opcionesPregunta = q.o || q.options;
        
        opcionesPregunta.forEach((opt, oIdx) => {
            opts += `<label class="option-row"><input type="radio" name="q-${idx}" value="${oIdx}"><span>${opt}</span></label>`;
        });
        
        target.innerHTML += `<div class="question-item"><div class="question-text">${idx + 1}. ${q.t}</div><div class="options-list">${opts}</div></div>`;
    });
    
    document.getElementById('panel-test').style.display = 'block';
}


function registrarErrorEnBolsa(preguntaObjeto) {
    if (!bolsaErrores.some(item => item.t === preguntaObjeto.t)) {
        bolsaErrores.push(preguntaObjeto);
    }
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
        if (!ok) registrarErrorEnBolsa(q); // Guardar error de forma automática

        target.innerHTML += `
            <div class="result-item ${ok ? 'result-correct' : 'result-incorrect'}">
                <strong>Desafío ${idx + 1}: ${ok ? '✔ CORRECTO' : '❌ INCORRECTO'}</strong><br>
                <span style="font-size:14px; color:var(--text-muted);">Tu elección: ${ans !== null ? q.o[ans] : "No contestado"} | Estándar: ${q.o[q.c]}</span>
                <div class="explanation"><strong>Explicación Científica:</strong> ${q.e}</div>
            </div>
        `;
    });

    if (aciertos >= 8 && exitosContados < 3) {
        document.getElementById(`dot-${exitosContados}`).classList.add('success');
        exitosContados++;
    }

    const porcBase = (exitosContados / 3) * 100;
    document.getElementById('progreso-txt').innerText = `${Math.round(porcBase)}%`;
    document.getElementById('progreso-bar').style.width = `${porcBase}%`;

    // Desbloqueo condicional del mapa de ruta al lograr 3 éxitos
    if (exitosContados >= 3) {
        document.getElementById('status-repaso').className = "badge-status status-dominado";
        document.getElementById('status-repaso').innerText = "Dominado";
        document.getElementById('card-binarios').classList.remove('locked');
        document.getElementById('status-binarios').className = "badge-status status-progreso";
        document.getElementById('status-binarios').innerText = "Abierto";
        
        if (typeof activarLaboratorioBinarios === 'function') {
            activarLaboratorioBinarios();
        }
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

// ==========================================
// 3. SECCIÓN: REPASAR ERRORES (BOLSA DE FALLOS)
// ==========================================
function mostrarPantallaReparar() {
    document.getElementById('panel-dashboard').style.display = 'none';
    const target = document.getElementById('reparar-target-preguntas');
    target.innerHTML = '';

    if (bolsaErrores.length === 0) {
        target.innerHTML = `
            <div style="padding: 20px; background: rgba(0, 230, 118, 0.05); border: 1px solid var(--accent-green); border-radius: 6px; text-align: center;">
                <h3 style="color: var(--accent-green); margin: 0;">¡Felicidades! Tu bitácora de errores está limpia.</h3>
                <p style="color: var(--text-muted); margin: 10px 0 0 0; font-size: 14px;">No tienes fallos pendientes de repasar en este bloque.</p>
            </div>
        `;
        document.getElementById('panel-reparar').style.display = 'block';
        return;
    }

    bolsaErrores.forEach((q, idx) => {
        let opts = '';
        q.o.forEach((opt, oIdx) => {
            opts += `<label class="option-row"><input type="radio" name="reparar-q-${idx}" value="${oIdx}"><span>${opt}</span></label>`;
        });
        target.innerHTML += `
            <div class="question-item" style="border-left: 3px solid var(--accent-yellow); padding-left: 15px;">
                <div class="question-text"><span style="color: var(--accent-yellow);">Pendiente de Enmienda:</span> ${q.t}</div>
                <div class="options-list">${opts}</div>
            </div>
        `;
    });
    document.getElementById('panel-reparar').style.display = 'block';
}

function evaluarReparacion() {
    let erroresCorregidos = [];
    bolsaErrores.forEach((q, idx) => {
        const checked = document.querySelector(`input[name="reparar-q-${idx}"]:checked`);
        if (checked && parseInt(checked.value) === q.c) { 
            erroresCorregidos.push(q); 
        }
    });
    bolsaErrores = bolsaErrores.filter(q => !erroresCorregidos.includes(q));
    alert(`¡Validación completada! Has repasado con éxito ${erroresCorregidos.length} errores críticos.`);
    mostrarPantallaReparar();
}

// ==========================================
// 4. BLOQUE DE CARGA: COMPUESTOS BINARIOS (LABORATORIO DE ERRORES)
// ==========================================
function activarLaboratorioBinarios() {
    const labTarget = document.getElementById('laboratorio-target-preguntas');
    if (!labTarget) return;
    
    const casosErrores = [
        { f: "FeO3", n: "Óxido de hierro(III)", e: "El hierro actúa con +3 y el oxígeno con -2. La fórmula correcta es Fe₂O₃. El becario ha olvidado realizar el cruce de cargas de forma correcta.", c: "Fe2O3" },
        { f: "AlH", n: "Hidruro de aluminio", e: "El aluminio tiene un único estado estable de +3 y el hidrógeno actúa con -1. La estructura corregida requiere tres hidrógenos: AlH₃.", c: "AlH3" }
    ];
    
    labTarget.innerHTML = "";
    casosErrores.forEach((caso, i) => {
        labTarget.innerHTML += `
            <div style="margin-bottom: 20px; padding: 20px; background: rgba(0,0,0,0.3); border-radius: 6px; border-left: 4px solid var(--accent-yellow);">
                <strong style="color:#fff;">Muestra de Auditoría #${i+1}:</strong><br>
                <span style="font-size: 14px; color: var(--text-muted); display:block; margin: 5px 0;">Sustancia: <strong>${caso.n}</strong> | Inscripción del frasco: <code style="color:var(--accent-critical); font-size:16px; font-weight:bold;">${caso.f}</code></span>
                <div style="margin-top: 12px;">
                    <label style="font-size: 13.5px; display:block; margin-bottom:6px; color:#fff;">Fórmula molecular enmendada:</label>
                    <input type="text" id="correc-lab-${i}" style="background:#0a0e17; border:1px solid var(--border); color:#fff; padding:8px; border-radius:4px; font-size:14px; width:100%; max-width:250px;" placeholder="Ej: Fe2O3">
                </div>
            </div>
        `;
    });
    document.getElementById('panel-laboratorio-binarios').style.display = 'block';
}

