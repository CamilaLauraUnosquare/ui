import * as ExcelJS from "exceljs";
import saveAs from "file-saver";
import { FacturaReciboResponse } from "../store/pago_proveedor";
import { AjusteContable } from "../store/ajuste_contable";
import { ReporteACHResponse, ReportePagoProveedorResponse } from "../store/reportes";

export const exportExcelMisFacturas = (data: FacturaReciboResponse[]) => {
    var ExcelJSWorkbook = new ExcelJS.Workbook();
    var worksheet = ExcelJSWorkbook.addWorksheet("Reporte Facturas") as any;
    worksheet.columns = [
        { header: 'CIU', key: 'id', width: 10 },
        { header: 'Razon Social', key: 'razonSocial', width: 32 },
        { header: 'NIT Proveedor', key: 'nitProveedor', width: 32, outlineLevel: 1 },
        { header: 'Importe Factura', key: 'importeFactura', outlineLevel: 1 },
        { header: 'Importe Pago', key: 'importePago', outlineLevel: 1 },
        { header: 'Forma Pago', key: 'formaPago', width: 20, outlineLevel: 1 },
        { header: 'Tipo Documento', key: 'tipoDocumento', width: 10, outlineLevel: 1 },
        { header: 'Estado LC', key: 'estadoLC', outlineLevel: 1 },
        { header: 'Fecha Solicitud', key: 'fechaSolicitud', width: 32, outlineLevel: 1 },
    ];
    worksheet.addRows(data);

    for (let i = 1; i <= 9; i++) {
        worksheet.getCell(1, i).font = { bold: true, color: { argb: 'FFFFFF' } };
        worksheet.getCell(1, i).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '034c8c' },
            bgColor: { argb: '034c8c' }
        };
    }

    worksheet.autoFilter = {
        from: 'A1',
        to: 'I1',
    };

    ExcelJSWorkbook.xlsx.writeBuffer().then(function (buffer: any) {
        saveAs(
            new Blob([buffer], { type: "application/octet-stream" }),
            `REPORTE FACTURAS ${Date.now()}.xlsx`
        );
    });
}

export const exportExcelEstadosAjustesContables = (data: AjusteContable[]) => {
    var ExcelJSWorkbook = new ExcelJS.Workbook();
    var worksheet = ExcelJSWorkbook.addWorksheet("Reporte Estado Ajuste Contable") as any;
    worksheet.columns = [
        { header: 'Codigo Atención', key: 'cod_atencion', width: 10 },
        { header: 'Fecha Solicitud', key: 'fechaSolicitud', width: 32 },
        { header: 'Tipo Registro', key: 'tipoRegistro', width: 32, outlineLevel: 1 },
        { header: 'Estado', key: 'estado', outlineLevel: 1 },
        { header: 'Observacion', key: 'observaciones', outlineLevel: 1 },
        { header: 'Instrucciones adicionales', key: 'instruccionesAdicionales', width: 20, outlineLevel: 1 },
        { header: 'Fecha Contable', key: 'fechaContable', width: 10, outlineLevel: 1 },
        { header: 'Fecha Actualizacion', key: 'fechaActualizacion', outlineLevel: 1 },
        { header: 'Secuencia Asignada', key: 'secAsignada', width: 32, outlineLevel: 1 },
        { header: 'Sec. SAP', key: 'secSap', width: 32, outlineLevel: 1 },
        { header: 'Sec. Contabilizada', key: 'secContabilizada', width: 32, outlineLevel: 1 },
        { header: 'Comentario de Rechazo', key: 'comentariosRechazados', width: 32, outlineLevel: 1 },
    ];
    worksheet.addRows(data);

    for (let i = 1; i <= 12; i++) {
        worksheet.getCell(1, i).font = { bold: true, color: { argb: 'FFFFFF' } };
        worksheet.getCell(1, i).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '034c8c' },
            bgColor: { argb: '034c8c' }
        };
    }

    worksheet.autoFilter = {
        from: 'A1',
        to: 'I1',
    };

    ExcelJSWorkbook.xlsx.writeBuffer().then(function (buffer: any) {
        saveAs(
            new Blob([buffer], { type: "application/octet-stream" }),
            `REPORTE AJUSTES CONTABLES ${Date.now()}.xlsx`
        );
    });
}


