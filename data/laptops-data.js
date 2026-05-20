/* ══════════════════════════════════════════
   CATÁLOGO DE LAPTOPS — Mastoner Center 77
   Productos extraídos del Listado de Productos
   Solo laptops: nuevas, refurbished y chromebooks
══════════════════════════════════════════ */
window.CATALOG_DATA = {
  id: 'laptops',
  nombre: 'Laptops',
  eyebrow: 'Catálogo Oficial 2025',
  descripcion: 'Laptops nuevas, refurbished certificadas y Chromebooks. Dell, HP, ASUS, Acer, Lenovo y más.',
  gradientFrom: '#0F172A',
  gradientMid:  '#1E3A5F',
  gradientTo:   '#2563EB',
  accentColor:  '#3B82F6',
  accentLight:  '#DBEAFE',
  stats: [
    { n: '6',   l: 'Marcas'    },
    { n: '12+', l: 'Modelos'   }
  ],
  sections: [

    /* ═══════════════════════════════
       NUEVAS
    ═══════════════════════════════ */
    {
      id: 'nuevas',
      nombre: 'Laptops Nuevas',
      productos: [
        {
          codigo: '90NB0X21-M01',
          nombre: 'VivoBook 15 M1502YA',
          marca: 'ASUS',
          descripcion: 'Laptop AMD Ryzen 7 de 8 núcleos, 15.6" FHD IPS NanoEdge, 16GB RAM y 512GB SSD. WiFi 6E. Ideal para productividad y multimedia.',
          img: 'https://dlcdnwebimgs.asus.com/gain/fd487e2a-aef9-4512-a9fe-cfd8134470e5/w800',
          specs: [
            { k: 'Procesador',   v: 'AMD Ryzen 7 7730U · 8 núcleos · hasta 4.5 GHz' },
            { k: 'RAM',          v: '16 GB DDR4-3200 MHz' },
            { k: 'Almacenamiento', v: '512 GB M.2 PCIe NVMe SSD' },
            { k: 'Pantalla',     v: '15.6" FHD 1920×1080 IPS NanoEdge · anti-reflejo' },
            { k: 'Gráficos',     v: 'AMD Radeon Gráficos Integrados' },
            { k: 'WiFi',         v: 'WiFi 6E (802.11ax) · Bluetooth 5.0' },
            { k: 'Puertos',      v: '2× USB-A 3.2 · USB-C · HDMI 1.4 · SD card' },
            { k: 'Batería',      v: '42 Wh · hasta 8 horas' },
            { k: 'Peso',         v: '1.7 kg' },
            { k: 'Sistema op.',  v: 'Windows 11 Home' }
          ]
        },
        {
          codigo: 'AG15-21PT-R',
          nombre: 'Aspire Go 15 Touch',
          marca: 'Acer',
          descripcion: 'Laptop táctil AMD Ryzen 5, 15.6" FHD IPS con pantalla touch, 8GB LPDDR5 y 512GB SSD. Diseño Pure Silver. WiFi 6.',
          img: '',
          specs: [
            { k: 'Procesador',   v: 'AMD Ryzen 5 7520U · 4 núcleos · hasta 4.3 GHz' },
            { k: 'RAM',          v: '8 GB LPDDR5' },
            { k: 'Almacenamiento', v: '512 GB PCIe NVMe SSD' },
            { k: 'Pantalla',     v: '15.6" FHD 1920×1080 IPS Touch · Pure Silver' },
            { k: 'Gráficos',     v: 'AMD Radeon 610M Integrada' },
            { k: 'WiFi',         v: 'WiFi 6 (802.11ax) · Bluetooth 5.1' },
            { k: 'Puertos',      v: 'USB-A ×2 · USB-C · HDMI · SD card' },
            { k: 'Batería',      v: 'hasta 10 horas' },
            { k: 'Sistema op.',  v: 'Windows 11 Home' },
            { k: 'Color',        v: 'Pure Silver' }
          ]
        },
        {
          codigo: '002148',
          nombre: 'HP Laptop 15 FC0037WM',
          marca: 'HP',
          descripcion: 'Laptop HP 15.6" con AMD Ryzen 5 de 7ma gen, 8GB DDR5 y 256GB SSD. Diseño micro-edge, FHD. Windows 11 incluido.',
          img: '',
          specs: [
            { k: 'Procesador',   v: 'AMD Ryzen 5 7520U · 4 núcleos · hasta 4.3 GHz' },
            { k: 'RAM',          v: '8 GB DDR5' },
            { k: 'Almacenamiento', v: '256 GB PCIe NVMe SSD' },
            { k: 'Pantalla',     v: '15.6" FHD 1920×1080 micro-edge anti-reflejo' },
            { k: 'Gráficos',     v: 'AMD Radeon Gráficos Integrados' },
            { k: 'WiFi',         v: 'WiFi 5 (802.11ac) · Bluetooth 5.0' },
            { k: 'Puertos',      v: 'USB-A ×2 · USB-C · HDMI · Lector SD' },
            { k: 'Batería',      v: 'hasta 10 horas · carga rápida HP Fast Charge' },
            { k: 'Peso',         v: '~1.7 kg' },
            { k: 'Sistema op.',  v: 'Windows 11 Home' }
          ]
        },
        {
          codigo: '15IJL7',
          nombre: 'IdeaPad 1i Gen 7 15"',
          marca: 'Lenovo',
          descripcion: 'Laptop económica 15.6" con Intel Celeron N4500, 4GB RAM y 128GB eMMC. Ideal para tareas básicas, estudiantes y oficina ligera.',
          img: '',
          specs: [
            { k: 'Procesador',   v: 'Intel Celeron N4500 · 2 núcleos · hasta 2.8 GHz' },
            { k: 'RAM',          v: '4 GB DDR4' },
            { k: 'Almacenamiento', v: '128 GB eMMC' },
            { k: 'Pantalla',     v: '15.6" HD 1366×768' },
            { k: 'Gráficos',     v: 'Intel UHD 600 Integrada' },
            { k: 'WiFi',         v: 'WiFi 5 (802.11ac) · Bluetooth 5.0' },
            { k: 'Puertos',      v: 'USB-A ×2 · USB-C · HDMI · SD card' },
            { k: 'Batería',      v: 'hasta 7.5 horas' },
            { k: 'Peso',         v: '1.65 kg' },
            { k: 'Sistema op.',  v: 'Windows 11 Home S mode' }
          ]
        },
        {
          codigo: '003004',
          nombre: 'Dreamybook ML2-145',
          marca: 'Nexxus',
          descripcion: 'Laptop latinoamericana 14" FHD con Intel Celeron N5095, 8GB RAM, 256GB SSD M.2 y Windows 11 Pro. Fabricada para el mercado venezolano.',
          img: '',
          specs: [
            { k: 'Procesador',   v: 'Intel Celeron N5095 · 4 núcleos · hasta 2.9 GHz' },
            { k: 'RAM',          v: '8 GB DDR4' },
            { k: 'Almacenamiento', v: '256 GB M.2 SSD' },
            { k: 'Pantalla',     v: '14" FHD 1920×1080' },
            { k: 'Gráficos',     v: 'Intel UHD 600 Integrada' },
            { k: 'WiFi',         v: 'WiFi 5 · Bluetooth' },
            { k: 'Teclado',      v: 'Español (Latinoamérica)' },
            { k: 'Peso',         v: '~1.4 kg' },
            { k: 'Sistema op.',  v: 'Windows 11 Pro' },
            { k: 'Origen',       v: 'Marca venezolana Nexxus · modelo ML2-145' }
          ]
        }
      ]
    },

    /* ═══════════════════════════════
       REFURBISHED
    ═══════════════════════════════ */
    {
      id: 'refurbished',
      nombre: 'Laptops Refurbished Certificadas',
      productos: [
        {
          codigo: '0002829',
          nombre: 'Latitude 7400 14" i7 8th 16GB/512SSD',
          marca: 'Dell',
          descripcion: 'Laptop empresarial refurbished Dell Latitude 7400. Core i7 de 8va generación, 14" FHD IPS, 16GB RAM y 512GB SSD. Windows 10 Pro.',
          img: '',
          specs: [
            { k: 'Procesador',   v: 'Intel Core i7-8665U · 4C/8T · hasta 4.8 GHz' },
            { k: 'RAM',          v: '16 GB DDR4-2400 MHz' },
            { k: 'Almacenamiento', v: '512 GB M.2 SSD' },
            { k: 'Pantalla',     v: '14" FHD 1920×1080 IPS anti-reflejo' },
            { k: 'Gráficos',     v: 'Intel UHD 620 Integrada' },
            { k: 'WiFi',         v: 'WiFi 5 (802.11ac) · Bluetooth 5.0' },
            { k: 'Puertos',      v: 'Thunderbolt 3 · USB-A ×2 · HDMI · microSD · USB-C' },
            { k: 'Seguridad',    v: 'Cámara IR · Lector huella dactilar' },
            { k: 'Condición',    v: 'Refurbished · Windows 10 Pro' },
            { k: 'Peso',         v: '1.37 kg' }
          ]
        },
        {
          codigo: '002828',
          nombre: 'Latitude 7400 14" i5 8th 8GB/256SSD',
          marca: 'Dell',
          descripcion: 'Laptop empresarial refurbished Dell Latitude 7400. Core i5 de 8va generación, 14" FHD IPS, 8GB RAM y 256GB SSD. Windows 10 Pro.',
          img: '',
          specs: [
            { k: 'Procesador',   v: 'Intel Core i5-8265U · 4C/8T · hasta 3.9 GHz' },
            { k: 'RAM',          v: '8 GB DDR4-2400 MHz' },
            { k: 'Almacenamiento', v: '256 GB M.2 SSD' },
            { k: 'Pantalla',     v: '14" FHD 1920×1080 IPS anti-reflejo' },
            { k: 'Gráficos',     v: 'Intel UHD 620 Integrada' },
            { k: 'WiFi',         v: 'WiFi 5 (802.11ac) · Bluetooth 5.0' },
            { k: 'Condición',    v: 'Refurbished · Windows 10 Pro' },
            { k: 'Peso',         v: '1.37 kg' }
          ]
        },
        {
          codigo: '5420I7TOUCH',
          nombre: 'Inspiron 5420 14" Touch i7 11th 16GB/512 + Funda',
          marca: 'Dell',
          descripcion: 'Laptop touch refurbished Dell Inspiron 5420 con Core i7 de 11va generación, 14" FHD Touch, 16GB RAM, 512GB SSD. Incluye funda HP de obsequio.',
          img: '',
          specs: [
            { k: 'Procesador',   v: 'Intel Core i7-1165G7 · 4C/8T · hasta 4.7 GHz' },
            { k: 'RAM',          v: '16 GB DDR4' },
            { k: 'Almacenamiento', v: '512 GB M.2 NVMe SSD' },
            { k: 'Pantalla',     v: '14" FHD 1920×1080 Touch · panel IPS' },
            { k: 'Gráficos',     v: 'Intel Iris Xe Graphics Integrada' },
            { k: 'WiFi',         v: 'WiFi 6 (802.11ax) · Bluetooth 5.1' },
            { k: 'Incluye',      v: 'Funda HP de obsequio' },
            { k: 'Condición',    v: 'Refurbished touch · Windows 11' },
            { k: 'Peso',         v: '~1.5 kg' }
          ]
        },
        {
          codigo: '5420I5TOUCH',
          nombre: 'Inspiron 5420 14" Touch i5 11th 8GB/256 + Funda',
          marca: 'Dell',
          descripcion: 'Laptop touch refurbished Dell Inspiron 5420 con Core i5 de 11va generación, 14" FHD Touch, 8GB RAM, 256GB SSD. Incluye funda HP de obsequio.',
          img: '',
          specs: [
            { k: 'Procesador',   v: 'Intel Core i5-1155G7 · 4C/8T · hasta 4.5 GHz' },
            { k: 'RAM',          v: '8 GB DDR4' },
            { k: 'Almacenamiento', v: '256 GB M.2 NVMe SSD' },
            { k: 'Pantalla',     v: '14" FHD 1920×1080 Touch · panel IPS' },
            { k: 'Gráficos',     v: 'Intel Iris Xe Graphics Integrada' },
            { k: 'WiFi',         v: 'WiFi 6 (802.11ax) · Bluetooth 5.1' },
            { k: 'Incluye',      v: 'Funda HP de obsequio' },
            { k: 'Condición',    v: 'Refurbished touch · Windows 11' }
          ]
        },
        {
          codigo: '003584',
          nombre: 'EliteBook 430 G7 13.3" i5 10th 8GB/256SSD',
          marca: 'HP',
          descripcion: 'Laptop empresarial premium refurbished HP EliteBook 430 G7. Core i5 10ma gen, 13.3" FHD IPS, 8GB RAM, 256GB SSD, cámara IR, lector de huella, WiFi 6. Certificada.',
          img: '',
          specs: [
            { k: 'Procesador',   v: 'Intel Core i5-10210U · 4C/8T · hasta 4.2 GHz' },
            { k: 'RAM',          v: '8 GB DDR4-2666 MHz' },
            { k: 'Almacenamiento', v: '256 GB M.2 SATA SSD' },
            { k: 'Pantalla',     v: '13.3" FHD 1920×1080 IPS anti-reflejo' },
            { k: 'Gráficos',     v: 'Intel UHD 620 Integrada' },
            { k: 'WiFi',         v: 'WiFi 6 (802.11ax) · Bluetooth 5.0' },
            { k: 'Seguridad',    v: 'Cámara IR · Lector huella dactilar · TPM' },
            { k: 'Puertos',      v: 'Thunderbolt 3 · USB-A ×2 · USB-C · HDMI · SD' },
            { k: 'Batería',      v: 'hasta 9 horas' },
            { k: 'Condición',    v: 'Refurbished certificada · W/Charger incluido' },
            { k: 'Peso',         v: '1.5 kg' }
          ]
        }
      ]
    },

    /* ═══════════════════════════════
       CHROMEBOOKS
    ═══════════════════════════════ */
    {
      id: 'chromebooks',
      nombre: 'Chromebooks',
      productos: [
        {
          codigo: '003946',
          nombre: 'Chromebook Mini Aqua G5',
          marca: 'HP',
          descripcion: 'Chromebook HP compacto de 11" con 4GB RAM y 64GB eMMC. Ideal para educación y uso básico. Sistema ChromeOS rápido y seguro.',
          img: '',
          specs: [
            { k: 'Procesador',   v: 'Intel Celeron N3060 · 2 núcleos · hasta 2.48 GHz' },
            { k: 'RAM',          v: '4 GB LPDDR3' },
            { k: 'Almacenamiento', v: '64 GB eMMC + Google Drive' },
            { k: 'Pantalla',     v: '11.6" HD 1366×768' },
            { k: 'WiFi',         v: 'WiFi 5 (802.11ac) · Bluetooth 4.2' },
            { k: 'Sistema op.',  v: 'Google ChromeOS' },
            { k: 'Batería',      v: 'hasta 12 horas' },
            { k: 'Uso ideal',    v: 'Educación · Navegación web · Google Workspace' },
            { k: 'Color',        v: 'Aqua (Azul claro)' }
          ]
        },
        {
          codigo: '003869',
          nombre: 'Chromebook 11 3180 11.6"',
          marca: 'Dell',
          descripcion: 'Chromebook Dell resistente de 11.6" con 4GB RAM y 32GB eMMC. Diseñado para estudiantes y educación. ChromeOS con actualizaciones automáticas.',
          img: '',
          specs: [
            { k: 'Procesador',   v: 'Intel Celeron N3060 · 2 núcleos · hasta 2.48 GHz' },
            { k: 'RAM',          v: '4 GB LPDDR3' },
            { k: 'Almacenamiento', v: '32 GB eMMC + Google Drive' },
            { k: 'Pantalla',     v: '11.6" HD 1366×768 anti-reflejo' },
            { k: 'WiFi',         v: 'WiFi 5 (802.11ac) · Bluetooth 4.0' },
            { k: 'Sistema op.',  v: 'Google ChromeOS' },
            { k: 'Resistencia',  v: 'Diseño reforzado para educación' },
            { k: 'Batería',      v: 'hasta 10 horas' },
            { k: 'Color',        v: 'Negro (Black)' },
            { k: 'Uso ideal',    v: 'Estudiantes · Escuelas · Navegación web' }
          ]
        }
      ]
    },

    /* ═══════════════════════════════
       FUNDAS & MALETINES
    ═══════════════════════════════ */
    {
      id: 'fundas',
      nombre: 'Fundas & Maletines para Laptop',
      productos: [
        { codigo:'002545',        nombre:'Funda Protectora Portátil 15.6" Negro 21248',  marca:'Trust',    descripcion:'Funda protectora para portátil 15.6". Color negro. Ref. 21248.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/21248_pictures_product_visual_1.png' },
        { codigo:'KNS-120BK',     nombre:'Funda Laptop Neoactive 15.6" Black',           marca:'Klip Xtreme',descripcion:'Funda para laptop 15.6" color negro. Material neopreno resistente al agua.', img:'' },
        { codigo:'KNS-220GR',     nombre:'Funda Laptop 15.6" Gris Klip Xtreme',          marca:'Klip Xtreme',descripcion:'Funda para laptop 15.6" color gris claro.', img:'' },
        { codigo:'ARG--SL003145', nombre:'Funda Argomtech para Laptop 15" Negro',         marca:'Argom',    descripcion:'Funda para laptop 15 pulgadas. Color negro.', img:'' },
        { codigo:'002709',        nombre:'Morral Ejecutivo Ergonómico Porta Laptop 15.6" Azul', marca:'Aoking', descripcion:'Morral ejecutivo ergonómico con salida para cable de audífonos y puerto USB. Porta laptop 15.6". Color azul. Polyester.', img:'' },
        { codigo:'002958',        nombre:'Morral Ejecutivo Porta Laptop 15.6" Gris',     marca:'Aoking',   descripcion:'Morral ejecutivo porta laptop 15.6". Color gris. Poliester.', img:'' },
        { codigo:'002751',        nombre:'Morral Maletín Ejecutivo Porta Laptop 14.5" + USB Tipo C', marca:'Aoking', descripcion:'Morral maletín ejecutivo porta laptop 14.5" con puerto USB/Tipo C. Poliester negro.', img:'' },
        { codigo:'002961',        nombre:'Morral Ejecutivo Porta Laptop 15.6" SN2115 Gris', marca:'Aoking', descripcion:'Morral ejecutivo porta laptop 15.6" modelo SN2115. Color gris.', img:'' },
        { codigo:'002750',        nombre:'Maletín Ejecutivo Extendible Porta Laptop 14.5" SM3050', marca:'Aoking', descripcion:'Maletín ejecutivo extendible para laptop 14.5". Modelo SM3050. Polyester negro.', img:'' },
        { codigo:'092636336257',  nombre:'Morral Targus Para Laptop 15.6" Intelect Essent', marca:'Targus', descripcion:'Morral para laptop 15.6" Targus Intellect Essential. Diseño profesional.', img:'' },
        { codigo:'002865',        nombre:'Maletín Trust Bolonia 16" Para Notebook Verde', marca:'Trust',   descripcion:'Maletín de 16" para notebook. Color verde. Diseño elegante marca Trust.', img:'' },
        { codigo:'0002867',       nombre:'Funda Trust Primo Para Tablet 10" Negro 24214', marca:'Trust',   descripcion:'Funda protectora para tablet 10". Color negro. Ref. 24214.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/24214_pictures_product_visual_1.png' }
      ]
    }
  ]
};
