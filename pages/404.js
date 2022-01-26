import appConfig from '../config.json';
import React from 'react';
import { Box, Text, Image } from '@skynexui/components';

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
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.neutrals['000'],
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Image
                    styleSheet={{
                        // borderRadius: '50%',
                        // marginBottom: '16px',
                    }}

                    src={`https://i.ytimg.com/vi/ZL7Ps9BUgbA/hqdefault.jpg`}
                />
                <Title tag="h1">404</Title>
                <Text tag="h1" styleSheet={{ color: appConfig.theme.colors.primary[600] }}>Page not found</Text>
                
            </Box>
        </>
    );
}