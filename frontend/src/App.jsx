import { useState } from 'react';
import RegistroForm from './components/RegistroForm';
import SearchBar from './components/SearchBar';
import ProfesionalCard from './components/ProfesionalCard';
import { profesionalService } from './services/api';
import './App.css';

function App() {
  const [resultados, setResultados] = useState([]);
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setResultados([]);
      setBusquedaRealizada(false);
      return;
    }
    try {
      const data = await profesionalService.buscar(query);
      setResultados(data);
      setBusquedaRealizada(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="app-container">
      <header className="header">
        <h1>OficiosConecta</h1>
      </header>
      <div className="content-wrapper">
        <section className="section-registro">
          <RegistroForm />
        </section>

        <section className="section-busqueda">
          <h2>Busca un Profesional</h2>
          <SearchBar onSearch={handleSearch} />
          <div className="resultados-list">
            {resultados.length > 0 ? (
              resultados.map(p => <ProfesionalCard key={p.id} profesional={p} />)
            ) : busquedaRealizada ? (
              <p className="no-results">No hay resultados para esa búsqueda.</p>
            ) : (
              <p className="no-results">Escribe un oficio o nombre para buscar.</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
