import { Button } from "@mui/material";
import React, { FC } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
type Props = {
  label?: string;
  accept?: string;
  color?: string;
  onChange?: any;
  inconPath?: string;
  multiple?: boolean;
  name: any;
};

const FileInput: FC<Props> = ({
  label = "Importar",
  accept = ".xls, .xlsx",
  onChange,
  multiple = false,
  color = "primary",
  name = "",
}) => {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const handleClick = (event: any) => {
    if (hiddenFileInput.current != null) {
      hiddenFileInput.current.click();
    }
  };
  return (
    <>
      <Button
        variant="outlined"
        sx={{marginBottom: '0.5rem'}}
        endIcon={<DriveFolderUploadIcon />}
        onClick={handleClick}
      >
        {label}
      </Button>
      <input
        type="file"
        accept={accept}
        style={{ display: "none" }}
        ref={hiddenFileInput}
        onChange={onChange}
        multiple={multiple}
        name={name}
      />
    </>
  );
};
export { FileInput };
