import { Brands } from "../components/home/Brands";
import { FeactureGrid } from "../components/home/FeactureGrid";
import { ProductGrid } from "../components/home/ProductGrid";
import {  popularCelulares, recentCelulares } from "../data/initialData";
import { prepareProducts } from "../helpers";

export const HomePage = () => {

    const preparedRecentProducts = prepareProducts(recentCelulares);
    const preparedPopularProducts = prepareProducts(popularCelulares);

    console.log(preparedRecentProducts)

    return (
        <div>
            <FeactureGrid />

            <ProductGrid 
                title="Nuevos Productos" 
                products={preparedRecentProducts}
            />

            <ProductGrid 
                title="Productos Destacados" 
                products={preparedPopularProducts}
            />

            <Brands />
        </div>
    );
};
