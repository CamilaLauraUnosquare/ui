import { Alert, Button } from "@mui/material";
import { FileInput } from "../../atoms/common/FileButton";
import { FormTitle } from "../../atoms/common/FormTitle";
import { CustomForm } from "../../molecules/CustomForm";
import { ApplicationHeader } from "../../organisims/ApplicationHeader/ApplicationHeader";
import "./ApplicationLayout.css";
import { useApplication } from "../../../../store/hooks/useApplication";
export const ApplicationLayout = () => {
  const {
    FORM_TITLE,
    SUB_TITLE_HEADER,
    vacant,
    links,
    fieldsInput,
    handleSendInformation,
    showAlert,
    setShowAlert,
  } = useApplication();
  return (
    <>
      <section className="application-layout">
        <ApplicationHeader
          subTitle={SUB_TITLE_HEADER}
          title={vacant}
          links={links}
        />
        {showAlert && (
          <Alert
            severity="success"
            action={
              <Button color="inherit" size="small" onClick={() =>setShowAlert(false)}>
                ⤬
              </Button>
            }
          >
            Información enviada correctamente
          </Alert>
        )}
        <div className="application-layout-form">
          <FormTitle title={FORM_TITLE} />
          <CustomForm fieldsInput={fieldsInput}>
            <div className="application-layout-buttons">
              <FileInput onChange={() => {}} label="Cargar CV" name="cv" />
              <Button
                variant="contained"
                size="large"
                sx={{ marginTop: "1rem" }}
                onClick={handleSendInformation}
              >
                Enviar Informacion
              </Button>
            </div>
          </CustomForm>
        </div>
      </section>
    </>
  );
};
