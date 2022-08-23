import React, { useEffect, useState } from 'react';

import { AppPage } from './pages/MainPage/MainPage';
import { GlobalStyles, Wrapper } from './AppStyle';
import { AppRouter } from './components/AppRouter/AppRouter';
import { AppRoutes } from './types/appRouter';
import { DefaultTheme } from './types/theme';
import { useTheme } from './microservices/theme';
import { ThemeProvider } from 'styled-components';

function App(): JSX.Element {
    const routes: AppRoutes = [{ path: '/', component: <AppPage /> }];
    const { theme, themeLoaded, getFonts } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);

    return (
        <>
            {themeLoaded && (
                <ThemeProvider theme={selectedTheme}>
                    <GlobalStyles />
                    <Wrapper>
                        <AppRouter routes={routes} />
                    </Wrapper>
                </ThemeProvider>
            )}
        </>
    );
}

export default App;
