import { useState } from 'react';
import { Alert, Box, Button, FormControl, FormHelperText, Grid, IconButton, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material';
import SvgIcon from "@mui/material/SvgIcon";

import { Lock as LockIcon, Person as PersonIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import * as Yup from 'yup';

import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import { AuthLayout } from '../layout/AuthLayout';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { startLoginWithCredentials } from '../../store/auth';

import InfoIcon from '../../assets/info_icon_v2.png'

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .max(7, 'El tamaño maximo es de 7')
    .required('El nombre de usuario es requerido'),
  password: Yup.string()
    .required('La contraseña es requerida')
});



export const LoginPage = () => {

  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const errorMessage = useAppSelector((state: any) => state.auth.errorMessage)

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      dispatch(startLoginWithCredentials(values));
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={0.6}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              InputProps={{
                style: { borderRadius: 30 },
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              type="text"
              placeholder='User'
              fullWidth
              id="username"
              name="username"
              value={formik.values.username}
              onChange={e => {
                formik.setFieldValue('username', e.target.value.toUpperCase());
              }}
              onBlur={formik.handleBlur}
              error={!!formik.errors.username && !!formik.touched.username}
              helperText={!!formik.errors.username && !!formik.touched.username ? formik.errors.username : ''}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              InputProps={{
                style: { borderRadius: 30 },
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{ marginRight: '2px' }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              type={showPassword ? 'text' : 'password'}
              fullWidth
              name="password"
              placeholder='Password'
              value={formik.values.password}
              id="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={!!formik.errors.password && !!formik.touched.password}
              helperText={!!formik.errors.password && !!formik.touched.password ? formik.errors.password : ''}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }}>
            {errorMessage !== null ? <Alert severity="error">{errorMessage}</Alert> : null}
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant='contained'
              fullWidth
              color='secondary'
              sx={{
                textTransform: 'none',
                borderRadius: '30px'
              }}
              size="large">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}