import { jwtDecode } from "jwt-decode";
import { Token } from "../store/auth";

export const GetUserInformation = (token: string) => {
    try {
        if(token === null || token === undefined || token === ''){
            return null;
        }

        const jsonToken = jwtDecode(token) as Token;
        const currentTime = Date.now() / 1000;

        if (jsonToken.exp < currentTime) {
            console.log('Token has expired.');
            return null;
        } else {
            return {
                nombreCompleto: jsonToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
                matricula: jsonToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
                areaUsuario: jsonToken.area,
                divisionUsuario: jsonToken.division,
                perfiles: [jsonToken.perfil],
                politicas: jsonToken.politicas
            }
        }
    } catch (error) {
        console.error('Error decoding token: ', error);
        return null;
    }
}