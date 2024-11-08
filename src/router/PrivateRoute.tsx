import { Navigate, useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
import { useEffect } from 'react';
import { GetUserInformation } from '../helpers/tokenManage';
//import { setUserInformation } from '../store/auth';

type Props = {
    children: string | JSX.Element | JSX.Element[],
}

export const PrivateRoute = ({ children }: Props) => {

    //const { status } = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch();

    useEffect(() => {
        // const { pathname, search } = useLocation();
        const token = localStorage.getItem('token');
        const userInfo = GetUserInformation(token as string)
        {
            <Navigate to="/bcp-project/aplicar" replace />;

        }
        // if (userInfo === null) {
        // } else {
        //     dispatch(setUserInformation(userInfo));
        // }
        // if (!isNotForbidden && matricula !== null) {
        //     return <Navigate to="/whatsappcw/403" replace />
        // }
    }, [])

    return status === "authenticated" ? (
      children
    ) : (
      <Navigate to="/bcp-project/aplicar" replace />
    );
}