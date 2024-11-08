import React, { useState } from 'react'
import { ArchivosRegistrosContables, eliminarDocumento } from '../../../store/pago_proveedor'
import { setPreviewFile } from '../../../store/app';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { Box, Button, Card, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import { downloadFile } from '../../../helpers/commons';
import DeleteIcon from '@mui/icons-material/Delete';
import PdfIcon from '../../../assets/pdf_icon.png';
import ImageIcon from '../../../assets/image_icon.png';
import ExcelIcon from '../../../assets/archivo-excel.png';

interface Props {
    listaArchivos: any[],
    updateView:any
}


export const ListFiles = ({ listaArchivos = [], updateView }: Props) => {
    const dispatch = useAppDispatch();
    const openFile = (url: string, type: string, name: string) => () => {
        dispatch(setPreviewFile({ open: true, url, type, name }));
    }

    const [isHovered, setIsHovered] = useState("");

    return (
        <Box mt={3}>
            <Box display='flex' flexWrap='wrap'>
                {listaArchivos.map((file) => (
                    <Card key={file.id} sx={{ mr: 3, mb: 2, cursor: 'pointer', position: 'relative', minWidth: '325px' }} onMouseEnter={() => setIsHovered(file.id)} onMouseLeave={() => setIsHovered("")}>
                        <Box px={2} py={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            {
                               
                                file.mimeType?.includes('image') ?
                                    <Box component='img' src={ImageIcon} alt={file.nombreArchivo} sx={{ width: '25px', mr: 1 }} />
                                    :
                                    file.nombreArchivo?.includes('xlsx') ?
                                    <Box component='img' src={ExcelIcon} alt={file.nombreArchivo} sx={{ width: '30px', mr: 1 }} />:
                                    <Box component='img' src={PdfIcon} alt={file.nombreArchivo} sx={{ width: '30px', mr: 1 }} />
                            }
                            <Typography component='div'>
                                <Box >
                                    {file.nombreArchivo}
                                </Box>
                            </Typography>
                        </Box>
                        {isHovered === file.id && (
                            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <Button startIcon={<VisibilityIcon />} sx={{ textTransform: 'none' }} variant='contained' size="small" color="primary" onClick={openFile(file.url, file.mimeType, file.nombreArchivo)} >
                                    Ver
                                </Button>
                                <Button startIcon={<DownloadIcon />} sx={{ textTransform: 'none', mx: 1 }} variant='contained' size="small" color="secondary" onClick={() => { downloadFile(file.url, file.nombreArchivo) }}>
                                    Descargar
                                </Button>
                                <Button 
                                    startIcon={<DeleteIcon />} 
                                    sx={{ textTransform: 'none' }} 
                                    variant='contained' 
                                    size="small" 
                                    color="error" 
                                    onClick = { () => { 
                                        dispatch(eliminarDocumento(file.id));
                                        updateView();
                                        }}
                                    >
                                    Eliminar
                                </Button>
                            </Box>
                        )}
                    </Card>
                ))}
            </Box>
        </Box>
    )
}