export const exportExcelReporteCuentasContables = (data: AjusteContable[]) => {
    var ExcelJSWorkbook = new ExcelJS.Workbook();
    var worksheet = ExcelJSWorkbook.addWorksheet("Reporte Cuentas Contables") as any;
    worksheet.columns = [
        { header: 'Nombre Solicitante', key: 'solicitante', width: 32 },
        { header: 'Codigo Atención', key: 'cod_atencion', width: 10 },
        { header: 'Instrucciones Adicionales', key: 'instruccionesAdicionales', width: 32 },
        { header: 'Fecha Contable', key: 'fechaContable', width: 32, outlineLevel: 1 },
        { header: 'Fecha Solicitud', key: 'fechaSolicitud', outlineLevel: 1 },
        { header: 'Nro Solicitudes', key: 'nroSolicitudes', outlineLevel: 1 },
        { header: 'Tipo Registro', key: 'tipoRegistro', width: 20, outlineLevel: 1 },
        { header: 'Gerencias', key: 'gerencias', width: 10, outlineLevel: 1 },
        { header: 'Observaciones', key: 'observaciones', outlineLevel: 1 },
        { header: 'Sec. Asignada', key: 'secAsignada', width: 32, outlineLevel: 1 },
        { header: 'Sec. SAP', key: 'secSap', width: 32, outlineLevel: 1 },
        { header: 'Sec. Contabilizada', key: 'secContabilizada', width: 32, outlineLevel: 1 },
        { header: 'Matricula Aprobado', key: 'matriculaAprobado', width: 32, outlineLevel: 1 },
        { header: 'Estado Solicitud', key: 'estado', width: 32, outlineLevel: 1 },
        { header: 'Comentario de Rechazo', key: 'comentariosRechazados', width: 32, outlineLevel: 1 },
    ];
    worksheet.addRows(data);

    for (let i = 1; i <= 15; i++) {
        worksheet.getCell(1, i).font = { bold: true, color: { argb: 'FFFFFF' } };
        worksheet.getCell(1, i).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '034c8c' },
            bgColor: { argb: '034c8c' }
        };
    }

    worksheet.autoFilter = {
        from: 'A1',
        to: 'I1',
    };

    ExcelJSWorkbook.xlsx.writeBuffer().then(function (buffer: any) {
        saveAs(
            new Blob([buffer], { type: "application/octet-stream" }),
            `REPORTE CUENTAS CONTABLES ${Date.now()}.xlsx`
        );
    });
}


export const exportExcelReporteACH = (data: ReporteACHResponse[]) => {
    var ExcelJSWorkbook = new ExcelJS.Workbook();
    var worksheet = ExcelJSWorkbook.addWorksheet("Reporte ACH") as any;
    worksheet.columns = [
        { header: 'Nombre Proveedor', key: 'razonSocial', width: 32 },
        { header: 'Número de cuenta', key: 'cuenta', width: 32 },
        { header: 'Banco Destino', key: 'bancoDestino', width: 32 },
        { header: 'Monto', key: 'importeFactura', width: 32, outlineLevel: 1 },
        { header: 'Moneda', key: 'monedaFactura', outlineLevel: 1, width: 32 },
        { header: 'NIT', key: 'nitProveedor', outlineLevel: 1, width: 32 },
        { header: 'Nro. de Solicitud', key: 'codRegistro', width: 32, outlineLevel: 1 },
        { header: 'Solicitante', key: 'nombreSolicitante', width: 32, outlineLevel: 1 },
    ];
    worksheet.addRows(data);

    for (let i = 1; i <= 8; i++) {
        worksheet.getCell(1, i).font = { bold: true, color: { argb: 'FFFFFF' } };
        worksheet.getCell(1, i).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '034c8c' },
            bgColor: { argb: '034c8c' }
        };
    }

    worksheet.autoFilter = {
        from: 'A1',
        to: 'I1',
    };

    ExcelJSWorkbook.xlsx.writeBuffer().then(function (buffer: any) {
        saveAs(
            new Blob([buffer], { type: "application/octet-stream" }),
            `REPORTE ACH ${Date.now()}.xlsx`
        );
    });
}


