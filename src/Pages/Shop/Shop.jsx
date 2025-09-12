import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner, Alert, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../components/Card/Card';
import SearchBar from '../../components/Searchbar/SearchBar';
import { useCart } from '../../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Shop = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const categoryFromUrlRaw = params.get('category');

  const categories = [
    'all', 'phones', 'laptop', 'bags', 'electronics', 'shoes', 'watch', 'accesories'
  ];

  const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState(
    categoryFromUrlRaw ? categoryFromUrlRaw.toLowerCase() : 'all'
  );
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { dispatch } = useCart();

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(searchQuery), 500);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Update activeFilter from URL param (normalize case)
  useEffect(() => {
    const cat = categoryFromUrlRaw?.toLowerCase();
    if (cat && categories.includes(cat)) {
      setActiveFilter(cat);
      setPage(1);
      setProducts([]);
      setHasMore(true);
    }
  }, [location.search]);

  // Fetch products whenever page or category changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const params = { page, limit: 20 };
        if (activeFilter !== 'all') {
          params.category = activeFilter;
        }

        const { data } = await axios.get(`${API_URL}/api/products`, { params });
        const list = Array.isArray(data) ? data : [];

        
        setProducts(prev => (page === 1 ? list : [...prev, ...list]));
        setHasMore(list.length === 20);
      } catch (err) {
        const message =
          err.response?.data?.message || err.message || 'Unable to fetch products';
        setError(message);
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, activeFilter, API_URL]);

  // Client-side text search
  const filteredProducts = products.filter((product) => {
  const q = debouncedQuery.toLowerCase();
  const nameMatch = product.name?.toLowerCase().includes(q);
  const descMatch = product.description?.toLowerCase().includes(q);
  const categoryMatch =
    activeFilter === 'all' ||
    (product.category && product.category.toLowerCase() === activeFilter);
  return categoryMatch && (!q || nameMatch || descMatch);
  });

  const handleSelectCategory = (category) => {
    const cat = category.toLowerCase();
    setActiveFilter(cat);
    setPage(1);          // triggers fetch because activeFilter changes
    setProducts([]);
    setHasMore(true);
    setError(null);
  };

  const handleReset = () => {
    setSearchQuery('');
    handleSelectCategory('all');
  };

  return (
    <Container className="py-5">
      <Row className="mb-4 align-items-center">
        <Col md={8}>
          <h2 className="text-primary">Shop Products</h2>
        </Col>
        <Col md={4}>
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
          />
        </Col>
      </Row>

      <div className="mb-4 d-flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? 'primary' : 'outline-secondary'}
            onClick={() => handleSelectCategory(category)}
            className="text-capitalize"
          >
            {category}
          </Button>
        ))}
      </div>

      {error && <Alert variant="danger" className="mb-4">{error}</Alert>}

      {loading && page === 1 ? (
        <div className="text-center py-5">
          <Spinner animation="border" role="status" />
          <p className="mt-2">Loading products...</p>
        </div>
      ) : filteredProducts.length > 0 ? (
        <>
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {filteredProducts.map((product, index) => (
              <Col key={product.id ?? `${product.name}-${index}`}>
                <ProductCard
                  image={product.image || 'https://via.placeholder.com/300'}
                  name={product.name || 'Untitled Product'}
                  description={product.description || 'No description available'}
                  price={product.price || 'N/A'}
                  product={product} 
                />
              </Col>
            ))}
          </Row>
          {hasMore && (
            <div className="text-center mt-4">
              <Button onClick={() => setPage((prev) => prev + 1)}>Load More</Button>
            </div>
          )}
        </>
      ) : (
        <Alert variant="info" className="text-center py-4">
          {products.length === 0 ? 'No products available' : 'No matching products found'}
          <div className="mt-2">
            <Button variant="primary" onClick={handleReset}>
              Reset filters
            </Button>
          </div>
        </Alert>
      )}
    </Container>
  );
};

export default Shop;