import { ChangeEvent, useState } from "react";
import { NavProps } from "../../app/components/molecules/ApplicationNav";
import { FieldType } from "../../app/interfaces";
import { useSelector } from "react-redux";
import { getVacantes } from "../vacante/thunks";
interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  yearsOfExperience: number;
  salary: number;
  city: number;
}

export function useApplication() {
  const items = useSelector((state:any) => state.vacantes.currentVacante.to);
  console.log(items);
  const [formData, setFormData] = useState<FormValues>({
    email: "",
    firstName: "",
    lastName: "",
    yearsOfExperience: 0,
    salary: 0,
    city: 1,
  });
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const FORM_TITLE = "Por favor complete la siguiente información";
  const SUB_TITLE_HEADER = "Estas aplicando para el puesto de:";
  const vacant = items!;
  const links: NavProps[] = [
    {
      text: "Ver detalles",
      ref: "",
    },
  ];
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleChangeSelect = (event: any) => {
    setFormData({
      ...formData,
      city: event.target.value,
    });
    //setAge(event.target.value as string);
  };
  const fieldsInput: FieldType[] = [
    {
      label: "Dirección de Correo",
      onChange: handleChange,
      fieldName: "email",
      placeholder: "ejemplo@ejemplo.com",
      requiered: true,
      value: formData.email,
      fieldType: "text",
    },
    {
      label: "Nombres",
      onChange: handleChange,
      fieldName: "firstName",
      requiered: true,
      value: formData.firstName,
      fieldType: "text",
    },
    {
      label: "Apellidos",
      onChange: handleChange,
      fieldName: "lastName",
      requiered: true,
      value: formData.lastName,
      fieldType: "text",
    },
    {
      label: "Años de Experiencia",
      onChange: handleChange,
      fieldName: "yearsOfExperience",
      placeholder: "ejemplo@ejemplo.com",
      requiered: true,
      value: formData.yearsOfExperience,
      fieldType: "number",
    },
    {
      label: "Pretensión Salarial",
      onChange: handleChange,
      fieldName: "salary",
      placeholder: "ejemplo@ejemplo.com",
      requiered: true,
      value: formData.salary,
      fieldType: "number",
    },
    {
      label: "Ciudad",
      onChange: handleChangeSelect,
      fieldName: "city",
      placeholder: "ejemplo@ejemplo.com",
      requiered: true,
      value: formData.city,
      fieldType: "select",
      items: [
        {
          id: 1,
          name: "La Paz",
        },
        {
          id: 2,
          name: "Oruro",
        },
        {
          id: 3,
          name: "Potosi",
        },
        {
          id: 4,
          name: "Cochabamba",
        },
        {
          id: 5,
          name: "Tarija",
        },
        {
          id: 6,
          name: "Sucre",
        },
        {
          id: 7,
          name: "Santa Cruz",
        },
        {
          id: 8,
          name: "Beni",
        },
        {
          id: 9,
          name: "Pando",
        },
      ],
    },
  ];
  const handleSendInformation = () => {
    setShowAlert(true);
  };

  return {
    FORM_TITLE,
    SUB_TITLE_HEADER,
    vacant,
    links,
    fieldsInput,
    handleSendInformation,
    showAlert,
    setShowAlert,
  };
}
