import { useState } from 'react';
import RegistroForm from './components/RegistroForm';
import SearchBar from './components/SearchBar';
import ProfesionalCard from './components/ProfesionalCard';
import { profesionalService } from './services/api';
import './App.css';

function App() {
  const [resultados, setResultados] = useState([]);

  const handleSearch = async (query) => {
    try {
      const data = await profesionalService.buscar(query);
      setResultados(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="app-container">
      <header className="header">
        <h1>OficiosConecta</h1>
      </header>
      
      <section className="section-registro">
        <RegistroForm />
      </section>

      <section className="section-busqueda">
        <h2>Busca un Profesional</h2>
        <SearchBar onSearch={handleSearch} />
        <div className="resultados-list">
          {resultados.length > 0 ? (
            resultados.map(p => <ProfesionalCard key={p.id} profesional={p} />)
          ) : (
            <p>No hay resultados. Prueba buscando "Plomero".</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
