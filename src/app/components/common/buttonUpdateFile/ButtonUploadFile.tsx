import { Box, Button } from "@mui/material";
import { useDropzone } from "react-dropzone";
import ExcelIcon from "../../../../assets/archivo-excel.png";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import {
  CargaProcesosSolicitud,
} from "../../pago_proveedor/CargaMasiva";
import { useAppDispatch } from "../../../../store/hooks/hooks";
import { showNotification } from "../../../../store/app";
interface Props {
  setFacturas: any;
  disabled: boolean;
}

export const ButtonUploadFile = ({ setFacturas, disabled }: Props) => {
  const dispatch = useAppDispatch();

  const { open: openMultimedia } = useDropzone({
    // Acepta solo archivos Excel
    accept: {
      "application/xlsx": ".xlsx, .xls".split(", "),
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length === 0) {
        return;
      }

      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const binaryStr = reader.result;
        if (file.name.endsWith(".csv")) {
          const data = Papa.parse(binaryStr as string, { header: true })
            .data as CargaProcesosSolicitud[];
          setFacturas((facturas) => {
            return facturas.map((factura) => {
              if (data.filter((row) => factura.id === row.CIU).length !== 0)
                factura.nroComprobante = data.filter(
                  (row) => factura.id === row.CIU
                )[0].Nro_Comprobante;
              return { ...factura };
            });
          });
        } else if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
          const workbook = XLSX.read(binaryStr, { type: "binary" });
          const sheetNameList = workbook.SheetNames;
          sheetNameList.forEach((sheetName) => {
            const data = XLSX.utils.sheet_to_json(
              workbook.Sheets[sheetName]
            ) as CargaProcesosSolicitud[];

            setFacturas((facturas) => {
              return facturas.map((factura) => {
                if (data.filter((row) => factura.id == row.CIU).length !== 0) {
                  factura.nroComprobante = data
                    .filter((row) => factura.id == row.CIU)[0]
                    .Nro_Comprobante.toString();
                }
                return { ...factura };
              });
            });
          });
        }
      };
      if (file.name.endsWith(".csv")) {
        reader.readAsBinaryString(file);
      } else if (file.name.endsWith(".xlsx") || file.name.endsWith(".xls")) {
        reader.readAsArrayBuffer(file);
      }

      reader.onloadend = () => {
        dispatch(
          showNotification({
            message: "OK",
            type: "success",
            open: true,
          })
        );
      };

      reader.onerror = (err) => {
        console.error(err);
        dispatch(
          showNotification({
            message: "Ocurrió un error vuelva a intentarlo",
            type: "error",
            open: true,
          })
        );
      };
    },
    maxFiles: 1,
    noClick: true,
    multiple: false,
  });

  return (
    <Button
      disabled={disabled}
      onClick={openMultimedia}
      sx={{ mr: 2 }}
      color="success"
      variant="contained"
      startIcon={<Box component="img" src={ExcelIcon} width="17px" />}
    >
      Cargar Nro. Comprobante
    </Button>
  );
};
