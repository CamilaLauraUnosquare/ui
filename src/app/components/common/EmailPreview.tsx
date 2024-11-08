import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material';
import { EmailDecoderResponse, emailDecoder } from '../../../store/app';
import { parse } from 'path';

interface Props {
    src: string;
    alt: string
}

function parseEmails(emailString: string) {
    const regex = /"([^"]+)" <([^>]+)>/g;

    const emails = [...emailString.matchAll(regex)].map((match) => ({
        name: match[1],
        email: match[2],
    }));

    const formattedEmails = emails.map((email) => `${email.name} (${email.email})`).join(', ');

    return formattedEmails;
}

function formatText(text: string) {
    return text.split('\r\n').map((line, index) => <p key={index}>{line}</p>);
}

export const EmailPreview = ({ src, alt }: Props) => {
    const [emailData, setEmailData] = useState<EmailDecoderResponse | null>(null);

    useEffect(() => {
        const getEmailData = async () => {
            const response = await emailDecoder({
                base64: src.split(',')[1]
            });
            setEmailData(response);
        }
        getEmailData();
    }, [src]);

    if (!emailData) {
        return <div>Cargando...</div>;
    }

    return (
        <Box>
            <Box px={3} pt={3}>
                <Typography component='div' variant='h6'>
                    <Box fontWeight='bold' color='primary.main'>
                        {emailData.subject}
                    </Box>
                </Typography>
                <Box display='flex'>
                    <Typography component='div'>
                        <Box fontWeight='bold' color='secondary.main' mr={5}>
                            DE:
                        </Box>
                    </Typography>
                    <Typography component='div'>
                        <Box>
                            {parseEmails(emailData.from)}
                        </Box>
                    </Typography>
                </Box>
                <Box display='flex'>
                    <Typography component='div'>
                        <Box fontWeight='bold' color='secondary.main' mr={2}>
                            PARA:
                        </Box>
                    </Typography>
                    <Typography component='div'>
                        <Box>
                            {parseEmails(emailData.to)}
                        </Box>
                    </Typography>
                </Box>
            </Box>

            <Box ml={3} px={2} py={2} my={2} overflow='auto' height='calc(100vh - 321px)' bgcolor='#f2f2f2' width='1000px'>
                {
                    emailData.htmlBody !== "" ? <div dangerouslySetInnerHTML={{ __html: emailData.htmlBody }} /> : <Typography>{formatText(emailData.body)}</Typography>
                }
            </Box>
        </Box>
    );
}
