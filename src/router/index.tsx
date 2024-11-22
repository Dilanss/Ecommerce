import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AboutPages, CellPhonePage, CellPhonesPage, CheckoutPage, HomePage, LoginPage, OrdersUserPage, OrderUserPage, RegisterPage, ThankyouPage } from "../pages";
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
                    {
                        path: 'pedidos/:id',
                        element: <OrderUserPage />
                    },
                ],
            },
        ],
    },
    {
        path: '/checkout',
        element: <CheckoutPage />,
    },
    {
        path: '/checkout/:id/thank-you',
        element: <ThankyouPage />
    },
]);