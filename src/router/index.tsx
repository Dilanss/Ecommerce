import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AboutPages, CellPhonePage, CellPhonesPage, HomePage, LoginPage, OrdersUserPage, RegisterPage } from "../pages";
import { ClientLayout } from "../layouts/ClientLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'celulares',
                element: <CellPhonesPage />,
            },
            {
                path: 'celulares/:slug',
                element: <CellPhonePage />,
            },
            {
                path: 'nosotros',
                element: <AboutPages />,
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {   
                path: 'registro',
                element: <RegisterPage />
            },
            {
                path: 'account',
                element: <ClientLayout />,
                children: [
                    {
                        path: '',
                        element: <Navigate to='/account/pedidos' />,
                    },
                    {
                        path: 'pedidos',
                        element: <OrdersUserPage />
                    },
                ],
            },
        ],
    },
]);