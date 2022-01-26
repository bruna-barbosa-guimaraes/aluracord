import appConfig from '../config.json';
import React from 'react';
import { Box, Text } from '@skynexui/components';

function Title(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.primary['600']};
                    font-size: 10em;
                    padding: 10px;
                }
            `}</style>
        </>
    );
}

export default function ErrorPage() {
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.neutrals[400],
                    backgroundImage: 'url(https://madeirasgasometro.vteximg.com.br/arquivos/ids/170655-490-490/pp2324-azul-frances-square.jpg?v=636800397550230000)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Title tag="h1">404</Title>
                <Text tag="h1" styleSheet={{ color: appConfig.theme.colors.primary[600] }}>Page not found</Text>
                
            </Box>
        </>
    );
}