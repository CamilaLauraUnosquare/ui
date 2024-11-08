import { apiRest } from "../../apis/apiRest";
import { setLoadingApp, showNotification } from "../app";
import { City, GenericResponse, Paginacion } from "../common";
import { FiltrosPostulante, setPostulantes } from "./postulantesSlice";

export interface AplicantEntity {
  Id: number;
  Code: number;
  City: City;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  Email: string;
  CreatedDate: Date;
  Age: number;
  YearsOfExperience: number;
  Career: string;
  DesiredRatePerMonth: number;
}

export const getPostulantes = (
  filtros: FiltrosPostulante,
  paginacion: Paginacion
) => {
  return async (dispatch: any) => {
    try {
      console.log("POSTULANTES");
      const request = {
        ...filtros,
        ...paginacion,
      };
      // const response = await apiRest.post<GenericResponse<AplicantEntity>>(
      //   "api/v1/Applicants",
      //   request
      // );
      // console.log(response);
      dispatch(setPostulantes(paginacion.page == 0 ? quemado : quemado2));
    } catch (error: any) {
      let message = "Ocurrió un error desconocido";
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        message = error.response.data.message;
      }
      dispatch(
        showNotification({
          open: true,
          message,
          type: "error",
        })
      );
    } finally {
      dispatch(setLoadingApp(false));
    }
  };
};

const quemado = [
  {
    Id: "1",
    FirstName: "Daniel Marcelo",
    LastName: "Vega Aguirre",
    PhoneNumber: "59179696997",
    Email: "dani.vega.aguirre@gmail.com",
    CreatedDate: "29-06-2024",
    porcentaje: 90,
  },
  {
    Id: "2",
    FirstName: "Carlos Ignacio",
    LastName: "Zurita Rojas",
    PhoneNumber: "59179696997",
    Email: "carlos.ignacio@gmail.com",
    CreatedDate: "29-06-2024",
    porcentaje: 60,
  },
  {
    Id: "3",
    FirstName: "Alejandro Javier",
    LastName: "Zeballos ",
    PhoneNumber: "59179696997",
    Email: "dani.vega.aguirre@gmail.com",
    CreatedDate: "29-06-2024",
    porcentaje: 75,
  },
  {
    Id: "4",
    FirstName: "Juan Jose",
    LastName: "Arcani",
    PhoneNumber: "59179696997",
    Email: "dani.vega.aguirre@gmail.com",
    CreatedDate: "29-06-2024",
    porcentaje: 90,
  },
  {
    Id: "5",
    FirstName: "Sara Camila",
    LastName: "Laura Manzaneda",
    PhoneNumber: "59179696997",
    Email: "dani.vega.aguirre@gmail.com",
    CreatedDate: "29-06-2024",
    porcentaje: 15,
  },
];
const quemado2 = [
  {
    Id: "5",
    FirstName: "Pepito ",
    LastName: "Perez",
    PhoneNumber: "59179696997",
    Email: "dani.vega.aguirre@gmail.com",
    CreatedDate: "29-06-2024",
    porcentaje: 10,
  },
];
