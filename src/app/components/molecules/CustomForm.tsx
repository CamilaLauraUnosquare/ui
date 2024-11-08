import React,{FC, ReactNode} from "react";
import { FieldType } from "../../interfaces";
import { Field } from "../atoms";
interface CustomformProps {
  fieldsInput: FieldType[];
  children: ReactNode;
}
export const CustomForm: FC<CustomformProps> = ({ fieldsInput, children }) => {
  return (
    <>
      <form style={{ width: "25rem" }}>
        {fieldsInput.map((field: FieldType) => (
          <div key={field.fieldName}>
            <Field
              label={field.label}
              requiered={field.requiered}
              fieldName={field.fieldName}
              items={field.items!}
              value={field.value}
              fieldType={field.fieldType}
              onChange={(e)=>{field.onChange(e)}}
            />
          </div>
        ))}
        <div className="custom-form-children">{children}</div>
      </form>
    </>
  );
};
