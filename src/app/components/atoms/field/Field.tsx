import React, { FC } from "react";
import { FieldType } from "../../../interfaces";
import "./Filed.css";
import { MenuItem, Select, TextField } from "@mui/material";
export const Field: FC<FieldType> = ({
  fieldType = "text",
  fieldName,
  placeholder = "",
  requiered = true,
  disabled = false,
  value = "",
  label = "",
  onChange: onChange,
  items = [],
}) => {
  const renderField = () => {
    switch (fieldType) {
      case "text":
        return (
          <>
            <label htmlFor={fieldName}>{label}:</label>
            <TextField
            name={fieldName}
              type="text"
              placeholder={placeholder}
              required={requiered}
              disabled={disabled}
              value={value.toString()}
              onChange={(e) => {
                onChange(e);
              }}
              size="small"
            />
          </>
        );
      case "number":
        return (
          <>
            <label htmlFor={fieldName}>{label}:</label>
            <TextField
              name={fieldName}
              type="number"
              placeholder={placeholder}
              required={requiered}
              disabled={disabled}
              value={value.toString()}
              onChange={(e) => {
                onChange(e);
              }}
              size="small"
            />
          </>
        );
      case "select":
        return (
          <>
            <label htmlFor={fieldName}>{label}:</label>
            <Select
              name={fieldName}
              id="outlined-select-currency"
              defaultValue="1"
              size="small"
              value={value}
              onChange={onChange}
            >
              {items.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </>
        );
      default:
        return <div>no field</div>;
    }
  };
  return (
    <>
      <div className="custom-field">{renderField()}</div>
    </>
  );
};
