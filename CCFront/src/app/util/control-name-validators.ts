export class ControlNameValidator {
    static [required: string]: string;
    static [forbiddenString: string]: string

    static get forbiddenString(): string {
        return 'El campo no cumple con el formato solicitado';
    }

    static get required(): string {
        return 'requerido';
    }

}

export class ControlName {
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

}