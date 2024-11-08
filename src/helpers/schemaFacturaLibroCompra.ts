import * as Yup from "yup";


export interface AsignarFacturaLibroCompra {
    matricula: string;
}

export const initialValuesRegistrarFacturaLibroCompra: AsignarFacturaLibroCompra = {
    matricula: "",
};

export const registrarFacturaLibroCompraSchema = Yup.object().shape({
    matricula: Yup.string()
        .required("Campo requerido")
});



export interface ReAsignarLibroCompra {
    matricula: string;
}

export const initialValuesReasignarFacturaLibroCompra: ReAsignarLibroCompra = {
    matricula: "",
};

export const reasignarFacturaLibroCompraSchema = Yup.object().shape({
    matricula: Yup.string()
        .required("Campo requerido")
});


export interface DepurarLibroCompra {
    estadoDepuracion: string;
    comentarios: string;
}

export const initialValuesDepurarFacturaLibroCompra: DepurarLibroCompra = {
    estadoDepuracion: "",
    comentarios: "",
};

export const depurarFacturaLibroCompraSchema = Yup.object().shape({
    estadoDepuracion: Yup.string()
        .required("Campo requerido"),
    comentarios: Yup.string()
        .required("Campo requerido")
});


export interface EditarBancarizacionCompra {
    idFactura: string,
    modalidadTransaccion: string,
    numeroCuentaDocumentoPago: string,
    montoPagadoDocumentoPago: number,
    montoAcumulado: number,
    tipoTransaccion: string,
    numeroDocumentoPago: string,
    fechaDelDocumentoPago: string,
    fechaDocumentoPago: string,
    numeroContrato: string,
    numeroAutorizacion: string
}

export const initialValuesBancarizacionLibroCompra: EditarBancarizacionCompra = {
    idFactura: "",
    modalidadTransaccion: "",
    numeroCuentaDocumentoPago: "",
    montoPagadoDocumentoPago: 0,
    montoAcumulado: 0,
    tipoTransaccion: "",
    numeroDocumentoPago: "",
    fechaDelDocumentoPago: "",
    fechaDocumentoPago: "",
    numeroContrato: "",
    numeroAutorizacion: ""
};

export const bancarizacionLibroCompraSchema = Yup.object().shape({
    modalidadTransaccion: Yup.string()
        .required("Campo requerido"),
    numeroCuentaDocumentoPago: Yup.string()
        .required("Campo requerido"),
    montoPagadoDocumentoPago: Yup.number()
        .required("Campo requerido"),
    montoAcumulado: Yup.number()
        .required("Campo requerido"),
    tipoTransaccion: Yup.string()
        .required("Campo requerido"),
    numeroDocumentoPago: Yup.string()
        .required("Campo requerido"),
    fechaDelDocumentoPago: Yup.string()
        .required("Campo requerido"),
    fechaDocumentoPago: Yup.string()
        .required("Campo requerido"),
    numeroContrato: Yup.string()
        .required("Campo requerido"),
    numeroAutorizacion: Yup.string()
        .required("Campo requerido")
});