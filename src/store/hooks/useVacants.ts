import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentVacante } from "../vacante";
import { useNavigate } from "react-router-dom";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}
export function useVacants() {
  const dispatch = useDispatch();
  const title = 'VANCATES'
  const navigate = useNavigate();
  const columns: readonly Column[] = [
    { id: "Name", label: "Nombre Vacante", minWidth: 170 },
    { id: "Description", label: "Descripción", minWidth: 100 },
    {
      id: "CreatedDate",
      label: "Fecha de creacion",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "AreaSolicitante",
      label: "Area",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "FinishDate",
      label: "Fecha Limite",
      minWidth: 170,
      align: "right",
      format: (value: number) => value.toFixed(2),
    },
  ];

  const rows = [
    {
      Id: "1",
      Name: "Analista tecnico",
      Description:
        "Como analista de sistemas, tus responsabilidades incluirán: Análisis de requisitos: Recopilar las necesidades de los usuarios y evaluar los sistemas existentes para identificar áreas de mejora. Diseño e implementación de soluciones tecnológicas: Crear diseños detallados de sistemas, incluyendo modelos de datos y arquitectura. Pruebas de sistemas: Verificar que los sistemas funcionen según lo previsto y cumplan con los requisitos especificados. Colaboración con stakeholders: Trabajar con usuarios finales, directores, programadores y equipos de TI para alinear los requisitos comerciales con las soluciones técnicas",
      CreatedDate: "29-06-2024",
      AreaSolicitante: "Sistemas",
      FinishDate: "01-10-2024",
    },
    {
      Id: "2",
      Name: "Diseñador UX/UI",
      Description:
        "Como analista de sistemas, tus responsabilidades incluirán: Análisis de requisitos: Recopilar las necesidades de los usuarios y evaluar los sistemas existentes para identificar áreas de mejora. Diseño e implementación de soluciones tecnológicas: Crear diseños detallados de sistemas, incluyendo modelos de datos y arquitectura. Pruebas de sistemas: Verificar que los sistemas funcionen según lo previsto y cumplan con los requisitos especificados. Colaboración con stakeholders: Trabajar con usuarios finales, directores, programadores y equipos de TI para alinear los requisitos comerciales con las soluciones técnicas",
      CreatedDate: "29-06-2024",
      AreaSolicitante: "Sistemas",
      FinishDate: "01-10-2024",
    },
    {
      Id: "3",
      Name: "Gerente de Finanzas",
      Description:
        "Como analista de sistemas, tus responsabilidades incluirán: Análisis de requisitos: Recopilar las necesidades de los usuarios y evaluar los sistemas existentes para identificar áreas de mejora. Diseño e implementación de soluciones tecnológicas: Crear diseños detallados de sistemas, incluyendo modelos de datos y arquitectura. Pruebas de sistemas: Verificar que los sistemas funcionen según lo previsto y cumplan con los requisitos especificados. Colaboración con stakeholders: Trabajar con usuarios finales, directores, programadores y equipos de TI para alinear los requisitos comerciales con las soluciones técnicas",
      CreatedDate: "29-06-2024",
      AreaSolicitante: "Sistemas",
      FinishDate: "01-10-2024",
    },
    {
      Id: "4",
      Name: "Analista tecnico",
      Description:
        "Como analista de sistemas, tus responsabilidades incluirán: Análisis de requisitos: Recopilar las necesidades de los usuarios y evaluar los sistemas existentes para identificar áreas de mejora. Diseño e implementación de soluciones tecnológicas: Crear diseños detallados de sistemas, incluyendo modelos de datos y arquitectura. Pruebas de sistemas: Verificar que los sistemas funcionen según lo previsto y cumplan con los requisitos especificados. Colaboración con stakeholders: Trabajar con usuarios finales, directores, programadores y equipos de TI para alinear los requisitos comerciales con las soluciones técnicas",
      CreatedDate: "29-06-2024",
      AreaSolicitante: "Sistemas",
      FinishDate: "01-10-2024",
    },
    {
      Id: "5",
      Name: "Analista tecnico",
      Description:
        "Como analista de sistemas, tus responsabilidades incluirán: Análisis de requisitos: Recopilar las necesidades de los usuarios y evaluar los sistemas existentes para identificar áreas de mejora. Diseño e implementación de soluciones tecnológicas: Crear diseños detallados de sistemas, incluyendo modelos de datos y arquitectura. Pruebas de sistemas: Verificar que los sistemas funcionen según lo previsto y cumplan con los requisitos especificados. Colaboración con stakeholders: Trabajar con usuarios finales, directores, programadores y equipos de TI para alinear los requisitos comerciales con las soluciones técnicas",
      CreatedDate: "29-06-2024",
      AreaSolicitante: "Sistemas",
      FinishDate: "01-10-2024",
    },
    {
      Id: "6",
      Name: "Analista tecnico",
      Description:
        "Como analista de sistemas, tus responsabilidades incluirán: Análisis de requisitos: Recopilar las necesidades de los usuarios y evaluar los sistemas existentes para identificar áreas de mejora. Diseño e implementación de soluciones tecnológicas: Crear diseños detallados de sistemas, incluyendo modelos de datos y arquitectura. Pruebas de sistemas: Verificar que los sistemas funcionen según lo previsto y cumplan con los requisitos especificados. Colaboración con stakeholders: Trabajar con usuarios finales, directores, programadores y equipos de TI para alinear los requisitos comerciales con las soluciones técnicas",
      CreatedDate: "29-06-2024",
      AreaSolicitante: "Sistemas",
      FinishDate: "01-10-2024",
    },
    {
      Id: "7",
      Name: "Analista tecnico",
      Description:
        "Como analista de sistemas, tus responsabilidades incluirán: Análisis de requisitos: Recopilar las necesidades de los usuarios y evaluar los sistemas existentes para identificar áreas de mejora. Diseño e implementación de soluciones tecnológicas: Crear diseños detallados de sistemas, incluyendo modelos de datos y arquitectura. Pruebas de sistemas: Verificar que los sistemas funcionen según lo previsto y cumplan con los requisitos especificados. Colaboración con stakeholders: Trabajar con usuarios finales, directores, programadores y equipos de TI para alinear los requisitos comerciales con las soluciones técnicas",
      CreatedDate: "29-06-2024",
      AreaSolicitante: "Sistemas",
      FinishDate: "01-10-2024",
    },
    {
      Id: "8",
      Name: "Analista tecnico",
      Description:
        "Como analista de sistemas, tus responsabilidades incluirán: Análisis de requisitos: Recopilar las necesidades de los usuarios y evaluar los sistemas existentes para identificar áreas de mejora. Diseño e implementación de soluciones tecnológicas: Crear diseños detallados de sistemas, incluyendo modelos de datos y arquitectura. Pruebas de sistemas: Verificar que los sistemas funcionen según lo previsto y cumplan con los requisitos especificados. Colaboración con stakeholders: Trabajar con usuarios finales, directores, programadores y equipos de TI para alinear los requisitos comerciales con las soluciones técnicas",
      CreatedDate: "29-06-2024",
      AreaSolicitante: "Sistemas",
      FinishDate: "01-10-2024",
    },
    {
      Id: "9",
      Name: "Analista tecnico",
      Description:
        "Como analista de sistemas, tus responsabilidades incluirán: Análisis de requisitos: Recopilar las necesidades de los usuarios y evaluar los sistemas existentes para identificar áreas de mejora. Diseño e implementación de soluciones tecnológicas: Crear diseños detallados de sistemas, incluyendo modelos de datos y arquitectura. Pruebas de sistemas: Verificar que los sistemas funcionen según lo previsto y cumplan con los requisitos especificados. Colaboración con stakeholders: Trabajar con usuarios finales, directores, programadores y equipos de TI para alinear los requisitos comerciales con las soluciones técnicas",
      CreatedDate: "29-06-2024",
      AreaSolicitante: "Sistemas",
      FinishDate: "01-10-2024",
    },
    {
      Id: "10",
      Name: "Analista tecnico",
      Description:
        "Como analista de sistemas, tus responsabilidades incluirán: Análisis de requisitos: Recopilar las necesidades de los usuarios y evaluar los sistemas existentes para identificar áreas de mejora. Diseño e implementación de soluciones tecnológicas: Crear diseños detallados de sistemas, incluyendo modelos de datos y arquitectura. Pruebas de sistemas: Verificar que los sistemas funcionen según lo previsto y cumplan con los requisitos especificados. Colaboración con stakeholders: Trabajar con usuarios finales, directores, programadores y equipos de TI para alinear los requisitos comerciales con las soluciones técnicas",
      CreatedDate: "29-06-2024",
      AreaSolicitante: "Sistemas",
      FinishDate: "01-10-2024",
    },
    {
      Id: "11",
      Name: "Analista tecnico",
      Description:
        "Como analista de sistemas, tus responsabilidades incluirán: Análisis de requisitos: Recopilar las necesidades de los usuarios y evaluar los sistemas existentes para identificar áreas de mejora. Diseño e implementación de soluciones tecnológicas: Crear diseños detallados de sistemas, incluyendo modelos de datos y arquitectura. Pruebas de sistemas: Verificar que los sistemas funcionen según lo previsto y cumplan con los requisitos especificados. Colaboración con stakeholders: Trabajar con usuarios finales, directores, programadores y equipos de TI para alinear los requisitos comerciales con las soluciones técnicas",
      CreatedDate: "29-06-2024",
      AreaSolicitante: "Sistemas",
      FinishDate: "01-10-2024",
    },
    {
      Id: "12",
      Name: "Analista tecnico",
      Description:
        "Como analista de sistemas, tus responsabilidades incluirán: Análisis de requisitos: Recopilar las necesidades de los usuarios y evaluar los sistemas existentes para identificar áreas de mejora. Diseño e implementación de soluciones tecnológicas: Crear diseños detallados de sistemas, incluyendo modelos de datos y arquitectura. Pruebas de sistemas: Verificar que los sistemas funcionen según lo previsto y cumplan con los requisitos especificados. Colaboración con stakeholders: Trabajar con usuarios finales, directores, programadores y equipos de TI para alinear los requisitos comerciales con las soluciones técnicas",
      CreatedDate: "29-06-2024",
      AreaSolicitante: "Sistemas",
      FinishDate: "01-10-2024",
    },
  ];
 const [page, setPage] = React.useState(0);
 const [rowsPerPage, setRowsPerPage] = React.useState(10);

 const handleChangePage = (event: unknown, newPage: number) => {
   setPage(newPage);
 };

 const handleChangeRowsPerPage = (
   event: React.ChangeEvent<HTMLInputElement>
 ) => {
   setRowsPerPage(+event.target.value);
   setPage(0);
 };

 const rowClick = (to:string) =>{
  dispatch(setCurrentVacante({ to }));
  navigate(`/bcp-project/aplicar/${to.replace(" ", "-")}`);
 }
  return {
    rows,
    columns,
    title,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    rowClick,
  };
}
