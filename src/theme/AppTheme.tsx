import { ThemeProvider } from '@emotion/react';
import { CssBaseline, TableCell, TablePagination, TableRow, styled, tableCellClasses } from '@mui/material';

import { bcpTheme } from './';

type Props = {
    children: string | JSX.Element | JSX.Element[],
}


export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        whiteSpace: 'nowrap'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        textAlign: 'center',
    },
}));

export const StyledTablePagination = styled(TablePagination)({
    '& .MuiTablePagination-displayedRows': {
        fontSize: '18px',
    },
    '& .MuiSvgIcon-root': {
        fontSize: '25px',
    },
});

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    whiteSpace: 'nowrap',
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const AppTheme = ({ children }: Props) => {
    return (
        <ThemeProvider theme={bcpTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}