const errors: { [key: number]: string } = {
  400: "Obtuvimos una respuesta erronea,intentalo de nuevo...",
  403: "No tienes acceso, lo sentimos.",
  404: "No encontramos lo que buscas, revisa los datos por favor",
  405: "No puedo dejar que hagas esto",
  407: "Necesitas Registrate para ver este contenido.",
  408: "Tiempo terminado, revisa tu conexion a internet.",
  413: "Son demasiados datos, no puedo mostrarlos.",
  415: "No puedo procesar el archivo que mandaste, revisa el formato por favor.",
  429: "Hemos obtenido diferentes respuetas, revisa los datos por favor.",
  451: "No puedo mostrarte este contenido por razones legales.",
  500: "El servidor ha fallado, intentalo de nuevo...",
  501: "No se ha implementado esta funcionalidad, espérala pronto!",
  503: "El servidor no esta disponible, lo sentimos",
  505: "HTTP Version Not Supported",
};

const errorAdapter = ({ response }: any) => {
  const errorData: Array<{ message: string; name: string }> = [];
  if (response !== undefined) {
    if (response.errors.length > 0) {
      response.errors.forEach((errorItem: any) => {
        errorData.push({
          message: errorItem.propertyName,
          name: errorItem.errorMessage,
        });
      });
    } else {
      const errorCode = response.status;
      const customError = errors[errorCode];
      errorData.push({ message: customError, name: errorCode });
    }
    return errorData;
  }

  return {
    message: "Algo falló, intenta de nuevo",
    name: "generalError",
  };
};

export default errorAdapter;
