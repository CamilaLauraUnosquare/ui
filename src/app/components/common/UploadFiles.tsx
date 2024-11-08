import React, { useRef, useState } from 'react'
import { ArchivosMultimedia } from '../pago_proveedor/CargaMasiva';

import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { setPreviewFile, showNotification } from '../../../store/app';
import { useAppDispatch } from '../../../store/hooks/hooks';
import Bandeja from '../../../assets/bandeja-de-salida.png';

import { Box, Button, CircularProgress, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDropzone } from 'react-dropzone';


interface Props {
    archivosAdjuntos: ArchivosMultimedia[],
    setArchivosAdjuntos: React.Dispatch<React.SetStateAction<ArchivosMultimedia[]>>
}


const extensionesVisiblesPermitidas = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.pdf', '.msg', '.xlsx', '.xls', '.eml'];

export const UploadFiles = ({ archivosAdjuntos, setArchivosAdjuntos }: Props) => {
    const dispatch = useAppDispatch();

    

    const [loading, setLoading] = useState(false);
    const { getRootProps: getRootPropsAdjuntos, getInputProps: getInputPropsAdjuntos, open: openAdjuntos } = useDropzone({
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
            const fileReaders = acceptedFiles.map((file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();

                    reader.onloadend = () => {
                        resolve({ file, preview: reader.result });
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            });

            setLoading(true);
            Promise.all(fileReaders)
                .then((files) => {
                    setArchivosAdjuntos(files as ArchivosMultimedia[]);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    dispatch(showNotification({
                        message: 'Ocurrió un error vuelva a intentarlo',
                        type: 'error',
                        open: true
                    }));
                    setLoading(false);
                });
        },
        noClick: true,
    });

    const openFile = (url: string, type: string, name: string) => () => {
        dispatch(setPreviewFile({ open: true, url, type, name }));
    }

    const deleteFile = (name: string) => () => {
        setArchivosAdjuntos(archivosAdjuntos.filter((file) => file.file.name !== name));
    }


    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleButtonClick = () => {
        fileInputRef?.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files as FileList;

        const fileReaders = Array.from(files).map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve({ file, preview: reader.result });
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        });

        setLoading(true);
        Promise.all(fileReaders)
            .then((files) => {
                setLoading(false);
                setArchivosAdjuntos([...archivosAdjuntos, ...files as ArchivosMultimedia[]]);
            })
            .catch((err) => {
                console.error(err);
                dispatch(showNotification({
                    message: 'Ocurrió un error vuelva a intentarlo',
                    type: 'error',
                    open: true
                }));
                setLoading(false);
            });
    };

    return (
        <Box width='100%' minHeight='282px' component={Paper} px={3} py={3}>
            <Box display='flex' justifyContent='space-between'>
                <Typography component='div' color='primary' textTransform='uppercase'>
                    <Box fontWeight='700' mb={1}>
                        ARCHIVOS ADJUNTOS
                    </Box>
                </Typography>
                {
                    archivosAdjuntos.length > 0 &&
                    <Box display='flex' justifyContent='end'>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                            multiple
                            accept="image/*,.pdf,application/vnd.ms-outlook,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.wordprocessingml.document,message/rfc822,application/vnd.ms-excel.sheet.macroEnabled.12,application/vnd.ms-excel"
                        />
                        <Button
                            sx={{ textTransform: 'none' }}
                            size='small'
                            variant='outlined'
                            color='primary'
                            startIcon={<AddIcon />}
                            onClick={handleButtonClick}
                        >
                            Añadir archivos
                        </Button>
                    </Box>
                }
            </Box>
            {
                loading ?
                    <Box display='flex' flexDirection='column' alignItems='center' height='200px' justifyContent='center'>
                        <CircularProgress />
                        <Typography color='primary' variant='caption' component='div'>
                            <Box sx={{ mt: '7px' }}>
                                Cargando archivos
                            </Box>
                        </Typography>
                    </Box>
                    :
                    archivosAdjuntos.length > 0 ?
                        <Box display='flex' justifyContent='center' flexDirection='column' sx={{ width: '99%' }} m='auto' mt={2}>
                            <TableContainer sx={{ maxHeight: '200px' }}>
                                <Table stickyHeader size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow >
                                            <TableCell sx={{ backgroundColor: (theme) => theme.palette.primary.main, color: 'white' }}>Nro.</TableCell>
                                            <TableCell sx={{ backgroundColor: (theme) => theme.palette.primary.main, color: 'white' }}>Nombre archivo</TableCell>
                                            <TableCell sx={{ backgroundColor: (theme) => theme.palette.primary.main, color: 'white', width: '115px' }} align='center'>Acciones</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {archivosAdjuntos.map((archivo, index) => (
                                            <TableRow
                                                key={`adjunto-${index}`}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {archivo.file.name}
                                                </TableCell>
                                                <TableCell align='center'>
                                                    <IconButton onClick={openFile(archivo.preview, archivo.file.type, archivo.file.name)} disabled={!extensionesVisiblesPermitidas.some( ext => archivo.file.name.endsWith(ext))}>
                                                        <VisibilityIcon />
                                                    </IconButton>
                                                    <IconButton onClick={deleteFile(archivo.file.name)} color='error'>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        :
                        <Box
                            {...getRootPropsAdjuntos()}
                            sx={{
                                height: 200,
                                border: '1px dashed gray',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                borderRadius: '8px',
                                width: '98%',
                                marginX: 'auto'
                                // backgroundColor: isDragActive ? 'lightgreen' : 'white'
                            }}
                        >
                            <input {...getInputPropsAdjuntos()} />
                            <Box component='img' width='50px' src={Bandeja} />
                            <Typography component='div'>
                                <Box mt={1}>
                                    Arrastra y suelta los archivos
                                </Box>
                            </Typography>
                            <Typography component='div'>
                                <Box mb={1}>
                                    ó
                                </Box>
                            </Typography>
                            <Button variant="contained" onClick={openAdjuntos}>
                                Buscar archivos
                            </Button>
                        </Box>

            }
        </Box>
    )
}
