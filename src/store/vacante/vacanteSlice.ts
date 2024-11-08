import { createSlice } from "@reduxjs/toolkit";
//import { Paginacion } from "../common";

export interface Vacante {
  Id: "string";
  Name: "string";
  Description: "string";
  CreatedDate: "string";
  AreaSolicitante: "string";
  FinishDate: "string";
}

export interface vacanteState {
  //filtrosPostulantes: FiltrosPostulante;
  vacantes: Vacante[];
  // paginacionPostulantes: Paginacion;
  currentVacante: Vacante;
}

const initialState = {
  filtrosPostulantes: {},
  vacantes: [],
  //paginacionPostulantes: { page: 0, tamañoPagina: 1, totalItems: 20 },
  currentVacante: null,
} as vacanteState;

export const vacanteSlice = createSlice({
  name: "vacantesSlice",
  initialState,
  reducers: {
    // setFiltrosPostulantes: (state, action) => {
    //   state.filtrosPostulantes = action.payload;
    // },
    setCurrentVacante: (state, action) => {
      state.currentVacante = action.payload;
    },
    setVacante: (state, action) => {
      state.vacantes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrentVacante,
  setVacante,
  //setPaginacionPostulante,
} = vacanteSlice.actions;
