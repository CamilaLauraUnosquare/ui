import 'react-data-grid/lib/styles.css';

import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
{/* @ts-ignore */}
import { OutTable, ExcelRenderer } from 'react-excel-renderer';
import './ExcelPreview.css';
import * as XLSX from 'xlsx';

interface Props {
    src: string;
    alt?: string;
}

export const ExcelPreview = ({ src, alt }: Props) => {
    const [rows, setRows] = useState([]);
    const [cols, setCols] = useState([]);

    useEffect(() => {
        const binaryStr = atob(src.split(',')[1]);
        const workbook = XLSX.read(binaryStr, { type: 'binary' });
        const sheetName = workbook.SheetNames[0]; // Select the first sheet
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        console.log(data[0]); // Assume the first row is the header
        console.log(data.slice(1));
    }, []);

    useEffect(() => {
        const base64ToBlob = (base64: string) => {
            const binary = atob(base64.split(',')[1]);
            const array = new Uint8Array(binary.length);
            for (let i = 0; i < binary.length; i++) {
                array[i] = binary.charCodeAt(i);
            }
            return new Blob([array], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        };



        const blob = base64ToBlob(src);
        ExcelRenderer(blob, (err: any, resp: any) => {
            if (err) {
                console.log(err);
            }
            else {
                setCols(resp.cols);
                setRows(resp.rows);
            }
        });
    }, [src]);

    return (
        <Box px={4} mt={4}>
            <Box fontWeight='bold' mb={2}>
                {alt}
            </Box>
            <Box sx={{ height: 600, width: '1000px' }} overflow='auto'>
                <OutTable data={rows} columns={cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
            </Box>
        </Box>
    );
};