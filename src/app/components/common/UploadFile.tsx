import { Box, Button, CircularProgress, IconButton, Paper, Typography } from '@mui/material'
import Bandeja from '../../../assets/bandeja-de-salida.png';
import { useDropzone } from 'react-dropzone';
import { ArchivosMultimedia } from '../pago_proveedor/CargaMasiva';
import { setPreviewFile, showNotification } from '../../../store/app';
import { useState } from 'react';
import { useAppDispatch } from '../../../store/hooks/hooks';

import ImageIconPng from '../../../assets/image_icon.png';
import PdfIconPng from '../../../assets/pdf_icon.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
interface Props {
    archivo: ArchivosMultimedia,
    setArchivo: React.Dispatch<React.SetStateAction<ArchivosMultimedia>>
}

export const UploadFile = ({ archivo, setArchivo }: Props) => {

    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const { getRootProps: getRootPropsMultimedia, getInputProps: getInputPropsMultimedia, open: openMultimedia } = useDropzone({
        // Acepta solo archivos Excel
        accept: {
            'image/*': '.jpg, .jpeg, .png, .gif, .bmp'.split(', '),
            'application/pdf': '.pdf, .eml'.split(', '),

        },
        maxFiles: 1,
        onDrop: (acceptedFiles) => {

            if (acceptedFiles.length === 0) {
                return;
            }

            const file = acceptedFiles[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                setArchivo({ file, preview: reader.result } as ArchivosMultimedia);
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
        },
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
        <Box component={Paper} mt={3} px={3} py={3} mr={4}>
            <Typography m='auto' component='div' color='primary' textTransform='uppercase'>
                <Box fontWeight='700' >
                    DOCUMENTO DE PAGO
                </Box>
            </Typography>
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
                    archivo.preview ?
                        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' height='210px'>
                            <Box position='relative'>
                                {archivo.file.type.includes('image') ?
                                    <Box component='img' width='65px' src={ImageIconPng} />
                                    :
                                    <Box component='img' width='65px' src={PdfIconPng} />
                                }
                                <IconButton color='error' sx={{ position: 'absolute', top: '-26px', right: '-30px' }} size='small' onClick={deleteFile}>
                                    <CancelIcon fontSize='small' />
                                </IconButton>
                            </Box>
                            <Typography component='div' textAlign='center'>
                                <Box my={1}>
                                    {archivo.file.name}
                                </Box>
                            </Typography>
                            <Button onClick={openFile(archivo.preview, archivo.file.type, archivo.file.name)} variant='outlined' color='primary' size='small' startIcon={<VisibilityIcon />}>Vista previa</Button>
                            {/* <Button onClick={deleteFile} variant='outlined' color='error' size='small' startIcon={<ClearIcon />}>Quitar</Button> */}
                        </Box>
                        :
                        <Box
                            {...getRootPropsMultimedia()}
                            sx={{
                                height: 200,
                                border: '1px dashed gray',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                borderRadius: '8px',
                                width: '90%',
                                marginX: 'auto'
                                // backgroundColor: isDragActive ? 'lightgreen' : 'white' // Cambia el color de fondo cuando un archivo está siendo arrastrado sobre el cuadro
                            }}
                            mt={1}
                        >
                            <input {...getInputPropsMultimedia()} />
                            <Box component='img' width='50px' src={Bandeja} />
                            <Typography component='div'>
                                <Box mt={1}>
                                    Arrastra y suelta el documento de pago
                                </Box>
                            </Typography>
                            <Typography component='div'>
                                <Box mb={1}>
                                    ó
                                </Box>
                            </Typography>
                            <Button variant="contained" onClick={openMultimedia}>
                                Buscar archivos
                            </Button>
                        </Box>
            }
        </Box>
    )
}
