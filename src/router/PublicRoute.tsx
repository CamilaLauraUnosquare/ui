import { Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
//import { PoliticasRegistrosContables } from '../app/interfaces';
import { GetUserInformation } from '../helpers/tokenManage';
import { useEffect } from 'react';
import { ROUTE_INITIAL } from '../constant';

type Props = {
    children: string | JSX.Element | JSX.Element[],
}

export const PublicRoute = ({ children }: Props) => {

    const dispatch = useAppDispatch();

    const lastPath = "/bcp-project/aplicar";
    // let lastPath = getPathAdmin(politicas);
    useEffect(() => {
        // const { pathname, search } = useLocation();
        {<Navigate to="/bcp-project/aplicar" replace />;}
        // if (userInfo === null) {
            
        // } else {
        //     //dispatch(setUserInformation(userInfo));
        // }
        // if (!isNotForbidden && matricula !== null) {
        //     return <Navigate to="/whatsappcw/403" replace />
        // }
    }, [])

    return (status === 'not-authenticated' || status === 'checking')
        ? <Navigate to={`${lastPath}`} replace />
        : children
}
