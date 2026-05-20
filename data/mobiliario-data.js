/* Mobiliario de Oficina — Datos extraídos del Listado de Productos */
window.CATALOG_DATA = {
  id: 'mobiliario',
  nombre: 'Mobiliario de Oficina',
  eyebrow: 'Catálogo Oficial 2025',
  descripcion: 'Sillas ejecutivas, gaming y secretariales. Escritorios y mesas para oficina y gaming.',
  gradientFrom: '#451A03',
  gradientMid:  '#92400E',
  gradientTo:   '#F59E0B',
  accentColor:  '#B45309',
  accentLight:  '#FEF3C7',
  stats: [
    { n: '3',   l: 'Categorías' },
    { n: '15+', l: 'Productos'  }
  ],
  sections: [
    {
      id: 'sillas-ejecutivas',
      nombre: 'Sillas Ejecutivas & Secretariales',
      productos: [
        { codigo:'S03',          nombre:'Silla Ejecutiva Azul',               marca:'Conastron', descripcion:'Silla ejecutiva color azul', img:'' },
        { codigo:'S01',          nombre:'Silla Secretarial Negra',             marca:'Conastron', descripcion:'Silla secretarial color negro', img:'' },
        { codigo:'S-03',         nombre:'Silla Ejecutiva Negra',              marca:'Conastron', descripcion:'Silla ejecutiva color negro', img:'' },
        { codigo:'S-01',         nombre:'Silla Secretarial Azul',             marca:'Conastron', descripcion:'Silla secretarial color azul', img:'' },
        { codigo:'SILLAPRES',    nombre:'Silla Presidencial Negra',            marca:'Genérico',  descripcion:'Silla presidencial color negro', img:'' },
        { codigo:'8882688',      nombre:'Silla Ejecutiva BY017A',              marca:'Venespeed', descripcion:'Silla ejecutiva modelo BY017A · Venespeed', img:'' },
        { codigo:'SILLA-15475',  nombre:'Silla de Espera Black',              marca:'Genérico',  descripcion:'Silla de espera color negro', img:'' }
      ]
    },
    {
      id: 'sillas-gaming',
      nombre: 'Sillas Gaming',
      productos: [
        { codigo:'002900', nombre:'Silla Trust GXT 719 Ruya RGB 25185', marca:'Trust', descripcion:'Silla gaming confortable con iluminación RGB en la base. Cuero sintético. Ref. 25185.', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25185_pictures_product_visual_1.png' },
        { codigo:'002894',       nombre:'Silla Trust GXT 703R Riye Rojo',    marca:'Trust',  descripcion:'Silla gaming roja · capacidad 140kg · Ref. (sin ref.)', img:'' },
        { codigo:'002968',       nombre:'Silla Marvo CH-35 Negro/Rojo RGB',  marca:'Marvo',  descripcion:'Silla gaming ajustable con RGB · negro/rojo', img:'' }
      ]
    },
    {
      id: 'escritorios',
      nombre: 'Escritorios & Mesas',
      productos: [
        { codigo:'5500000426',   nombre:'Escritorio de Oficina Moderno',        marca:'Genérico', descripcion:'Escritorio moderno de oficina · colores varios', img:'' },
        { codigo:'KI-D8801',     nombre:'Escritorio Secretarial Lazzio 120×60×75', marca:'Lazzio', descripcion:'Escritorio secretarial 120×60×75cm · con gavetas', img:'' },
        { codigo:'003137', nombre:'Mesa Gaming Trust GXT709 Luminus 120×60 RGB Negro', marca:'Trust', descripcion:'Mesa gaming 120×60cm con iluminación RGB integrada. Color negro. Ref. 25184', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25184_pictures_product_visual_1.png' },
        { codigo:'003138', nombre:'Mesa Gaming Trust GXT709 Luminus White 120×60 RGB', marca:'Trust', descripcion:'Mesa gaming 120×60cm con iluminación RGB integrada. Color blanco. Ref. 25328', img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25328_pictures_product_visual_1.png' },
        { codigo:'5000000076',   nombre:'Mesa Gaming RGB para Computadora',     marca:'Genérico', descripcion:'Mesa gaming con iluminación RGB', img:'' }
      ]
    },
    {
      id: 'accesorios-escritorio',
      nombre: 'Soportes & Brazos',
      productos: [
        {
          codigo:'002871', nombre:'Brazo Trust Mara 25337 para Monitor y Notebook', marca:'Trust',
          descripcion:'Brazo articulado de escritorio para monitor y/o notebook. Altura y ángulo ajustable. Ref. 25337.',
          img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25337_pictures_product_visual_1.png',
          specs:[
            {k:'Tipo',        v:'Brazo articulado de escritorio'},
            {k:'Compatible',  v:'Monitor · Notebook'},
            {k:'Ajuste',      v:'Altura · inclinación · rotación'},
            {k:'Montaje',     v:'Abrazadera de escritorio'},
            {k:'Ref.',        v:'25337'}
          ]
        }
      ]
    }
  ]
};
