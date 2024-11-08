import { checkingCredentials, logout, login, errorAuth, setUsuariosRegistrosContables } from './';
import { Usuario, GenericResponse } from '../../app/interfaces';
import { setLoadingApp, showNotification } from '../app';
import { apiRegistrosContables } from '../../apis/apiRegistrosContables';



export interface InicioSesionOperador {
    GDominio: string
    Id: string
    Matricula: string
    Modo: number
}

export interface ResponseInicioSesionOperador {
    cantidad: number
    gDominio: string
    id: string
    matricula: string
    nombreCompleto: string
    offOnLine: boolean
    perfil: string
}

export interface UsuarioRegistrosContables {
    id: number,
    matricula: string,
    nombre: string,
    area: string,
    perfil: string,
    fechaPrimerIngreso: string,
    fechaUltimoIngreso: string
}

export const checkingAuthentication = () => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials());
    }
}


export const startLoginWithCredentials = (values: any) => {
    return async (dispatch: any) => {
        try {
            dispatch(checkingCredentials());
            dispatch(setLoadingApp(true));
            const response = await apiRegistrosContables.post<GenericResponse<Usuario>>(`api/v1/Authentication/UserAuthentication/Login`, {}, {
                auth: {
                    username: values.username,
                    password: values.password
                }
            });
            if (response.data.success) {
                await dispatch(login(response.data.data))
            } else {
                dispatch(errorAuth(response.data.message))
            }
        } catch (error: any) {
            let message = 'Ocurrió un error desconocido';
            if (error.response && error.response.data && error.response.data.message) {
                message = error.response.data.message;
            }
            dispatch(errorAuth(message))
        } finally {
            dispatch(setLoadingApp(false));
        }
    }
}

export const startLoginWithEmailPassword = () => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials());
        // const result = await loginWithEmailPassword({ email, password });
        // console.log(result);

        // if (!result.ok) return dispatch(logout(result));
        // dispatch(login(result));
    }
}


export const startLogout = () => {
    return async (dispatch: any) => {
        try {
            dispatch(logout(''))
            // const response = await apiSignalR.post<ResponseInicioSesionOperador>(`api/v1/ConnectionSignal/OperadorInicioSession`, credentials);

        } catch (error: any) {
            dispatch(showNotification({
                message: error.response.data.message,
                type: 'error',
                open: true
            }));
        }
    }
}

export const getUsuariosByPerfil = (perfil: string) => {
    return async (dispatch: any) => {
        try {
            const response = await apiRegistrosContables.get<GenericResponse<UsuarioRegistrosContables[]>>(`api/v1/Usuarios?Perfil=${perfil}`);
            dispatch(setUsuariosRegistrosContables({ data: response.data.data.filter(user => user.perfil === 'CONTRALOR'), tipo: 'usuariosContralor' }));
            dispatch(setUsuariosRegistrosContables({ data: response.data.data, tipo: 'usuariosSistema' }));
        } catch (error: any) {
            dispatch(showNotification({
                message: error.response.data.message,
                type: 'error',
                open: true
            }));
        }
    }
}