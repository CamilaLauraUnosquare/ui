import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppTheme } from "./theme";
import { PrivateRoute } from "./router/PrivateRoute";
import { PublicRoute } from "./router/PublicRoute";
import {
  Alert,
  AlertColor,
  Backdrop,
  GlobalStyles,
  Snackbar,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";
import { showNotification } from "./store/app";
import { ForbiddenPage } from "./auth/pages/ForbiddenPage";
import NotFoundPage from "./auth/pages/NotFoundPage";
import "./assets/fonts/stylesheet.css";
import { ApplicationPage } from "./app/pages/Application/ApplicationPage";
import { ApplicationLayout } from "./app/components/templates/Application/ApplicationLayout";
import { VacantsPage } from "./app/pages/Vacants/VacantsPage";
import { VacantLayout } from "./app/components/templates/Vacant/VacantLayout";
import { LoginPage } from "./auth/pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/bcp-project/aplicar/:puesto",
    element: (
      <PublicRoute>
        <ApplicationPage>
          <ApplicationLayout />
        </ApplicationPage>
      </PublicRoute>
    ),
  },
  {
    path: "/bcp-project/vacantes",
    element: (
      <PublicRoute>
        <VacantsPage>
          <VacantLayout />
        </VacantsPage>
      </PublicRoute>
    ),
  },
  {
    path: "/bcp-project/403",
    element: <ForbiddenPage />,
  },
  {
    path: "/bcp-project/404",
    element: <NotFoundPage />,
  },
  {
    path: "/bcp-project/login",
    element: <LoginPage/>,
  },
]);

function App() {
  const dispatch = useAppDispatch();
  const { notification, openNotification, loading } = useAppSelector(
    (state) => state.app
  );

  return (
    <AppTheme>
      <GlobalStyles
        styles={{
          'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button':
            {
              WebkitAppearance: "none",
              margin: 0,
            },
          'input[type="number"]': {
            MozAppearance: "textfield",
          },
        }}
      />

      <Snackbar
        open={openNotification}
        autoHideDuration={10000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={() => {
          dispatch(
            showNotification({
              message: notification.message,
              type: notification.type,
              open: false,
            })
          );
        }}
      >
        {/* @ts-ignore */}
        <Alert
          variant="filled"
          severity={notification.type as AlertColor}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
      <RouterProvider router={router} />
    </AppTheme>
  );
}

export default App;
