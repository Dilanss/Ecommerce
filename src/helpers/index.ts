import { Color, Product, VariantProduct } from "../interfaces";

// Funcion para formatear el precio a dolares
export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);
};


// Funcion para preparar los prductos
export const prepareProducts = (products: Product[] | undefined) => {
    if (!products) return []; // Manejar undefined devolviendo un arreglo vacío

    return products.map((product) => {
        // Agrupar las variantes por color
        const colors = product.variants.reduce((acc: Color[], variant: VariantProduct) => {
            const existingColor = acc.find((item) => item.color === variant.color);

            if (existingColor) {
                // Si ya existe, comparamos los precios
                existingColor.price = Math.min(existingColor.price, variant.price);
                // Mantenemos el precio mínimo
            } else {
                acc.push({
                    color: variant.color,
                    price: variant.price,
                    name: variant.color_name,
                });
            }

            return acc;
        }, []);

        // Obtener el precio más bajo de las variantes agrupadas
        const price = Math.min(...colors.map((item) => item.price));

        // Devolver el producto formateado
        return {
            ...product,
            price,
            colors: colors.map(({ name, color }) => ({ name, color })),
            variants: product.variants,
        };
    });
};

export const formatDateLong = (date: string): string => {
    const dateObject = new Date(date);

    return dateObject.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

// Funcion para optener el estado del pedido en español
export const getStatus = (status: string): string => {
    switch (status) {
        case 'Pending':
            return 'Pendiente';
        case 'Paid':
            return 'Pagado';
        case 'Shipped':
            return 'Enviado';
        case 'Delivered':
            return 'Entregado';
        default:
            return status;
    }
}