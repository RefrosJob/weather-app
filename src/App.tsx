import React, { useEffect, useState } from 'react';

import { AppPage } from './pages/MainPage/MainPage';
import { GlobalStyles, Wrapper } from './AppStyle';
import { AppRouter } from './components/AppRouter/AppRouter';
import { AppRoutes } from './types/appRouter';
import { useTheme } from './microservices/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';
function App(): JSX.Element {
    const routes: AppRoutes = [{ path: '/', component: <AppPage /> }];
    const { theme, themeLoaded } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);

    return (
        <>
            {themeLoaded && (
                <ThemeProvider theme={selectedTheme}>
                    <Provider store={store}>
                        <GlobalStyles />
                        <Wrapper>
                            <AppRouter routes={routes} />
                        </Wrapper>
                    </Provider>
                </ThemeProvider>
            )}
        </>
    );
}

export default App;
