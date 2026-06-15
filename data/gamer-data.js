/* ══════════════════════════════════════════
   CATÁLOGO GAMER — mastonercenter77
   Componentes PC · Periféricos gaming · Sillas · Controllers
   Imágenes confirmadas: ASUS TUF (dlcdnwebimgs.asus.com),
   Deepcool (cdn.deepcool.com), Marvo (marvo-tech.com),
   Trust GXT (d1gb7gicmr8iau.cloudfront.net)
══════════════════════════════════════════ */
var _trust = function(ref) {
  return 'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/' + ref + '_pictures_product_visual_1.png';
};

window.CATALOG_DATA = {
  id: 'gamer',
  nombre: 'Gamer & Hardware',
  eyebrow: 'Catálogo Oficial 2025',
  descripcion: 'Procesadores, GPU, motherboards, RAM, cases RGB, periféricos gaming y sillas. Todo para tu setup.',
  gradientFrom: '#0F0F23',
  gradientMid:  '#7C0D22',
  gradientTo:   '#E63946',
  accentColor:  '#E63946',
  accentLight:  '#FFE4E4',
  stats: [
    { n: '10+', l: 'Secciones'  },
    { n: '100+',l: 'Productos'  }
  ],
  sections: [

    /* ─── PROCESADORES ─── */
    {
      id: 'procesadores',
      nombre: 'Procesadores (CPU)',
      productos: [
        {
          codigo:'5600GTRYZEX', nombre:'Ryzen 5 5600GT + Fan GameMax RGB', marca:'AMD',
          descripcion:'Procesador AMD Ryzen 5 5600GT Socket AM4 con Fan Cooler GameMax RGB Intel/AMD Rampage Ice Blade incluido.',
          img:'',
          specs:[
            {k:'Arquitectura',  v:'Zen 3 · Socket AM4'},
            {k:'Núcleos/Hilos', v:'6 núcleos / 12 hilos'},
            {k:'Frecuencia',    v:'3.6 GHz base · hasta 4.2 GHz Boost'},
            {k:'Gráficos',      v:'Radeon RX Vega 7 integrados'},
            {k:'TDP',           v:'65W'},
            {k:'Incluye',       v:'Fan Cooler GameMax RGB Rampage Ice Blade'}
          ]
        },
        {
          codigo:'RYZEN-5700G', nombre:'Ryzen 7 5700G Box NEW', marca:'AMD',
          descripcion:'Procesador AMD Ryzen 7 5700G de 8 núcleos con gráficos Radeon integrados. Sellado, caja nueva.',
          img:'',
          specs:[
            {k:'Arquitectura',  v:'Zen 3 · Socket AM4'},
            {k:'Núcleos/Hilos', v:'8 núcleos / 16 hilos'},
            {k:'Frecuencia',    v:'3.8 GHz base · hasta 4.6 GHz Boost'},
            {k:'Gráficos',      v:'Radeon RX Vega 8 integrados'},
            {k:'TDP',           v:'65W'}
          ]
        },
        {
          codigo:'003003', nombre:'Ryzen 5 8500G Box', marca:'AMD',
          descripcion:'Procesador AMD Ryzen 5 8500G con gráficos Radeon 740M integrados. Caja sellada.',
          img:'',
          specs:[
            {k:'Arquitectura',  v:'Zen 4 · Socket AM5'},
            {k:'Núcleos/Hilos', v:'6 núcleos / 12 hilos'},
            {k:'Frecuencia',    v:'hasta 5.0 GHz Boost'},
            {k:'Gráficos',      v:'Radeon 740M integrados'},
            {k:'TDP',           v:'65W'}
          ]
        },
        {
          codigo:'730143316002', nombre:'Ryzen 5 5600GT (Socket AM4) Caja Sellada + Fan', marca:'AMD',
          descripcion:'Procesador AMD Ryzen 5 5600GT Socket AM4 con fan cooler incluido. Caja sellada.',
          img:'',
          specs:[
            {k:'Socket',        v:'AM4'},
            {k:'Núcleos',       v:'6 núcleos / 12 hilos'},
            {k:'Frecuencia',    v:'3.6 GHz base · hasta 4.2 GHz'},
            {k:'Gráficos',      v:'Radeon RX Vega 7'}
          ]
        },
        {
          codigo:'002822', nombre:'Ryzen 3 3200G Socket AM4', marca:'AMD',
          descripcion:'Procesador AMD Ryzen 3 3200G con gráficos Radeon RX Vega 8 para builds de entrada.',
          img:'',
          specs:[
            {k:'Socket',        v:'AM4'},
            {k:'Núcleos/Hilos', v:'4 núcleos / 4 hilos'},
            {k:'Frecuencia',    v:'3.6 GHz base · hasta 4.0 GHz'},
            {k:'Gráficos',      v:'Radeon RX Vega 8'}
          ]
        },
        {
          codigo:'001313', nombre:'Core i5-12400 6 Core LGA1200 Box', marca:'Intel',
          descripcion:'Procesador Intel Core i5-12400 de 6 núcleos para plataforma LGA1700. Caja sellada.',
          img:'',
          specs:[
            {k:'Socket',        v:'LGA1700 (Alder Lake 12va gen)'},
            {k:'Núcleos/Hilos', v:'6 núcleos / 12 hilos'},
            {k:'Frecuencia',    v:'2.5 GHz base · hasta 4.4 GHz Boost'},
            {k:'Caché',         v:'18 MB Intel Smart Cache'}
          ]
        },
        {
          codigo:'001021', nombre:'Core i7-12700K LGA1700', marca:'Intel',
          descripcion:'Procesador Intel Core i7-12700K de 12 núcleos sin ventilador. Alto rendimiento para gaming y creación.',
          img:'',
          specs:[
            {k:'Socket',        v:'LGA1700 (Alder Lake 12va gen)'},
            {k:'Núcleos/Hilos', v:'12 núcleos (8P+4E) / 20 hilos'},
            {k:'Frecuencia',    v:'3.6 GHz base · hasta 5.0 GHz Boost'},
            {k:'TDP',           v:'125W (sin cooler incluido)'}
          ]
        },
        {
          codigo:'000592', nombre:'Core i5-6500 3.2GHz LGA1151 Pull OEM + FanCooler', marca:'Intel',
          descripcion:'Procesador Intel Core i5-6500 Socket LGA1151 con fan cooler incluido. Pull OEM.',
          img:'',
          specs:[
            {k:'Socket',        v:'LGA1151 (6ta gen Skylake)'},
            {k:'Núcleos/Hilos', v:'4 núcleos / 4 hilos'},
            {k:'Frecuencia',    v:'3.2 GHz base · hasta 3.6 GHz'},
            {k:'Incluye',       v:'Fan cooler'}
          ]
        },
        {
          codigo:'I341601150', nombre:'Core i5 4ta Gen (Socket 1150) Sin FanCooler', marca:'Intel',
          descripcion:'Procesador Intel Core i5 de 4ta generación Socket 1150. Sin fan cooler incluido.',
          img:'',
          specs:[
            {k:'Socket',        v:'LGA1150 (4ta gen Haswell)'},
            {k:'Núcleos',       v:'4 núcleos'},
            {k:'Nota',          v:'Sin fan cooler, requiere compra separada'}
          ]
        }
      ]
    },

    /* ─── TARJETAS GRÁFICAS ─── */
    {
      id: 'gpu',
      nombre: 'Tarjetas Gráficas (GPU)',
      productos: [
        {
          codigo:'002484', nombre:'MSI GeForce RTX 3050 VE 8GB', marca:'MSI',
          descripcion:'Tarjeta gráfica NVIDIA GeForce RTX 3050 de 8GB GDDR6. Ray Tracing, DLSS 2. Ideal para gaming 1080p.',
          img:'',
          specs:[
            {k:'Chip',          v:'NVIDIA GeForce RTX 3050'},
            {k:'Memoria',       v:'8 GB GDDR6'},
            {k:'Bus',           v:'128-bit'},
            {k:'Ray Tracing',   v:'Sí (2da gen)'},
            {k:'DLSS',          v:'Sí · DLSS 2.0'},
            {k:'Puertos',       v:'HDMI 2.1 · 3× DisplayPort 1.4'}
          ]
        },
        {
          codigo:'RX580', nombre:'Radeon RX 580 8GB 256bit Golden Memory', marca:'Golden Memory',
          descripcion:'Tarjeta gráfica AMD Radeon RX 580 de 8GB con bus de 256 bits y 2408 Stream Processors.',
          img:'',
          specs:[
            {k:'Chip',          v:'AMD Radeon RX 580'},
            {k:'Memoria',       v:'8 GB GDDR5'},
            {k:'Bus',           v:'256-bit'},
            {k:'Stream Procs.', v:'2408 SP'},
            {k:'Uso',           v:'Gaming 1080p/1440p'}
          ]
        },
        {
          codigo:'GT730GDR5', nombre:'GeForce GT730 4GB DDR5 Golden Memory', marca:'Golden Memory',
          descripcion:'Tarjeta gráfica NVIDIA GeForce GT730 de 4GB DDR5. Para multimedia, películas 4K y equipos básicos.',
          img:'',
          specs:[
            {k:'Chip',          v:'NVIDIA GeForce GT 730'},
            {k:'Memoria',       v:'4 GB DDR5'},
            {k:'Uso',           v:'Multimedia · ofimática · video 4K'},
            {k:'Puertos',       v:'HDMI · VGA · DVI'}
          ]
        },
        {
          codigo:'003839', nombre:'GeForce GT740 4GB GDDR5 Artek 993MHz', marca:'Artek',
          descripcion:'Tarjeta gráfica NVIDIA GeForce GT740 de 4GB GDDR5. Perfil alto. 993 MHz.',
          img:'',
          specs:[
            {k:'Chip',          v:'NVIDIA GeForce GT 740'},
            {k:'Memoria',       v:'4 GB GDDR5'},
            {k:'Frecuencia',    v:'993 MHz'},
            {k:'Perfil',        v:'Alto (para torres estándar)'}
          ]
        }
      ]
    },

    /* ─── TARJETAS MADRE ─── */
    {
      id: 'tarjetas-madre',
      nombre: 'Tarjetas Madre',
      productos: [
        {
          codigo:'003449', nombre:'ASUS TUF Gaming A520-PLUS AM4 WiFi', marca:'ASUS',
          descripcion:'Tarjeta madre gaming AMD Socket AM4. Certificación TUF, WiFi integrado, HDMI, VGA, USB 3.2.',
          img:'https://dlcdnwebimgs.asus.com/gain/5675c4e2-bacc-449f-93b3-c4ef48ee0109/w692',
          specs:[
            {k:'Socket',        v:'AM4 (AMD Ryzen)'},
            {k:'Chipset',       v:'AMD A520'},
            {k:'Form Factor',   v:'mATX'},
            {k:'RAM',           v:'2× DDR4 · hasta 64 GB'},
            {k:'WiFi',          v:'Integrado 802.11ac'},
            {k:'Puertos',       v:'HDMI · VGA · USB 3.2 · M.2 · SATA ×4'}
          ]
        },
        {
          codigo:'003447', nombre:'ASUS A620M-K AM5 USB 3.2 HDMI-VGA DDR5', marca:'ASUS',
          descripcion:'Tarjeta madre AMD Socket AM5 DDR5 con HDMI y VGA. Compatible con Ryzen 7000/8000.',
          img:'',
          specs:[
            {k:'Socket',        v:'AM5 (AMD Ryzen 7000/8000)'},
            {k:'Chipset',       v:'AMD A620'},
            {k:'RAM',           v:'2× DDR5'},
            {k:'Puertos',       v:'HDMI · VGA · USB 3.2 · M.2 · SATA'},
            {k:'Form Factor',   v:'mATX'}
          ]
        },
        {
          codigo:'4711377093804', nombre:'MSI A620M Socket AM5 AMD Ryzen DDR5', marca:'MSI',
          descripcion:'Tarjeta madre MSI Socket AM5 DDR5 para Ryzen serie 7000/8000. 4× SATA · 6× USB · 2× DDR5.',
          img:'',
          specs:[
            {k:'Socket',        v:'AM5'},
            {k:'Form Factor',   v:'mATX'},
            {k:'RAM',           v:'2× DDR5'},
            {k:'Almacenamiento',v:'4× SATA 6 + M.2'},
            {k:'USB',           v:'6× USB 2.0/3.2'}
          ]
        },
        {
          codigo:'002648', nombre:'Asrock A620M RS Socket AM5 DDR5 Serie 7000-8000', marca:'Asrock',
          descripcion:'Tarjeta madre Asrock AM5 DDR5 compatible con AMD Ryzen serie 7000-8000.',
          img:'',
          specs:[
            {k:'Socket',        v:'AM5'},
            {k:'RAM',           v:'2× DDR5'},
            {k:'Compatible',    v:'AMD Ryzen serie 7000/8000'}
          ]
        },
        {
          codigo:'802700509322', nombre:'Biostar B550M Socket AM4 M.2/SATA AMD Ryzen', marca:'Biostar',
          descripcion:'Tarjeta madre Biostar B550M para AMD Ryzen. Socket AM4, M.2 y SATA, Gigabit LAN.',
          img:'',
          specs:[
            {k:'Socket',        v:'AM4'},
            {k:'Chipset',       v:'AMD B550'},
            {k:'RAM',           v:'2× DDR4'},
            {k:'Almacenamiento',v:'M.2 NVMe + SATA ×4'},
            {k:'LAN',           v:'Gigabit RTL8111H'}
          ]
        },
        {
          codigo:'003366', nombre:'MSI A520M-A Pro AM4 M.2/SATA4 USB3.2', marca:'MSI',
          descripcion:'Tarjeta madre MSI A520M-A Pro AM4. M.2, SATA ×4, USB 3.2, HDMI, DVI-D, Gigabit LAN.',
          img:'',
          specs:[
            {k:'Socket',        v:'AM4'},
            {k:'Chipset',       v:'AMD A520'},
            {k:'RAM',           v:'2× DDR4'},
            {k:'Almacenamiento',v:'M.2 + 4× SATA 6'},
            {k:'USB',           v:'USB 3.2 Gen 1'}
          ]
        },
        {
          codigo:'002644', nombre:'Biostar H610MH Socket 1700 12th-14th DDR4', marca:'Biostar',
          descripcion:'Tarjeta madre Biostar H610MH LGA1700. Compatible Intel 12va-14va gen. DDR4, USB 3.2, HDMI.',
          img:'',
          specs:[
            {k:'Socket',        v:'LGA1700 (12va-14va gen Intel)'},
            {k:'Chipset',       v:'Intel H610'},
            {k:'RAM',           v:'2× DDR4 hasta 3200 MHz'},
            {k:'USB',           v:'USB 3.2'},
            {k:'Video',         v:'HDMI · VGA'}
          ]
        },
        {
          codigo:'4714710483933', nombre:'Asrock H470M 10th Gen DDR4 2×DDR4 HDMI', marca:'Asrock',
          descripcion:'Tarjeta madre Asrock H470M LGA1200 para Intel 10ma gen. 2× DDR4, HDMI, D-SUB.',
          img:'',
          specs:[
            {k:'Socket',        v:'LGA1200 (10ma gen Intel)'},
            {k:'RAM',           v:'2× DDR4'},
            {k:'Video',         v:'1× HDMI · D-SUB'}
          ]
        },
        {
          codigo:'SPIH110', nombre:'Spidertec H110 Socket 1151 6/7/8/9th VGA/HDMI', marca:'Spidertec',
          descripcion:'Tarjeta madre Spidertec H110 LGA1151. Compatible 6ta-9na gen Intel. VGA y HDMI.',
          img:'',
          specs:[
            {k:'Socket',        v:'LGA1151 (6ta-9na gen Intel)'},
            {k:'Chipset',       v:'Intel H110'},
            {k:'RAM',           v:'2× DDR4'},
            {k:'Video',         v:'VGA · HDMI'}
          ]
        },
        {
          codigo:'SPIH81', nombre:'Spidertec H81M Socket 1150 4th Gen', marca:'Spidertec',
          descripcion:'Tarjeta madre Spidertec H81M LGA1150 para Intel 4ta generación (Haswell).',
          img:'',
          specs:[
            {k:'Socket',        v:'LGA1150 (4ta gen Intel)'},
            {k:'Chipset',       v:'Intel H81'},
            {k:'RAM',           v:'2× DDR3'}
          ]
        }
      ]
    },

    /* ─── MEMORIA RAM ─── */
    {
      id: 'ram',
      nombre: 'Memoria RAM',
      productos: [
        { codigo:'HS-DIMMU100(STD)/HS', nombre:'Hiksemi Future RGB 16GB DDR4-3200 UDIMM', marca:'Hiksemi', descripcion:'Memoria RAM DDR4 16GB 3200MHz con iluminación RGB. Para PC de escritorio.', img:'', specs:[{k:'Tipo',v:'DDR4 UDIMM'},{k:'Capacidad',v:'16 GB'},{k:'Velocidad',v:'3200 MHz'},{k:'RGB',v:'Iluminación RGB'}] },
        { codigo:'002811', nombre:'Addlink 32GB DDR4 3200MHz CL16 AD32', marca:'Addlink', descripcion:'Memoria RAM DDR4 32GB de alta capacidad a 3200MHz CL16 para PC gaming y workstation.', img:'', specs:[{k:'Tipo',v:'DDR4'},{k:'Capacidad',v:'32 GB'},{k:'Velocidad',v:'3200 MHz CL16'}] },
        { codigo:'002585', nombre:'Dato DDR5 32GB PC5600 DT32G5DLDND56', marca:'Dato', descripcion:'Memoria RAM DDR5 32GB a 5600MHz para plataformas AM5 e Intel 12va-14va gen.', img:'', specs:[{k:'Tipo',v:'DDR5'},{k:'Capacidad',v:'32 GB'},{k:'Velocidad',v:'PC5600 (5600 MHz)'}] },
        { codigo:'VTP16G4IU266', nombre:'Value Tech Pro 16GB DDR4 3200MHz PC', marca:'Value Tech Pro', descripcion:'Memoria RAM DDR4 16GB 3200MHz para PC de escritorio.', img:'', specs:[{k:'Tipo',v:'DDR4'},{k:'Capacidad',v:'16 GB'},{k:'Velocidad',v:'3200 MHz'}] },
        { codigo:'6939554904844', nombre:'Dahua DDR5 8GB PC5 4800MHz', marca:'Dahua', descripcion:'Memoria RAM DDR5 8GB 4800MHz para plataformas modernas AM5/LGA1700.', img:'', specs:[{k:'Tipo',v:'DDR5'},{k:'Capacidad',v:'8 GB'},{k:'Velocidad',v:'4800 MHz'}] },
        { codigo:'002155', nombre:'Dato DDR4 32GB 3200MHz Para PC', marca:'Dato', descripcion:'Memoria RAM DDR4 32GB 3200MHz para PC de escritorio.', img:'', specs:[{k:'Tipo',v:'DDR4'},{k:'Capacidad',v:'32 GB'},{k:'Velocidad',v:'3200 MHz'}] },
        { codigo:'000464', nombre:'Munskin 8GB DDR4 3200MHz PC', marca:'Munskin', descripcion:'Memoria RAM DDR4 8GB 3200MHz para PC. Marca Munskin.', img:'', specs:[{k:'Tipo',v:'DDR4'},{k:'Capacidad',v:'8 GB'},{k:'Velocidad',v:'3200 MHz'}] },
        { codigo:'SPTM37U16G0', nombre:'Value Tech Pro 8GB DDR3 1600MHz PC', marca:'Value Tech Pro', descripcion:'Memoria RAM DDR3 8GB 1600MHz para equipos de generación anterior.', img:'', specs:[{k:'Tipo',v:'DDR3'},{k:'Capacidad',v:'8 GB'},{k:'Velocidad',v:'1600 MHz'}] },
        { codigo:'MEM4GB1600', nombre:'Memoria RAM DDR3 4GB Marcas Varias 1600MHz', marca:'Genérico', descripcion:'Módulo RAM DDR3 4GB 1600MHz. Marcas varias certificadas.', img:'', specs:[{k:'Tipo',v:'DDR3'},{k:'Capacidad',v:'4 GB'},{k:'Velocidad',v:'1600 MHz'}] },
        { codigo:'6923172508072', nombre:'Dahua DDR3 8GB 1600MHz PC', marca:'Dahua', descripcion:'Memoria RAM DDR3 8GB 1600MHz para PC.', img:'', specs:[{k:'Tipo',v:'DDR3'},{k:'Capacidad',v:'8 GB'},{k:'Velocidad',v:'1600 MHz'}] }
      ]
    },

    /* ─── ALMACENAMIENTO ─── */
    {
      id: 'almacenamiento',
      nombre: 'SSDs & Almacenamiento',
      productos: [
        { codigo:'003174', nombre:'Addlink 1TB S85 M.2 2280 PCIe 3×4 6000MB/s', marca:'Addlink', descripcion:'SSD M.2 NVMe de alta velocidad 1TB. PCIe Gen 3×4. Velocidad lectura hasta 6000MB/s.', img:'', specs:[{k:'Interfaz',v:'M.2 2280 PCIe Gen 3×4'},{k:'Capacidad',v:'1 TB'},{k:'Lectura',v:'hasta 6000 MB/s'},{k:'Escritura',v:'hasta 5400 MB/s'}] },
        { codigo:'001823', nombre:'Addlink 1TB S770 M.2 2280 3×4 3200MB/s', marca:'Addlink', descripcion:'SSD M.2 NVMe 1TB PCIe Gen 3×4 con hasta 3200MB/s de lectura.', img:'', specs:[{k:'Interfaz',v:'M.2 2280 PCIe Gen 3×4'},{k:'Capacidad',v:'1 TB'},{k:'Lectura',v:'hasta 3200 MB/s'}] },
        { codigo:'001822', nombre:'Addlink 512GB M.2 NVMe', marca:'Addlink', descripcion:'SSD M.2 NVMe de 512GB. Alta velocidad para sistemas operativos y juegos.', img:'', specs:[{k:'Interfaz',v:'M.2 PCIe NVMe'},{k:'Capacidad',v:'512 GB'}] },
        { codigo:'4712927861539', nombre:'Addlink 256GB SSD 2.5"', marca:'Addlink', descripcion:'SSD SATA 2.5" de 256GB. Solución confiable para upgrades de laptop y PC.', img:'', specs:[{k:'Interfaz',v:'SATA 2.5"'},{k:'Capacidad',v:'256 GB'}] },
        { codigo:'001327', nombre:'Addlink 2TB SSD 2.5" SATA III S20', marca:'Addlink', descripcion:'SSD SATA 2.5" de 2TB alta capacidad. Modelo S20.', img:'', specs:[{k:'Interfaz',v:'SATA III 2.5"'},{k:'Capacidad',v:'2 TB'},{k:'Modelo',v:'S20'}] },
        { codigo:'814914026519', nombre:'Patriot 256GB M.2 SSD PCIe Gen 3×4', marca:'Patriot', descripcion:'SSD M.2 256GB PCIe Gen 3×4. Alta velocidad a precio accesible.', img:'', specs:[{k:'Interfaz',v:'M.2 PCIe Gen 3×4'},{k:'Capacidad',v:'256 GB'}] },
        { codigo:'824142297742', nombre:'MSI Spatium S270 960GB SSD 2.5"', marca:'MSI', descripcion:'SSD SATA 2.5" 960GB MSI Spatium S270. Para builds de media y high gaming.', img:'', specs:[{k:'Interfaz',v:'SATA 2.5"'},{k:'Capacidad',v:'960 GB'},{k:'Serie',v:'Spatium S270'}] },
        { codigo:'DISC-784612', nombre:'Golden Memory 2TB SSD 2.5"', marca:'Golden Memory', descripcion:'Disco duro SSD 2.5" de 2TB alta capacidad para gaming y multimedia.', img:'', specs:[{k:'Interfaz',v:'SATA 2.5"'},{k:'Capacidad',v:'2 TB'}] }
      ]
    },

    /* ─── CASES & GABINETES ─── */
    {
      id: 'cases',
      nombre: 'Gabinetes & Cases',
      productos: [
        {
          codigo:'002301', nombre:'Deepcool Matrexx 50 ADD-RGB 4 Fans ATX', marca:'Deepcool',
          descripcion:'Case ATX Mid Tower con panel acrilico, ADD-RGB y 4 fans incluidos. Excelente flujo de aire.',
          img:'https://cdn.deepcool.com/public/ProductFile/DEEPCOOL/Cases/Matrexx_50_ADD_RGB_4F/Gallery/608X760/01.jpg',
          specs:[{k:'Tipo',v:'ATX Mid Tower'},{k:'Panel',v:'Acrilico lateral'},{k:'Fans',v:'4× 120mm ADD-RGB incluidos'},{k:'Soporte',v:'ATX · mATX · ITX'},{k:'Radiad.',v:'Hasta 360mm front'}]
        },
        {
          codigo:'PALADIN', nombre:'GameMax Paladin Mid Tower White', marca:'GameMax',
          descripcion:'Case gaming Mid Tower blanco con panel de vidrio templado y soporte para fans y liquid cooling.',
          img:'',
          specs:[{k:'Tipo',v:'Mid Tower'},{k:'Color',v:'Blanco'},{k:'Panel',v:'Vidrio templado lateral'},{k:'Soporte',v:'ATX · mATX'}]
        },
        {
          codigo:'AERO', nombre:'GameMax Aero Mid Tower Gaming Black', marca:'GameMax',
          descripcion:'Case gaming negro Mid Tower con diseño aerodinámico y buena ventilación.',
          img:'',
          specs:[{k:'Tipo',v:'Mid Tower'},{k:'Color',v:'Negro'},{k:'Soporte',v:'ATX · mATX'}]
        },
        {
          codigo:'ZORROCOCBK', nombre:'GameMax Mid Tower Zorro COC BK', marca:'GameMax',
          descripcion:'Case gaming Mid Tower negro. Modelo Zorro COC BK.',
          img:'',
          specs:[{k:'Tipo',v:'Mid Tower'},{k:'Color',v:'Negro'}]
        },
        {
          codigo:'DIAMOND', nombre:'GameMax Mid Diamond CP White', marca:'GameMax',
          descripcion:'Case gaming Mid Tower blanco modelo Diamond CP.',
          img:'',
          specs:[{k:'Tipo',v:'Mid Tower'},{k:'Color',v:'Blanco'}]
        },
        {
          codigo:'003095', nombre:'Checkpoint G-Force-550 RGB 3+1 Fan ATX', marca:'Checkpoint',
          descripcion:'Case ATX con 3 fans frontales 120mm + 1 posterior RGB. Modelo CP-CA-1012.',
          img:'',
          specs:[{k:'Tipo',v:'Mid Tower ATX'},{k:'Fans incluidos',v:'3× frontales + 1× posterior 120mm'},{k:'RGB',v:'Sí'},{k:'Modelo',v:'G-FORCE-550 · CP-CA-1012'}]
        },
        {
          codigo:'ACCM-', nombre:'Aerocool Cyclon Pro ATX RGB Negro', marca:'Aerocool',
          descripcion:'Case ATX con ventana lateral y RGB. Negro.', img:'',
          specs:[{k:'Tipo',v:'ATX Mid Tower'},{k:'RGB',v:'Sí'},{k:'Color',v:'Negro'}]
        },
        {
          codigo:'ACCM-PB104', nombre:'Aerocool Cyclon Pro ATX RGB Blanco', marca:'Aerocool',
          descripcion:'Case ATX con ventana lateral y RGB. Blanco.', img:'',
          specs:[{k:'Tipo',v:'ATX Mid Tower'},{k:'RGB',v:'Sí'},{k:'Color',v:'Blanco'}]
        },
        {
          codigo:'001966', nombre:'MSI MAG Forge M100A Mid Tower', marca:'MSI',
          descripcion:'Case gaming MSI MAG Forge M100A Mid Tower con vidrio templado.',
          img:'',
          specs:[{k:'Tipo',v:'Mid Tower'},{k:'Panel',v:'Vidrio templado'},{k:'Modelo',v:'306-7G20A21-809'}]
        },
        {
          codigo:'002849', nombre:'Leadertech Gaming Kairos L-200-19 Negro', marca:'Leadertech',
          descripcion:'Case gaming Leadertech Kairos L-200-19. Color negro.', img:'',
          specs:[{k:'Tipo',v:'Mid Tower'},{k:'Color',v:'Negro'}]
        },
        {
          codigo:'002614', nombre:'Leadertech Gaming Hazael L200-21 Negro', marca:'Leadertech',
          descripcion:'Case gaming Leadertech Hazael L200-21. Color negro.', img:'',
          specs:[{k:'Tipo',v:'Mid Tower'},{k:'Color',v:'Negro'}]
        },
        {
          codigo:'003412', nombre:'Leadertech Gaming Warmachine Pro +Fuente 850W 80Plus', marca:'Leadertech',
          descripcion:'Case gaming con fuente de poder 80Plus Bronze 850W integrada. Ideal para builds potentes.',
          img:'',
          specs:[{k:'Tipo',v:'Mid Tower'},{k:'Fuente incluida',v:'850W 80Plus Bronze'},{k:'Color',v:'Negro'}]
        },
        {
          codigo:'000432', nombre:'Eagle Warrior CG15 Mid Tower RGB Gaming Sin FanCooler', marca:'Eagle Warrior',
          descripcion:'Case gaming RGB Mid Tower Eagle Warrior. Sin fan cooler de CPU incluido.',
          img:'',
          specs:[{k:'Tipo',v:'Mid Tower'},{k:'RGB',v:'Sí'},{k:'Nota',v:'Sin fan cooler CPU'}]
        },
        {
          codigo:'ARG-ACHYPERLOPMI', nombre:'Mlogix Gaming ATX Black Hyperlop', marca:'Mlogix',
          descripcion:'Case gaming ATX negro modelo Hyperlop de Mlogix.', img:'',
          specs:[{k:'Tipo',v:'ATX Mid Tower'},{k:'Color',v:'Negro'}]
        },
        {
          codigo:'TESERRAT', nombre:'Mlogix Gaming ATX Black Tesseract', marca:'Mlogix',
          descripcion:'Case gaming ATX negro modelo Tesseract de Mlogix.', img:'',
          specs:[{k:'Tipo',v:'ATX Mid Tower'},{k:'Color',v:'Negro'}]
        },
        {
          codigo:'003222', nombre:'Marvo Tazos 130 Gaming CA-123 Touch Wisdom', marca:'Marvo',
          descripcion:'Case gaming Marvo Tazos 130 con controles táctiles Wisdom. CA-123.',
          img:'',
          specs:[{k:'Serie',v:'Tazos 130 Gaming'},{k:'Control',v:'Táctil Wisdom'},{k:'Modelo',v:'CA-123'}]
        }
      ]
    },

    /* ─── ENFRIAMIENTO ─── */
    {
      id: 'enfriamiento',
      nombre: 'Enfriamiento & Cooling',
      productos: [
        {
          codigo:'837', nombre:'Deepcool R-LE520 Refrigeración Líquida AIO', marca:'Deepcool',
          descripcion:'Kit de refrigeración líquida AIO (All-in-One) Deepcool R-LE520. Compatible Intel/AMD.',
          img:'',
          specs:[{k:'Tipo',v:'Refrigeración líquida AIO'},{k:'Radiador',v:'240mm o 280mm'},{k:'Compatible',v:'Intel LGA 115X/1200/1700 · AMD AM4/AM5'},{k:'Marca',v:'Deepcool WHAMMN.'}]
        },
        {
          codigo:'6931858734523', nombre:'GameMax RGB Gamma90 Digital BK Intel/AMD', marca:'GameMax',
          descripcion:'Fan cooler para CPU GameMax RGB Gamma90 Digital. Compatible Intel y AMD.',
          img:'',
          specs:[{k:'Tipo',v:'Fan cooler CPU torre'},{k:'RGB',v:'Sí · digital'},{k:'Compatible',v:'Intel · AMD AM4/AM5'},{k:'Color',v:'Negro'}]
        },
        {
          codigo:'002345', nombre:'Deepcool DP-F12-AR-FC120P RGB 3 en 1', marca:'Deepcool',
          descripcion:'Pack 3 en 1 de fans 120mm RGB Deepcool con controlador. Para cases ATX.',
          img:'',
          specs:[{k:'Cantidad',v:'3× fans 120mm'},{k:'RGB',v:'Sí · con controlador'},{k:'Compatibilidad',v:'Cases ATX · mATX'}]
        },
        {
          codigo:'002624', nombre:'Leadertech Fan 12cm RGB con PWM', marca:'Leadertech',
          descripcion:'Fan 120mm RGB con control PWM para cases gaming.', img:'',
          specs:[{k:'Tamaño',v:'120 mm'},{k:'RGB',v:'Sí'},{k:'Control',v:'PWM'}]
        },
        {
          codigo:'002625', nombre:'Leadertech Combo 3 en 1 12cm RGB Control Remoto', marca:'Leadertech',
          descripcion:'Pack 3 fans 120mm RGB con control remoto. Para cases gaming.', img:'',
          specs:[{k:'Cantidad',v:'3× fans 120mm'},{k:'RGB',v:'Sí'},{k:'Control',v:'Mando remoto'}]
        },
        {
          codigo:'6931858791113', nombre:'GameMax RGB12CM FN12RAINBOW-C9', marca:'GameMax',
          descripcion:'Fan 120mm RGB GameMax serie Rainbow para cases. Modelo FN12RAINBOW-C9.', img:'',
          specs:[{k:'Tamaño',v:'120 mm'},{k:'RGB',v:'Rainbow · FN12RAINBOW-C9'}]
        },
        {
          codigo:'003165', nombre:'Fan Cooler CPU CPS R400B 4 Tubos Calor LGA/AMD', marca:'CPS',
          descripcion:'Fan cooler de CPU con 4 tubos de calor (heat pipes). Compatible Intel LGA 115X/1200/1700/1851 y AMD AM4/AM5.',
          img:'',
          specs:[{k:'Tubos de calor',v:'4× heat pipes'},{k:'Compatible',v:'Intel LGA 115X/1200/1700/1851 · AMD AM4/AM5'},{k:'Alta eficiencia',v:'Sí'}]
        },
        {
          codigo:'HY510', nombre:'Pasta Térmica Disipadora de Calor Mini', marca:'Genérico',
          descripcion:'Pasta térmica disipadora de calor para CPU/GPU. Formato mini.', img:'',
          specs:[{k:'Uso',v:'CPU · GPU'},{k:'Formato',v:'Mini jeringa'}]
        },
        {
          codigo:'000451', nombre:'Pasta Térmica Aerocool 5.15W/mK CPU/GPU', marca:'Aerocool',
          descripcion:'Pasta térmica Aerocool alta conductividad 5.15W/mK para CPU y GPU gaming.', img:'',
          specs:[{k:'Conductividad',v:'5.15 W/mK'},{k:'Uso',v:'CPU · GPU'},{k:'Cantidad',v:'1g'}]
        },
        {
          codigo:'6931858786157', nombre:'Pasta Térmica GameMax TG3 3g Alto Rendimiento', marca:'GameMax',
          descripcion:'Pasta térmica GameMax TG3 de alta conductividad. 3 gramos.', img:'',
          specs:[{k:'Cantidad',v:'3 gramos'},{k:'Rendimiento',v:'Alto rendimiento gaming'}]
        }
      ]
    },

    /* ─── FUENTES DE PODER ─── */
    {
      id: 'fuentes',
      nombre: 'Fuentes de Poder',
      productos: [
        { codigo:'003711',         nombre:'Checkpoint Gold 850W XPOINT PS-1002 Modular', marca:'Checkpoint', descripcion:'Fuente de poder 850W certificada Gold. Modular. Máxima eficiencia para builds de gama alta.', img:'', specs:[{k:'Potencia',v:'850W'},{k:'Certificación',v:'80+ Gold'},{k:'Modular',v:'Sí'}] },
        { codigo:'4712833955728',  nombre:'Fuente Certificada 650W Azza RGB',           marca:'Azza',       descripcion:'Fuente de poder 650W certificada 80+ con iluminación RGB.', img:'', specs:[{k:'Potencia',v:'650W'},{k:'Certificación',v:'80+ Certificada'},{k:'RGB',v:'Sí'}] },
        { codigo:'GIGA-45874',     nombre:'Fuente Certificada Gigaherz 650W',           marca:'Gigaherz',   descripcion:'Fuente de poder certificada Gigaherz de 650W.', img:'', specs:[{k:'Potencia',v:'650W'},{k:'Certificación',v:'80+ Certificada'}] },
        { codigo:'FUET-1245879',   nombre:'Fuente 600W Spidertec SATA ATX2',            marca:'Spidertec',  descripcion:'Fuente de poder 600W con conectores SATA ATX2.', img:'', specs:[{k:'Potencia',v:'600W'},{k:'Conectores',v:'SATA · ATX 24-pin · EPS'}] },
        { codigo:'JPO608',         nombre:'Fuente 600W Jemip Office 24PIN/2×SATA',      marca:'Jemip',      descripcion:'Fuente de poder 600W con 2 conectores SATA. Color negro.', img:'', specs:[{k:'Potencia',v:'600W'},{k:'Conectores',v:'24-pin · 2× SATA'}] },
        { codigo:'1957359952056',  nombre:'Fuente ATX 600W IMEXX IME-90600',           marca:'IMEXX',      descripcion:'Fuente de poder ATX 600W IMEXX. Modelo IME-90600.', img:'', specs:[{k:'Potencia',v:'600W'},{k:'Tipo',v:'ATX'}] },
        { codigo:'29346',          nombre:'Fuente 550W Explore DLP-21MS',               marca:'Explore',    descripcion:'Fuente de poder 550W Explore DLP-21MS.', img:'', specs:[{k:'Potencia',v:'550W'}] },
        { codigo:'002596',         nombre:'Fuente Leadertech ARX600W 120mm',            marca:'Leadertech', descripcion:'Fuente de poder 600W Leadertech con ventilador 120mm.', img:'', specs:[{k:'Potencia',v:'600W'},{k:'Fan',v:'120mm'}] }
      ]
    },

    /* ─── PERIFÉRICOS GAMING ─── */
    {
      id: 'perifericos-gaming',
      nombre: 'Periféricos Gaming (Teclados, Mouse, Headsets)',
      productos: [
        /* Headsets gaming */
        { codigo:'002403', nombre:'HG8921 Tactic 30 Wired', marca:'Marvo',  descripcion:'Headset gaming con micrófono omnidireccional, on-ear, USB+3.5mm.', img:'https://www.marvo-tech.com/cdn/shop/files/H8921-1.png?v=1712730689' },
        { codigo:'002401', nombre:'H8325 Akari 40 Wired RGB', marca:'Marvo', descripcion:'Headset gaming negro con iluminación RGB estática, USB+3.5mm, controlador de volumen/mute.', img:'https://www.marvo-tech.com/cdn/shop/files/HG8325-1-1.png?v=1700014242' },
        { codigo:'002412', nombre:'HG9067 Pulz 70 7.1 Virtual', marca:'Marvo', descripcion:'Headset gaming con 7.1 Virtual Surround Sound. USB con driver de audio virtual.', img:'https://www.marvo-tech.com/cdn/shop/files/HG9067.png?v=1712647341' },
        { codigo:'002955', nombre:'GXT 489W Fayzo Multiplataforma', marca:'Trust', descripcion:'Headset gaming multiplataforma: Android, iOS, Mac, PS4, PS5, Xbox Series S. Ref. 25210.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25210_pictures_product_visual_1.png' },
        { codigo:'002910', nombre:'GXT 415X Zirox Para Xbox', marca:'Trust', descripcion:'Headset gaming para consola Xbox. Driver 40mm, micrófono desmontable. Ref. 24994.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/24994_pictures_product_visual_1.png' },
        { codigo:'002952', nombre:'GXT 415P Zirox PC Rosado', marca:'Trust', descripcion:'Headset gaming para PC. Color rosado. Ref. 24992.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/24992_pictures_product_visual_1.png' },
        { codigo:'002909', nombre:'GXT 415S Zirox Nintendo Switch', marca:'Trust', descripcion:'Headset gaming para Nintendo Switch. Ref. 25423.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25423_pictures_product_visual_1.png' },
        { codigo:'002908', nombre:'GXT 415PS Zirox PS5', marca:'Trust', descripcion:'Headset gaming para PlayStation 5. Ref. 24993.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/24993_pictures_product_visual_1.png' },
        { codigo:'002906', nombre:'GXT 408 Cobra In-Ear Multiplataforma', marca:'Trust', descripcion:'Headset in-ear gaming multiplataforma con micrófono y estuche. Ref. 23029.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/23029_pictures_product_visual_1.png' },
        /* Gaming speakers */
        { codigo:'002925', nombre:'GXT 629 Tytan 2.1 RGB', marca:'Trust', descripcion:'Bocinas gaming 2.1 con subwoofer y RGB. 20W total. Ref. 22944.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/22944_pictures_product_visual_1.png' },
        { codigo:'002427', nombre:'SG-269 Havoc 30 RGB Bluetooth', marca:'Marvo', descripcion:'Bocinas gaming RGB 6W con Bluetooth 5.0, control táctil y LED 6 modos.', img:'' },
        /* Gaming keyboards */
        { codigo:'003139', nombre:'GXT833 Thado TKL ES Mecánico', marca:'Trust', descripcion:'Teclado mecánico TKL español con retroiluminación. Ref. 24067.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/24067_pictures_product_visual_1.png' },
        { codigo:'002912', nombre:'GXT 834 Callaz TKL RGB Mecánico', marca:'Trust', descripcion:'Teclado mecánico TKL con RGB personalizable. Ref. 24407.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/24407_pictures_product_visual_1.png' },
        { codigo:'002913', nombre:'GXT 866 Torix Premium Mecánico', marca:'Trust', descripcion:'Teclado mecánico premium gaming. Ref. 24910.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/24910_pictures_product_visual_1.png' },
        { codigo:'002538', nombre:'Marvo K660SP Membrana Gaming', marca:'Marvo', descripcion:'Teclado gaming de membrana retroiluminado.', img:'' },
        { codigo:'002539', nombre:'Marvo KG962G Mecánico 60% Blanco USB-C', marca:'Marvo', descripcion:'Teclado mecánico 60% Hecate 61R blanco, conexión USB Tipo C.', img:'' },
        { codigo:'SCORPIONK8', nombre:'Genius Scorpion K8 Gaming', marca:'Genius', descripcion:'Teclado gaming Genius Scorpion K8 con retroiluminación.', img:'' },
        { codigo:'001005', nombre:'Checkpoint KX-100 Gaming', marca:'Checkpoint', descripcion:'Teclado gaming retroiluminado KX-100.', img:'' },
        { codigo:'KBAZ087', nombre:'Azza KBAZ-087 Gaming', marca:'Azza', descripcion:'Teclado USB gaming marca Azza. Modelo KBAZ-087.', img:'' },
        /* Gaming mice */
        { codigo:'002916', nombre:'GXT 924 Ybar+ 25000DPI RGB Negro', marca:'Trust', descripcion:'Mouse gaming 25000DPI RGB. Ref. 24890.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/24890_pictures_product_visual_1.png' },
        { codigo:'002960', nombre:'GXT 109W Felox RGB Blanco 6400DPI', marca:'Trust', descripcion:'Mouse gaming 6400DPI RGB blanco. Ref. 25066.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25066_pictures_product_visual_1.png' },
        { codigo:'002387', nombre:'GXT 109P Felox RGB Rosado 6400DPI', marca:'Trust', descripcion:'Mouse gaming 6400DPI RGB rosado. Ref. 25068.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25068_pictures_product_visual_1.png' },
        { codigo:'6972661232810', nombre:'GXT 133 Locx Iluminado LED', marca:'Trust', descripcion:'Mouse texturizado gaming con LED azul. Ref. 22988.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/22988_pictures_product_visual_1.png' },
        { codigo:'002390', nombre:'Marvo M360 RGB Wired 12000DPI', marca:'Marvo', descripcion:'Mouse gaming wired 12000DPI RGB negro, software programable.', img:'' },
        { codigo:'002383', nombre:'Marvo M413 Mistic 40 RGB Transparente', marca:'Marvo', descripcion:'Mouse gaming transparente RGB 6 botones, 1200-7200DPI.', img:'' },
        { codigo:'002460', nombre:'Monka G966W Vero Inalámbrico RGB 10000DPI', marca:'Monka', descripcion:'Mouse gaming inalámbrico 2.4G+BT, RGB 10000DPI.', img:'' },
        { codigo:'002461', nombre:'Monka Guru Inalámbrico RGB 26000DPI', marca:'Monka', descripcion:'Mouse gaming inalámbrico 2.4G+BT, RGB 26000DPI.', img:'' },
        { codigo:'SCORPIONSPEAR', nombre:'Genius Scorpion Spear RGB', marca:'Genius', descripcion:'Mouse gaming RGB Genius Scorpion Spear.', img:'' },
        /* Gaming combos */
        { codigo:'003695', nombre:'Combo Forge GK3200 RGB 12800DPI', marca:'Genérico', descripcion:'Combo teclado+mouse gaming GK3200 · 12800DPI · RGB.', img:'' },
        { codigo:'003694', nombre:'Combo Forge GK100 6400DPI USB', marca:'Genérico', descripcion:'Combo teclado+mouse gaming GK100 6400DPI USB.', img:'' },
        { codigo:'002547', nombre:'Combo Marvo WS009 Inalámbrico Blanco 2.4G', marca:'Marvo', descripcion:'Combo gaming inalámbrico 2.4G teclado+mouse · color blanco.', img:'' },
        { codigo:'002425', nombre:'Marvo CM416 Combo 4en1 RGB USB 7.1', marca:'Marvo', descripcion:'Combo gaming 4 en 1: teclado, mouse, headset y pad RGB.', img:'' },
        /* Gaming mouse pads */
        { codigo:'002441', nombre:'Marvo G51 Noob XL 900×400mm Impermeable', marca:'Marvo', descripcion:'Mouse pad gaming XL impermeable 900×400×3mm.', img:'' },
        { codigo:'002440', nombre:'Marvo G48 Blaze XL 900×400mm', marca:'Marvo', descripcion:'Mouse pad gaming XL impermeable 900×400×3mm.', img:'' },
        { codigo:'002920', nombre:'Trust GXT 764 Glide XXL RGB', marca:'Trust', descripcion:'Mouse pad XXL con iluminación RGB integrada. Ref. 23395.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/23395_pictures_product_visual_1.png' },
        { codigo:'P032', nombre:'Redragon Flick XL Gaming Negro', marca:'Redragon', descripcion:'Mouse pad gaming XXL negro Redragon Flick.', img:'' },
        { codigo:'P003', nombre:'Redragon Suzaku Gaming Negro', marca:'Redragon', descripcion:'Mouse pad gaming negro Redragon Suzaku.', img:'' },
        { codigo:'003078', nombre:'Checkpoint 6Siege Rainbow MX-200 10000DPI', marca:'Checkpoint', descripcion:'Mouse pad gaming R6-MS-1000 · 10000DPI · 795×345×3mm.', img:'' },
        { codigo:'003082', nombre:'Checkpoint 6Siege R6 MP-300 795×345mm', marca:'Checkpoint', descripcion:'Mouse pad gaming Checkpoint 6Siege · 795×345×3mm sintético.', img:'' }
      ]
    },

    /* ─── SILLAS & MESAS GAMING ─── */
    {
      id: 'sillas-gaming',
      nombre: 'Sillas & Mesas Gaming',
      productos: [
        { codigo:'002900', nombre:'Silla Trust GXT 719 Ruya RGB Confortable 25185', marca:'Trust',  descripcion:'Silla gaming con iluminación RGB en la base, cuero sintético y reposabrazos ajustable. Ref. 25185.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25185_pictures_product_visual_1.png' },
        { codigo:'002894', nombre:'Silla Trust GXT 703R Riye Roja 140kg', marca:'Trust',  descripcion:'Silla gaming roja de alta calidad. Capacidad 140kg. Diseño ergonómico.', img:'' },
        { codigo:'002968', nombre:'Silla Marvo CH-35 Negro/Rojo RGB Ajustable', marca:'Marvo',  descripcion:'Silla gaming con iluminación RGB, altura ajustable y soporte lumbar. Negro/rojo.', img:'' },
        { codigo:'003137', nombre:'Mesa Gaming Trust GXT709 Luminus 120×60 RGB Negro', marca:'Trust', descripcion:'Mesa gaming 120×60cm con iluminación RGB integrada. Color negro. Ref. 25184.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25184_pictures_product_visual_1.png' },
        { codigo:'003138', nombre:'Mesa Gaming Trust GXT709 Luminus 120×60 RGB Blanco', marca:'Trust', descripcion:'Mesa gaming 120×60cm con iluminación RGB integrada. Color blanco. Ref. 25328.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25328_pictures_product_visual_1.png' },
        { codigo:'5000000076', nombre:'Mesa Gaming RGB para Computadora', marca:'Genérico', descripcion:'Mesa gaming con iluminación RGB integrada. Color negro.', img:'' }
      ]
    },

    /* ─── CONTROLLERS & ACCESORIOS GAMING ─── */
    {
      id: 'controllers',
      nombre: 'Controllers, Gamesticks & Accesorios',
      productos: [
        { codigo:'002386', nombre:'Control GT-88 Ghost 40 Inalámbrico Android/iOS/PC/PS/Switch', marca:'Genérico', descripcion:'Control gaming inalámbrico compatible con Android, iOS, PC, PS3, PS4 y Nintendo Switch.', img:'' },
        { codigo:'GT-90',  nombre:'Control Marvo Pact 70 GamePad',          marca:'Marvo',    descripcion:'Gamepad Marvo Pact 70 para gaming en PC y consola.', img:'' },
        { codigo:'002432', nombre:'Volante y Pedalera Marvo GT-903 Multiplataforma', marca:'Marvo', descripcion:'Volante y pedalera GT-903 Onaga 30 para PC, PS3, PS4 y Xbox.', img:'' },
        { codigo:'0908-PRO', nombre:'Redragon Harrow Pro Mando Gaming',      marca:'Redragon', descripcion:'Mando gaming Redragon Harrow Pro para PC y consolas.', img:'' },
        { codigo:'S808',   nombre:'Redragon Harrow Inalámbrico',             marca:'Redragon', descripcion:'Mando gaming inalámbrico Redragon Harrow.', img:'' },
        { codigo:'GD20',   nombre:'GameStick GD20 Portátil',                 marca:'Genérico', descripcion:'Consola de videojuegos portátil GameStick GD20 con juegos preinstalados.', img:'' },
        { codigo:'M15',    nombre:'GameStick Wireless M15',                  marca:'Genérico', descripcion:'Consola de videojuegos inalámbrica M15 con mandos incluidos.', img:'' },
        { codigo:'6932391921951', nombre:'Base Enfriadora Marvo FN-40 Laptop Ajustable', marca:'Marvo', descripcion:'Base enfriadora FN-40 para laptop gamer. Ajustable, 2 fans USB.', img:'' },
        { codigo:'002413', nombre:'Base para Audífonos HZ-10 Kobe 30 RGB',  marca:'Genérico', descripcion:'Base/soporte para audífonos gaming con iluminación RGB. HZ-10 Kobe 30.', img:'' },
        { codigo:'002415', nombre:'Micrófono Marvo MIC-06 WH Blast 40 RGB', marca:'Marvo',    descripcion:'Micrófono de escritorio gaming RGB Marvo MIC-06. Color blanco. Ideal para streaming.', img:'' }
      ]
    }
  ]
};
