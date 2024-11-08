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

export const getVacantes = (
) => {
  return async (dispatch: any) => {
    try {
      console.log("VAcantes");
 
      // const response = await apiRest.post<GenericResponse<AplicantEntity>>(
      //   "api/v1/Applicants",
      //   request
      // );
      // console.log(response);
      //dispatch(setPostulantes(paginacion.page == 0 ? quemado : quemado2));
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