export const exportExcelReportePagoProveedor = (data: ReportePagoProveedorResponse[]) => {
    var ExcelJSWorkbook = new ExcelJS.Workbook();
    var worksheet = ExcelJSWorkbook.addWorksheet("Reporte Pago Proveedor") as any;
    worksheet.columns = [
        { header: 'Codigo de Registro', key: 'codRegistro', width: 32 },
        { header: 'Area Solicitante', key: 'areaSolicitante', width: 32 },
        { header: 'Nombre Solicitante', key: 'nombreSolicitante', width: 32 },
        { header: 'Matricula Solicitante', key: 'matriculaSolicitante', width: 32, outlineLevel: 1 },
        { header: 'Nombre Intermediario', key: 'nombreIntermediario', outlineLevel: 1, width: 32 },
        { header: 'Matricula Intermediario', key: 'matriculaIntermediario', outlineLevel: 1, width: 32 },
        { header: 'Tipo de Registro', key: 'tipoRegistro', width: 32, outlineLevel: 1 },
        { header: 'Forma Pago', key: 'formaPago', width: 32, outlineLevel: 1 },
        { header: 'CIU', key: 'ciu', width: 32, outlineLevel: 1 },
        { header: 'NIT Proveedor', key: 'nitProveedor', width: 32, outlineLevel: 1 },
        { header: 'Nro. Contrato', key: 'nroContrato', width: 32, outlineLevel: 1 },
        { header: 'SAP Proveedor', key: 'sapProveedor', width: 32, outlineLevel: 1 },
        { header: 'Razón Social', key: 'razonSocial', width: 32, outlineLevel: 1 },
        { header: 'Nro. Factura', key: 'nroFactura', width: 32, outlineLevel: 1 },
        { header: 'Tipo Documento', key: 'tipoDocumento', width: 32, outlineLevel: 1 },
        { header: 'Tipo Facturación', key: 'tipoFacturacion', width: 32, outlineLevel: 1 },
        { header: 'Nro. Autorización', key: 'codigoAutorizacion', width: 32, outlineLevel: 1 },
        { header: 'Código Control', key: 'codigoControl', width: 32, outlineLevel: 1 },
        { header: 'Moneda Factura', key: 'monedaFactura', width: 32, outlineLevel: 1 },
        { header: 'Importe Factura', key: 'importeFactura', width: 32, outlineLevel: 1 },
        { header: 'Moneda Pago', key: 'monedaPago', width: 32, outlineLevel: 1 },
        { header: 'Importe Pago', key: 'importePago', width: 32, outlineLevel: 1 },
        { header: 'Tipo de Cambio', key: 'tipoCambio', width: 32, outlineLevel: 1 },
        { header: 'Fecha Factura', key: 'fechaFactura', width: 32, outlineLevel: 1 },
        { header: 'Instrucciones adicionales', key: 'instruccionesAdicionales', width: 32, outlineLevel: 1 },
        { header: 'Código Expedición', key: 'codigoExpedicion', width: 32, outlineLevel: 1 },
        { header: 'Nro. Pedido', key: 'nroPedido', width: 32, outlineLevel: 1 },
        { header: 'Cuenta Gasto', key: 'cuentaGasto', width: 32, outlineLevel: 1 },
        { header: 'Centro Costo', key: 'centroCosto', width: 32, outlineLevel: 1 },
        { header: 'Orden Gasto', key: 'ordenGasto', width: 32, outlineLevel: 1 },
        { header: 'Nro. Doc. SAP', key: 'nroDocsap', width: 32, outlineLevel: 1 },
        { header: 'Nro. TMNET', key: 'nroTemNet', width: 32, outlineLevel: 1 },
        { header: 'Glosa', key: 'glosa', width: 32, outlineLevel: 1 },
        { header: 'Validación control', key: 'validacionControl', width: 32, outlineLevel: 1 },
        { header: 'Nro. Comprobante', key: 'nroComprobante', width: 32, outlineLevel: 1 },
        { header: 'Fecha Registro', key: 'fechaRegistro', width: 32, outlineLevel: 1 },
        { header: 'Fecha Recepción', key: 'fechaRecepcion', width: 32, outlineLevel: 1 },
        { header: 'Matricula Contralor', key: 'matriculaAsignador', width: 32, outlineLevel: 1 },
        { header: 'Estado Documentación', key: 'estadoDocumentacion', width: 32, outlineLevel: 1 },
        { header: 'Fecha Solicitud', key: 'fechaSolicitud', width: 32, outlineLevel: 1 },
        { header: 'Estado', key: 'estadoFinal', width: 32, outlineLevel: 1 },
        { header: 'Estado LC', key: 'estadoLibroCompras', width: 32, outlineLevel: 1 },
        { header: 'Tipo de Registro LC', key: 'tipoRegistroLibroCompras', width: 32, outlineLevel: 1 },
        { header: 'Fecha Actualización', key: 'fechaActualizacion', width: 32, outlineLevel: 1 },
    ];
    worksheet.addRows(data);

    for (let i = 1; i <= 44; i++) {
        worksheet.getCell(1, i).font = { bold: true, color: { argb: 'FFFFFF' } };
        worksheet.getCell(1, i).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '034c8c' },
            bgColor: { argb: '034c8c' }
        };
    }

    worksheet.autoFilter = {
        from: 'A1',
        to: 'I1',
    };

    ExcelJSWorkbook.xlsx.writeBuffer().then(function (buffer: any) {
        saveAs(
            new Blob([buffer], { type: "application/octet-stream" }),
            `REPORTE PAGO PROVEEDOR ${Date.now()}.xlsx`
        );
    });
}