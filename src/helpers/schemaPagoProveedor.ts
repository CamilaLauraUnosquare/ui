import dayjs from "dayjs";
import * as Yup from "yup";

export interface AprobarPagoProveedor {
    fechaRegistro: string,
    fechaRecepcion: string,
    estadoDocumento: string,
    comentariosAprobacion: string,
}

export const initialValuesAprobarPagoProveedor: AprobarPagoProveedor = {
    fechaRegistro: dayjs().format("YYYY-MM-DD"),
    fechaRecepcion: dayjs().format("YYYY-MM-DD"),
    estadoDocumento: "",
    comentariosAprobacion: "",
};

export const aprobarPagoProveedorSchema = Yup.object().shape({
    fechaRegistro: Yup.string()
        .required("Campo requerido"),
    fechaRecepcion: Yup.string()
        .required("Campo requerido"),
    estadoDocumento: Yup.string()
        .required("Campo requerido"),
    comentariosAprobacion: Yup.string()
        .required("Campo requerido")
});