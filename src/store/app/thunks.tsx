import { ParametrosRegContables, setParametros, showNotification } from ".";
import { apiRegistrosContables } from "../../apis/apiRegistrosContables";
import { GenericResponse, GenericResponseParametric } from "../../app/interfaces";

export enum PertenenciaRegContables {
    estadoLC = "EstadoLC",
    estadoAC = "EstadoAC",
    tipoRegistroAC = "TipoRegistroAC",
    estado = "Estado",
    tipoRegistro = "TipoRegistro",
    formaPago = "FormaPago",
    tipoDocumento = "TipoDocumento",
    tipoMoneda = "TipoMoneda",
    tipoFacturacion = "TipoFacturacion",
}

export const getParametrosRegContables = () => {
    return async (dispatch: any) => {
        try {
            const response = await apiRegistrosContables.post<GenericResponseParametric<ParametrosRegContables[]>>(`api/v1/AccountingRecordsManager/ObtainParametricData`);
            dispatch(setParametros({ tipo: 'estadosLC', data: response.data.parametric.filter((x) => x.group === PertenenciaRegContables.estadoLC) }));
            dispatch(setParametros({ tipo: 'tipoRegistrosAC', data: response.data.parametric.filter((x) => x.group === PertenenciaRegContables.tipoRegistroAC) }));
            dispatch(setParametros({ tipo: 'estadosAC', data: response.data.parametric.filter((x) => x.group === PertenenciaRegContables.estadoAC) }));
            dispatch(setParametros({ tipo: 'estadosACH', data: response.data.parametric.filter((x) => x.group === PertenenciaRegContables.estado) }));
            dispatch(setParametros({ tipo: 'formaPago', data: response.data.parametric.filter((x) => x.group === PertenenciaRegContables.formaPago) }));
            dispatch(setParametros({ tipo: 'tipoRegistro', data: response.data.parametric.filter((x) => x.group === PertenenciaRegContables.tipoRegistro) }));
            dispatch(setParametros({ tipo: 'tipoDocumento', data: response.data.parametric.filter((x) => x.group === PertenenciaRegContables.tipoDocumento) }));
            dispatch(setParametros({ tipo: 'tipoMoneda', data: response.data.parametric.filter((x) => x.group === PertenenciaRegContables.tipoMoneda) }));
            dispatch(setParametros({ tipo: 'tipoFacturacion', data: response.data.parametric.filter((x) => x.group === PertenenciaRegContables.tipoFacturacion) }));
        } catch (error: any) {
            let message = 'Ocurrió un error desconocido';
            if (error.response && error.response.data && error.response.data.message) {
                message = error.response.data.message;
            }
            dispatch(showNotification({
                message: error.response.data.message,
                type: 'error',
                open: true
            }));
        } finally {
        }
    }
}


export interface EmailDecoderRequest {
    base64: string,
}

export interface EmailDecoderResponse {
    subject: string,
    from: string,
    to: string,
    body: string,
    htmlBody: string;
}

export const emailDecoder = async (request: EmailDecoderRequest) => {
    try {
        const response = await apiRegistrosContables.post<GenericResponse<EmailDecoderResponse>>(`api/v1/Archivos/EmailDecoder`, request);
        return response.data.data;
    } catch (error) {
        return null;
    }
}
