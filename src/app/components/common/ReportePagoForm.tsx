import { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";
import { PagoProveedor } from "../pago_proveedor/PagoProveedorForm";
import { useSchema } from "../pago_proveedor/useSchema.js";
import * as Yup from "yup";
import { useAppSelector } from "../../../store/hooks/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { FacturaReciboResponse } from "../../../store/pago_proveedor/thunks.js";
import { watch } from "fs";

interface Props {
  data: FacturaReciboResponse;
  setDefSchema: any;
  setValue: any;
  control: any;
  errors: any;
  selectedFacturas: any;
  tipoDocumentoSchema: any;
  tipoFacturacionScheme: any;
  tipoRegistroSchema: any;
  formaPagoSchema: any;
  setIsRecibo: any;
  isRecibo: any;
  watch?: any;
}

let PagoProveedorSchema = Yup.object().shape({
  nitProveedor: Yup.string(),
  sapProveedor: Yup.string(),
  razonSocial: Yup.string(),
  nroFactura: Yup.string(),
  tipoDocumento: Yup.string(),
  monedaFactura: Yup.string(),
  importeFactura: Yup.number()
    .required("Campo requerido")
    .moreThan(0, "El importe debe ser mayor a 0"),
  fechaFactura: Yup.string(),
  formaPago: Yup.string(),
  instruccionesAdicionales: Yup.string(),
  tipoFacturacion: Yup.string(),
  nroPedido: Yup.string(),
  cuentaGasto: Yup.string(),
  centroCosto: Yup.string(),
  ordenGasto: Yup.string(),
  nroDocSAP: Yup.string(),
  nroTMNET: Yup.string(),
  glosa: Yup.string(),
  validacionControl: Yup.string(),
  cuenta: Yup.string(),
  bancoDestino: Yup.string(),
  tipoRegistro: Yup.string(),
  nroFacturas: Yup.string()
    .max(1, "Maximo de 1 digito")
    .min(1, "Minimo de 1 digito"),
  nroRecibos: Yup.string()
    .max(2, "Maximo de 1 digito")
    .min(1, "Minimo de 1 digito"),
  nroContrato: Yup.string().required("Campo requerido"),
  codigoExpedicion: Yup.string(),
  codigoControl: Yup.string(),
  codigoAutorizacion: Yup.string(),
  monedaPago: Yup.string(),
  importePago: Yup.number().moreThan(0, "El importe debe ser mayor a 0"),
  tipoCambio: Yup.number(),
});

const initialValuesPagoProveedor: PagoProveedor = {
  nitProveedor: "",
  sapProveedor: "",
  razonSocial: "",
  nroFactura: "",
  tipoDocumento: "",
  monedaFactura: "",
  importeFactura: 0,
  fechaFactura: "",
  formaPago: "",
  instruccionesAdicionales: "",
  tipoFacturacion: "",
  nroPedido: "",
  cuentaGasto: "",
  centroCosto: "",
  ordenGasto: "",
  nroDocSAP: "",
  nroTMNET: "",
  glosa: "",
  validacionControl: "",
  cuenta: "",
  bancoDestino: "",
  tipoRegistro: "",
  nroFacturas: "0",
  nroRecibos: "0",
  nroContrato: "",
  codigoExpedicion: "",
  codigoControl: "",
  codigoAutorizacion: "",
  monedaPago: "",
  importePago: 0,
  tipoCambio: 1,
};

export const ReportePagoForm = ({
  data,
  setDefSchema,
  setValue,
  control,
  errors,
  selectedFacturas,
  tipoDocumentoSchema,
  tipoFacturacionScheme,
  tipoRegistroSchema,
  formaPagoSchema,
  setIsRecibo,
  isRecibo,
  watch,
}: Props) => {
  const {
    formaPago,
    tipoRegistro,
    tipoDocumento,
    tipoMoneda,
    tipoFacturacion,
  } = useAppSelector((state) => state.app);
  const formaPagoField = watch("formaPago");
  const tipoRegistroField = watch("tipoRegistro");
  const tipoDocumentoField = watch("tipoDocumento");
  const tipoFacturacionField = watch("tipoFacturacion");
  const monedaFactura = watch("monedaFactura");
  const monedaPago = watch("monedaPago");
  const importeFactura = watch("importeFactura");
  const importePago = watch("importePago");
  const fechaFactura = watch("fechaFactura");
  const values = Object.keys(initialValuesPagoProveedor);
  const all = watch(values as Array<any>);

  useEffect(() => {
    if (data) {
      setValue("nitProveedor", data.nitProveedor);
      setValue("sapProveedor", data.sapProveedor);
      setValue("razonSocial", data.razonSocial);
      setValue("nroFactura", data.nroFactura);
      setValue("tipoDocumento", data.tipoDocumento);
      setValue("monedaFactura", data.monedaFactura);
      setValue("importeFactura", data.importeFactura);
      setValue("fechaFactura", dayjs(data.fechaFactura).toISOString());
      setValue("formaPago", data.formaPago);
      setValue("instruccionesAdicionales", data.instruccionesAdicionales);
      setValue("tipoFacturacion", data.tipoFacturacion);
      setValue("nroPedido", data.nroPedido);
      setValue("cuentaGasto", data.cuentaGasto);
      setValue("centroCosto", data.centroCosto);
      setValue("ordenGasto", data.ordenGasto);
      setValue("nroDocSAP", data.nroDocSAP);
      setValue("nroTMNET", data.nroTMNET);
      setValue("glosa", data.glosa);
      setValue("validacionControl", data.validacionControl);
      setValue("cuenta", data.cuenta);
      setValue("bancoDestino", data.bancoDestino);
      setValue("tipoRegistro", data.tipoRegistro);
      setValue("nroContrato", data.nroContrato);
      setValue("codigoExpedicion", data.codigoExpedicion);
      setValue("codigoControl", data.codigoControl);
      setValue("codigoAutorizacion", data.codigoAutorizacion);
      setValue("monedaPago", data.monedaPago);
      setValue("importePago", data.importePago);
      setValue("tipoCambio", data.tipoCambio);
    }
  }, [data]);

  useEffect(() => {
    if (formaPagoField != "") {
      formaPagoSchema = useSchema(`formaPago-${formaPagoField}`);
    }
    if (tipoRegistroField != "") {
      tipoRegistroSchema = useSchema(`tipoRegistro-${tipoRegistroField}`);
    }
    if (tipoDocumentoField != "") {
      tipoDocumentoSchema = useSchema(`tipoDocumento-${tipoDocumentoField}`);
    }
    if (tipoFacturacionField != "") {
      tipoFacturacionScheme = useSchema(
        `tipoFacturacion-${tipoFacturacionField}`
      );
    }
    getSchema();
  }, [
    formaPagoField,
    tipoDocumentoField,
    tipoRegistroField,
    tipoFacturacionField,
  ]);

  useEffect(() => {
    if (importePago == 0) setValue("tipoCambio", 0);
    else setValue("tipoCambio", importeFactura / parseFloat(importePago));
  }, [importeFactura, importePago]);

  useEffect(() => {
    setValue("fechaFactura", dayjs(new Date().toISOString()));
  }, []);

  const getSchema = () => {
    let schema = Yup.object();
    for (let name in tipoDocumentoSchema?.fields) {
      if (
        tipoDocumentoSchema?.fields[name] &&
        tipoDocumentoSchema.fields[name]?.exclusiveTests?.required === false
      ) {
        schema = schema.concat(
          Yup.object().shape({
            [name]: tipoDocumentoSchema?.fields[name],
          })
        );
      }
    }
    for (let name in formaPagoSchema?.fields) {
      if (
        formaPagoSchema?.fields[name] &&
        formaPagoSchema.fields[name]?.exclusiveTests?.required === false
      ) {
        schema = schema.concat(
          Yup.object().shape({
            [name]: formaPagoSchema?.fields[name],
          })
        );
      }
    }
    for (let name in tipoRegistroSchema?.fields) {
      if (
        tipoRegistroSchema?.fields[name] &&
        tipoRegistroSchema.fields[name]?.exclusiveTests?.required === false
      ) {
        schema = schema.concat(
          Yup.object().shape({
            [name]: tipoRegistroSchema?.fields[name],
          })
        );
      }
    }
    for (let name in tipoFacturacionScheme?.fields) {
      if (
        tipoFacturacionScheme?.fields[name] &&
        tipoFacturacionScheme.fields[name]?.exclusiveTests?.required === false
      ) {
        schema = schema.concat(
          Yup.object().shape({
            [name]: tipoFacturacionScheme?.fields[name],
          })
        );
      }
    }
    // let my = PagoProveedorSchema.concat(schema)
    // console.log(schema)
    // console.log(my)
    // return PagoProveedorSchema.concat(schema)
    setDefSchema(PagoProveedorSchema.concat(schema));
  };

  // const getSchema = () => {
  //     for (let name in tipoDocumentoSchema?.fields){
  //         if(tipoDocumentoSchema?.fields[name] && tipoDocumentoSchema.fields[name]?.exclusiveTests?.required === false){
  //             schema = schema.concat(Yup.object().shape({
  //                 [name] : tipoDocumentoSchema?.fields[name]
  //             }));
  //         }
  //     }
  //     for (let name in formaPagoSchema?.fields){
  //         if(formaPagoSchema?.fields[name] && formaPagoSchema.fields[name]?.exclusiveTests?.required === false){
  //             schema = schema.concat(Yup.object().shape({
  //                 [name] : formaPagoSchema?.fields[name]
  //             }));
  //         }
  //     }
  //     for (let name in tipoRegistroSchema?.fields){
  //         if(tipoRegistroSchema?.fields[name] && tipoRegistroSchema.fields[name]?.exclusiveTests?.required === false){
  //             schema = schema.concat(Yup.object().shape({
  //                 [name] : tipoRegistroSchema?.fields[name]
  //             }));
  //         }
  //     }
  //     // let my = PagoProveedorSchema.concat(schema)
  //     // console.log(schema)
  //     // console.log(my)
  //     // return PagoProveedorSchema.concat(schema)
  //     setDefSchema(PagoProveedorSchema.concat(schema));

  // }

  return (
    <>
      <Grid component={Paper} container spacing={3} mt={3} px={3} pb={3}>
        <Grid item xs={12}>
          <Typography
            m="auto"
            component="div"
            color="primary"
            textTransform="uppercase"
          >
            <Box fontWeight="700">DATOS DE LA FACTURA</Box>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="nitProveedor"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Nit/C.I. Proveedor"
                {...field}
                error={!!errors.nitProveedor}
                helperText={errors.nitProveedor?.message}
                value={
                  selectedFacturas.length === 1
                    ? selectedFacturas[0].nit_proveedor
                    : field.value
                }
                disabled={selectedFacturas.length === 1}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="razonSocial"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Razon Social Proveedor:"
                {...field}
                error={!!errors.razonSocial}
                helperText={errors.razonSocial?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="nroFactura"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Nro. Factura/Recibo"
                {...field}
                error={!!errors.nroFactura}
                helperText={errors.nroFactura?.message}
                value={
                  selectedFacturas.length === 1
                    ? selectedFacturas[0].nro_factura
                    : field.value
                }
                disabled={selectedFacturas.length === 1}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl sx={{ mr: 2, width: "100%", height: "40px" }}>
            <Controller
              name="fechaFactura"
              control={control}
              defaultValue={undefined}
              render={({ field }) => (
                <DatePicker
                  format="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      size: "small",
                      error: !!errors.fechaFactura,
                      helperText: errors.fechaFactura?.message,
                    },
                    openPickerButton: {
                      size: "small",
                    },
                  }}
                  label="Fec. Factura O Recibo"
                  onChange={(date) => field.onChange(date)}
                  value={
                    selectedFacturas.length === 1
                      ? dayjs(selectedFacturas[0].fecha_factura)
                      : dayjs(field.value)
                  }
                  disabled={selectedFacturas.length === 1}
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl error fullWidth size="small">
            <InputLabel
              error={!!errors.monedaFactura}
              id="demo-select-small-label"
            >
              Moneda Factura
            </InputLabel>
            <Controller
              name="monedaFactura"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Moneda Factura"
                  fullWidth
                  error={!!errors.monedaFactura}
                  {...field}
                  value={
                    selectedFacturas.length === 1
                      ? selectedFacturas[0].moneda_factura
                      : field.value
                  }
                  disabled={selectedFacturas.length === 1}
                >
                  {tipoMoneda.map((estado, index) => (
                    <MenuItem
                      key={`${estado.value}-${index}`}
                      value={estado.value}
                      sx={{ display: estado.value === "0" ? "none" : "block" }}
                    >
                      {estado.description}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.monedaFactura && (
              <FormHelperText>{errors.monedaFactura.message}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <Controller
            name="importeFactura"
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <TextField
                type="number"
                fullWidth
                size="small"
                variant="outlined"
                label="Importe Factura"
                {...field}
                error={!!errors.importeFactura}
                helperText={errors.importeFactura?.message}
                value={
                  selectedFacturas.length === 1
                    ? selectedFacturas[0].importe_factura
                    : field.value
                }
                disabled={selectedFacturas.length === 1}
                onBlur={(e) => {
                  e.target.value = parseFloat(e.target.value).toFixed(2);
                  field.onChange(e);
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl error fullWidth size="small">
            <InputLabel
              error={!!errors.tipoDocumento}
              id="demo-select-small-label"
            >
              Tipo de Documento
            </InputLabel>
            <Controller
              name="tipoDocumento"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Tipo de Documento"
                  fullWidth
                  {...field}
                  error={!!errors.tipoDocumento}
                  onChange={(e) => {
                    field.onChange(e);
                    tipoDocumentoSchema = useSchema(
                      `tipoDocumento-${e.target.value}`
                    );
                    getSchema();
                    setValue("tipoFacturacion", "d4");
                    setIsRecibo(e.target.value === "a3");
                  }}
                >
                  {tipoDocumento.map((estado, index) => (
                    <MenuItem
                      key={`${estado.value}-${index}`}
                      value={estado.value}
                      sx={{ display: estado.value === "0" ? "none" : "block" }}
                    >
                      {estado.description}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.tipoDocumento && (
              <FormHelperText>{errors.tipoDocumento.message}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl error fullWidth size="small">
            <InputLabel
              error={!!errors.tipoFacturacion}
              id="demo-select-small-label"
            >
              Tipo facturación
            </InputLabel>
            <Controller
              name="tipoFacturacion"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Tipo facturación"
                  fullWidth
                  {...field}
                  error={!!errors.tipoFacturacion}
                  value={isRecibo ? "d4" : field.value}
                  disabled={isRecibo}
                  onChange={(e) => {
                    field.onChange(e);
                    tipoFacturacionScheme = useSchema(
                      `tipoFacturacion-${e.target.value}`
                    );
                    getSchema();
                  }}
                >
                  {tipoFacturacion.map((estado, index) => (
                    <MenuItem
                      key={`${estado.value}-${index}`}
                      value={estado.value}
                      sx={{ display: estado.value === "0" ? "none" : "block" }}
                    >
                      {estado.description}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.tipoFacturacion && (
              <FormHelperText>{errors.tipoFacturacion.message}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="codigoControl"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Código Control"
                {...field}
                error={!!errors.codigoControl}
                helperText={errors.codigoControl?.message}
                value={
                  selectedFacturas.length === 1
                    ? selectedFacturas[0].codigo_control
                    : field.value
                }
                disabled={selectedFacturas.length === 1}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="codigoAutorizacion"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Código Autorización"
                {...field}
                error={!!errors.codigoAutorizacion}
                helperText={errors.codigoAutorizacion?.message}
                value={
                  selectedFacturas.length === 1
                    ? selectedFacturas[0].codigo_autorizacion
                    : field.value
                }
                disabled={selectedFacturas.length === 1}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid component={Paper} container spacing={3} mt={3} px={3} pb={3}>
        <Grid item xs={12}>
          <Typography
            m="auto"
            component="div"
            color="primary"
            textTransform="uppercase"
          >
            <Box fontWeight="700">DATOS DE PAGO</Box>
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="sapProveedor"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Codigo Proveedor SAP"
                {...field}
                error={!!errors.sapProveedor}
                helperText={errors.sapProveedor?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="nroContrato"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Nro Contrato:"
                {...field}
                error={!!errors.nroContrato}
                helperText={errors.nroContrato?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl error fullWidth size="small">
            <InputLabel error={!!errors.formaPago} id="demo-select-small-label">
              Forma de pago
            </InputLabel>
            <Controller
              name="formaPago"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Forma de pago"
                  fullWidth
                  error={!!errors.formaPago}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    formaPagoSchema = useSchema(`formaPago-${e.target.value}`);
                    getSchema();
                  }}
                >
                  {formaPago.map((estado, index) => (
                    <MenuItem
                      key={`${estado.value}-${index}`}
                      value={estado.value}
                      sx={{ display: estado.value === "0" ? "none" : "block" }}
                    >
                      {estado.description}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.formaPago && (
              <FormHelperText>{errors.formaPago.message}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl error fullWidth size="small">
            <InputLabel
              error={!!errors.monedaPago}
              id="demo-select-small-label"
            >
              Moneda de Pago segun Contrato
            </InputLabel>
            <Controller
              name="monedaPago"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Moneda de Pago segun Contrato"
                  fullWidth
                  error={!!errors.monedaPago}
                  {...field}
                  value={
                    selectedFacturas.length === 1
                      ? selectedFacturas[0].moneda_pago
                      : field.value
                  }
                  disabled={selectedFacturas.length === 1}
                >
                  {tipoMoneda.map((estado, index) => (
                    <MenuItem
                      key={`${estado.value}-${index}`}
                      value={estado.value}
                      sx={{ display: estado.value === "0" ? "none" : "block" }}
                    >
                      {estado.description}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.monedaPago && (
              <FormHelperText>{errors.monedaPago.message}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="importePago"
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <TextField
                type="number"
                fullWidth
                size="small"
                variant="outlined"
                label="Importe de Pago segun Contrato"
                {...field}
                error={!!errors.importePago}
                helperText={errors.importePago?.message}
                value={
                  selectedFacturas.length === 1
                    ? selectedFacturas[0].importe_pago
                    : field.value
                }
                disabled={selectedFacturas.length === 1}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="tipoCambio"
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Tipo de Cambio"
                {...field}
                error={!!errors.tipoCambio}
                helperText={errors.tipoCambio?.message}
                disabled
                value={
                  selectedFacturas.length === 1
                    ? selectedFacturas[0].tipo_cambio
                    : field.value
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="cuenta"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Cuenta"
                {...field}
                error={!!errors.cuenta}
                helperText={errors.cuenta?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="bancoDestino"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Banco Destino"
                {...field}
                error={!!errors.bancoDestino}
                helperText={errors.bancoDestino?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="instruccionesAdicionales"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Inst. Adicionales"
                {...field}
                error={!!errors.instruccionesAdicionales}
                helperText={errors.instruccionesAdicionales?.message}
                value={
                  selectedFacturas.length === 1
                    ? selectedFacturas[0].nit_proveedor
                    : field.value
                }
                disabled={selectedFacturas.length === 1}
              />
            )}
          />
        </Grid>
      </Grid>
      <Grid component={Paper} container spacing={3} mt={3} px={3} pb={3}>
        <Grid item xs={12}>
          <Typography
            m="auto"
            component="div"
            color="primary"
            textTransform="uppercase"
          >
            <Box fontWeight="700">DATOS DEL REGISTRO</Box>
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <FormControl error fullWidth sx={{ minWidth: 120 }} size="small">
            <InputLabel
              error={!!errors.tipoRegistro}
              id="demo-select-small-label"
            >
              Tipo registro
            </InputLabel>
            <Controller
              name="tipoRegistro"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Tipo registro"
                  fullWidth
                  error={!!errors.tipoRegistro}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    tipoRegistroSchema = useSchema(
                      `tipoRegistro-${e.target.value}`
                    );
                    getSchema();
                  }}
                >
                  {tipoRegistro.map((estado, index) => (
                    <MenuItem
                      key={`${estado.value}-${index}`}
                      value={estado.value}
                      sx={{ display: estado.value === "0" ? "none" : "block" }}
                    >
                      {estado.description}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.tipoRegistro && (
              <FormHelperText>{errors.tipoRegistro.message}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <Controller
            name="nroPedido"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Nro. Pedido De Compra"
                {...field}
                error={!!errors.nroPedido}
                helperText={errors.nroPedido?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="cuentaGasto"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Cuenta De Gasto/Provisión"
                {...field}
                error={!!errors.cuentaGasto}
                helperText={errors.cuentaGasto?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={4}>
          <Controller
            name="centroCosto"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Centro De Costo"
                {...field}
                error={!!errors.centroCosto}
                helperText={errors.centroCosto?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="ordenGasto"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Orden de Gasto/Estadistica/Inversion"
                {...field}
                error={!!errors.ordenGasto}
                helperText={errors.ordenGasto?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="glosa"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Glosa"
                {...field}
                error={!!errors.glosa}
                helperText={errors.glosa?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={4}>
          <Controller
            name="nroDocSAP"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Nro. Documento Partida Sap"
                {...field}
                error={!!errors.nroDocSAP}
                helperText={errors.nroDocSAP?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="nroTMNET"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Nro. Único Partida Pendiente Tmnet"
                {...field}
                error={!!errors.nroTMNET}
                helperText={errors.nroTMNET?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="codigoExpedicion"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Cod. Expedicion"
                {...field}
                error={!!errors.codigoExpedicion}
                helperText={errors.codigoExpedicion?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={4}>
          <Controller
            name="validacionControl"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="Validación Control Impositivo"
                {...field}
                error={!!errors.validacionControl}
                helperText={errors.validacionControl?.message}
                value={
                  selectedFacturas.length === 1
                    ? selectedFacturas[0].validacion_control
                    : field.value
                }
                disabled={selectedFacturas.length === 1}
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
};
