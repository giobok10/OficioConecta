### Estrategia de Pruebas - OficiosConecta

Se priorizan las pruebas funcionales sobre los flujos críticos definidos en los requerimientos:

1.  **Prueba de Registro (RF-01):**
    *   **Entrada:** Datos válidos del profesional (nombre, oficio, contacto).
    *   **Resultado esperado:** El sistema confirma el registro y los datos persisten en PostgreSQL.
2.  **Prueba de Búsqueda (RF-02):**
    *   **Entrada:** Palabra clave del oficio (ej: "Plomero").
    *   **Resultado esperado:** El sistema retorna la lista de profesionales que coinciden con el criterio.
3.  **Prueba de Diseño Responsive (RNF-01):**
    *   **Acción:** Visualizar la aplicación en modo inspección de móvil (Chrome DevTools).
    *   **Resultado esperado:** La interfaz se adapta sin pérdida de funcionalidad (Mobile-first).

4. **Prueba Unitaria de API (Técnica):**
   - **Objetivo:** Verificar que el endpoint de registro rechace datos incompletos (ej. un profesional sin oficio) antes de tocar la DB.
   - **Resultado esperado:** La API devuelve un error 400 y protege la integridad de los datos.
