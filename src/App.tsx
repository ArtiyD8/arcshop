import type { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './auth-context';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { CatalogPage } from './pages/CatalogPage';
import { ComparePage } from './pages/ComparePage';
import { SettingsPage } from './pages/SettingsPage';

/** Только для вошедших */
function RequireAuth({ children }: { children: ReactNode }) {
  const { user, ready, signedOut } = useAuth();
  if (!ready) return null;
  // после явного выхода — на главную, иначе гостя просим войти
  return user ? children : <Navigate to={signedOut ? '/home' : '/login'} replace />;
}

/** Только для гостей */
function GuestOnly({ children }: { children: ReactNode }) {
  const { user, ready } = useAuth();
  if (!ready) return null;
  return user ? <Navigate to="/home" replace /> : children;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<CatalogPage title="nav.home" />} />
      <Route path="/smartphones" element={<CatalogPage title="nav.smartphones" category="smartphones" />} />
      <Route path="/laptops" element={<CatalogPage title="nav.laptops" category="laptops" />} />
      <Route path="/peripherals" element={<CatalogPage title="nav.peripherals" category="peripherals" />} />
      <Route path="/accessories" element={<CatalogPage title="nav.accessories" category="accessories" />} />
      <Route path="/drivers-software" element={<CatalogPage title="nav.drivers" category="software" />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/login" element={<GuestOnly><LoginPage /></GuestOnly>} />
      <Route path="/register" element={<GuestOnly><RegisterPage /></GuestOnly>} />
      <Route path="/settings" element={<RequireAuth><SettingsPage /></RequireAuth>} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
