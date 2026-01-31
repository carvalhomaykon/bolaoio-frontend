import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home/Home.jsx';
import { Login } from '../pages/Login/Login.jsx';
import { Register } from '../pages/login/Register.jsx'
import { AuthLayout } from '../pages/login/AuthLayout.jsx'
import { Dashboard } from '../pages/dashboard/Dashboard.jsx';
import { ProtectedRoute } from './ProtectedRoute.jsx';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route element={<ProtectedRoute/>}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    ); 
}