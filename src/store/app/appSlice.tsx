import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ParametrosRegContables {
    idParametric: number;
    value: string;
    description: string;
    group: string;
}

export interface AppState {
    openNotification: boolean,
    notification: any,
    loading: boolean,
    estadosLC: ParametrosRegContables[],
    tipoRegistrosAC: ParametrosRegContables[],
    estadosAC: ParametrosRegContables[],
    estadosACH: ParametrosRegContables[],
    formaPago: ParametrosRegContables[],
    tipoRegistro: ParametrosRegContables[],
    tipoDocumento: ParametrosRegContables[],
    tipoMoneda: ParametrosRegContables[],
    tipoFacturacion: ParametrosRegContables[],
    previewFile: {
        open: boolean,
        url: string,
        type: string,
        name: string,
    }
}

const initialState = {
    openNotification: false,
    notification: {
        message: '',
        type: 'error',
    },
    loading: false,
    estadosLC: [],
    tipoRegistrosAC: [],
    estadosAC: [],
    estadosACH: [],
    formaPago: [],
    tipoRegistro: [],
    tipoDocumento: [],
    tipoMoneda: [],
    tipoFacturacion: [],
    previewFile: {
        open: false,
        url: '',
        type: '',
        name: '',
    }
} as AppState

interface SetParametrosPayload {
    tipo: keyof AppState;
    data: ParametrosRegContables[];
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        showNotification: (state, { payload }) => {
            state.notification.message = payload.message;
            state.notification.type = payload.type;
            state.openNotification = payload.open;
        },
        setLoadingApp: (state, { payload }) => {
            state.loading = payload;
        },
        setParametros: (state, action: PayloadAction<SetParametrosPayload>) => {
            state[action.payload.tipo] = action.payload.data;
        },
        setPreviewFile: (state, { payload }) => {
            state.previewFile.open = payload.open;
            state.previewFile.url = payload.url;
            state.previewFile.type = payload.type;
            state.previewFile.name = payload.name;
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    showNotification,
    setLoadingApp,
    setParametros,
    setPreviewFile
} = appSlice.actions;