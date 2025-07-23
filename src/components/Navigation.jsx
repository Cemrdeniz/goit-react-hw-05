import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/movies">Movies</NavLink>
  </nav>
);

export default Navigation;
//bu sayfa header kısmını oluşturur ve uygulamanın genel navigasyonunu sağlar.