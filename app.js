// =========================================================================
// 1. MOTOR DE INTERFAZ, NAVEGACIÓN Y CONFIGURACIÓN DE VARIABLES GLOBALES
// =========================================================================
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

function resetYVolver() {
    const form = document.getElementById('form-test');
    if (form) form.reset();
    document.getElementById('panel-test').style.display = 'none';
    document.getElementById('panel-reparar').style.display = 'none';
    document.getElementById('panel-dashboard').style.display = 'block';
}

// =========================================================================
// 2. SISTEMA ALEATORIO: INICIAR EL REPASO ESTRATÉGICO
// =========================================================================
function iniciarTestAleatorio() {
    document.getElementById('panel-dashboard').style.display = 'none';
    document.getElementById('panel-analisis').style.display = 'none';
    document.getElementById('btn-evaluar').style.display = 'inline-block';
    
    // Barajamos el banco de preguntas de forma aleatoria pura
    let copia = [...bancoPreguntas].sort(() => 0.5 - Math.random());
    elegidas = copia.slice(0, 10);
    
    const target = document.getElementById('questions-target');
    target.innerHTML = '';
    
    elegidas.forEach((q, idx) => {
        let opts = '';
        // Evita bloqueos leyendo .o (nuevo formato) o .options (viejo formato)
        const opcionesPregunta = q.o || q.options;
        
        opcionesPregunta.forEach((opt, oIdx) => {
            opts += `<label class="option-row"><input type="radio" name="q-${idx}" value="${oIdx}"><span>${opt}</span></label>`;
        });
        
        target.innerHTML += `<div class="question-item"><div class="question-text">${idx + 1}. ${q.t}</div><div class="options-list">${opts}</div></div>`;
    });
    
    document.getElementById('panel-test').style.display = 'block';
}

// =========================================================================
// 3. REGISTRO Y REPASO DE ERRORES (BOLSA DE FALLOS)
// =========================================================================
function registrarErrorEnBolsa(preguntaObjeto) {
    if (!bolsaErrores.some(item => item.t === preguntaObjeto.t)) {
        bolsaErrores.push(preguntaObjeto);
    }
}

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
        const opcionesPregunta = q.o || q.options;
        
        opcionesPregunta.forEach((opt, oIdx) => {
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
        const idxCorrecta = q.c !== undefined ? q.c : q.correct;
        if (checked && parseInt(checked.value) === idxCorrecta) { 
            erroresCorregidos.push(q); 
        }
    });
    bolsaErrores = bolsaErrores.filter(q => !erroresCorregidos.includes(q));
    alert(`¡Validación completada! Has repasado con éxito ${erroresCorregidos.length} errores críticos.`);
    mostrarPantallaReparar();
}

// =========================================================================
// 4. EVALUACIÓN CIENTÍFICA DEL TEST GENERAL Y CONTROL DE RACHAS
// =========================================================================
function evaluarTest() {
    let aciertos = 0;
    const target = document.getElementById('analisis-target');
    target.innerHTML = '';

    elegidas.forEach((q, idx) => {
        const checked = document.querySelector(`input[name="q-${idx}"]:checked`);
        const ans = checked ? parseInt(checked.value) : null;
        const idxCorrecta = q.c !== undefined ? q.c : q.correct;
        const ok = (ans === idxCorrecta);
        
        if (ok) aciertos++;
        if (!ok) registrarErrorEnBolsa(q);

        const opcionesPregunta = q.o || q.options;
        let textoRespuesta = ans !== null ? opcionesPregunta[ans] : "No contestado";
        let textoCorrecta = opcionesPregunta[idxCorrecta];

        target.innerHTML += `
            <div class="result-item ${ok ? 'result-correct' : 'result-incorrect'}">
                <strong>Desafío ${idx + 1}: ${ok ? '✔ CORRECTO' : '❌ INCORRECTO'}</strong><br>
                <span style="font-size:14px; color:var(--text-muted);">Tu elección: ${textoRespuesta} | Estándar: ${textoCorrecta}</span>
                <div class="explanation"><strong>Explicación Científica:</strong> ${q.e || q.exp}</div>
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

    if (exitosContados >= 3) {
        document.getElementById('status-repaso').className = "badge-status status-dominado";
        document.getElementById('status-repaso').innerText = "Dominado";
        document.getElementById('card-binarios').classList.remove('locked');
        document.getElementById('status-binarios').className = "badge-status status-progreso";
        document.getElementById('status-binarios').innerText = "Abierto";
        if (typeof activarLaboratorioBinarios === 'function') { activarLaboratorioBinarios(); }
    }

    document.getElementById('btn-evaluar').style.display = 'none';
    document.getElementById('panel-analisis').style.display = 'block';
    document.getElementById('panel-analisis').scrollIntoView({ behavior: 'smooth' });
}

// =========================================================================
// 5. BLOQUE DE CARGA: COMPUESTOS BINARIOS (LABORATORIO DE ERRORES)
// =========================================================================
function activarLaboratorioBinarios() {
    const labTarget = document.getElementById('laboratorio-target-preguntas');
    if (!labTarget) return;
    
    const casosErrores = [
        { f: "FeO3", n: "Óxido de hierro(III)", e: "El hierro actúa con +3 y el oxígeno con -2. La fórmula correcta es Fe₂O₃.", c: "Fe2O3" },
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
