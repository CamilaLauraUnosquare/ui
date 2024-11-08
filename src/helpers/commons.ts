import axios from "axios";
import dayjs from "dayjs";
//import { FiltrosFacturaLibroCompra } from "../store/facturas_recibos";

export const downloadFile = async (url: string, filename: string) => {
    const response = await axios.get(url, { responseType: 'blob' });
    const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = urlBlob;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const gestionSelect = Array.from({ length: 15 }, (_, i) => {
    const year = dayjs().subtract(i, 'year').format('YYYY');
    return { id: year, value: year };
});

export const periodoSelect = [
    {
        id: '01',
        value: 'Enero'
    },
    {
        id: '02',
        value: 'Febrero'
    },
    {
        id: '03',
        value: 'Marzo'
    },
    {
        id: '04',
        value: 'Abril'
    },
    {
        id: '05',
        value: 'Mayo'
    },
    {
        id: '06',
        value: 'Junio'
    },
    {
        id: '07',
        value: 'Julio'
    },
    {
        id: '08',
        value: 'Agosto'
    },
    {
        id: '09',
        value: 'Septiembre'
    },
    {
        id: '10',
        value: 'Octubre'
    }, {
        id: '11',
        value: 'Noviembre'
    }
    , {
        id: '12',
        value: 'Diciembre'
    }
]

export function tieneFiltros(filtrosFacturaLibroCompra: any): boolean {
    for (let key in filtrosFacturaLibroCompra) {
        if (
            filtrosFacturaLibroCompra[key] !== null &&
            filtrosFacturaLibroCompra[key] !== '' &&
            filtrosFacturaLibroCompra[key] !== undefined &&
            filtrosFacturaLibroCompra[key] !== 0 &&
            key !== 'pageSize' &&
            key !== 'pageNumber' &&
            !(Array.isArray(filtrosFacturaLibroCompra[key]) && filtrosFacturaLibroCompra[key].length === 0)
        ) {
            return true;
        }
    }
    return false;
}

export const validarFiltro = (filtros: any, filtroKey: keyof any) => {
    return filtros[filtroKey] === null ||
        filtros[filtroKey] === '' ||
        filtros[filtroKey] === undefined ||
        filtros[filtroKey] === 0 ||
        filtroKey === 'pageSize' ||
        filtroKey === 'pageNumber' ||
        (Array.isArray(filtros[filtroKey]) && (filtros[filtroKey] as string[]).length === 0);
}