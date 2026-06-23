# OficiosConecta

**OficiosConecta** es una plataforma diseñada para conectar a ciudadanos con profesionales de oficios locales (plomeros, electricistas, albañiles, etc.). Este repositorio contiene el código fuente completo, implementando una solución Fullstack escalable, segura y con una interfaz de usuario premium.

El proyecto está diseñado para funcionar como una muestra de arquitectura de software y desarrollo web moderno, enfocado en las mejores prácticas de código limpio y diseño responsivo.

## 🚀 Funcionalidades

- **Registro de Profesionales:** Formularios eficientes para la captación de talento local.
- **Búsqueda Dinámica:** Motor de búsqueda tolerante a variaciones gracias a operadores SQL avanzados (`ILIKE`).
- **Diseño Mobile-First (Premium UI):** Interfaz gráfica construida con metodologías modernas (CSS Modules/BEM, Glassmorphism, animaciones).
- **Persistencia en Base de Datos Relacional:** Datos estructurados y protegidos.

## 🛠 Stack Tecnológico

- **Frontend:** React + Vite, CSS BEM
- **Backend:** Node.js + Express
- **Base de Datos:** PostgreSQL
- **Seguridad:** Helmet (cabeceras HTTP seguras), protección CORS estricta y sentencias SQL parametrizadas para evitar inyecciones. Contenedores ejecutados como usuarios no-root.
- **Infraestructura:** Docker & Docker Compose

## 📁 Documentación de Arquitectura y Reglas

La documentación técnica del proyecto se encuentra estructurada en la carpeta `docs/`. **Haz clic en cada documento** para conocer las decisiones de diseño:

- 🏗️ [**Arquitectura (`docs/arquitectura.md`)**](./docs/arquitectura.md): Diagramas de componentes e infraestructura del sistema.
- 💾 [**Modelo de Datos (`docs/modelo_datos.md`)**](./docs/modelo_datos.md): Diagrama Entidad-Relación y detalles de persistencia.
- 🧪 [**Pruebas (`docs/pruebas.md`)**](./docs/pruebas.md): Estrategia de testing de los flujos críticos.
- ⚙️ [**Reglas y Flujo (`docs/reglas_y_flujo.md`)**](./docs/reglas_y_flujo.md): Convenciones de código, estándares de seguridad y uso de Git.
- 📋 [**Requerimientos (`docs/requerimientos.md`)**](./docs/requerimientos.md): Especificación de funcionalidades y alcances esperados.

## ⚙️ Despliegue Local Rápido

Para revisar el proyecto en funcionamiento de manera aislada y rápida:

```bash
docker-compose up --build -d
```

- **Frontend UI:** `http://localhost:5173`
- **Backend API:** `http://localhost:3000`
- **Base de Datos:** Puerto `5432`

---
*Este proyecto demuestra el ciclo de vida del desarrollo de software: desde el diseño y levantamiento de requerimientos hasta el desarrollo de interfaces fluidas y arquitecturas backend robustas.*
