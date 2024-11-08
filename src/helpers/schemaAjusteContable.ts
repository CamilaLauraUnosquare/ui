import * as Yup from "yup";


export interface RegistrarAjusteContable {
    numSolicitudes: string;
    fechaContable: string;
    observaciones: string;
    instruccionesAdicionales: string
}

export const initialValuesRegistrarAjuste: RegistrarAjusteContable = {
    numSolicitudes: "",
    fechaContable: "",
    observaciones: "",
    instruccionesAdicionales: ""
};

export const registrarAjusteSchema = Yup.object().shape({
    numSolicitudes: Yup.string()
        .required("Campo requerido"),
    fechaContable: Yup.string()
        .required("Campo requerido"),
    observaciones: Yup.string()
        .required("Campo requerido"),
    instruccionesAdicionales: Yup.string()
        .required("Campo requerido"),
});



/******************************************** */
export interface RegistrarSolicitudAjusteContable {
    secSap: string;
    secAsignada: string;
    tipoRegistro: string;
}

export const initialValuesRegistrarSolicitudAjuste: RegistrarSolicitudAjusteContable = {
    secSap: "",
    secAsignada: "",
    tipoRegistro: ""
};

export const registrarSolicitudAjusteSchema = Yup.object().shape({
    secSap: Yup.string()
        .required("Campo requerido"),
    secAsignada: Yup.string()
        .required("Campo requerido"),
    tipoRegistro: Yup.string()
        .required("Campo requerido")
});

export interface FinalizarSolicitudAjusteContable {
    secContabilizada: string;
}

export const initialValuesFinalizarSolicitudAjuste: FinalizarSolicitudAjusteContable = {
    secContabilizada: "",
};

export const finalizarSolicitudAjusteSchema = Yup.object().shape({
    secContabilizada: Yup.string()
        .required("Campo requerido"),
});


export interface RechazarSolicitudAjusteContable {
    comentarioRechazo: string;
}

export const initialValuesRechazarSolicitudAjuste: RechazarSolicitudAjusteContable = {
    comentarioRechazo: "",
};

export const rechazarSolicitudAjusteSchema = Yup.object().shape({
    comentarioRechazo: Yup.string()
        .required("Campo requerido"),
});