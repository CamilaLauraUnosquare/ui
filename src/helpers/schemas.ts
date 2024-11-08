import * as Yup from "yup";


export interface AsignarSolicitud {
    matricula: string;
    comentarios: string
}

export const initialValuesAsignarSolicitud: AsignarSolicitud = {
    matricula: "",
    comentarios: ""
};

export const asignarSolicitudSchema = Yup.object().shape({
    matricula: Yup.string()
        .required("Campo requerido"),
    comentarios: Yup.string(),
});

export interface RechazarSolicitud {
    comentarios: string
}

export const initialValuesRechazarSolicitud: RechazarSolicitud = {
    comentarios: ""
};

export const rechazarSolicitudSchema = Yup.object().shape({
    comentarios: Yup.string()
        .required("Campo requerido"),
});

// APROBAR SOLICITUD

export interface AprobarSolicitud {
    comentarioAprobacion: string;
    nroComprobante: number;
    estadoDocumentacion: string
}

export const initialValuesAprobarSolicitud: AprobarSolicitud = {
    comentarioAprobacion: "",
    nroComprobante: 0,
    estadoDocumentacion: ""
};

export const aprobarSolicitudSchema = Yup.object().shape({
    comentarioAprobacion: Yup.string()
        .required("Campo requerido"),
    nroComprobante: Yup.number()
        .required("Campo requerido"),
    estadoDocumentacion: Yup.string()
        .required("Campo requerido"),
});