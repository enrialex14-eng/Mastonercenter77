/* Mobiliario de Oficina — Solo sillas ejecutivas/secretariales y escritorios.
   Las sillas y mesas gaming fueron movidas a gamer-data.js */
window.CATALOG_DATA = {
  id: 'mobiliario',
  nombre: 'Mobiliario de Oficina',
  eyebrow: 'Catálogo Oficial 2025',
  descripcion: 'Sillas ejecutivas, secretariales, presidenciales, escritorios de oficina y soportes para monitor.',
  gradientFrom: '#451A03',
  gradientMid:  '#92400E',
  gradientTo:   '#F59E0B',
  accentColor:  '#B45309',
  accentLight:  '#FEF3C7',
  stats: [
    { n: '3',   l: 'Categorías' },
    { n: '12+', l: 'Productos'  }
  ],
  sections: [
    {
      id: 'sillas-ejecutivas',
      nombre: 'Sillas Ejecutivas & Secretariales',
      productos: [
        { codigo:'S03',       nombre:'Silla Ejecutiva Azul',         marca:'Conastron',  descripcion:'Silla ejecutiva color azul. Material de alta resistencia.', img:'' },
        { codigo:'S01',       nombre:'Silla Secretarial Negra',      marca:'Conastron',  descripcion:'Silla secretarial color negro.', img:'' },
        { codigo:'S-03',      nombre:'Silla Ejecutiva Negra',        marca:'Conastron',  descripcion:'Silla ejecutiva color negro.', img:'' },
        { codigo:'S-01',      nombre:'Silla Secretarial Azul',       marca:'Conastron',  descripcion:'Silla secretarial color azul.', img:'' },
        { codigo:'SILLAPRES', nombre:'Silla Presidencial Negra',     marca:'Genérico',   descripcion:'Silla presidencial de alto respaldo. Color negro.', img:'' },
        { codigo:'8882688',   nombre:'Silla Ejecutiva BY017A Venespeed', marca:'Venespeed', descripcion:'Silla ejecutiva modelo BY017A. Marca Venespeed.', img:'' },
        { codigo:'SILLA-15475', nombre:'Silla de Espera Black',      marca:'Genérico',   descripcion:'Silla de espera para recepción o sala de reuniones. Color negro.', img:'' }
      ]
    },
    {
      id: 'escritorios',
      nombre: 'Escritorios & Mesas de Oficina',
      productos: [
        { codigo:'5500000426', nombre:'Escritorio de Oficina Moderno', marca:'Genérico', descripcion:'Escritorio moderno de oficina. Colores varios.', img:'' },
        { codigo:'KI-D8801',   nombre:'Escritorio Secretarial Lazzio 120×60×75cm', marca:'Lazzio', descripcion:'Escritorio secretarial 120×60×75cm con gavetas.', img:'' }
      ]
    },
    {
      id: 'soportes-monitores',
      nombre: 'Soportes & Brazos para Monitor',
      productos: [
        {
          codigo:'002871', nombre:'Brazo Trust Mara 25337 Monitor/Notebook', marca:'Trust',
          descripcion:'Brazo articulado de escritorio para monitor y/o notebook. Altura y ángulo ajustable. Ref. 25337.',
          img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25337_pictures_product_visual_1.png',
          specs:[{k:'Tipo',v:'Brazo articulado de escritorio'},{k:'Compatible',v:'Monitor · Notebook'},{k:'Ajuste',v:'Altura · inclinación · rotación'},{k:'Ref.',v:'25337'}]
        }
      ]
    }
  ]
};
