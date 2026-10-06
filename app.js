// BANCO DE PREGUNTAS ASIGNADO (PARTE A)
// BLOQUE A: CONFIGURACIÓN INICIAL DEL BANCO DE DATOS
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
    { t: "Dado el nombre 'Monohidruro de sodio', ¿cuál es su fórmula química?", o: ["NaH", "NaH2", "Na2H", "HNa"], c: 0, e: "Prefijo mono- para un hidrógeno unido a un sodio: NaH." },
    { t: "Dada la fórmula BaH2, ¿cuál es su nombre por Stock?", o: ["Hidruro de bario(II)", "Hidruro de bario", "Dihidruro de bario", "Hidruro de bario(I)"], c: 1, e: "El bario pertenece al grupo 2 (alcalinotérreos) y tiene valencia fija; no lleva romano." },
    { t: "Dado el nombre 'Silano', ¿cuál es su fórmula química?", o: ["SiH2", "SiH4", "Si2H4", "CH4"], c: 1, e: "El silano es el nombre admitido para el hidruro volátil de silicio: SiH₄." },
    { t: "Dada la fórmula CS2, ¿cuál es su nombre sistemático?", o: ["Sulfuro de carbono", "Disulfuro de carbono", "Sulfuro de carbono(IV)", "Disulfuro de dicarbono"], c: 1, e: "Dos átomos de azufre situados a la derecha se leen como disulfuro." },
    { t: "Dado el nombre 'Bromuro de plata', ¿cuál es su fórmula química?", o: ["AgBr", "Ag2Br", "AgBr2", "BrAg"], c: 0, e: "Combinación neutra iónica de Ag(+1) y Br(-1): AgBr." },
    { t: "Dada la fórmula N2O3, ¿cuál es su nombre sistemático?", o: ["Óxido de nitrógeno(III)", "Trióxido de dinitrógeno", "Dióxido de trinitrógeno", "Ananhídrido nitroso"], c: 1, e: "Nomenclatura estequiométrica pura: tres oxígenos y dos nitrógenos." },
    { t: "Dado el nombre 'Óxido de níquel(III)', ¿cuál es su fórmula química?", o: ["NiO", "Ni2O", "NiO3", "Ni2O3"], c: 3, e: "El hierro/níquel con carga +3 cruzada con el oxígeno (-2) genera la estructura Ni₂O₃." },
    { t: "Dada la fórmula MgH2, ¿cuál es su nombre por Stock?", o: ["Dihidruro de magnesio", "Hidruro de magnesio", "Hidruro de magnesio(II)", "Ácido magnésico"], c: 1, e: "El magnesio tiene un único estado de oxidación (+2); se omite el número romano." },
    { t: "Dado el nombre 'Fosfano', ¿cuál es su fórmula química?", o: ["PH", "PH2", "PH3", "PH4"], c: 2, e: "El fosfano (o fosfina) es el hidruro volátil del fósforo, cuya fórmula es PH₃." },
    { t: "Dada la fórmula CaI2, ¿cuál es su nombre sistemático?", o: ["Yoduro de calcio", "Diyoduro de calcio", "Yoduro de calcio(II)", "Yoduro cálcico"], c: 1, e: "Se lee el prefijo di- para los dos átomos de yodo presentes." },
    { t: "Dado el nombre 'Sulfuro de plomo(IV)', ¿cuál es su fórmula química?", o: ["PbS", "PbS2", "Pb2S", "PbS4"], c: 1, e: "Pb(+4) y S(-2) cruzan cargas dando Pb₂S₄, que al simplificarse queda PbS₂." },
    { t: "Dada la fórmula HI (en agua), ¿cuál es su nombre correcto?", o: ["Yoduro de hidrógeno", "Ácido yodhídrico", "Hidruro de yodo", "Ácido yódico"], c: 1, e: "Disuelto en agua constituye un hidrácido, nombrado como Ácido ...hídrico." },
    { t: "Dado el nombre 'Óxido de mercurio(I)', ¿cuál es su fórmula química?", o: ["HgO", "Hg2O", "HgO2", "Hg2O2"], c: 1, e: "El mercurio actúa con +1 y el oxígeno con -2; al cruzarse resulta Hg₂O." },
    { t: "Dada la fórmula Li2O2, ¿cuál es su nombre de compuesto?", o: ["Óxido de litio", "Peróxido de litio", "Dióxido de litio", "Dióxido de dilitio"], c: 1, e: "La estructura Na₂O₂/Li₂O₂ sin simplificar delata de forma inequívoca a un peróxido." },
    { t: "Dado el nombre 'Pentaóxido de difósforo', ¿cuál es su fórmula química?", o: ["PO5", "P5O2", "P2O5", "P2O3"], c: 2, e: "Cinco oxígenos (pentaóxido) y dos fósforos (difósforo): P₂O₅." },
    { t: "Dada la fórmula CuH2, ¿cuál es su nombre por Stock?", o: ["Hidruro de cobre", "Hidruro de cobre(II)", "Dihidruro de cobre", "Hidruro cúprico"], c: 1, e: "El cobre actúa con valencia +2, por lo que se indica con (II) al ser variable." },
    { t: "Dado el nombre 'Arsano', ¿cuál es su fórmula química?", o: ["AsH", "AsH2", "AsH3", "AsH4"], c: 2, e: "Arsano es la denominación IUPAC sistemática para el hidruro volátil AsH₃." },
    { t: "Dada la fórmula AgCl, ¿cuál es su nombre correcto?", o: ["Cloruro de plata(I)", "Cloruro de plata", "Monocloruro de plata", "Plata de cloro"], c: 1, e: "La plata tiene número de oxidación fijo (+1), se omite el romano en Stock." },
    { t: "Dado el nombre 'Óxido de estroncio', ¿cuál es su fórmula química?", o: ["SrO", "Sr2O", "SrO2", "Sr2O2"], c: 0, e: "El estroncio es del grupo 2 (+2) y el oxígeno -2; al simplificar resulta SrO." },
    { t: "Dada la fórmula CaH2, ¿cuál es su nombre sistemático?", o: ["Hidruro de calcio", "Dihidruro de calcio", "Hidruro de calcio(II)", "Ácido cálcico"], c: 1, e: "Se lee directamente el prefijo di- por los dos hidrógenos." },
    { t: "Dado el nombre 'Trifluoruro de boro', ¿cuál es su fórmula química?", o: ["BF", "B3F", "BF3", "B2F3"], c: 2, e: "Tres átomos de flúor unidos a un átomo de boro: BF₃." },
    { t: "Dada la fórmula NiO, ¿cuál es su nombre por Stock?", o: ["Óxido de níquel", "Óxido de níquel(II)", "Óxido de níquel(III)", "Monóxido de níquel"], c: 1, e: "El níquel actúa con su número de oxidación menor, +2, que se simplifica con el -2 del oxígeno." },
    { t: "Dado el nombre 'Dióxido de azufre', ¿cuál es su fórmula química?", o: ["SO", "SO2", "SO3", "S2O2"], c: 1, e: "El prefijo di- indica dos átomos de oxígeno unidos a un azufre: SO₂." },
    { t: "Dada la fórmula ZnH2, ¿cuál es su nombre por Stock?", o: ["Hidruro de zinc(II)", "Hidruro de zinc", "Dihidruro de zinc", "Hidruro de zinc(I)"], c: 1, e: "El zinc tiene número de oxidación único (+2), por lo que se omite el número romano en Stock." },
    { t: "Dado el nombre 'Estibano', ¿cuál es su fórmula química?", o: ["SbH3", "AsH3", "BiH3", "NH3"], c: 0, e: "El estibano es el nombre admitido por la IUPAC para el hidruro volátil de antimonio: SbH₃." },
    { t: "Dada la fórmula CCl4, ¿cuál es su nombre sistemático?", o: ["Cloruro de carbono", "Tetracloruro de carbono", "Cloruro de carbono(IV)", "Tetracloruro de dicarbono"], c: 1, e: "Se lee directamente usando los prefijos multiplicadores: cuatro cloros equivalen a tetracloruro." },
    { t: "Dado el nombre 'Yoduro de hidrógeno' (gaseoso), ¿cuál es su fórmula química?", o: ["HI", "HI(aq)", "H2I", "IH"], c: 0, e: "En estado gaseoso puro se escribe HI. Si estuviera disuelto en agua sería ácido yodhídrico." },
    { t: "Dada la fórmula FeH3, ¿cuál es su nombre por Stock?", o: ["Hidruro de hierro(II)", "Hidruro de hierro(III)", "Trihidruro de hierro", "Hidruro férrico"], c: 1, e: "El subíndice 3 del hidrógeno delata que el hierro actúa con su estado de oxidación +3." },
    { t: "Dado el nombre 'Óxido de plomo(II)', ¿cuál es su fórmula química?", o: ["PbO", "PbO2", "Pb2O", "Pb2O2"], c: 0, e: "El plomo (+2) y el oxígeno (-2) cruzan sus cargas y se simplifican para dar PbO." },
    { t: "Dada la fórmula SnCl4, ¿cuál es su nombre por Stock?", o: ["Cloruro de estaño", "Cloruro de estaño(II)", "Cloruro de estaño(IV)", "Tetracloruro de estaño"], c: 2, e: "El estaño actúa con su número de oxidación +4, reflejado en el subíndice del cloro." },
    { t: "Dado el nombre 'Monóxido de nitrógeno', ¿cuál es su fórmula química?", o: ["NO", "N2O", "NO2", "N2O3"], c: 0, e: "Prefijo mono- para un solo oxígeno unido a un átomo de nitrógeno: NO." },
    { t: "Dada la fórmula H2S (en disolución acuosa), ¿cuál es su nombre?", o: ["Sulfuro de hidrógeno", "Ácido sulfhídrico", "Hidruro de azufre", "Sulfuro de dihidrógeno"], c: 1, e: "Al especificar que se encuentra en medio acuoso, adopta la nomenclatura de hidrácido: Ácido ...hídrico." },
    { t: "Dado el nombre 'Hidruro de potasio', ¿cuál es su fórmula química?", o: ["KH", "K2H", "KH2", "HK"], c: 0, e: "Compuesto binario iónico formado por el catión K(+1) y el anión hidruro H(-1): KH." },
    { t: "Dada la fórmula Cr2O3, ¿cuál es su nombre por Stock?", o: ["Óxido de cromo(II)", "Óxido de cromo(III)", "Trióxido de dicromo", "Óxido crómico"], c: 1, e: "El cromo actúa con número de oxidación +3, indicado en números romanos entre paréntesis." },
    { t: "Dado el nombre 'Disulfuro de silicio', ¿cuál es su fórmula química?", o: ["SiS", "SiS2", "Si2S", "Si3S2"], c: 1, e: "El prefijo disulfuro delata la presencia de dos átomos de azufre unidos al silicio: SiS₂." },
    { t: "Dada la fórmula Cu2O, ¿cuál es su nombre sistemático?", o: ["Óxido de cobre", "Monóxido de dicobre", "Dióxido de cobre", "Óxido de cobre(I)"], c: 1, e: "Se leen de forma estricta los átomos con prefijos: un oxígeno (monóxido) y dos cobres (dicobre)." },
    { t: "Dado el nombre 'Trihidruro de cobalto', ¿cuál es su fórmula química?", o: ["CoH", "CoH2", "CoH3", "Co3H"], c: 2, e: "El prefijo tri- indica la combinación de tres átomos de hidrógeno con el cobalto: CoH₃." },
    { t: "Dada la fórmula BaO2, ¿cuál es su nombre común?", o: ["Óxido de bario", "Peróxido de bario", "Dióxido de bario", "Óxido de bario(II)"], c: 1, e: "El bario actúa con +2 y se une al grupo peroxo (O₂)²⁻, dando la fórmula inalterable BaO₂." },
    { t: "Dado el nombre 'Ácido fluorhídrico', ¿cuál es su fórmula química?", o: ["HF", "HF(aq)", "H2F", "FHe"], c: 1, e: "La palabra ácido y el sufijo -hídrico indican que el HF se encuentra en disolución acuosa: HF(aq)." },
    { t: "Dada la fórmula AuCl3, ¿cuál es su nombre por Stock?", o: ["Cloruro de oro(I)", "Cloruro de oro(III)", "Tricloruro de oro", "Cloruro áurico"], c: 1, e: "El oro actúa con su estado de oxidación variable +3, indicado mediante el número romano." },
    { t: "Dado el nombre 'Pentaóxido de dinitrógeno', ¿cuál es su fórmula química?", o: ["NO5", "N2O5", "N5O2", "N2O3"], c: 1, e: "Nomenclatura sistemática: cinco oxígenos (pentaóxido) y dinitrógeno (dos nitrógenos): N₂O₅." },
    { t: "Dada la fórmula PbH4, ¿cuál es su nombre sistemático?", o: ["Hidruro de plomo", "Tetrahidruro de plomo", "Hidruro de plomo(IV)", "Plomo de hidruro"], c: 1, e: "Utiliza prefijos de cantidad: el prefijo para cuatro átomos de hidrógeno es tetra-." },
    { t: "Dado el nombre 'Fluoruro de sodio', ¿cuál es su fórmula química?", o: ["NaF", "Na2F", "NaF2", "FNa"], c: 0, e: "Sal binaria neutra formada por el cruce de cargas de Na(+1) y F(-1): NaF." },
    { t: "Dada la fórmula MnO2, ¿cuál es su nombre por Stock?", o: ["Óxido de manganeso(II)", "Óxido de manganeso(IV)", "Dióxido de manganeso", "Óxido de manganeso"], c: 1, e: "Proviene de Mn₂O₄ tras simplificar sus subíndices; el manganeso actúa con estado +4." },
    { t: "Dado el nombre 'Bromuro de hidrógeno' (gaseoso)", o: ["HBr", "HBr(aq)", "H2Br", "BrH"], c: 0, e: "Compuesto puro en fase gaseosa gaseosa sin disolver en medio acuoso: HBr." },
    { t: "Dada la fórmula Ag2O, ¿cuál es su nombre por Stock?", o: ["Óxido de plata(I)", "Óxido de plata", "Monóxido de diplata", "Óxido de plata(II)"], c: 1, e: "La plata tiene un estado de oxidación único (+1), por lo que se omite el romano en Stock." },
    { t: "Dado el nombre 'Tetrahidruro de germanio', ¿cuál es su fórmula química?", o: ["GeH2", "GeH4", "Ge2H4", "GeH"], c: 1, e: "El prefijo tetra- define la presencia de cuatro átomos de hidrógeno unidos al germanio: GeH₄." },
    { t: "Dada la fórmula PtO2, ¿cuál es su nombre sistemático?", o: ["Óxido de platino", "Dióxido de platino", "Óxido de platino(IV)", "Óxido de platino(II)"], c: 1, e: "Se realiza la lectura directa de los subíndices de la molécula: dos oxígenos equivalen a dióxido." },
    { t: "Dado el nombre 'Yoduro de plata', ¿cuál es su fórmula química?", o: ["AgI", "Ag2I", "AgI2", "IAg"], c: 0, e: "Combinación directa y neutra del catión plata Ag(+1) con el anión yoduro I(-1): AgI." },
    { t: "Dada la fórmula KH, ¿cuál es su nombre sistemático?", o: ["Hidruro de potasio", "Monohidruro de potasio", "Hidruro de potasio(I)", "Potasio de hidruro"], c: 1, e: "Se antepone el prefijo mono- para indicar un único átomo de hidrógeno, aunque también se admite hidruro de potasio." },
    { t: "Dado el nombre 'Trióxido de dihierro', ¿cuál es su fórmula química?", o: ["Fe3O2", "FeO3", "Fe2O3", "Fe2O2"], c: 2, e: "Traducción directa de prefijos: dos átomos de hierro (dihierro) y tres de oxígeno (trióxido): Fe₂O₃." },
    { t: "Dada la fórmula Mg3N2, ¿cuál es su nombre por Stock?", o: ["Nitruro de magnesio(II)", "Nitruro de magnesio", "Dinitruro de trimagnesio", "Nitrato de magnesio"], c: 1, e: "El magnesio solo presenta el estado de oxidación +2, por lo que Stock prohíbe usar números romanos." },
    { t: "Dado el nombre 'Peróxido de potasio', ¿cuál es su fórmula química?", o: ["KO", "KO2", "K2O", "K2O2"], c: 3, e: "El grupo peroxo (O₂)²⁻ se une al potasio K(+1); al cruzar las cargas se obtiene K₂O₂ sin simplificar." },
    { t: "Dada la fórmula B2O3, ¿cuál es su nombre sistemático?", o: ["Óxido de boro(III)", "Trióxido de diboro", "Dióxido de triboro", "Óxido de boro"], c: 1, e: "Nomenclatura estequiométrica: lectura estricta de subíndices mediante prefijos numéricos griegos." },
    { t: "Dado el nombre 'Fosfano', ¿cuál es su fórmula química?", o: ["PH", "PH2", "PH3", "PH4"], c: 2, e: "El fosfano es la denominación sistemática oficial IUPAC para el hidruro volátil de fósforo: PH₃." },
    { t: "Dada la fórmula HgCl2, ¿cuál es su nombre por Stock?", o: ["Cloruro de mercurio", "Cloruro de mercurio(II)", "Cloruro de mercurio(I)", "Dicloruro de mercurio"], c: 1, e: "El mercurio actúa con su estado de oxidación mayor (+2), indicado explícitamente entre paréntesis." },
    { t: "Dado el nombre 'Monóxido de disodio', ¿cuál es su fórmula química?", o: ["NaO", "NaO2", "Na2O", "Na2O2"], c: 2, e: "Un átomo de oxígeno (monóxido) y dos átomos de sodio (disodio): Na₂O." },
    { t: "Dada la fórmula SnH4, ¿cuál es su nombre por Stock?", o: ["Hidruro de estaño", "Hidruro de estaño(IV)", "Tetrahidruro de estaño", "Hidruro de estaño(II)"], c: 1, e: "El estaño actúa con su número de oxidación variable +4, lo que obliga a colocar el romano (IV)." },
    { t: "Dado el nombre 'Sulfuro de cadmio', ¿cuál es su fórmula química?", o: ["CdS", "Cd2S", "CdS2", "SCd"], c: 0, e: "El cadmio tiene carga fija +2 y el azufre actúa con -1 en sales binarias; al cruzar y simplificar da CdS." },
    { t: "Dada la fórmula Fe2O3, ¿cuál es su nombre sistemático?", o: ["Óxido de hierro(III)", "Trióxido de dihierro", "Dióxido de trihierro", "Óxido férrico"], c: 1, e: "Nomenclatura estequiométrica: tres átomos de oxígeno (trióxido) y dos de hierro (dihierro)." },
    { t: "Dado el nombre 'Ácido yodhídrico', ¿cuál es su fórmula química?", o: ["HI", "HI(aq)", "H2I", "IH"], c: 1, e: "La terminación -hídrico especifica de manera unívoca la disolución en agua de la sustancia: HI(aq)." },
    { t: "Dada la fórmula CaH2, ¿cuál es su nombre por Stock?", o: ["Dihidruro de calcio", "Hidruro de calcio", "Hidruro de calcio(II)", "Ácido cálcico"], c: 1, e: "El calcio pertenece al grupo 2 y tiene valencia fija (+2). Stock prohíbe usar números romanos." },
    { t: "Dado el nombre 'Trifluoruro de boro', ¿cuál es su fórmula química?", o: ["BF", "B3F", "BF3", "B2F3"], c: 2, e: "Lectura directa de los prefijos: un átomo de boro y tres átomos de flúor: BF₃." },
    { t: "Dada la fórmula Al2O3, ¿cuál es su nombre por Stock?", o: ["Óxido de aluminio(III)", "Óxido de aluminio", "Trióxido de aluminio", "Alúmina"], c: 1, e: "El aluminio tiene una única valencia (+3), por lo que en el sistema de Stock se omite el romano." },
    { t: "Dado el nombre 'Monocloruro de potasio', ¿cuál es su fórmula química?", o: ["KCl", "K2Cl", "KCl2", "ClK"], c: 0, e: "Prefijo mono- para un cloro y un potasio. Habitualmente se nombra simplemente cloruro de potasio: KCl." },
    { t: "Dada la fórmula HBr (en estado gaseoso), ¿cuál es su nombre?", o: ["Ácido bromhídrico", "Bromuro de hidrógeno", "Hidruro de bromo", "Monobromuro de hidrógeno"], c: 1, e: "En fase gaseosa pura, sin disolver en medio acuoso, los hidrácidos terminan siempre en -uro." },
    { t: "Dado el nombre 'Pentaóxido de yodo', ¿cuál es su fórmula química?", o: ["IO5", "I2O5", "I5O2", "IO3"], c: 1, e: "Nomenclatura sistemática: cinco átomos de oxígeno (pentaóxido) unidos a dos de yodo: I₂O₅." },
    { t: "Dada la fórmula MgH2, ¿cuál es su nombre sistemático?", o: ["Hidruro de magnesio", "Dihidruro de magnesio", "Hidruro de magnesio(II)", "Ácido magnésico"], c: 1, e: "Se lee directamente el subíndice del hidrógeno con su correspondiente prefijo numérico: di-." },
    { t: "Dado el nombre 'Peróxido de bario', ¿cuál es su fórmula química?", o: ["BaO", "Ba2O", "BaO2", "Ba2O2"], c: 2, e: "El grupo peroxo (O₂)²⁻ se une al Ba(+2). Al cruzarse las cargas se obtiene BaO₂ sin simplificar." },
    { t: "Dada la fórmula CuCl2, ¿cuál es su nombre por Stock?", o: ["Cloruro de cobre", "Cloruro de cobre(I)", "Cloruro de cobre(II)", "Dicloruro de cobre"], c: 2, e: "El cobre actúa aquí con su estado de oxidación variable +2, reflejado en el subíndice del cloro." },
    { t: "Dado el nombre 'Monóxido de plomo', ¿cuál es su fórmula química?", o: ["PbO", "PbO2", "Pb2O", "Pb2O2"], c: 0, e: "Prefijo mono- para un solo átomo de oxígeno unido a un átomo de plomo: PbO." },
    { t: "Dada la fórmula HCl (en disolución acuosa), ¿cuál es su nombre?", o: ["Cloruro de hidrógeno", "Ácido clorhídrico", "Hidruro de cloro", "Monocloruro de hidrógeno"], c: 1, e: "Al encontrarse disuelto en agua se convierte en un hidrácido: lleva la palabra ácido y el sufijo -hídrico." },
    { t: "Dado el nombre 'Hidruro de plata', ¿cuál es su fórmula química?", o: ["AgH", "Ag2H", "AgH2", "HAg"], c: 0, e: "Compuesto iónico formado por el cruce neutralizado de cargas entre Ag(+1) e H(-1): AgH." },
    { t: "Dada la fórmula Au2O, ¿cuál es su nombre por Stock?", o: ["Óxido de oro(III)", "Óxido de oro(I)", "Monóxido de dioro", "Óxido áurico"], c: 1, e: "El oro actúa con su menor estado de oxidación (+1), el cual pasa como subíndice oculto al oxígeno." },
    { t: "Dado el nombre 'Trisulfuro de dihierro', ¿cuál es su fórmula química?", o: ["Fe3S2", "FeS3", "Fe2S3", "Fe2S2"], c: 2, e: "Traducción directa de prefijos griegos: dos átomos de hierro y tres átomos de azufre: Fe₂S₃." },
    { t: "Dada la fórmula PtO2, ¿cuál es su nombre por Stock?", o: ["Óxido de platino(II)", "Óxido de platino(IV)", "Dióxido de platino", "Óxido de platino"], c: 1, e: "Proviene de Pt₂O₄ tras simplificar subíndices; indica que el platino actúa con su valencia mayor (+4)." },
    { t: "Dado el nombre 'Trihidruro de oro', ¿cuál es su fórmula química?", o: ["AuH", "AuH3", "Au3H", "Au2H3"], c: 1, e: "El prefijo tri- denota tres átomos de hidrógeno unidos a un átomo central de oro: AuH₃." },
    { t: "Dada la fórmula Na2O2, ¿cuál es su nombre de compuesto?", o: ["Óxido de sodio", "Peróxido de sodio", "Dióxido de disodio", "Óxido sódico"], c: 1, e: "La presencia de la estructura Na₂O₂ sin simplificar delata inequívocamente al peróxido de sodio." },
    { t: "Dado el nombre 'Ácido yodhídrico', ¿cuál es su fórmula química?", o: ["HI", "HI(aq)", "H2I", "IH"], c: 1, e: "La terminación -hídrico denota de forma obligatoria la disolución en agua del yoduro de hidrógeno: HI(aq)." },
    { t: "Dada la fórmula FeCl2, ¿cuál es su nombre por Stock?", o: ["Cloruro de hierro(III)", "Cloruro de hierro(II)", "Dicloruro de hierro", "Cloruro ferroso"], c: 1, e: "El hierro actúa aquí con su estado de oxidación menor (+2), reflejado en el número romano." },
    { t: "Dado el nombre 'Dióxido de carbono', ¿cuál es su fórmula química?", o: ["CO", "CO2", "C2O", "CO4"], c: 1, e: "Prefijo di- para dos átomos de oxígeno combinados con un átomo central de carbono: CO₂." },
    { t: "Dada la fórmula LiH, ¿cuál es su nombre sistemático?", o: ["Hidruro de litio", "Monohidruro de litio", "Hidruro de litio(I)", "Litio de hidruro"], c: 1, e: "Lleva el prefijo mono- para indicar de forma estricta un único átomo de hidrógeno." },
    { t: "Dado el nombre 'Metano', ¿cuál es su fórmula química?", o: ["CH3", "CH4", "C2H4", "SiH4"], c: 1, e: "Metano es la denominación común aceptada por la IUPAC para el tetrahidruro de carbono: CH₄." },
    { t: "Dada la fórmula SO3, ¿cuál es su nombre por Stock?", o: ["Trióxido de azufre", "Óxido de azufre(VI)", "Óxido de azufre(III)", "Óxido sulfúrico"], c: 1, e: "Proviene de S₂O₆ simplificado; el azufre actúa con su estado de oxidación máximo (+6)." },
    { t: "Dado el nombre 'Yoduro de cinc', ¿cuál es su fórmula química?", o: ["ZnI", "Zn2I", "ZnI2", "IZn"], c: 2, e: "El cinc tiene carga fija +2 y el yodo actúa con -1; al cruzar sus valencias obtenemos ZnI₂." },
    { t: "Dada la fórmula PbO, ¿cuál es su nombre por Stock?", o: ["Óxido de plomo(IV)", "Óxido de plomo(II)", "Monóxido de plomo", "Óxido plumboso"], c: 1, e: "Proviene de Pb₂O₂ simplificado; demuestra que el plomo está actuando con su menor valencia (+2)." },
    { t: "Dado el nombre 'Silano', ¿cuál es su fórmula química?", o: ["SiH2", "SiH4", "Si2H4", "CH4"], c: 1, e: "El silano es el nombre tradicional retenido por la IUPAC para el hidruro volátil SiH₄." },
    { t: "Dada la fórmula N2O5, ¿cuál es su nombre sistemático?", o: ["Óxido de nitrógeno(V)", "Pentaóxido de dinitrógeno", "Pentóxido de nitrógeno", "Ananhídrido nítrico"], c: 1, e: "Nomenclatura de prefijos: cinco átomos de oxígeno (pentaóxido) y dos de nitrógenos (dinitrógeno)." },
    { t: "Dado el nombre 'Bromuro de plata', ¿cuál es su fórmula química?", o: ["AgBr", "Ag2Br", "AgBr2", "BrAg"], c: 0, e: "Combinación directa y neutra del catión plata Ag(+1) con el anión bromuro Br(-1): AgBr." },
    { t: "Dada la fórmula HgO, ¿cuál es su nombre por Stock?", o: ["Óxido de mercurio", "Óxido de mercurio(II)", "Óxido de mercurio(I)", "Monóxido de mercurio"], c: 1, e: "El mercurio actúa con carga +2 (simplificado con el -2 del oxígeno), por lo que se indica con (II)." },
    { t: "Dado el nombre 'Fosfano', ¿cuál es su fórmula química?", o: ["PH", "PH2", "PH3", "PH4"], c: 2, e: "El fosfano es el nombre sistemático oficial de la IUPAC para el hidruro volátil de fósforo: PH₃." },
    { t: "Dada la fórmula SnH4, ¿cuál es su nombre sistemático?", o: ["Hidruro de estaño", "Tetrahidruro de estaño", "Hidruro de estaño(IV)", "Hidruro de estaño(II)"], c: 1, e: "Uso de prefijos numéricos: el prefijo estricto para cuatro átomos de hidrógeno es tetra-." },
    { t: "Dado el nombre 'Óxido de estroncio', ¿cuál es su fórmula química?", o: ["SrO", "Sr2O", "SrO2", "Sr2O2"], c: 0, e: "El estroncio es del grupo 2 (+2) y el oxígeno actúa con -2. Al simplificarse resulta SrO." },
    { t: "Dada la fórmula H2S (gaseoso), ¿cuál es su nombre?", o: ["Ácido sulfhídrico", "Sulfuro de hidrógeno", "Hidruro de azufre", "Sulfuro de dihidrógeno"], c: 1, e: "Sustancia pura en fase gaseosa; se nombra el no metal terminado en -uro seguido de 'de hidrógeno'." },
    { t: "Dado el nombre 'Trifluoruro de aluminio', ¿cuál es su fórmula química?", o: ["AlF", "Al3F", "AlF3", "Al2F3"], c: 2, e: "El prefijo tri- denota explícitamente tres átomos de flúor unidos al aluminio: AlF₃." },
    { t: "Dada la fórmula CrO3, ¿cuál es su nombre sistemático?", o: ["Óxido de cromo(VI)", "Trióxido de cromo", "Trióxido de dicromo", "Óxido crómico"], c: 1, e: "Lectura directa de los subíndices de la molécula: tres oxígenos equivalen al prefijo trióxido." },
    { t: "Dado el nombre 'Disulfuro de carbono', ¿cuál es su fórmula química?", o: ["CS", "CS2", "C2S", "CS4"], c: 1, e: "El prefijo di- indica dos átomos de azufre situados a la derecha de la fórmula: CS₂." },
    { t: "Dada la fórmula Au2O3, ¿cuál es su nombre sistemático?", o: ["Óxido de oro(III)", "Trióxido de dioro", "Dióxido de trioro", "Óxido áurico"], c: 1, e: "Se realiza la lectura de átomos mediante prefijos: tres oxígenos (trióxido) y dos oros (dioro)." },
    { t: "Dado el nombre 'Ácido fluorhídrico', ¿cuál es su fórmula química?", o: ["HF", "HF(aq)", "H2F", "FHe"], c: 1, e: "La estructura formal de un hidrácido disuelto en agua se indica añadiendo el sufijo (aq): HF(aq)." },
    { t: "Dada la fórmula Ni2O3, ¿cuál es su nombre por Stock?", o: ["Óxido de níquel(II)", "Óxido de níquel(III)", "Trióxido de diniquel", "Óxido niquélico"], c: 1, e: "El subíndice del oxígeno indica de manera directa que el níquel está actuando con valencia +3." },
    { t: "Dado el nombre 'Amoníaco', ¿cuál es su fórmula química?", o: ["NH2", "NH3", "NH4", "AzH3"], c: 1, e: "El amoníaco es el nombre comercial y tradicional admitido globalmente por la IUPAC para el NH₃." }

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
        if (!ok) registrarErrorEnBolsa(q);

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
// BLOQUE C: CONFIGURACIÓN Y CARGA DEL LABORATORIO DE ERRORES (BLOQUE 2)
function activarLaboratorioBinarios() {
    const labTarget = document.getElementById('laboratorio-target-preguntas');
    if (!labTarget) return;

    // Compuestos patrón de la ESO con fallos estructurales para auditar
    const casosErrores = [
        { f: "FeO3", n: "Óxido de hierro(III)", e: "El hierro actúa con +3 y el oxígeno con -2. La fórmula correcta es Fe₂O₃. El estudiante en prácticas olvidó realizar el cruce de cargas de forma cruzada.", c: "Fe2O3" },
        { f: "AlH", n: "Hidruro de aluminio", e: "El aluminio pertenece al grupo 13, presentando un único estado de oxidación estable de +3. El hidrógeno actúa con -1. La estructura corregida requiere tres hidrógenos: AlH₃.", c: "AlH3" }
    ];

    labTarget.innerHTML = "";
    
    casosErrores.forEach((caso, i) => {
        labTarget.innerHTML += `
            <div style="margin-bottom: 20px; padding: 20px; background: rgba(0,0,0,0.3); border-radius: 6px; border-left: 4px solid var(--accent-yellow);">
                <strong style="color:#fff; font-size:15px;">Muestra de Auditoría #${i+1}:</strong><br>
                <span style="font-size: 14px; color: var(--text-muted); display:block; margin: 5px 0;">Sustancia asignada: <strong>${caso.n}</strong> | Inscripción del frasco: <code style="color:var(--accent-critical); font-size:16px; font-weight:bold;">${caso.f}</code></span>
                <div style="margin-top: 12px;">
                    <label style="font-size: 13.5px; display:block; margin-bottom:6px; color:#fff;">Fórmula molecular enmendada:</label>
                    <input type="text" id="correc-lab-${i}" style="background:#0a0e17; border:1px solid var(--border); color:#fff; padding:8px; border-radius:4px; font-size:14px; width:100%; max-width:250px;" placeholder="Ej: Fe2O3">
                </div>
            </div>
        `;
    });

    document.getElementById('panel-laboratorio-binarios').style.display = 'block';
}

// HISTORIAL DE ERRORES REALIZADOS POR EL ALUMNO
let bolsaErrores = [];

// Captura las preguntas falladas durante la evaluación general
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
        q.o.forEach((opt, oIdx) => {
            opts += `<label class="option-row"><input type="radio" name="reparar-q-${idx}" value="${oIdx}"><span>${opt}</span></label>`;
        });
        target.innerHTML += `
            <div class="question-item" style="border-left: 3px solid var(--accent-yellow); padding-left: 15px;">
                <div class="question-text"><span style="color: var(--accent-yellow);">Pendiente:</span> ${q.t}</div>
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

    // Filtra y elimina de la bolsa las preguntas que el alumno ya ha corregido bien
    bolsaErrores = bolsaErrores.filter(q => !erroresCorregidos.includes(q));
    alert(`¡Validación completada! Has repasado con éxito ${erroresCorregidos.length} errores críticos.`);

    mostrarPantallaReparar();
}
