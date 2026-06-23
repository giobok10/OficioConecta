### 1. Stack Tecnológico (Base)
*   **Lenguaje:** JavaScript (ES6+) unificado.
*   **Frontend:** ReactJS con componentes funcionales y hooks.
*   **Backend:** Node.js con Express.
*   **Base de Datos:** PostgreSQL (Relacional).
*   **Gestor de Paquetes:** `pnpm` (por eficiencia y velocidad).
*   **Contenedores:** Docker y Docker Compose para desarrollo local consistente.
*   **Nube de Despliegue:** Render (para backend/frontend), NeonTech (para base de datos), priorizando una sola plataforma para simplificar.

### 2. Arquitectura y Estructura de Código
Aplicaremos una **Clean Architecture** simplificada para no sobre-complicar el proyecto de 4 horas, dividiendo las responsabilidades claramente:

*   **Separación por Capas (Backend):**
    *   **Models:** Definición de esquemas y entidades de la base de datos.
    *   **Routes:** Definición de endpoints de la API.
    *   **Controllers:** Lógica para validar parámetros y enviar respuestas HTTP.
    *   **Services:** Lógica de negocio y consultas directas a la base de datos (desacoplamiento).
*   **Frontend:** Estructura basada en componentes reutilizables y atómicos.
*   **CSS:** Uso de metodología **BEM** para mantener estilos legibles y mantenibles.

### 3. Reglas de "Código Limpio" y Calidad
*   **KISS (Keep It Simple, Stupid):** No diseñaremos funcionalidades que no hayan sido pedidas en los requerimientos.
*   **DRY (Don’t Repeat Yourself):** Si una lógica se repite más de dos veces, se extrae a una función o servicio común.
*   **Single Responsibility (SRP):** Cada función o clase debe hacer una sola cosa y hacerla bien.
*   **Nombres Expresivos:** Variables y funciones con nombres que expliquen su propósito sin necesidad de comentarios excesivos.
*   **Linters:** Uso de herramientas para asegurar la calidad del código y detectar errores tempranos.

### 4. Seguridad Básica (Nivel Profesional)
*   **Prevención de SQL Injection:** Uso estricto de **consultas parametrizadas** o un ORM/Query Builder (como Sequelize o `pg` correctamente configurado).
*   **Variables de Entorno:** Nunca subir credenciales al repositorio; usar archivos `.env` protegidos.
*   **Docker Seguro:** No ejecutar contenedores como root y usar imágenes oficiales y ligeras (como `alpine`).
*   **CORS:** Configuración correcta para permitir solo orígenes de confianza.

### 5. Flujo de Trabajo (Git Flow)
Utilizaremos un flujo simplificado para garantizar que la rama principal siempre sea estable:

*   **`main`:** Código en producción, siempre funcional.
*   **`develop`:** Rama de integración para las nuevas funcionalidades.
*   **`feature/[nombre-tarea]`:** Ramas temporales para cada requerimiento específico (ej: `feature/registro-profesional`).
*   **Mensajes de Commit:** Seguiremos la regla de los 7 puntos: ser concisos, usar el modo imperativo y explicar el "qué" y "por qué" en lugar del "cómo".

### 6. Métricas y Pruebas
*   **Métricas:** Monitoreo básico de recursos (CPU/Memoria) en el entorno de despliegue.
*   **Pruebas:** Foco en **pruebas de humo** y manuales sobre los flujos críticos (Registro y Búsqueda) según lo exigido en los requerimientos.

---
