import appConfig from '../config.json';
import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';

function Title(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.primary['600']};
                    font-size: 24px;
                    padding: 10px;
                }
            `}</style>
        </>
    );
}

// function HomePage() {
//     return (
//         <div>
//             <GlobalStyle />
//             <Title tag="h2">Boas vindas!</Title>
//             <h2>Aluracord</h2>
//         </div>
//     )
// }

// export default HomePage

export default function PaginaInicial() {
    // const username = 'brunaguimaraesssss';
    // hooks
    const [username, setUsername] = React.useState('');
    const router = useRouter();

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.neutrals[400],
                    backgroundImage: 'url(https://images2.alphacoders.com/740/thumb-1920-740460.png)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
            <Box
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',
                    },
                    width: '100%', maxWidth: '700px',
                    borderRadius: '5px', padding: '32px', margin: '16px',
                    boxShadow: '0 0 2em 0 black',
                    backgroundColor: appConfig.theme.colors.neutrals[500],
                    opacity: 0.8
                }}
            >
            {/* Formulário */}
            <Box
                as="form"
                value="{username}"
                // evita submit vazio e não recarrega a página
                onSubmit={function (event) {
                    event.preventDefault();
                    router.push('/chat');
                }
                }
                styleSheet={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                }}
            >
                <Title tag="h2">Boas vindas de volta!</Title>
                <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[200] }}>
                    {appConfig.name}
                </Text>

                {/* <input 
                    type="text"
                    value={username}
                    onChange={function onHandler(event) {
                        // onde está o valor
                        const valor = event.target.value;
                        // trocar o valor da variável
                        setUsername(valor);
                    }}
                /> */}

                <TextField
                    value={username}
                    onChange={function onHandler(event) {
                        // onde está o valor
                        const valor = event.target.value;
                        // trocar o valor da variável
                        setUsername(valor);
                    }}
                    fullWidth
                    textFieldColors={{
                        neutral: {
                            textColor: appConfig.theme.colors.neutrals[200],
                            mainColor: appConfig.theme.colors.neutrals[900],
                            mainColorHighlight: appConfig.theme.colors.primary[500],
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                        },
                    }}
                />
                <Button
                    type='submit'
                    label='Entrar'
                    fullWidth
                    buttonColors={{
                        contrastColor: appConfig.theme.colors.neutrals["000"],
                        mainColor: appConfig.theme.colors.primary[600],
                        mainColorLight: appConfig.theme.colors.primary[400],
                        mainColorStrong: appConfig.theme.colors.primary[700],
                    }}
                />
            </Box>
            {/* Formulário */}


            {/* Photo Area */}
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '200px',
                    padding: '16px',
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                    border: '1px solid',
                    borderColor: appConfig.theme.colors.neutrals[999],
                    borderRadius: '10px',
                    flex: 1,
                    minHeight: '240px',
                }}
            >
                <Image
                    styleSheet={{
                        borderRadius: '50%',
                        marginBottom: '16px',
                    }}

                    src={username == '' ? `https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png` : `https://github.com/${username}.png`}
                />
                <Text
                    variant="body4"
                    styleSheet={{
                        color: appConfig.theme.colors.neutrals[200],
                        backgroundColor: appConfig.theme.colors.neutrals[900],
                        padding: '3px 10px',
                        borderRadius: '1000px'
                    }}
                >
                    {username}
                </Text>
            </Box>
            {/* Photo Area */}

            </Box>
            </Box>
        </>
    );
}