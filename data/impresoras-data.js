/* Impresoras — Datos enriquecidos con especificaciones técnicas reales */
window.CATALOG_DATA = {
  id: 'impresoras',
  nombre: 'Impresoras',
  eyebrow: 'Catálogo Oficial 2025',
  descripcion: 'Impresoras láser, inyección de tinta, matriciales y térmicas. HP, Canon y Epson.',
  gradientFrom: '#0C2A4A',
  gradientMid:  '#0369A1',
  gradientTo:   '#0EA5E9',
  accentColor:  '#0369A1',
  accentLight:  '#E0F2FE',
  stats: [
    { n: '3',   l: 'Marcas'    },
    { n: '25+', l: 'Modelos'   }
  ],
  sections: [
    {
      id: 'epson',
      nombre: 'Epson',
      productos: [
        {
          codigo:'C11CJ71301', nombre:'EcoTank L1250', marca:'Epson',
          descripcion:'Impresora inalámbrica de inyección de tinta continua (EcoTank).',
          img:'EPSON/EPSON L1250.jpg',
          specs:[
            {k:'Tecnología',   v:'Inyección tinta EcoTank'},
            {k:'Velocidad',    v:'10 ipm negro · 5 ipm color'},
            {k:'Resolución',   v:'5760 × 1440 dpi'},
            {k:'Conectividad', v:'WiFi 802.11b/g/n'},
            {k:'Funciones',    v:'Impresión únicamente'},
            {k:'Capacidad',    v:'100 hojas entrada'},
            {k:'Garantía',     v:'1 mes con compra en tienda'}
          ]
        },
        {
          codigo:'C11CJ67301', nombre:'EcoTank L3251 / L3250', marca:'Epson',
          descripcion:'Multifuncional WiFi con tinta continua EcoTank. Imprime, copia y escanea.',
          img:'EPSON/Epson L3250.jpg',
          specs:[
            {k:'Tecnología',   v:'Inyección tinta EcoTank'},
            {k:'Velocidad',    v:'10 ipm negro · 5 ipm color'},
            {k:'Resolución',   v:'5760 × 1440 dpi'},
            {k:'Conectividad', v:'WiFi 802.11b/g/n'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo'},
            {k:'Capacidad',    v:'100 hojas entrada'}
          ]
        },
        {
          codigo:'C11CL41301', nombre:'EcoTank L4360', marca:'Epson',
          descripcion:'Multifuncional 3 en 1 inalámbrica EcoTank con dúplex automático WiFi.',
          img:'EPSON/Epson L4360.jpg',
          specs:[
            {k:'Tecnología',   v:'Inyección tinta EcoTank'},
            {k:'Velocidad',    v:'15 ipm negro · 8 ipm color'},
            {k:'Resolución',   v:'5760 × 1440 dpi'},
            {k:'Conectividad', v:'WiFi · WiFi Direct · USB'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo'},
            {k:'Dúplex',       v:'Automático'},
            {k:'Capacidad',    v:'100 hojas entrada'}
          ]
        },
        {
          codigo:'C11CJ65301', nombre:'EcoTank L5590 con ADF', marca:'Epson',
          descripcion:'Multifuncional WiFi + Ethernet con ADF. Imprime, copia, escanea y fax.',
          img:'EPSON/Epson L5590.jpg',
          specs:[
            {k:'Tecnología',   v:'Inyección tinta EcoTank'},
            {k:'Velocidad',    v:'15 ipm negro · 8 ipm color'},
            {k:'Conectividad', v:'WiFi · Ethernet · USB'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo · Fax'},
            {k:'ADF',          v:'35 hojas'},
            {k:'Dúplex',       v:'Manual'}
          ]
        },
        {
          codigo:'10343945814', nombre:'EcoTank M2170 Monocromática', marca:'Epson',
          descripcion:'Multifuncional monocromática EcoTank con dúplex automático y WiFi.',
          img:'EPSON/Epson M2170.jpg',
          specs:[
            {k:'Tecnología',   v:'Inyección tinta negra EcoTank'},
            {k:'Velocidad',    v:'15 ipm monocromática'},
            {k:'Resolución',   v:'1440 × 720 dpi'},
            {k:'Conectividad', v:'WiFi · Ethernet · USB'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo'},
            {k:'Dúplex',       v:'Automático'},
            {k:'Rendimiento',  v:'~6,000 pág. / botella tinta'}
          ]
        },
        {
          codigo:'C11CJ80201', nombre:'SureColor F170 A4', marca:'Epson',
          descripcion:'Impresora de sublimación A4 para transfer en telas y rígidos.',
          img:'EPSON/Epson Sure Color M170.jpg',
          specs:[
            {k:'Tecnología',   v:'Sublimación de tinta'},
            {k:'Formato',      v:'Hasta A4'},
            {k:'Resolución',   v:'Hasta 5760 × 1440 dpi'},
            {k:'Conectividad', v:'WiFi · USB'},
            {k:'Uso',          v:'Camisetas · tazas · rígidos'},
            {k:'Tintas',       v:'4 colores (C/M/Y/K)'}
          ]
        },
        {
          codigo:'003101', nombre:'EcoTank L14150 A3 WiFi', marca:'Epson',
          descripcion:'Multifuncional inalámbrica formato A3 con ADF y tinta continua EcoTank.',
          img:'',
          specs:[
            {k:'Formato',      v:'Impresión hasta A3+'},
            {k:'Velocidad',    v:'32 ipm negro (A4) · 20 ipm color'},
            {k:'Conectividad', v:'WiFi · Ethernet · USB'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo · Fax'},
            {k:'ADF',          v:'35 hojas'},
            {k:'Dúplex',       v:'Automático (A4)'}
          ]
        },
        {
          codigo:'LX350', nombre:'LX350 Matricial 9 pines', marca:'Epson',
          descripcion:'Impresora matricial de punto de 9 pines para formularios continuos.',
          img:'',
          specs:[
            {k:'Tecnología',   v:'Impacto matricial 9 pines'},
            {k:'Velocidad',    v:'375 cps borrador · 90 cps NLQ'},
            {k:'Ancho papel',  v:'Hasta 10 pulgadas (255 mm)'},
            {k:'Interfaz',     v:'USB · Paralelo'},
            {k:'Formularios',  v:'Formas continuas hasta 3 partes'},
            {k:'Consumible',   v:'Cinta S015329 / S015631'}
          ]
        },
        {
          codigo:'002565', nombre:'MPL-300 Recibo y Etiqueta Móvil', marca:'AON',
          descripcion:'Impresora portátil de recibos y etiquetas USB + Bluetooth.',
          img:'',
          specs:[
            {k:'Tecnología',   v:'Térmica directa'},
            {k:'Ancho papel',  v:'58 / 80 mm'},
            {k:'Conectividad', v:'USB · Bluetooth'},
            {k:'Compatibilidad', v:'Windows · Android · iOS'},
            {k:'Velocidad',    v:'90 mm/s'}
          ]
        },
        {
          codigo:'002286', nombre:'PR-100 Térmica 58mm USB+Serial', marca:'AON',
          descripcion:'Impresora térmica 58mm con USB y puerto serial. Modelo AON-PR-1002-BD.',
          img:'',
          specs:[
            {k:'Tecnología',   v:'Térmica directa'},
            {k:'Ancho papel',  v:'58 mm'},
            {k:'Interfaz',     v:'USB + Serial RS232'},
            {k:'Velocidad',    v:'90 mm/s'},
            {k:'Resolución',   v:'203 dpi'}
          ]
        },
        {
          codigo:'002373', nombre:'PR-350 Térmica 80mm Bluetooth', marca:'AON',
          descripcion:'Impresora térmica 80mm con Bluetooth para puntos de venta. AON-PR1004-U.',
          img:'',
          specs:[
            {k:'Tecnología',   v:'Térmica directa'},
            {k:'Ancho papel',  v:'80 mm'},
            {k:'Conectividad', v:'USB · Bluetooth'},
            {k:'Velocidad',    v:'250 mm/s'},
            {k:'Resolución',   v:'203 dpi'}
          ]
        }
      ]
    },
    {
      id: 'hp',
      nombre: 'HP',
      productos: [
        {
          codigo:'7MD68A', nombre:'LaserJet M111W con WiFi', marca:'HP',
          descripcion:'Impresora láser monocromática con conectividad WiFi. Ideal para oficinas pequeñas.',
          img:'HP/HP 111W.jpg',
          specs:[
            {k:'Tecnología',   v:'Láser monocromática'},
            {k:'Velocidad',    v:'21 ppm'},
            {k:'Resolución',   v:'600 × 600 dpi'},
            {k:'Conectividad', v:'WiFi 802.11b/g/n'},
            {k:'Funciones',    v:'Impresión únicamente'},
            {k:'Memoria',      v:'16 MB'},
            {k:'Tóner',        v:'HP 141A (W1410A)'}
          ]
        },
        {
          codigo:'7MD74A', nombre:'LaserJet M141W Multifuncional', marca:'HP',
          descripcion:'Multifuncional láser monocromática WiFi. Imprime, copia y escanea.',
          img:'HP/HP 141W.png',
          specs:[
            {k:'Tecnología',   v:'Láser monocromática'},
            {k:'Velocidad',    v:'21 ppm'},
            {k:'Resolución',   v:'600 × 600 dpi'},
            {k:'Conectividad', v:'WiFi 802.11b/g/n'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo'},
            {k:'Memoria',      v:'64 MB'},
            {k:'Tóner',        v:'HP 141A (W1410A)'}
          ]
        },
        {
          codigo:'4ZB84A', nombre:'LaserJet M137FNW ADF WiFi/Red', marca:'HP',
          descripcion:'Impresora láser multifuncional con ADF, WiFi y Ethernet. 4 en 1.',
          img:'HP/HP 137W.jpg',
          specs:[
            {k:'Tecnología',   v:'Láser monocromática'},
            {k:'Velocidad',    v:'20 ppm'},
            {k:'Resolución',   v:'600 × 600 dpi'},
            {k:'Conectividad', v:'WiFi · Ethernet · USB'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo · Fax'},
            {k:'ADF',          v:'35 hojas'},
            {k:'Tóner',        v:'HP 105A (W1050A)'}
          ]
        },
        {
          codigo:'003144', nombre:'Smart Tank 580 Multifuncional', marca:'HP',
          descripcion:'Multifuncional inalámbrica de tinta continua con pantalla táctil.',
          img:'',
          specs:[
            {k:'Tecnología',   v:'Inyección de tinta continua'},
            {k:'Velocidad',    v:'12 ppm negro · 9 ppm color'},
            {k:'Resolución',   v:'4800 × 1200 dpi'},
            {k:'Conectividad', v:'WiFi · USB'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo'},
            {k:'Pantalla',     v:'Táctil LCD 2.7"'},
            {k:'Tinta',        v:'GT52/GT53'}
          ]
        },
        {
          codigo:'0003145', nombre:'Smart Tank 530 WiFi Pantalla', marca:'HP',
          descripcion:'Multifuncional inalámbrica de tinta continua con pantalla LCD 2.2".',
          img:'',
          specs:[
            {k:'Tecnología',   v:'Inyección de tinta continua'},
            {k:'Velocidad',    v:'12 ppm negro · 9 ppm color'},
            {k:'Conectividad', v:'WiFi · USB'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo'},
            {k:'Pantalla',     v:'LCD 2.2"'},
            {k:'Tinta',        v:'GT52/GT53'}
          ]
        }
      ]
    },
    {
      id: 'canon',
      nombre: 'Canon',
      productos: [
        {
          codigo:'003398', nombre:'PIXMA G-1130', marca:'Canon',
          descripcion:'Impresora de inyección de tinta continua PIXMA con tecnología FINE.',
          img:'Canon/Canon G1130.jpg',
          specs:[
            {k:'Tecnología',   v:'FINE · Tinta continua'},
            {k:'Velocidad',    v:'8.8 ipm negro · 5 ipm color'},
            {k:'Resolución',   v:'4800 × 1200 dpi'},
            {k:'Conectividad', v:'USB 2.0'},
            {k:'Funciones',    v:'Impresión únicamente'},
            {k:'Capacidad',    v:'100 hojas'},
            {k:'Tinta',        v:'GI-16 / GI-11'}
          ]
        },
        {
          codigo:'CANON-4588', nombre:'PIXMA G4170', marca:'Canon',
          descripcion:'Multifuncional 4 en 1 WiFi con ADF y tinta continua. Imprime, copia, escanea y fax.',
          img:'Canon/Canon G4170.jpg',
          specs:[
            {k:'Tecnología',   v:'FINE · Tinta continua'},
            {k:'Velocidad',    v:'11 ipm negro · 6 ipm color'},
            {k:'Resolución',   v:'4800 × 1200 dpi'},
            {k:'Conectividad', v:'WiFi · WiFi Direct · USB'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo · Fax'},
            {k:'ADF',          v:'20 hojas'},
            {k:'Rendimiento',  v:'6,000 pág. negro · 7,700 color'}
          ]
        },
        {
          codigo:'013803292541', nombre:'PIXMAINK G4110 Multifuncional', marca:'Canon',
          descripcion:'Multifuncional de tinta continua PIXMA G4110 con ADF.',
          img:'',
          specs:[
            {k:'Tecnología',   v:'FINE · Tinta continua'},
            {k:'Velocidad',    v:'8.8 ipm negro · 5 ipm color'},
            {k:'Conectividad', v:'WiFi · USB'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo · Fax'},
            {k:'ADF',          v:'20 hojas'}
          ]
        },
        {
          codigo:'5161C005BA', nombre:'Laser MF455DW / MF465DW', marca:'Canon',
          descripcion:'Impresora láser multifuncional con dúplex automático y WiFi.',
          img:'Canon/Canon imageCLASS MF455dw.jpg',
          specs:[
            {k:'Tecnología',   v:'Láser monocromática'},
            {k:'Velocidad',    v:'42 ppm'},
            {k:'Resolución',   v:'1200 × 1200 dpi'},
            {k:'Conectividad', v:'WiFi · Ethernet · USB'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo · Fax'},
            {k:'Dúplex',       v:'Automático'},
            {k:'ADF',          v:'50 hojas'}
          ]
        },
        {
          codigo:'002667', nombre:'imageRUNNER 1643iF Monocromática', marca:'Canon',
          descripcion:'Fotocopiadora/multifuncional láser monocromática de alta velocidad.',
          img:'Canon/Canon Imagenruner1643.jpg',
          specs:[
            {k:'Tecnología',   v:'Láser monocromática'},
            {k:'Velocidad',    v:'45 ppm'},
            {k:'Resolución',   v:'1200 × 1200 dpi'},
            {k:'Conectividad', v:'WiFi · Gigabit Ethernet · USB'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo · Fax'},
            {k:'ADF',          v:'50 hojas'},
            {k:'Pantalla',     v:'Táctil 5" a color'},
            {k:'Capacidad',    v:'550 hojas + 100 bypass'}
          ]
        },
        {
          codigo:'01380321771', nombre:'imageCLASS LBP6030W Láser', marca:'Canon',
          descripcion:'Impresora láser monocromática compacta con WiFi.',
          img:'Canon/Canon 6030W.jpg',
          specs:[
            {k:'Tecnología',   v:'Láser monocromática'},
            {k:'Velocidad',    v:'18 ppm'},
            {k:'Resolución',   v:'600 × 600 dpi'},
            {k:'Conectividad', v:'WiFi 802.11b/g/n'},
            {k:'Funciones',    v:'Impresión únicamente'},
            {k:'Memoria',      v:'32 MB'},
            {k:'Tóner',        v:'CRG-125 / CRG-326'}
          ]
        },
        {
          codigo:'L32-MF3010', nombre:'imageCLASS MF3010 + Tóner', marca:'Canon',
          descripcion:'Impresora láser multifuncional compacta con tóner de obsequio incluido.',
          img:'',
          specs:[
            {k:'Tecnología',   v:'Láser monocromática'},
            {k:'Velocidad',    v:'18 ppm'},
            {k:'Resolución',   v:'600 × 600 dpi'},
            {k:'Conectividad', v:'USB 2.0'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo'},
            {k:'Incluye',      v:'Tóner de obsequio'}
          ]
        },
        {
          codigo:'MF272DW', nombre:'imageCLASS MF272dw 110-127V', marca:'Canon',
          descripcion:'Multifuncional láser monocromática con WiFi y dúplex automático.',
          img:'Canon/Canon imageCLASS MF272dw.jpg',
          specs:[
            {k:'Tecnología',   v:'Láser monocromática'},
            {k:'Velocidad',    v:'29 ppm'},
            {k:'Resolución',   v:'600 × 600 dpi'},
            {k:'Conectividad', v:'WiFi · USB · Ethernet'},
            {k:'Funciones',    v:'Imprime · Copia · Escaneo'},
            {k:'Dúplex',       v:'Automático'},
            {k:'Voltaje',      v:'110-127V'}
          ]
        },
        {
          codigo:'CAM4PLUS', nombre:'Silhouette Cameo 4 Plus', marca:'Silhouette',
          descripcion:'Estudio de corte profesional con cuchilla automática para diseño y sublimación.',
          img:'',
          specs:[
            {k:'Ancho corte',  v:'Hasta 15 pulgadas (38 cm)'},
            {k:'Fuerza',       v:'Hasta 5,000 g'},
            {k:'Conectividad', v:'USB · Bluetooth'},
            {k:'Compatible',   v:'Silhouette Studio'},
            {k:'Materiales',   v:'Vinilo · papel · tela · cuero'}
          ]
        }
      ]
    },

    /* ─── PLANCHAS DE SUBLIMACIÓN ─── */
    {
      id: 'sublimacion',
      nombre: 'Planchas de Sublimación',
      productos: [
        {
          codigo:'MINIPLANC', nombre:'Mini Plancha Sublimación 11.8×7.2×11.6cm HTVRONT', marca:'HTVRONT',
          descripcion:'Mini plancha de sublimación compacta para transferencias pequeñas en tazas, placas y más.',
          img:'',
          specs:[
            {k:'Dimensiones',  v:'11.8 × 7.2 × 11.6 cm'},
            {k:'Tipo',         v:'Plancha de calor compacta'},
            {k:'Uso',          v:'Sublimación · transfer térmico'},
            {k:'Marca',        v:'HTVRONT'}
          ]
        },
        {
          codigo:'HTVROM', nombre:'Plancha Sublimación Portátil 29.5×29.5cm HTVRONT', marca:'HTVRONT',
          descripcion:'Plancha de sublimación portátil para prendas y superficies rígidas. Temperatura ajustable.',
          img:'',
          specs:[
            {k:'Dimensiones',  v:'29.5 × 29.5 × 13.2 cm'},
            {k:'Tipo',         v:'Plancha portátil de sublimación'},
            {k:'Temperatura',  v:'Ajustable · hasta 230°C'},
            {k:'Uso',          v:'Camisetas · prendas · materiales rígidos'}
          ]
        },
        {
          codigo:'VEVOR', nombre:'Plancha Sublimación de Cooler y Tazas VEVOR', marca:'VEVOR',
          descripcion:'Plancha de sublimación diseñada para tazas y superficies curvas. Incluye accesorios para distintos formatos.',
          img:'',
          specs:[
            {k:'Tipo',         v:'Plancha para tazas y superficies curvas'},
            {k:'Marca',        v:'VEVOR'},
            {k:'Uso',          v:'Tazas · vasos · objetos cilíndricos'},
            {k:'Temperatura',  v:'Ajustable digitalmente'}
          ]
        }
      ]
    }
  ]
};
