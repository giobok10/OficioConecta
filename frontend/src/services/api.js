const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '/api/profesionales' : 'http://localhost:3000/api/profesionales');

export const profesionalService = {
  async registrar(datos) {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });
    if (!res.ok) throw new Error('Error al registrar');
    return res.json();
  },

  async buscar(query) {
    const res = await fetch(`${API_URL}?q=${query}`);
    if (!res.ok) throw new Error('Error en la búsqueda');
    return res.json();
  }
};