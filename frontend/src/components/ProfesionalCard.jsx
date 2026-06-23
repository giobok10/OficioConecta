const ProfesionalCard = ({ profesional }) => {
  return (
    <article className="profesional-card">
      <h3 className="profesional-card__name">{profesional.nombre_completo}</h3>
      <p className="profesional-card__oficio"><strong>Oficio:</strong> {profesional.oficio}</p>
      <p className="profesional-card__contacto"><strong>Contacto:</strong> {profesional.contacto}</p>
      {profesional.ubicacion && <p className="profesional-card__ubicacion">📍 {profesional.ubicacion}</p>}
    </article>
  );
};

export default ProfesionalCard;
