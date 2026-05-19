/* ══════════════════════════════════════════
   MASTONER CENTER — SERVICIOS
   Agrega, edita o elimina servicios aquí.
   Las tarjetas y modales se generan automáticamente.
══════════════════════════════════════════ */
const SERVICIOS = [
  {
    id: 'venta-impresoras',
    nombre: 'Venta de Impresoras',
    desc_corta: 'Impresoras de oficina, multifuncionales y de alto rendimiento.',
    desc_larga: 'Contamos con un amplio catálogo de impresoras de las mejores marcas del mercado: HP, Epson, Canon y Brother. Desde modelos compactos para uso doméstico hasta equipos de alto rendimiento para oficinas y empresas. Te asesoramos para elegir el modelo ideal según tu volumen de impresión y presupuesto.',
    beneficios: [
      'Marcas: HP, Epson, Canon, Brother',
      'Garantía incluida en cada equipo',
      'Asesoría personalizada sin costo'
    ],
    tiempo: null,
    svgPath: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>'
  },
  {
    id: 'toner-cartuchos',
    nombre: 'Tóner y Cartuchos',
    desc_corta: 'Stock de tóner y cartuchos originales y compatibles.',
    desc_larga: 'Mantenemos en stock tóner y cartuchos originales y compatibles para las principales marcas del mercado. Ofrecemos la mejor relación calidad-precio, con productos que garantizan la calidad de impresión y protegen tu equipo.',
    beneficios: [
      'Originales y compatibles de calidad',
      'Amplio stock disponible',
      'Precios competitivos'
    ],
    tiempo: null,
    svgPath: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>'
  },
  {
    id: 'recarga-toner',
    nombre: 'Recarga de Tóner',
    desc_corta: 'Recargamos tu tóner con materiales de calidad certificada.',
    desc_larga: 'Servicio de recarga de tóner con materiales de alta calidad. Nuestros técnicos especializados realizan el proceso en nuestro taller, garantizando que tu impresora rinda igual que con un tóner nuevo. El servicio incluye limpieza del cartucho y verificación de funcionamiento.',
    beneficios: [
      'Materiales de calidad certificada',
      'Garantía de funcionamiento',
      'Limpieza y verificación incluidas'
    ],
    tiempo: null,
    svgPath: '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>'
  },
  {
    id: 'reparacion-impresoras',
    nombre: 'Reparación de Impresoras',
    desc_corta: 'Diagnóstico y reparación de HP, Epson, Canon, Brother y más.',
    desc_larga: 'Diagnóstico y reparación de impresoras de todas las marcas: HP, Epson, Canon, Brother y más. Atendemos fallas mecánicas, problemas de conectividad, atascos de papel, cabezales tapados y errores de firmware. El diagnóstico es sin costo y se cobra solo si se realiza la reparación.',
    beneficios: [
      'Diagnóstico sin costo',
      'Técnicos certificados',
      'Garantía de 30 días en la reparación'
    ],
    tiempo: '24 – 72 horas según falla',
    svgPath: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'
  },
  {
    id: 'reparacion-computadoras',
    nombre: 'Reparación de Computadoras',
    desc_corta: 'Laptops y PCs: hardware, software, virus, pantallas y más.',
    desc_larga: 'Reparación integral de laptops y computadoras de escritorio. Atendemos fallas de hardware (RAM, disco duro, pantallas, teclados), software (formateos, instalación de sistemas operativos, eliminación de virus y malware) y optimización de rendimiento.',
    beneficios: [
      'Hardware y software',
      'Eliminación de virus y malware',
      'Recuperación de datos cuando es posible'
    ],
    tiempo: '24 – 96 horas según falla',
    svgPath: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'
  },
  {
    id: 'soluciones-tecnologicas',
    nombre: 'Soluciones Tecnológicas',
    desc_corta: 'Redes, equipamiento y optimización de procesos digitales.',
    desc_larga: 'Asesoramos a tu empresa en la implementación de soluciones tecnológicas: configuración de redes, selección de equipamiento, instalación de software y optimización de procesos digitales. Diseñamos soluciones a medida para pequeñas y medianas empresas.',
    beneficios: [
      'Diagnóstico inicial gratuito',
      'Solución a medida para tu empresa',
      'Soporte posterior incluido'
    ],
    tiempo: 'A convenir según proyecto',
    svgPath: '<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>'
  }
];
