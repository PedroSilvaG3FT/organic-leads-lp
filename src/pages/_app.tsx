import store from '@/store'
import { ReactNode, useEffect } from 'react'
import { useMapState } from '@/hooks'
import { Provider } from 'react-redux'
import Layout from '@/layouts/default'
import type { AppProps } from 'next/app'
import THEMES from '@/styles/ts/themes'
import { persistStore } from 'redux-persist'
import GlobalStyle from '@/styles/ts/global'
import { ThemeProvider } from 'styled-components'
import AppToast from '@/components/common/app-toast'
import AppLoading from '@/components/common/app-loading'
import { PersistGate } from 'redux-persist/integration/react'
import { UiStateInterface } from '@/store/@interfaces/uiState.interface'
import '@/styles/css/global.css'
import enviroments from '@/config/enviroments'

const persistor = persistStore(store)

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const { theme } = useMapState('ui') as UiStateInterface

    const layoutControl = (component: ReactNode) => {
        return <Layout>{component}</Layout>
    }

    const initADS = () => {
        gtag('config', enviroments.ads_analytics_id)
    }

    useEffect(() => {
        initADS()
        console.log('v1.0.0')
    }, [])

    return (
        <ThemeProvider theme={THEMES[theme]}>
            <GlobalStyle />
            <AppLoading />
            <AppToast />

            {layoutControl(<Component {...pageProps} />)}
        </ThemeProvider>
    )
}

const AppWrapper: React.FC<AppProps> = props => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App {...props} />
            </PersistGate>
        </Provider>
    )
}

export default AppWrapper
