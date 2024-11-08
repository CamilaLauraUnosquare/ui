import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
//import { Paginacion } from "../common";

export interface FiltrosPostulante {
  city: number;
  career: string;
  yearsOfExperience: number;
  vacantId: number;
}
export interface Postulante {
  Id: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  Email: string;
  CreatedDate: string;
  Cv: string;
  Evaluar: string;
  porcentaje: number;
}

export interface postulantesState {
  filtrosPostulantes: FiltrosPostulante;
  postulantes: Postulante[];
 // paginacionPostulantes: Paginacion;
  currentPostulantes: Postulante;
}

const initialState = {
  filtrosPostulantes: {},
  postulantes: [],
  //paginacionPostulantes: { page: 0, tamañoPagina: 1, totalItems: 20 },
  currentPostulantes: null,
} as postulantesState;

export const postulantesSlice = createSlice({
  name: "postulantesSlice",
  initialState,
  reducers: {
    setFiltrosPostulantes: (state, action) => {
      state.filtrosPostulantes = action.payload;
    },
    setCurrentPostulante: (state, action) => {
      state.currentPostulantes = action.payload;
    },
    setPostulantes: (state, action) => {
      state.postulantes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrentPostulante,
  setPostulantes,
  //setPaginacionPostulante,
  setFiltrosPostulantes,
} = postulantesSlice.actions;
