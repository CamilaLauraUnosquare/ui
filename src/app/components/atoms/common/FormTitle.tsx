import React, {FC} from "react"
interface FormTitleProps {
    title: string
}
export const FormTitle: FC<FormTitleProps> = ({title}) => {
  return <h2>{title}</h2>;
};