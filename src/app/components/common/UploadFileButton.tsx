import {  IconButton } from '@mui/material'

import { useDropzone } from 'react-dropzone';
import { ArchivosMultimedia } from '../pago_proveedor/CargaMasiva';
import { setPreviewFile, showNotification } from '../../../store/app';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';

import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import { useSelector } from 'react-redux';
import { consultarFacturasRecibosById, consultarPagoProveedorById, guardarArchivo } from '../../../store/pago_proveedor';
import { Box, CircularProgress, Typography } from '@mui/material';
import { obtenerAjustesContables } from '../../../store/ajuste_contable';


export const UploadFileButton = ({idSolicitud, idFacRec}) => {
    const dispatch = useAppDispatch();
    const { filtrosReciboFactura } = useAppSelector((state) => state.pagoProveedor)
    const { filtrosAjusteContable } = useAppSelector((state) => state.ajusteContable)

    const [loading, setLoading] = useState(false);
    const [archivo, setArchivo] = useState({ file: new File([''], 'filename'), preview: '' });
    const { open: openMultimedia } = useDropzone({
        // Acepta solo archivos Excel
        accept: {
            'image/*': '.jpg, .jpeg, .png, .gif, .bmp'.split(', '),
            'application/pdf': '.pdf'.split(', '),
            'application/vnd.ms-outlook': '.msg'.split(', '), // Para archivos de correo Outlook
            'application/vnd.ms-excel.sheet.macroEnabled.12': '.xlsm'.split(', '), // Para archivos Excel
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx, .xls'.split(', '), // Para archivos Excel
            'application/vnd.openxmlformats-officedocument.presentationml.presentation': '.pptx'.split(', '), // Para archivos PowerPoint
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx'.split(', '), // Para archivos Word
            'message/rfc822': '.eml'.split(', '), // Para archivos de correo EML
        },
        onDrop: (acceptedFiles) => {

            if (acceptedFiles.length === 0) {
                return;
            }
            setLoading(true);

            const file = acceptedFiles[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                setLoading(true);
                setArchivo({ file, preview: reader.result } as ArchivosMultimedia);
                console.log('ARCHIVO: ' + reader.result);
                dispatch(guardarArchivo({
                    data: reader.result.toString().split(",")[1] ?? "",
                    nombreArchivo: file.name,
                    tipoArchivo: file.type.split("/")[0],
                    mimeType: file.type,
                    extension: file.name.split(".")[1] ?? "",
                    categoria: "ADJUNTO",
                    idSolicitud,
                    idFacRec
                }));
                dispatch(consultarPagoProveedorById(idSolicitud));
                dispatch(consultarFacturasRecibosById({ ...filtrosReciboFactura, idPagoProveedor: idSolicitud }));
                setLoading(false);
            };

            reader.onerror = (err) => {
                console.error(err);
                dispatch(showNotification({
                    message: 'Ocurrió un error vuelva a intentarlo',
                    type: 'error',
                    open: true
                }));
                setLoading(false);
            };

            setLoading(true);
            reader.readAsDataURL(file);
            console.log('ARCHIVO: ' + JSON.stringify(file));
            
          
        },
        maxFiles: 1,
        noClick: true,
        multiple: false
    });

    const openFile = (url: string, type: string, name: string) => () => {
        dispatch(setPreviewFile({ open: true, url, type, name }));
    }
    const deleteFile = () => {
        setArchivo({ file: new File([''], 'filename'), preview: '' });
    }



    return (
        <Box component='div'>
           
            {
                loading ? 
                    <Box display='flex' flexDirection='column' alignItems='center' height='210px' justifyContent='center'>
                        <CircularProgress />
                        <Typography color='primary' variant='caption' component='div'>
                            <Box sx={{ mt: '7px' }}>
                                Cargando archivo 
                            </Box>
                        </Typography>
                    </Box>
                : 
                <IconButton color='success' onClick={openMultimedia}> <AddCircleOutline /></IconButton>
            }
        </Box>
        // <IconButton color='success' onClick={openMultimedia}> <AddCircleOutline /></IconButton>
    )
}
