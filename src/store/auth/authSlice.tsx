import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import { UsuarioRegistrosContables } from '.';

export interface AuthState {
    status: string,
    fullName?: string | null;
    usuariosContralor: UsuarioRegistrosContables[],
    usuariosSistema: UsuarioRegistrosContables[],
    errorMessage: null,
}

const initialStateUsuario: any = {
    nombreCompleto: null,
    matricula: null,
    areaUsuario: null,
    divisionUsuario: null,
    perfiles: [],
    politicas: {
        ADMINISTRADOR: false,
        CONTRALOR: false,
        CONTADOR: false,
        CONSULTAS: false,
    },
}

const initialState = {
    status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
    ...initialStateUsuario,
    errorMessage: null,
    usuariosContralor: [],
    usuariosSistema: [],
} as AuthState;


export interface Token {
    area: string,
    aud: string,
    exp: number,
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string,
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string,
    iss: string,
    division: string,
    nbf: number,
    perfil: string,
}

interface SetParametrosPayload {
    tipo: keyof AuthState;
    data: UsuarioRegistrosContables[];
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }: { payload: any }) => {
            state.status = 'authenticated'; // 'checking', 'not-authenticated', 'authenticated'
            state.fullName = payload.nombreUsuario;
            const jsonToken = jwtDecode(payload.token) as Token;
            localStorage.setItem('token', payload.token);
        },
        logout: (state, _) => {
            localStorage.removeItem('token');
            state.status = 'not-authenticated'; // 'checking', 'not-authenticated', 'authenticated'
            state.fullName = null;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
            state.errorMessage = null;
        },
        errorAuth: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.errorMessage = payload;
        },
        setUserInformation: (state, { payload }: { payload: any }) => { //payload coud be the user
            state.status = 'authenticated'; // 'checking', 'not-authenticated', 'authenticated'
            state.fullName = payload.fullName;
        },
        setUsuariosRegistrosContables: (state, action: PayloadAction<SetParametrosPayload>) => {
            /* @ts-ignore */
            state[action.payload.tipo] = action.payload.data;
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, errorAuth, setUserInformation, setUsuariosRegistrosContables } = authSlice.actions;