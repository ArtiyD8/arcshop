import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import './styles/base.css';
import './styles/app.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AuthProvider } from './auth-context';
import { I18nProvider } from './i18n-context';
import { ShopProvider } from './shop-context';
import { ThemeProvider } from './theme-context';
import { applyTheme, getTheme } from './theme';

applyTheme(getTheme());

// Чистим данные старой версии: раньше пользователи и сессия лежали в браузере
for (const storage of [localStorage, sessionStorage]) {
  storage.removeItem('arcshop:users');
  storage.removeItem('arcshop:session');
}

const root = document.getElementById('root');
if (!root) throw new Error('#root not found');

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <I18nProvider>
          <AuthProvider>
            <ShopProvider>
              <App />
            </ShopProvider>
          </AuthProvider>
        </I18nProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
