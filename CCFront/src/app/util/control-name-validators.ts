export class ControlNameValidator {
    static [required: string]: string;
    static [forbiddenString: string]: string
    static [noSpaces: string]: string;
    static [noValidDate: string]: string;

    static get forbiddenString(): string {
        return 'el campo no cumple con el formato solicitado';
    }

    static get required(): string {
        return 'campo requerido';
    }

    static get noSpaces(): string {
        return 'el campo no puede contener solo espacios';
    }

    static get noValidDate(): string {
        return 'la fecha no puede ser mayor o igual a la fecha actual';
    }

}

export class ControlName {

    //Expedientes 
    static [nombrePacienteElement: string]: string;
    static [fechaNacimientoElement: string]:string;
    static [escolaridadElement: string]:string;
    static [diagnosticoElement: string]:string;
    static [telefonoElement: string]: string;
    static [telefonoEmergenciaElement: string]: string;
    static [estadoCivilElement: string]: string;
    static [motivoDeConsultaElement: string]: string;
    static [antecendentesElement: string]: string;
    static [enfermedadPreviaSesion: string]: string;
    static [logroDeseadoElement: string]: string;
    static [preguntaMagicaElement: string]: string;
    static [tipoViviendaElement: string]: string;
    

    //Problemas de sesión
    static [descripcionElement: string]: string;
    static [frecuenciaElement: string]: string;
    static [intensidadElement: string]: string;
    static [afectacionFamiliarElement: string]: string;
    static [afectacionSaludElement: string]: string;
    static [afectacionParejaElement: string]: string;
    static [afectacionAmigosElement: string]: string;
    static [afectacionLaboralElement: string]: string;
    static [afectacionEspiritualElement: string]: string;
    static [afectacionEconomicoElement: string]: string;

    
    //Comentarios de sesión
    static [aspectoAMedirElement: string]: string;
    static [valoracionInicioElement: string]: string;
    static [valoracionFinElement: string]: string;
  

    //comentario extra del psicologo
    static [comentarioPsicologo: string]: string;

    //getters
    static get nombrePacienteElement(): string {
        return "Nombre del paciente";
    }
    static get fechaNacimientoElement(): string {
        return "Fecha de nacimiento";
    }
    static get escolaridadElement(): string {
        return "Escolaridad";
    }
    static get diagnosticoElement(): string {
        return "Diagnostico";
    }
    static get telefonoElement(): string {
        return "Telefono";
    }
    static get telefonoEmergenciaElement(): string {
        return "Telefono de emergecia";
    }
    static get estadoCivilElement(): string {
        return "Estado civil";
    }
    static get motivoDeConsultaElement(): string {
        return 'Motivo de la consulta';
    }
    static get antecendentesElement(): string {
        return 'Antecendentes';
    }
    static get enfermedadPreviaSesion(): string {
        return 'Enfermedad previa';
    }
    static get logroDeseadoElement(): string {
        return 'Logro deseado';
    }
    static get preguntaMagicaElement(): string {
        return 'Pregunta magica';
    }
    static get tipoViviendaElement(): string {
        return 'Tipo de vivienda';
    }

    //getters problemas de sesión 
    static get descripcionElement(): string {
        return 'Descripción del problema';
    }
    static get frecuenciaElement(): string {
        return 'Frecuencia del problema';
    }
    static get intensidadElement(): string {
        return 'Intensidad del problema';
    }
    static get afectacionFamiliarElement(): string {
        return 'Afectacion familiar del problema';
    }
    static get afectacionSaludElement(): string {
        return 'Afectacion salud del problema';
    }
    static get afectacionParejaElement(): string {
        return 'Afectacion pareja del problema';
    }
    static get afectacionAmigosElement(): string {
        return 'Afectacion amigos del problema';
    }
    static get afectacionLaboralElement(): string {
        return 'Afectacion laboral del problema';
    }
    static get afectacionEspiritualElement(): string {
        return 'Afectacion espiritual del problema';
    }
    static get afectacionEconomicoElement(): string {
        return 'Afectacion economica del problema';
    }

    //getters comentarios de sesión
    static get aspectoAMedirElement(): string {
        return 'Comentario aspecto a medir';
    }
    static get valoracionInicioElement(): string {
        return 'Comentario valoracion al inicio de la sesion';
    }
    static get valoracionFinElement(): string {
        return 'Comentario valoracion al final de la sesion';
    }

    //getter comentario extra del psicologo
    static get comentarioPsicologo(): string {
        return 'Comentario extra del psicologo';
    }

}