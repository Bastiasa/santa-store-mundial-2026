
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import App from './App.tsx'

import '@mantine/core/styles.css';
import './index.css'
import { AppContextProvider } from './components/AppContext.tsx';

createRoot(document.getElementById('root')!).render(
  <MantineProvider
    theme={{
      colors: {
        brand: [
          "d50831",
          "d50831",
          "d50831",
          "d50831",
          "d50831",
          "d50831",
          "d50831",
          "d50831",
          "d50831",
          "d50831"
        ]
      },

      primaryColor: "red"
    }}>
    <AppContextProvider>
      <App />
      {/* abcd */}
    </AppContextProvider>
  </MantineProvider>,
)
