CREATE TABLE profesionales (
    id SERIAL PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    oficio VARCHAR(50) NOT NULL,
    contacto VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(100),
    descripcion TEXT
);