import { useState, useContext, useEffect } from "react";
import ProductContext from "../../context/products/ProductContex";
import CardProducts from "../../components/cardProducts/CardProducts";

// Estilo
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Spinner from 'react-bootstrap/Spinner';

const Products = () => {
    const { getProducts, products } = useContext(ProductContext);
    const [loading, setLoading] = useState(true);
    const [sortType, setSortType] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                await getProducts();
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleSortTypeChange = (event) => {
        setSortType(event.target.value);
    };

    // Ordena por Nombre y Precio
    const sortedProducts = products.slice().sort((a, b) => {
        if (sortType === 'name') {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            return nameA.localeCompare(nameB);
        } else if (sortType === 'price') {
            const priceA = a.price;
            const priceB = b.price;
            return priceA - priceB;
        } else if (sortType === 'price-asc') {
            const priceA = a.price;
            const priceB = b.price;
            return priceB - priceA;
        }

        // Por defecto, ordena por nombre ascendente
        const defaultNameA = a.name.toLowerCase();
        const defaultNameB = b.name.toLowerCase();
        return defaultNameA.localeCompare(defaultNameB);
    });

    return (
        <div className="container">
            {/* Titulo */}
            <div className='title-container d-flex align-items-center mt-5 py-3'>
                <h1 className="text-4xl">Nuestros Productos</h1>
                <ShoppingBagIcon className="ml-3" sx={{ fontSize: 32, color: '#155e75' }} />
            </div>

            {/* Filtro por nombre y precio */}
            <div className="container-title3 dflex justify-center fs-6">
                <label className="ml-4">
                    Ordenar por :
                    <select value={sortType} onChange={handleSortTypeChange} className="ml-3">
                        <option value="name">Nombre</option>
                        <option value="price">Precio de Menor a Mayor</option>
                        <option value="price-asc">Precio de Mayor a Menor</option>
                    </select>
                </label>
            </div>

            {/* Cards */}
            {loading ? (
                <div className="d-flex align-items-center justify-content-center mt-5 mb-5 p-5">
                    <Spinner className="p-5" animation="border" variant="dark" />
                </div>
            ) : (
                <section className="w-fit mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-14 gap-x-14 mt-10 mb-5 pb-5">
                    {sortedProducts.map((product) => (
                        <CardProducts key={product._id} product={product} />
                    ))}
                </section>
            )}
        </div>
    );
}

export default Products;
