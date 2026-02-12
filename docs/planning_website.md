# Planificación Estratégica del Sitio Web - Feral Tech

Este documento detalla la estructura, tecnologías, diseño y estrategia de contenido para el nuevo sitio web corporativo de **Feral Tech**.

## 1. Identidad de Marca y Concepto
**Nombre:** Feral Tech
**Slogan:** *Imagina - Crea - Evoluciona*
**Misión:** Ofrecer soluciones tecnológicas avanzadas para empresas en Colombia, especializándose en la optimización del ERP Odoo y servicios de productividad.

### Paleta de Colores
La selección de colores transmite tecnología, confianza, profundidad y energía.
- **Principal (Fondo/Header):** `#0F084B` (Azul Noche Profundo) - *Autoridad y solidez.*
- **Secundario (Acciones Principales):** `#126899` (Azul Acero) - *Profesionalismo.*
- **Acento 1 (Highlights/Detalles):** `#9BB1FF` (Azul Cielo Pálido) - *Claridad e innovación.*
- **Acento 2 (Interactividad):** `#17BEBB` (Turquesa Vibrante) - *Evolución y frescura.*
- **Call to Action (CTA Crítico):** `#F26419` (Naranja Fuego) - *Energía y urgencia (Botones de compra/contacto).*

---

## 2. Stack Tecnológico Definido
Para garantizar rendimiento (Core Web Vitals), SEO técnico impecable y escalabilidad, se utilizará:

### Astro + React
- **Por qué:** Astro genera HTML estático por defecto (cero JavaScript innecesario), lo que garantiza una velocidad de carga inigualable (crucial para SEO en Colombia).
- **Estilos:** Tailwind CSS o CSS Modules para un diseño "pixel-perfect" y mantenible.
- **Hosting:** Vercel o Netlify.

**Decisión:** Usar **Astro** para la landing comercial. Es la tecnología más moderna para sitios de contenido y marketing.

---

## 3. Arquitectura del Sitio (Sitemap)

1.  **Inicio (Home)**
    *   Hero Section (Propuesta de valor).
    *   Nuestros Módulos (Resumen de los 3 productos).
    *   Servicios (Implementación Odoo / Google Workspace).
    *   Por qué Feral Tech.
    *   Footer.
2.  **Módulos Odoo (Catálogo)**
    *   *Detalle Producto 1:* Auto TRM.
    *   *Detalle Producto 2:* Rotación de Inventarios.
    *   *Detalle Producto 3:* Cambio de Moneda en Documentos.
3.  **Servicios**
    *   Implementación & Migración Odoo.
    *   Google Workspace (Próximamente).
4.  **Blog / Recursos** (Estrategia SEO a largo plazo).
5.  **Contacto**

---

## 4. Estrategia de Contenido y Copywriting
El tono debe ser **visionario, técnico pero accesible, y orientado a resultados**. Usaremos el slogan como eje narrativo.

### Punchlines Sugeridos
*   *"No solo implementamos software. **Evolucionamos** tu negocio."*
*   *"Imagina un ERP sin errores. Crea procesos fluidos. Evoluciona con Feral Tech."*
*   *"Tu Odoo, pero más inteligente."*
*   *"Automatiza lo aburrido, enfócate en crecer."*

### Estructura de Secciones Clave (Home)

#### A. Hero Section
*   **Titulo:** Transformamos Odoo en el motor que tu empresa necesita.
*   **Subtítulo:** Soluciones tecnológicas a medida para empresas en Colombia. Desde automatización de TRM hasta inteligencia de inventarios.
*   **CTA Principal:** [Ver Soluciones] color `#F26419`
*   **CTA Secundario:** [Conversar con un experto] color `#17BEBB` (borde)

#### B. Sección Módulos (Los 3 Pilares)
*Intro:* *"Potencia tu operación diaria con nuestros módulos especializados."*

1.  **Auto TRM - "Precisión Financiera Diaria"**
    *   *Pain Point:* ¿Cansado de digitar la TRM manualmente y cometer errores?
    *   *Solución:* Conexión directa con el Banco de la República. Tu contabilidad, siempre al día.
    *   *CTA:* [Automatizar mi TRM]

2.  **Rotación de Inventarios - "Inteligencia de Stock"**
    *   *Pain Point:* Odoo es genial, pero ¿sabes realmente cuándo se agotará tu stock?
    *   *Solución:* Reportes avanzados de días de inventario y sugerencias de compra basadas en consumo real.
    *   *CTA:* [Optimizar Inventario]

3.  **Cambio Automático de Moneda - "Flexibilidad Global"**
    *   *Pain Point:* Cambiar la moneda de una cotización implica rehacerla línea por línea.
    *   *Solución:* Un clic. Todas las líneas convertidas. Cero reprocesos.
    *   *CTA:* [Ver Demo]

#### C. Servicios de Implementación
*   **Headline:** *"Tu camino hacia la transformación digital."*
*   **Copy:** Ya sea que inicies desde cero o migres de un sistema legado, nuestros consultores expertos aseguran una transición fluida.
*   **Google Workspace Teaser:** *"Próximamente: Lleva tu productividad a la nube con Google Workspace y Feral Tech."*

---

## 5. Estrategia SEO y Marketing

### Palabras Clave Objetivo (Keywords)
*   *Primarias:* Módulos Odoo Colombia, Implementación Odoo Bogotá, TRM Automática Odoo, Consultoría ERP Colombia.
*   *Secundarias:* Rotación de inventarios Odoo, Partner Google Workspace Colombia, Migración ERP a Odoo.

### Optimización Técnica (On-Page)
1.  **Etiquetas Meta:**
    *   Title: `Feral Tech | Soluciones Odoo y Tecnología Empresarial en Colombia`
    *   Description: `Optimiza tu ERP Odoo con módulos de Auto TRM, Inventarios y Conversión de Moneda. Expertos en implementación y transformación digital. Imagina, Crea, Evoluciona.`
2.  **Schema Markup:** Implementar `SoftwareApplication` para los módulos y `ProfessionalService` para la consultoría.
3.  **Velocidad:** Imágenes en formato WebP, Lazy Loading, y código minificado.

### Lead Magnets & Call to Actions (CTAs)
*   **WhatsApp Integración:** Todos los botones de Call to Action (CTA) dirigirán a un link de WhatsApp Web para iniciar conversación directa.
*   **Número de destino:** `3172247166`
*   Ofrecer una "Auditoría gratuita de tu flujo en Odoo" como gancho para el servicio de implementación.

---

## 6. Diseño UI/UX - "Look & Feel"
El diseño debe evocar tecnología *premium*.

*   **Fondos:** Usar el `#0F084B` para secciones de alto impacto (Hero, Footer) con gradientes sutiles hacia `#126899`.
*   **Tipografía:**
    *   *Títulos:* **Montserrat** o **Outfit** (Modernas, geométricas, bold).
    *   *Cuerpo:* **Inter** o **Roboto** (Legibilidad máxima).
*   **Elementos Visuales:** Iconografía minimalista en `#17BEBB` (Turquesa). Bordes redondeados sutiles. Sombras suaves (glassmorphism) en las tarjetas de productos sobre fondos oscuros.

---
*Documento generado por Antigravity para Feral Tech - 2026*
