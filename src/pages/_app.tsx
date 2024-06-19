import * as React from 'react';
import {AppProps} from 'next/app';
import CssBaseline from "@mui/material/CssBaseline";
import '../styles/global.css';
import theme from "@/styles/theme";
import {ThemeProvider} from "@mui/material";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
