// BANCO DE PREGUNTAS ASIGNADO (PARTE A)
// BLOQUE A: CONFIGURACIÓN INICIAL DEL BANCO DE DATOS
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
    { t: "¿Cuál es el símbolo químico del Hierro?", o: ["H", "Hi", "Fe", "Ir"], c: 2, e: "Es Fe, originado a partir de su raíz etimológica latina 'Ferrum'." },
    { t: "¿Qué estado de oxidación presentan los metales alcalinos del Grupo 1?", o: ["+1", "+2", "-1", "+3"], c: 0, e: "Al poseer un único electrón periférico, lo ceden adquiriendo una carga neta de +1." },
    { t: "En Stock, las valencias variables de un metal se representan mediante:", o: ["Prefijos", "Números romanos entre paréntesis", "Sufijos oso/ico", "No se indican"], c: 1, e: "Stock normalizó el uso de números romanos encerrados entre paréntesis tras el metal." },
    { t: "Fórmula molecular inalterable del Peróxido de Hidrógeno:", o: ["HO", "H2O", "H2O2", "HO2"], c: 2, e: "Los peróxidos contienen el grupo (O₂)²⁻, dando H₂O₂ sin simplificar." },
    { t: "¿Cuál es el símbolo químico asignado al Azufre?", o: ["Az", "A", "S", "Sf"], c: 2, e: "Su símbolo es S, heredado directamente del latín 'Sulfur'." },
    { t: "¿Cuál es el símbolo del Calcio?", o: ["C", "Ca", "Cl", "Co"], c: 1, e: "El símbolo del Calcio es Ca. C es Carbono y Cl es Cloro." },
    { t: "¿Con qué número de oxidación actúa el Oxígeno en los peróxidos?", o: ["-2", "-1", "+2", "0"], c: 1, e: "Excepcionalmente en peróxidos, el grupo O₂ actúa con carga global -2, por lo que cada O tiene -1." },
    { t: "¿Cuál es el símbolo químico del Magnesio?", o: ["Mn", "Mg", "Ma", "Mo"], c: 1, e: "Es Mg. Mn es Manganeso y Mo es Molibdeno." },
    { t: "En el compuesto LiH, el Hidrógeno actúa con un estado de oxidación de:", o: ["+1", "0", "-1", "-2"], c: 2, e: "Es un hidruro metálico; el hidrógeno es más electronegativo que el litio y actúa con -1." },
    { t: "El nombre 'Monóxido de carbono' pertenece a la nomenclatura:", o: ["Stock", "Tradicional", "Sistemática", "Funcional"], c: 2, e: "El uso de prefijos como 'mono-' es característico de la nomenclatura sistemática." },
    { t: "Al combinar Aluminio (+3) y Oxígeno (-2), obtenemos la fórmula:", o: ["AlO", "Al3O2", "Al2O3", "AlO3"], c: 2, e: "Al cruzar los números de oxidación obtienes Al₂O₃, que no se puede simplificar." },
    { t: "El compuesto HF disuelto en agua recibe el nombre de:", o: ["Ácido fluorhídrico", "Fluoruro de hidrógeno", "Hidruro de flúor", "Ácido fluórico"], c: 0, e: "En disolución acuosa, los hidrácidos se nombran con el sufijo '-hídrico'." },
    { t: "¿Cuál es el símbolo químico del Carbono?", o: ["Ca", "Cb", "Cr", "C"], c: 3, e: "El Carbono se representa con una única letra C mayúscula." },
    { t: "¿Qué número de oxidación fijo tienen los alcalinotérreos (Grupo 2) como el Ba o Sr?", o: ["+1", "+2", "+3", "-2"], c: 1, e: "Tienen dos electrones en su capa de valencia y los pierden, adoptando siempre el estado +2." },
    { t: "El nombre 'Óxido de cobre(I)' indica que el cobre actúa con carga:", o: ["+1", "+2", "-1", "-2"], c: 0, e: "El número romano entre paréntesis en la nomenclatura de Stock indica el estado de oxidación del metal." },
    { t: "¿Cuál es el símbolo químico del Nitrógeno?", o: ["Ni", "Nt", "N", "Na"], c: 2, e: "El Nitrógeno se representa con la letra N. Ni es Níquel y Na es Sodio." },
    { t: "¿Qué terminación se le da al no metal en el compuesto CuS?", o: ["-ato", "-ito", "-ico", "-uro"], c: 3, e: "Las sales binarias terminan siempre en '-uro' para su elemento más electronegativo." },
    { t: "¿Cuál es el símbolo químico del Oro?", o: ["Or", "Au", "Ag", "Pt"], c: 1, e: "Es Au, derivado de su nombre original en latín 'Aurum'." },
    { t: "El prefijo numérico para indicar 5 átomos de un elemento es:", o: ["Hexa-", "Penta-", "Tetra-", "Multi-"], c: 1, e: "El prefijo griego correcto para el número cinco es 'penta-'." },
    { t: "El compuesto NH₃ es un hidruro no metálico conocido comúnmente como:", o: ["Metano", "Fosfano", "Amoníaco", "Estibano"], c: 2, e: "NH₃ tiene el nombre retenido y aceptado por la IUPAC de amoníaco." },
    { t: "¿Cuál es el símbolo químico de la Plata?", o: ["Pl", "Ag", "Au", "Pt"], c: 1, e: "Es Ag, proveniente de su raíz latina 'Argentum'." },
    { t: "¿Cuál es el estado de oxidación del Hidrógeno cuando se combina con No Metales (ej: HCl)?", o: ["-1", "0", "+1", "+2"], c: 2, e: "Frente a no metales más electronegativos, el hidrógeno actúa con su estado normal de +1." },
    { t: "El compuesto Fe₂O₃ se nombra en la nomenclatura de Stock como:", o: ["Óxido de hierro", "Óxido de hierro(II)", "Óxido de hierro(III)", "Trióxido de hierro"], c: 2, e: "El hierro actúa con carga +3, lo que se indica con (III) en números romanos." },
    { t: "¿Cuál es el símbolo químico del Fósforo?", o: ["F", "Ph", "Fo", "P"], c: 3, e: "El símbolo del Fósforo es P, de su nombre clásico 'Phosphorus'. F es Flúor." },
    { t: "Al cruzar las cargas de Plomo (+4) y Oxígeno (-2) obtenemos Pb₂O₄. Su fórmula correcta es:", o: ["Pb2O4", "PbO2", "PbO4", "Pb4O2"], c: 1, e: "Se debe simplificar dividiendo los subíndices entre 2, lo que da como resultado PbO₂." },
    { t: "¿Cuál es el símbolo químico del Cobre?", o: ["Co", "Cr", "Cu", "Cu"], c: 2, e: "El Cobre se representa con el símbolo Cu, derivado de 'Cuprum'." },
    { t: "El compuesto CH₄ recibe el nombre sistemático de metano. Pertenece al grupo de:", o: ["Hidrácidos", "Hidruros volátiles", "Óxidos", "Sales volátiles"], c: 1, e: "Las combinaciones de hidrógeno con C, N, P, As, Sb, Si y B son hidruros volátiles." },
    { t: "¿Cuál de los siguientes prefijos indica un solo átomo en la nomenclatura sistemática?", o: ["Mono-", "Di-", "Uni-", "Simple-"], c: 0, e: "La IUPAC emplea el prefijo 'mono-' para indicar la presencia de un solo átomo." },
    { t: "¿Cuál es el símbolo químico del Mercurio?", o: ["Me", "Mr", "Hg", "Mg"], c: 2, e: "Es Hg, procedente de su antiguo nombre griego 'Hydrargyrum' (plata líquida)." },
    { t: "Si combinamos Sodio (+1) y Oxígeno (-2), la fórmula resultante es:", o: ["NaO", "NaO2", "Na2O", "Na2O2"], c: 2, e: "Al cruzar los estados de oxidación, el 2 del oxígeno pasa al sodio y el 1 del sodio al oxígeno: Na₂O." },
    { t: "¿Cuál es el símbolo químico del Plomo?", o: ["Pl", "Pb", "Pd", "Pm"], c: 1, e: "Es Pb, derivado de su nombre en latín 'Plumbum'." },
    { t: "La nomenclatura tradicional utiliza sufijos. ¿Cuál se usa para la valencia más alta de dos posibles?", o: ["-oso", "-ico", "-ito", "-ato"], c: 1, e: "El sufijo '-ico' denota la valencia mayor de un elemento con dos estados de oxidación posibles." },
    { t: "¿Cuál es el símbolo químico del Zinc?", o: ["Z", "Zi", "Zn", "Zc"], c: 2, e: "El Zinc se representa universalmente con el símbolo Zn." },
    { t: "El compuesto H₂S en estado gaseoso puro se nombra como:", o: ["Ácido sulfhídrico", "Sulfuro de hidrógeno", "Hidruro de azufre", "Sulfuro de dihidrógeno"], c: 1, e: "En estado gaseoso puro (no disuelto), se nombra el no metal terminado en '-uro' seguido de 'de hidrógeno'." },
    { t: "¿Cuál es el símbolo químico del Yodo?", o: ["Y", "I", "Yo", "Id"], c: 1, e: "El símbolo internacional del Yodo es la letra I mayúscula." },
    { t: "En la fórmula AlH₃, ¿qué tipo de compuesto tenemos?", o: ["Hidrácido", "Hidruro metálico", "Óxido no metálico", "Sal binaria"], c: 1, e: "Es la combinación de un metal (Aluminio) con el Hidrógeno, por tanto es un hidruro metálico." },
    { t: "¿Cuál es el símbolo químico del Bario?", o: ["B", "Br", "Ba", "Bi"], c: 2, e: "Es Ba. B es Boro, Br es Bromo y Bi es Bismuto." },
    { t: "El prefijo numérico griego empleado para indicar 6 átomos es:", o: ["Hexa-", "Hepta-", "Penta-", "Deca-"], c: 0, e: "Se utiliza el prefijo 'hexa-' para seis átomos (ej: hexacloruro de azufre)." },
    { t: "¿Cuál es el símbolo químico del Bromo?", o: ["B", "Br", "Bo", "Bm"], c: 1, e: "El Bromo se representa con las letras Br." },
    { t: "Al combinar Hierro (+2) y Oxígeno (-2) obtenemos Fe₂O₂. Su fórmula final es:", o: ["Fe2O2", "FeO", "Fe2O", "FeO2"], c: 1, e: "Se simplifican los subíndices dividiendo por 2, obteniendo la fórmula FeO." },
    { t: "¿Cuál es el símbolo químico del Flúor?", o: ["Fl", "F", "Fu", "Fr"], c: 1, e: "El Flúor se representa únicamente con la letra F. Fr es Francio." },
    { t: "El estado de oxidación del Azufre en el compuesto H₂S es:", o: ["+2", "-2", "+6", "-1"], c: 1, e: "Como el hidrógeno actúa con +1, los dos hidrógenos suman +2; el azufre debe actuar con -2 para neutralizar." },
    { t: "¿Cuál es el símbolo químico del Cloro?", o: ["C", "Cl", "Cr", "Ch"], c: 1, e: "El Cloro se representa con el símbolo Cl." },
    { t: "El compuesto N₂O₃ se nombra en la nomenclatura sistemática como:", o: ["Óxido de nitrógeno", "Trióxido de dinitrógeno", "Óxido de nitrógeno(III)", "Anhidrido nitroso"], c: 1, e: "Se leen los átomos directamente usando prefijos: tres oxígenos (trióxido) y dos nitrógenos (dinitrógeno)." },
    { t: "¿Cuál es el símbolo químico del Litio?", o: ["L", "Li", "Lt", "Lu"], c: 1, e: "El Litio se representa con las letras Li." },
    { t: "La combinación de un No Metal con Oxígeno genera un:", o: ["Óxido metálico", "Óxido no metálico (Ananhídrido)", "Hidruro", "Sal binaria"], c: 1, e: "La unión de oxígeno con un no metal da lugar a un óxido no metálico." },
    { t: "¿Cuál es el símbolo químico del Aluminio?", o: ["Al", "Am", "Au", "An"], c: 0, e: "El Aluminio se representa con el símbolo Al." },
    { t: "En la fórmula K₂O, el Potasio actúa con su único número de oxidación, que es:", o: ["+2", "+1", "-1", "0"], c: 1, e: "El Potasio es un metal alcalino del grupo 1, por lo que su estado de oxidación es invariablemente +1." },
    { t: "¿Cuál es el símbolo químico del Silicio?", o: ["S", "Si", "Sl", "Sc"], c: 1, e: "Es Si. S representa al Azufre." },
    { t: "El compuesto CaH₂ se nombra en el sistema de Stock como:", o: ["Hidruro de calcio", "Dihidruro de calcio", "Hidruro de calcio(II)", "Ácido cálcico"], c: 0, e: "Como el calcio solo tiene una valencia (+2), Stock prohíbe poner el número romano." },
    { t: "¿Cuál es el símbolo químico del Platino?", o: ["Pl", "Pt", "Pa", "Pb"], c: 1, e: "El Platino se representa internacionalmente como Pt." },
    { t: "Al combinar Carbono (+4) y Oxígeno (-2) resulta C₂O₄. La fórmula correcta es:", o: ["C2O4", "CO", "CO2", "C4O2"], c: 2, e: "Dividiendo ambos subíndices por 2 obtenemos la fórmula del dióxido de carbono: CO₂." },
    { t: "¿Cuál es el símbolo químico del Arsénico?", o: ["Ar", "As", "An", "Ac"], c: 1, e: "Es As. Ar corresponde al Argón (gas noble)." },
    { t: "La nomenclatura tradicional para el compuesto FeO usa el sufijo:", o: ["-ico", "-oso", "-ato", "-ito"], c: 1, e: "El hierro actúa con su valencia menor (+2), por lo que se emplea el sufijo '-oso' (óxido ferroso)." },
    { t: "¿Cuál es el símbolo químico del Cromo?", o: ["C", "Co", "Cr", "Cm"], c: 2, e: "El Cromo se representa con el símbolo Cr." },
    { t: "En el compuesto iónico NaCl, la carga neta total de la molécula es:", o: ["+1", "-1", "0", "+2"], c: 2, e: "Todos los compuestos químicos estables y neutros tienen una carga global igual a cero." },
    { t: "¿Cuál es el símbolo químico del Manganeso?", o: ["Mg", "Mn", "Ma", "Mo"], c: 1, e: "Es Mn. Mg es Magnesio." },
    { t: "El prefijo numérico empleado para indicar 7 átomos de un elemento es:", o: ["Hepta-", "Hexa-", "Octa-", "Septi-"], c: 0, e: "La nomenclatura IUPAC dicta el uso del prefijo 'hepta-' para el número siete." },
    { t: "¿Cuál es el símbolo químico del Estroncio?", o: ["Es", "St", "Sr", "Sn"], c: 2, e: "Es Sr. Sn representa al Estaño." },
    { t: "El compuesto PCl₃ se clasifica como una:", o: ["Sal binaria neutra", "Sal volátil (No metal - No metal)", "Óxido", "Hidruro"], c: 1, e: "Al ser una combinación de dos elementos no metálicos, constituye una sal volátil." },
    { t: "¿Cuál es el símbolo químico del Estaño?", o: ["Es", "Et", "Sn", "St"], c: 2, e: "Es Sn, derivado de su nombre antiguo 'Stannum'." },
    { t: "En los peróxidos como el Na₂O₂, ¿se pueden simplificar los subíndices?", o: ["Sí, siempre", "No, porque se rompería el grupo peroxo O2", "Sólo si el metal es alcalino", "Sí, dividiendo entre 4"], c: 1, e: "En los peróxidos, el grupo funcional (O₂)²⁻ es una unidad estructural irreducible; no se simplifica." },
    { t: "Cuál es el símbolo químico del Níquel?", o: ["N", "Ni", "Nk", "Nu"], c: 1, e: "El Níquel se representa con el símbolo Ni. N es Nitrógeno." },
    { t: "El nombre 'Dihidruro de hierro' pertenece a la nomenclatura:", o: ["Stock", "Sistemática", "Tradicional", "Iónica"], c: 1, e: "El uso de prefijos numerales como 'di-' delata al sistema estequiométrico o sistemático." },
    { t: "Intel: ¿Cuál es el símbolo químico del Boro?", o: ["Bo", "Br", "B", "Ba"], c: 2, e: "El Boro se representa con la letra B mayúscula." },
    { t: "Al combinar Azufre (+4) y Oxígeno (-2) resulta S₂O₄. Su fórmula simplificada es:", o: ["SO2", "S2O4", "SO4", "S4O2"], c: 0, e: "Simplificando S₂O₄ dividiendo entre 2, obtenemos SO₂ (dióxido de azufre)." },
    { t: "¿Cuál es el símbolo químico del Cobalto?", o: ["C", "Co", "Cb", "Ct"], c: 1, e: "El Cobalto se representa con las letras Co." },
    { t: "La fórmula NH₃ recibe el nombre sistemático IUPAC sustitutivo de:", o: ["Amoníaco", "Azano", "Metano", "Nitruro de hidrógeno"], c: 1, e: "Aunque amoníaco se acepta, el nombre sistemático puro de sustitución de la IUPAC es azano." },
    { t: "¿Cuál es el símbolo químico del Helio?", o: ["H", "He", "Hl", "Ho"], c: 1, e: "El Helio se representa con el símbolo He. H es Hidrógeno." },
    { t: "El estado de oxidación del Cloro en el compuesto iónico AlCl₃ es:", o: ["+1", "-1", "-3", "+3"], c: 1, e: "Al ser una sal binaria, el halógeno situado a la derecha actúa siempre con su carga fija de -1." },
    { t: "¿Cuál es el símbolo químico del Oxígeno?", o: ["Ox", "O", "Os", "On"], c: 1, e: "El Oxígeno se representa con la letra O. Os es Osmio." },
    { t: "El compuesto Li₂O₂ es un ejemplo de:", o: ["Óxido metálico", "Peróxido", "Hidróxido", "Sal binaria"], c: 1, e: "Mantiene la proporción sin simplificar del grupo peroxo unida a un metal: es un peróxido." },
    { t: "¿Cuál es el símbolo químico del Hidrógeno?", o: ["Hi", "Hd", "H", "Hg"], c: 2, e: "El Hidrógeno se representa con la letra H. Hg es Mercurio." },
    { t: "En el sistema Stock, para el compuesto AgCl, ¿por qué no se escribe 'Óxido de plata(I)'?", o: ["Porque no es un óxido", "Porque la plata solo tiene un estado de oxidación (+1)", "Porque falta el oxígeno", "Ambas respuestas A y B son correctas"], c: 3, e: "No es un óxido (es una sal) y, además, la plata tiene valencia fija, por lo que omitiría el romano." },
    { t: "¿Cuál es el símbolo químico del Flúor?", o: ["Fl", "Fr", "F", "Fi"], c: 2, e: "El Flúor es la letra F." },
    { t: "El prefijo numérico para indicar tres átomos en un compuesto inorgánico es:", o: ["Tri-", "Tera-", "Bi-", "Meti-"], c: 0, e: "La IUPAC utiliza el prefijo de origen griego 'tri-'." },
    { t: "¿Cuál es el símbolo químico del Berilio?", o: ["B", "Be", "Br", "Bi"], c: 1, e: "El Berilio se denota como Be." },
    { t: "El compuesto SiH₄ recibe el nombre aceptado de:", o: ["Silicato", "Silano", "Metano", "Hidruro de silicio"], c: 1, e: "SiH₄ es un hidruro volátil no metálico con el nombre propio admitido de silano." },
    { t: "¿Cuál es el símbolo químico del Antimonio?", o: ["An", "Am", "Sb", "St"], c: 2, e: "Es Sb, derivado de su nombre clásico en latín 'Stibium'." },
    { t: "Al combinar Nitrógeno (+3) e Hidrógeno (-1) en un hidruro, se obtiene:", o: ["NH3", "N3H", "HN3", "NH"], c: 0, e: "Se coloca el elemento menos electronegativo a la izquierda (N) y se cruzan cargas: NH₃." },
    { t: "¿Cuál es el símbolo químico del Bismuto?", o: ["B", "Bi", "Bs", "Bm"], c: 1, e: "El Bismuto se representa con las letras Bi." },
    { t: "Las combinaciones binarias de hidrógeno con halógenos o anfígenos (ej: HCl, H₂S) se clasifican como:", o: ["Hidruros metálicos", "Hidrácidos", "Hidruros volátiles", "Sales neutras"], c: 1, e: "Tienen carácter ácido en disolución y se encuadran de forma específica como hidrácidos." },
    { t: "¿Cuál es el símbolo químico del Cadmio?", o: ["Ca", "Cd", "Cm", "Co"], c: 1, e: "El Cadmio se representa con las letras Cd." },
    { t: "En la fórmula CuCl₂, el número de oxidación con el que actúa el Cobre es:", o: ["+1", "+2", "-1", "-2"], c: 1, e: "Como hay dos cloros con carga -1 (total -2), el cobre debe aportar una carga de +2." },
    { t: "¿Cuál es el símbolo químico del Carbono?", o: ["C", "Ca", "Co", "Cr"], c: 0, e: "Es la letra C." },
    { t: "El nombre 'Tetraóxido de dinitrógeno' corresponde a la fórmula molecular:", o: ["N2O4", "NO2", "N4O2", "N2O"], c: 0, e: "Se traduce directamente del nombre: dos nitrógenos (N₂) y cuatro oxígenos (O₄)." },
    { t: "En la nomenclatura de Stock para sales binarias, si el metal posee carga fija:", o: ["Se pone en números romanos", "No se indica el número romano", "Se usan prefijos", "Se añade el sufijo -oso"], c: 1, e: "Siguiendo la norma de la IUPAC, si el metal tiene un único estado de oxidación, este no se indica." },
    { t: "¿Cuál es el símbolo químico del Criptón?", o: ["Cr", "Kr", "K", "Cp"], c: 1, e: "Es Kr. Cr es Cromo y K es Potasio." },
    { t: "Al combinar Yodo (-1) y Sodio (+1) se obtiene la sal iónica:", o: ["NaI", "SId", "INa", "NaI2"], c: 0, e: "Se escribe primero el metal (Sodio, Na) y luego el no metal (Yodo, I) cruzando cargas neutras: NaI." },
    { t: "¿Cuál es el símbolo químico del Aluminio?", o: ["Al", "Am", "Au", "An"], c: 0, e: "El Aluminio se representa universalmente con las letras Al." },
    { t: "El nombre 'Óxido de azufre(VI)' indica que el azufre actúa con carga:", o: ["+2", "+4", "+6", "-2"], c: 2, e: "El número romano (VI) especifica que el estado de oxidación del elemento es +6." },
    { t: "¿Cuál es el símbolo químico del Rubidio?", o: ["Ru", "Rb", "Rn", "Re"], c: 1, e: "El Rubidio se representa con las letras Rb. Ru es Rutenio y Rn es Radón." },
    { t: "Al combinar Magnesio (+2) y Flúor (-1) se obtiene la sal:", o: ["MgF", "Mg2F", "MgF2", "F2Mg"], c: 2, e: "Al cruzar las cargas, el 2 del magnesio pasa al flúor y el 1 del flúor al magnesio: MgF₂." },
    { t: "¿Cuál es el símbolo químico del Fósforo?", o: ["F", "Ph", "Fo", "P"], c: 3, e: "El símbolo del Fósforo es P. F es Flúor." },
    { t: "En la nomenclatura sistemática, el compuesto N₂O se nombra como:", o: ["Óxido de nitrógeno", "Monóxido de dinitrógeno", "Dióxido de nitrógeno", "Óxido de dinitrógeno"], c: 1, e: "Se indican los átomos de forma estricta: un oxígeno (monóxido) y dos nitrógenos (dinitrógeno)." },
    { t: "¿Cuál es el símbolo químico del Cesio?", o: ["Ce", "Cs", "Ci", "Co"], c: 1, e: "El Cesio se representa con las letras Cs. Ce es Cerio." },
    { t: "La combinación de un metal con el grupo peroxo (O₂)²⁻ se denomina:", o: ["Óxido básico", "Ananhídrido", "Peróxido", "Superóxido"], c: 2, e: "La presencia del grupo irreducible (O₂)²⁻ define a los peróxidos." },
    { t: "¿Cuál es el símbolo químico del Selenio?", o: ["Se", "Sl", "Sn", "Sc"], c: 0, e: "El Selenio es Se. Sn es Estaño y Sc es Escandio." },
    { t: "En la fórmula FeH₃, el Hierro actúa con un número de oxidación de:", o: ["+2", "+3", "-1", "-3"], c: 1, e: "Como hay tres hidrógenos con carga -1 cada uno (total -3), el hierro debe aportar +3." },
    { t: "¿Cuál es el símbolo químico del Teluro?", o: ["Te", "Tl", "Tu", "Tl"], c: 0, e: "El Teluro se representa con Te. Tl es Talio." },
    { t: "El compuesto PH₃ es un hidruro volátil cuyo nombre aceptado es:", o: ["Fosfato", "Fosfano", "Fosfina", "Ambas Fosfano y Fosfina son válidas"], c: 3, e: "La IUPAC admite el nombre tradicional de fosfina, aunque el sistemático actual es fosfano." },
    { t: "¿Cuál es el símbolo químico del Bromo?", o: ["B", "Br", "Bm", "Bo"], c: 1, e: "El Bromo es Br. B es Boro." },
    { t: "Al combinar Zinc (+2) y Oxígeno (-2) resulta Zn₂O₂. Su fórmula real es:", o: ["Zn2O2", "ZnO", "Zn2O", "ZnO2"], c: 1, e: "Al simplificar dividiendo ambos subíndices entre 2 se obtiene la fórmula empírica ZnO." },
    { t: "¿Cuál es el símbolo químico del Yodo?", o: ["Y", "Yo", "I", "In"], c: 2, e: "El Yodo se representa internacionalmente con la letra I mayúscula." },
    { t: "El compuesto Al₂O₃ se nombra en el sistema Stock como:", o: ["Óxido de aluminio(III)", "Óxido de aluminio", "Trióxido de aluminio", "Alúmina de aluminio"], c: 1, e: "El aluminio tiene valencia fija (+3), por lo que Stock prohíbe añadir el número romano." },
    { t: "¿Cuál es el símbolo químico del Ástato?", o: ["As", "At", "An", "As"], c: 1, e: "El Ástato es At. As es Arsénico." },
    { t: "La carga del anión cloruro en cualquier sal binaria neutra es siempre:", o: ["+1", "0", "-1", "-2"], c: 2, e: "Al ser un halógeno situado a la derecha de la fórmula, su número de oxidación es obligatoriamente -1." },
    { t: "¿Cuál es el símbolo químico del Xenón?", o: ["X", "Xe", "Xn", "Ze"], c: 1, e: "El Xenón se representa con las letras Xe." },
    { t: "El prefijo numérico utilizado para indicar dos átomos de un elemento es:", o: ["Mono-", "Bi-", "Di-", "Doble-"], c: 2, e: "La nomenclatura IUPAC oficial utiliza el prefijo griego 'di-' (ej: dióxido)." },
    { t: "¿Cuál es el símbolo químico del Radón?", o: ["Ra", "Rd", "Rn", "Ro"], c: 2, e: "El Radón es Rn. Ra es Radio." },
    { t: "El compuesto AsH₃ recibe el nombre sistemático aceptado de:", o: ["Arseniuro", "Arsano", "Arsina", "Ambas Arsano y Arsina son válidas"], c: 3, e: "La IUPAC acepta de forma tradicional arsina, siendo arsano su denominación estequiométrica." },
    { t: "¿Cuál es el símbolo químico del Radio?", o: ["Ra", "Rn", "Rb", "Ro"], c: 0, e: "El Radio se representa con Ra. Rn es Radón y Rb es Rubidio." },
    { t: "Al combinar Plata (+1) y Azufre (-2), la fórmula neutra resultante es:", o: ["AgS", "AgS2", "Ag2S", "S2Ag"], c: 2, e: "Al cruzar los estados de oxidación, el 2 del azufre pasa a la plata: Ag₂S." },
    { t: "¿Cuál es el símbolo químico del Estaño?", o: ["Es", "Sn", "St", "Et"], c: 1, e: "El Estaño es Sn, procedente de su raíz latina 'Stannum'." },
    { t: "El compuesto CO₂ se nombra tradicionalmente como:", o: ["Óxido de carbono", "Ananhídrido carbónico", "Ácido de carbono", "Dióxido de carbono"], c: 1, e: "Tradicionalmente, los óxidos de no metales se llamaban ananhídridos; para el carbono (+4) es carbónico." },
    { t: "¿Cuál es el símbolo químico del Plomo?", o: ["Pl", "Pb", "Pd", "Pm"], c: 1, e: "El Plomo es Pb, de su término original 'Plumbum'." },
    { t: "En los hidruros de los elementos de los grupos 16 y 17 (ej: HF, H₂S), ¿dónde se escribe el Hidrógeno?", o: ["A la derecha", "A la izquierda", "Es indiferente", "En el centro"], c: 1, e: "Al ser el hidrógeno el elemento menos electronegativo de la combinación, se sitúa a la izquierda." },
    { t: "¿Cuál es el símbolo químico del Platino?", o: ["Pl", "Pt", "Pa", "Bt"], c: 1, e: "El Platino se representa con las letras Pt." },
    { t: "El compuesto NiO se nombra en la nomenclatura de Stock como:", o: ["Óxido de níquel", "Óxido de níquel(II)", "Óxido de níquel(III)", "Monóxido de níquel"], c: 1, e: "El níquel actúa con carga +2 (simplificado con el -2 del oxígeno), por lo que se indica como (II)." },
    { t: "¿Cuál es el símbolo químico del Oro?", o: ["Or", "Au", "Ag", "Pt"], c: 1, e: "El Oro es Au, derivado de 'Aurum'." },
    { t: "La combinación de un metal con el Hidrógeno da lugar a un:", o: ["Hidrácido", "Hidruro volátil", "Hidruro metálico", "Hidróxido"], c: 2, e: "Las uniones de un metal con hidrógeno se clasifican estrictamente como hidruros metálicos." },
    { t: "¿Cuál es el símbolo químico del Mercurio?", o: ["Me", "Hg", "Mg", "Mr"], c: 1, e: "El Mercurio es Hg, procedente del griego 'Hydrargyrum'." },
    { t: "En el compuesto Cr₂O₃, el Cromo está actuando con un estado de oxidación de:", o: ["+2", "+3", "+6", "-2"], c: 1, e: "El subíndice del oxígeno (3) delata que la carga cruzada proveniente del cromo es +3." },
    { t: "Cuál es el símbolo químico del Bario?", o: ["B", "Ba", "Br", "Bi"], c: 1, e: "El Bario es Ba. B es Boro y Br es Bromo." },
    { t: "El nombre 'Sulfuro de dihidrógeno' corresponde al compuesto H₂S en estado:", o: ["Acuoso", "Gaseoso puro", "Sólido", "Líquido elemental"], c: 1, e: "La nomenclatura estequiométrica con prefijos se aplica al compuesto en estado gaseoso puro." },
    { t: "¿Cuál es el símbolo químico del Titanio?", o: ["Ti", "Tt", "Ta", "Tn"], c: 0, e: "El Titanio se representa con las letras Ti." },
    { t: "Al combinar Oro (+3) y Cloro (-1) se obtiene la sal binaria:", o: ["AuCl", "Au3Cl", "AuCl3", "Cl3Au"], c: 2, e: "Al cruzar los estados de oxidación se obtiene la fórmula AuCl₃." },
    { t: "¿Cuál es el símbolo químico del Uranio?", o: ["Ur", "U", "Un", "Ua"], c: 1, e: "El Uranio se representa únicamente con la letra U mayúscula." },
    { t: "Un compuesto químico estable y eléctricamente neutro debe tener una carga neta de:", o: ["+1", "-1", "0", "Variable"], c: 2, e: "La suma algebraica de todos los estados de oxidación de sus átomos debe ser igual a cero." },
    { t: "¿Cuál es el símbolo químico del Wolframio (Tungsteno)?", o: ["Wo", "T", "W", "Wg"], c: 2, e: "El Wolframio se representa con la letra W, debido a su nombre original en alemán 'Wolfram'." },
    { t: "¿Cuál es el símbolo químico del Cobalto?", o: ["C", "Co", "Cr", "Cb"], c: 1, e: "El Cobalto se representa con las letras Co. C es Carbono y Cr es Cromo." },
    { t: "Al combinar Potasio (+1) y Oxígeno (-2) la fórmula neutra resultante es:", o: ["KO2", "K2O", "KO", "K2O2"], c: 1, e: "Al cruzar los estados de oxidación, el 2 del oxígeno pasa al potasio, resultando en K₂O." },
    { t: "¿Cuál es el símbolo químico del Cobalto?", o: ["Co", "Cb", "Ct", "C"], c: 0, e: "El Cobalto se representa con Co. C es Carbono." },
    { t: "En la nomenclatura sistemática, el compuesto P₂O₅ se nombra como:", o: ["Óxido de fósforo", "Pentaóxido de difósforo", "Óxido de fósforo(V)", "Pentóxido de fósforo"], c: 1, e: "Se leen los prefijos de forma estricta según el número de átomos: pentaóxido (5) de difósforo (2)." },
    { t: "¿Cuál es el símbolo químico del Níquel?", o: ["N", "Ni", "Nk", "Niq"], c: 1, e: "El Níquel es Ni. N es el símbolo del Nitrógeno." },
    { t: "La combinación de un metal con el Hidrógeno da lugar a un:", o: ["Hidrácido", "Hidruro volátil", "Hidruro metálico", "Hidróxido"], c: 2, e: "Las uniones de un metal con hidrógeno se clasifican estrictamente como hidruros metálicos." },
    { t: "¿Cuál es el símbolo químico del Estroncio?", o: ["Es", "St", "Sr", "Sn"], c: 2, e: "El Estroncio se representa con Sr. Sn es Estaño." },
    { t: "En el compuesto LiH, el Hidrógeno actúa con un estado de oxidación de:", o: ["+1", "0", "-1", "-2"], c: 2, e: "Es un hidruro metálico; el hidrógeno es más electronegativo que el litio y actúa con -1." },
    { t: "¿Cuál es el símbolo químico del Silicio?", o: ["S", "Si", "Sl", "Sc"], c: 1, e: "El Silicio es Si. S representa al Azufre." },
    { t: "El nombre 'Monóxido de carbono' pertenece a la nomenclatura:", o: ["Stock", "Tradicional", "Sistemática", "Funcional"], c: 2, e: "El uso de prefijos numéricos como 'mono-' es característico de la nomenclatura sistemática." },
    { t: "¿Cuál es el símbolo químico del Níquel?", o: ["N", "Ni", "Niq", "Nu"], c: 1, e: "El Níquel se representa con el símbolo Ni. N es Nitrógeno." },
    { t: "Al combinar Aluminio (+3) y Oxígeno (-2), obtenemos la fórmula:", o: ["AlO", "Al3O2", "Al2O3", "AlO3"], c: 2, e: "Al cruzar los números de oxidación obtienes Al₂O₃, que no se puede simplificar." },
    { t: "¿Cuál es el símbolo químico del Boro?", o: ["Bo", "Br", "B", "Ba"], c: 2, e: "El Boro se representa con la letra B mayúscula." },
    { t: "El compuesto HF disuelto en agua recibe el nombre de:", o: ["Ácido fluorhídrico", "Fluoruro de hidrógeno", "Hidruro de flúor", "Ácido fluórico"], c: 0, e: "En disolución acuosa, los hidrácidos se nombran con el prefijo ácido y el sufijo '-hídrico'." },
    { t: "¿Cuál es el símbolo químico del Cobalto?", o: ["C", "Co", "Cb", "Ct"], c: 1, e: "El Cobalto se representa con las letras Co." },
    { t: "¿Qué número de oxidación fijo tienen los alcalinotérreos (Grupo 2) como el Ba o Sr?", o: ["+1", "+2", "+3", "-2"], c: 1, e: "Tienen dos electrones en su capa de valencia y los pierden, adoptando siempre el estado +2." },
    { t: "¿Cuál es el símbolo químico del Helio?", o: ["H", "He", "Hl", "Ho"], c: 1, e: "El Helio se representa con el símbolo He. H es Hidrógeno." },
    { t: "El nombre 'Óxido de cobre(I)' indica que el cobre actúa con carga:", o: ["+1", "+2", "-1", "-2"], c: 0, e: "El número romano entre paréntesis en la nomenclatura de Stock indica el estado de oxidación del metal." },
    { t: "¿Cuál es el símbolo químico del Oxígeno?", o: ["Ox", "O", "Os", "On"], c: 1, e: "El Oxígeno se representa con la letra O. Os es Osmio." },
    { t: "¿Qué terminación se le da al no metal en el compuesto CuS?", o: ["-ato", "-ito", "-ico", "-uro"], c: 3, e: "Las sales binarias terminan siempre en '-uro' para su elemento más electronegativo." },
    { t: "¿Cuál es el símbolo químico del Hidrógeno?", o: ["Hi", "Hd", "H", "Hg"], c: 2, e: "El Hidrógeno se representa con la letra H. Hg es Mercurio." },
    { t: "El prefijo numérico para indicar 5 átomos de un elemento es:", o: ["Hexa-", "Penta-", "Tetra-", "Multi-"], c: 1, e: "El prefijo griego correcto para el número cinco es 'penta-'." },
    { t: "¿Cuál es el símbolo químico del Flúor?", o: ["Fl", "Fr", "F", "Fi"], c: 2, e: "El Flúor es la letra F." },
    { t: "El compuesto NH₃ es un hidruro no metálico conocido comúnmente como:", o: ["Metano", "Fosfano", "Amoníaco", "Estibano"], c: 2, e: "NH₃ tiene el nombre común retenido y aceptado por la IUPAC de amoníaco." },
    { t: "El prefijo numérico para indicar tres átomos en un compuesto inorgánico es:", o: ["Tri-", "Tera-", "Bi-", "Meti-"], c: 0, e: "La IUPAC utiliza el prefijo de origen griego 'tri-'." },
    { t: "¿Cuál es el estado de oxidación del Hidrógeno cuando se combina con No Metales (ej: HCl)?", o: ["-1", "0", "+1", "+2"], c: 2, e: "Frente a no metales más electronegativos, el hidrógeno actúa con su estado normal de +1." },
    { t: "¿Cuál es el símbolo químico del Berilio?", o: ["B", "Be", "Br", "Bi"], c: 1, e: "El Berilio se denota como Be." },
    { t: "El compuesto Fe₂O₃ se nombra en la nomenclatura de Stock como:", o: ["Óxido de hierro", "Óxido de hierro(II)", "Óxido de hierro(III)", "Trióxido de hierro"], c: 2, e: "El hierro actúa con carga +3, lo que se indica con (III) en números romanos." },
    { t: "El compuesto SiH₄ recibe el nombre aceptado de:", o: ["Silicato", "Silano", "Metano", "Hidruro de silicio"], c: 1, e: "SiH₄ es un hidruro volátil no metálico con el nombre propio admitido de silano." },
    { t: "Al cruzar las cargas de Plomo (+4) y Oxígeno (-2) obtenemos Pb₂O₄. Su fórmula correcta es:", o: ["Pb2O4", "PbO2", "PbO4", "Pb4O2"], c: 1, e: "Se debe simplificar dividiendo los subíndices entre 2, lo que da como resultado PbO₂." },
    { t: "¿Cuál es el símbolo químico del Antimonio?", o: ["An", "Am", "Sb", "St"], c: 2, e: "Es Sb, derivado de su nombre clásico en latín 'Stibium'." },
    { t: "El compuesto CH₄ recibe el nombre sistemático de metano. Pertenece al grupo de:", o: ["Hidrácidos", "Hidruros volátiles", "Óxidos", "Sales volátiles"], c: 1, e: "Las combinaciones de hidrógeno con C, N, P, As, Sb, Si y B son hidruros volátiles." },
    { t: "Al combinar Nitrógeno (+3) e Hidrógeno (-1) en un hidruro, se obtiene:", o: ["NH3", "N3H", "HN3", "NH"], c: 0, e: "Se coloca el elemento menos electronegativo a la izquierda (N) y se cruzan cargas: NH₃." },
    { t: "¿Cuál de los siguientes prefijos indica un solo átomo en la nomenclatura sistemática?", o: ["Mono-", "Di-", "Uni-", "Simple-"], c: 0, e: "La IUPAC emplea el prefijo 'mono-' para indicar la presencia de un solo átomo." },
    { t: "¿Cuál es el símbolo químico del Bismuto?", o: ["B", "Bi", "Bs", "Bm"], c: 1, e: "El Bismuto se representa con las letras Bi." },
    { t: "Si combinamos Sodio (+1) y Oxígeno (-2), la fórmula resultante es:", o: ["NaO", "NaO2", "Na2O", "Na2O2"], c: 2, e: "Al cruzar los estados de oxidación, el 2 del oxígeno pasa al sodio y el 1 del sodio al oxígeno: Na₂O." },
    { t: "Las combinaciones binarias de hidrógeno con halógenos o anfígenos (ej: HCl, H₂S) se clasifican como:", o: ["Hidruros metálicos", "Hidrácidos", "Hidruros volátiles", "Sales neutras"], c: 1, e: "Tienen carácter ácido en disolución y se encuadran de forma específica como hidrácidos." },
    { t: "La nomenclatura tradicional utiliza sufijos. ¿Cuál se usa para la valencia más alta de dos posibles?", o: ["-oso", "-ico", "-ito", "-ato"], c: 1, e: "El sufijo '-ico' denota la valencia mayor de un elemento con dos estados de oxidación posibles." },
    { t: "¿Cuál es el símbolo químico del Cadmio?", o: ["Ca", "Cd", "Cm", "Co"], c: 1, e: "El Cadmio se representa con las letras Cd." },
    { t: "El compuesto H₂S en estado gaseoso puro se nombra como:", o: ["Ácido sulfhídrico", "Sulfuro de hidrógeno", "Hidruro de azufre", "Sulfuro de dihidrógeno"], c: 1, e: "En estado gaseoso puro (no disuelto), se nombra el no metal terminado en '-uro' seguido de 'de hidrógeno'." },
    { t: "En la fórmula CuCl₂, el número de oxidación con el que actúa el Cobre es:", o: ["+1", "+2", "-1", "-2"], c: 1, e: "Como hay dos cloros con carga -1 (total -2), el cobre debe aportar una carga de +2 para neutralizar." },
    { t: "El nombre 'Tetraóxido de dinitrógeno' corresponde a la fórmula molecular:", o: ["N2O4", "NO2", "N4O2", "N2O"], c: 0, e: "Se traduce directamente del nombre: dos nitrógenos (N₂) y cuatro oxígenos (O₄)." },
    { t: "En la nomenclatura de Stock para sales binarias, si el metal posee carga fija:", o: ["Se pone en números romanos", "No se indica el número romano", "Se usan prefijos", "Se añade el sufijo -oso"], c: 1, e: "Siguiendo la norma de la IUPAC, si el metal tiene un único estado de oxidación, este no se indica." },
    { t: "Al combinar Yodo (-1) y Sodio (+1) se obtiene la sal iónica:", o: ["NaI", "SId", "INa", "NaI2"], c: 0, e: "Se escribe primero el metal (Sodio, Na) y luego el no metal (Yodo, I) cruzando cargas neutras: NaI." },
    { t: "El nombre 'Óxido de azufre(VI)' indica que el azufre actúa con carga:", o: ["+2", "+4", "+6", "-2"], c: 2, e: "El número romano (VI) especifica que el estado de oxidación del elemento es +6." },
    { t: "Al combinar Magnesio (+2) y Flúor (-1) se obtiene la sal:", o: ["MgF", "Mg2F", "MgF2", "F2Mg"], c: 2, e: "Al cruzar las cargas, el 2 del magnesio pasa al flúor y el 1 del flúor al magnesio: MgF₂." },
    { t: "En la nomenclatura sistemática, el compuesto N₂O se nombra como:", o: ["Óxido de nitrógeno", "Monóxido de dinitrógeno", "Dióxido de nitrógeno", "Óxido de dinitrógeno"], c: 1, e: "Se indican los átomos de forma estricta: un oxígeno (monóxido) y dos nitrógenos (dinitrógeno)." },
    { t: "La combinación de un metal con el grupo peroxo (O₂)²⁻ se denomina:", o: ["Óxido básico", "Ananhídrido", "Peróxido", "Superóxido"], c: 2, e: "La presencia del grupo irreducible (O₂)²⁻ define a los peróxidos." },
    { t: "En la fórmula FeH₃, el Hierro actúa con un número de oxidación de:", o: ["+2", "+3", "-1", "-3"], c: 1, e: "Como hay tres hidrógenos con carga -1 cada uno (total -3), el hierro debe aportar +3." },
    { t: "El compuesto PH₃ es un hidruro volátil cuyo nombre aceptado por la IUPAC es:", o: ["Fosfato", "Fosfano", "Fosfina", "Fósforo de hidrógeno"], c: 1, e: "El nombre sistemático estequiométrico actual recomendado por la IUPAC es fosfano." },
    { t: "Al combinar Zinc (+2) y Oxígeno (-2) resulta Zn₂O₂. Su fórmula real es:", o: ["Zn2O2", "ZnO", "Zn2O", "ZnO2"], c: 1, e: "Al simplificar dividiendo ambos subíndices entre 2 se obtiene la fórmula empírica ZnO." },
    { t: "El compuesto Al₂O₃ se nombra en el sistema Stock como:", o: ["Óxido de aluminio(III)", "Óxido de aluminio", "Trióxido de aluminio", "Alúmina de aluminio"], c: 1, e: "El aluminio tiene valencia fija (+3), por lo que Stock prohíbe añadir el número romano." },
    { t: "La carga del anión cloruro en cualquier sal binaria neutra es siempre:", o: ["+1", "0", "-1", "-2"], c: 2, e: "Al ser un halógeno situado a la derecha de la fórmula, su número de oxidación es obligatoriamente -1." },
    { t: "El prefijo numérico utilizado para indicar dos átomos de un elemento es:", o: ["Mono-", "Bi-", "Di-", "Doble-"], c: 2, e: "La nomenclatura IUPAC oficial utiliza el prefijo griego 'di-' (ej: dióxido)." },
    { t: "El compuesto AsH₃ recibe el nombre sistemático aceptado de:", o: ["Arseniuro", "Arsano", "Arsina", "Hidruro de arsénico"], c: 1, e: "La denominación estequiométrica sistemática actual de la IUPAC para este compuesto es arsano." },
    { t: "Al combinar Plata (+1) y Azufre (-2), la fórmula neutra resultante es:", o: ["AgS", "AgS2", "Ag2S", "S2Ag"], c: 2, e: "Al cruzar los estados de oxidación, el 2 del azufre pasa a la plata, resultando en Ag₂S." },
    { t: "El compuesto CO₂ se nombra tradicionalmente como:", o: ["Óxido de carbono", "Ananhídrido carbónico", "Ácido de carbono", "Dióxido de carbono"], c: 1, e: "Tradicionalmente, los óxidos de no metales se llamaban ananhídridos; para el carbono (+4) es carbónico." },
    { t: "En los hidruros de los elementos de los grupos 16 y 17 (ej: HF, H₂S), ¿dónde se escribe el Hidrógeno?", o: ["A la derecha", "A la izquierda", "Es indiferente", "En el centro"], c: 1, e: "Al ser el hidrógeno el elemento menos electronegativo de la combinación, se sitúa a la izquierda." },
    { t: "El compuesto NiO se nombra en la nomenclatura de Stock como:", o: ["Óxido de níquel", "Óxido de níquel(II)", "Óxido de níquel(III)", "Monóxido de níquel"], c: 1, e: "El níquel actúa con carga +2 (simplificado con el -2 del oxígeno), por lo que se indica como (II)." },
    { t: "En el compuesto Cr₂O₃, el Cromo está actuando con un estado de oxidación de:", o: ["+2", "+3", "+6", "-2"], c: 1, e: "El subíndice del oxígeno (3) delata que la carga cruzada proveniente del cromo es +3." },
    { t: "El nombre 'Sulfuro de dihidrógeno' corresponde al compuesto H₂S en estado:", o: ["Acuoso", "Gaseoso puro", "Sólido", "Líquido elemental"], c: 1, e: "La nomenclatura estequiométrica con prefijos se aplica al compuesto en estado gaseoso puro." },
    { t: "Al combinar Oro (+3) y Cloro (-1) se obtiene la sal binaria:", o: ["AuCl", "Au3Cl", "AuCl3", "Cl3Au"], c: 2, e: "Al cruzar los estados de oxidación se obtiene la fórmula AuCl₃." },
    { t: "Un compuesto químico estable y eléctricamente neutro debe tener una carga neta de:", o: ["+1", "-1", "0", "Variable"], c: 2, e: "La suma algebraica de todos los estados de oxidación de sus átomos debe ser igual a cero." },
    { t: "Al combinar Potasio (+1) y Oxígeno (-2) la fórmula neutra resultante es:", o: ["KO2", "K2O", "KO", "K2O2"], c: 1, e: "Al cruzar los estados de oxidación, el 2 del oxígeno pasa al potasio, resultando en K₂O." },
    { t: "En la nomenclatura sistemática, el compuesto P₂O₅ se nombra como:", o: ["Óxido de fósforo", "Pentaóxido de difósforo", "Óxido de fósforo(V)", "Pentóxido de fósforo"], c: 1, e: "Se leen los prefijos de forma estricta según el número de átomos: pentaóxido (5) de difósforo (2)." },
    { t: "Fórmula simplificada de la combinación entre Magnesio (+2) y Oxígeno (-2):", o: ["Mg2O2", "MgO", "MgO2", "Mg2O"], c: 1, e: "Las cargas se cruzan y se simplifican al máximo dividiendo por 2, dando como resultado MgO." },
    { t: "El compuesto HBr en estado gaseoso puro se nombra como:", o: ["Ácido bromhídrico", "Bromuro de hidrógeno", "Hidruro de bromo", "Bromuro de dihidrógeno"], c: 1, e: "En estado gaseoso puro sin disolver, los hidrácidos terminan en '-uro' seguido de 'de hidrógeno'." },
    { t: "En la fórmula molecular del peróxido de bario (BaO₂), ¿por qué no se simplifica a BaO?", o: ["Porque el bario tiene carga +1", "Porque se destruiría el grupo peroxo O2(2-)", "Porque el oxígeno actúa con +2", "Porque es un hidruro"], c: 1, e: "El grupo peroxo (O₂)²⁻ es una unidad estructural iónica indisoluble; si se simplifica a BaO pasaría a ser un óxido común." },
    { t: "El prefijo numérico empleado por la IUPAC para indicar diez átomos de un elemento es:", o: ["Deca-", "Hexa-", "Octa-", "Penta-"], c: 0, e: "El prefijo de raíz griega oficial para denotar diez unidades atómicas es 'deca-'." }
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


// BLOQUE B: ALGORITMOS DE SELECCIÓN ALEATORIA Y EVALUACIÓN CIENTÍFICA
function iniciarTestAleatorio() {
    document.getElementById('panel-dashboard').style.display = 'none';
    document.getElementById('panel-analisis').style.display = 'none';
    document.getElementById('btn-evaluar').style.display = 'inline-block';
    
    // Mezclador Fisher-Yates para barajar el pozo de las 200 preguntas
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
                <span style="font-size:14px; color:var(--text-muted);">Tu elección: ${ans !== null ? q.o[ans] : "No contestado"} | Estandard IUPAC: ${q.o[q.c]}</span>
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

    // Desbloqueo automático y llamada al Laboratorio de Errores
    if (exitosContados >= 3) {
        document.getElementById('status-repaso').className = "badge-status status-dominado";
        document.getElementById('status-repaso').innerText = "Dominado";
        document.getElementById('card-binarios').classList.remove('locked');
        document.getElementById('status-binarios').className = "badge-status status-progreso";
        document.getElementById('status-binarios').innerText = "Abierto";
        
        // Ejecuta la carga de los frascos binarios automáticamente
        if(typeof activarLaboratorioBinarios === 'function') {
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

