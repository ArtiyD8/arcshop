import type { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './auth-context';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { SectionPage } from './pages/SectionPage';
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
      <Route path="/home" element={<SectionPage title="nav.home" />} />
      <Route path="/smartphones" element={<SectionPage title="nav.smartphones" />} />
      <Route path="/laptops" element={<SectionPage title="nav.laptops" />} />
      <Route path="/peripherals" element={<SectionPage title="nav.peripherals" />} />
      <Route path="/accessories" element={<SectionPage title="nav.accessories" />} />
      <Route path="/drivers-software" element={<SectionPage title="nav.drivers" />} />
      <Route path="/login" element={<GuestOnly><LoginPage /></GuestOnly>} />
      <Route path="/register" element={<GuestOnly><RegisterPage /></GuestOnly>} />
      <Route path="/settings" element={<RequireAuth><SettingsPage /></RequireAuth>} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
