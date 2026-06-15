/* Audio & Sonido — Solo productos de audio consumer (no gaming)
   Los headsets y periféricos gaming fueron movidos a gamer-data.js */
window.CATALOG_DATA = {
  id: 'audio',
  nombre: 'Audio & Sonido',
  eyebrow: 'Catálogo Oficial 2025',
  descripcion: 'Audífonos inalámbricos, earbuds TWS y cornetas portátiles Bluetooth. Moonki, Trust y Lenovo.',
  gradientFrom: '#1E1B4B',
  gradientMid:  '#4C1D95',
  gradientTo:   '#7C3AED',
  accentColor:  '#7C3AED',
  accentLight:  '#EDE9FE',
  stats: [
    { n: '2',   l: 'Categorías' },
    { n: '20+', l: 'Productos'  }
  ],
  sections: [
    {
      id: 'audifonos',
      nombre: 'Audífonos & Earbuds',
      productos: [
        {
          codigo:'002873', nombre:'NOUNA Inalámbrico Rosado Para Niña', marca:'Trust',
          descripcion:'Audífono inalámbrico Bluetooth para niñas. Almohadillas suaves, ajustable. Ref. 25274.',
          img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25274_pictures_product_visual_1.png',
          specs:[
            {k:'Conexión',     v:'Bluetooth inalámbrico'},
            {k:'Color',        v:'Rosado'},
            {k:'Ajustable',    v:'Sí'},
            {k:'Público',      v:'Niños y niñas'},
            {k:'Ref.',         v:'25274'}
          ]
        },
        {
          codigo:'002874', nombre:'NOUNA Inalámbrico Azul Para Niño', marca:'Trust',
          descripcion:'Audífono inalámbrico Bluetooth para niños. Almohadillas suaves, ajustable. Ref. 25275.',
          img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25275_pictures_product_visual_1.png',
          specs:[
            {k:'Conexión',     v:'Bluetooth inalámbrico'},
            {k:'Color',        v:'Azul'},
            {k:'Ajustable',    v:'Sí'},
            {k:'Ref.',         v:'25275'}
          ]
        },
        {
          codigo:'002018', nombre:'MH-0710BT On-Ear Bluetooth 5.0', marca:'Moonki',
          descripcion:'Audífono inalámbrico Bluetooth 5.0 on-ear. Driver 40mm, 10h batería, USB-C recargable, plegable.',
          img:'https://www.moonki.com/cdn/shop/products/P05_6678cf6c-d920-4e62-ab85-c9603791e5e2.png?v=1684505622',
          specs:[
            {k:'Tipo',         v:'On-ear'},
            {k:'Driver',       v:'2× 40 mm'},
            {k:'Bluetooth',    v:'5.0'},
            {k:'Batería',      v:'300 mAh · ~10 horas'},
            {k:'Carga',        v:'USB Type-C'},
            {k:'Plegable',     v:'Sí'}
          ]
        },
        {
          codigo:'000532', nombre:'MH-TWS50 Naranja (True Wireless)', marca:'Moonki',
          descripcion:'Earbuds inalámbricos TWS Bluetooth 5.3. Driver 13mm, ~12h totales. Color naranja.',
          img:'https://www.moonki.com/cdn/shop/files/MH-TWS50_red_00.png?v=1738093413',
          specs:[
            {k:'Tipo',         v:'In-ear TWS'},
            {k:'Driver',       v:'13 mm'},
            {k:'Bluetooth',    v:'5.3 · alcance 10 m'},
            {k:'Batería',      v:'30 mAh c/u · 200 mAh caja'},
            {k:'Autonomía',    v:'~12 h totales (3 ciclos × 4 h)'},
            {k:'Color',        v:'Naranja'}
          ]
        },
        {
          codigo:'000530', nombre:'MH-TWS50 Verde (True Wireless)', marca:'Moonki',
          descripcion:'Earbuds inalámbricos TWS Bluetooth 5.3. Driver 13mm, ~12h totales. Color verde.',
          img:'https://www.moonki.com/cdn/shop/files/MH-TWS50_green_00.png?v=1738093414',
          specs:[
            {k:'Tipo',         v:'In-ear TWS'},
            {k:'Driver',       v:'13 mm'},
            {k:'Bluetooth',    v:'5.3 · alcance 10 m'},
            {k:'Batería',      v:'30 mAh c/u · 200 mAh caja'},
            {k:'Autonomía',    v:'~12 h totales (3 ciclos × 4 h)'},
            {k:'Color',        v:'Verde'}
          ]
        }
      ]
    },
    {
      id: 'cornetas',
      nombre: 'Cornetas & Bocinas',
      productos: [
        {
          codigo:'5500000427', nombre:'TS38 2.0 Para PC USB', marca:'Lenovo',
          descripcion:'Cornetas compactas USB 2.0 para escritorio. Plug & play.',
          img:'',
          specs:[{k:'Tipo',v:'2.0 estéreo'},{k:'Conexión',v:'USB'},{k:'Uso',v:'PC · Laptop'}]
        },
        {
          codigo:'002887', nombre:'Polo 2.0 8W USB 25164', marca:'Trust',
          descripcion:'Bocinas 2.0 USB 8W con sonido nítido para escritorio. Ref. 25164.',
          img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/25164_pictures_product_visual_1.png',
          specs:[{k:'Potencia',v:'8W total (4W×2)'},{k:'Conexión',v:'USB + 3.5mm'},{k:'Ref.',v:'25164'}]
        },
        {
          codigo:'002888', nombre:'Gemi RGB 2.0 22948', marca:'Trust',
          descripcion:'Bocinas 2.0 con iluminación RGB. 12W total. Ref. 22948.',
          img:'https://d1gb7gicmr8iau.cloudfront.net/fit-in/1200x900/Media/Images/Product/Visual/22948_pictures_product_visual_1.png',
          specs:[{k:'Potencia',v:'12W total'},{k:'RGB',v:'Iluminación RGB'},{k:'Tipo',v:'2.0 estéreo'},{k:'Ref.',v:'22948'}]
        },
        {
          codigo:'0000098', nombre:'Portable Malibu Verde 500W Bluetooth', marca:'Moonki',
          descripcion:'Corneta portátil Bluetooth recargable 18W RMS (500W PMPO) con LED. Color verde.',
          img:'https://www.moonki.com.ar/cdn/shop/files/MalibuP01bverde.png?v=1713546110',
          specs:[{k:'Potencia',v:'500W PMPO · 18W RMS'},{k:'Bluetooth',v:'Sí'},{k:'Batería',v:'Recargable'},{k:'Color',v:'Verde'}]
        },
        {
          codigo:'0097', nombre:'Portable Malibu Naranja 500W Bluetooth', marca:'Moonki',
          descripcion:'Corneta portátil Bluetooth recargable 18W RMS (500W PMPO) con LED. Color naranja.',
          img:'https://www.moonki.com.ar/cdn/shop/files/MalibuP01bnaranja.png?v=1713545788',
          specs:[{k:'Potencia',v:'500W PMPO · 18W RMS'},{k:'Bluetooth',v:'Sí'},{k:'Batería',v:'Recargable'},{k:'Color',v:'Naranja'}]
        },
        {
          codigo:'000099', nombre:'Portable Malibu Light 500W Bluetooth', marca:'Moonki',
          descripcion:'Corneta portátil Bluetooth recargable 18W RMS (500W PMPO) con LED. Color celeste.',
          img:'https://www.moonki.com.ar/cdn/shop/files/MalibuP01bceleste.png?v=1713545965',
          specs:[{k:'Potencia',v:'500W PMPO · 18W RMS'},{k:'Bluetooth',v:'Sí'},{k:'Color',v:'Celeste/Light'}]
        },
        {
          codigo:'001668', nombre:'Portable Malibu Rosa 500W Bluetooth', marca:'Moonki',
          descripcion:'Corneta portátil Bluetooth recargable 18W RMS (500W PMPO) con LED. Color rosa.',
          img:'https://www.moonki.com.ar/cdn/shop/files/MalibuP01rosa.png?v=1713546344',
          specs:[{k:'Potencia',v:'500W PMPO · 18W RMS'},{k:'Bluetooth',v:'Sí'},{k:'Color',v:'Rosa'}]
        },
        {
          codigo:'002012', nombre:'MS-112DSP 4500W Professional DSP', marca:'Moonki',
          descripcion:'Corneta activa profesional DSP. 2 salidas de 12", Bluetooth, LED.',
          img:'https://www.moonki.com.ar/cdn/shop/files/P01_4a5b37be-6c54-421a-9e88-ad43eae4f02b.png?v=1682598129',
          specs:[{k:'Potencia',v:'4500W PMPO'},{k:'Woofers',v:'2× 12"'},{k:'DSP',v:'Amplificador profesional'},{k:'Bluetooth',v:'Sí'}]
        },
        {
          codigo:'002008', nombre:'MS-1200BTS 1200W Bluetooth + Ruedas', marca:'Moonki',
          descripcion:'Corneta activa 1200W PMPO / 80W RMS con batería gel 5000mAh, Bluetooth y ruedas.',
          img:'https://www.moonki.com/cdn/shop/files/P03_8135d135-bdcb-48cb-a063-7190335e6f66.png?v=1684875172',
          specs:[{k:'Potencia',v:'1200W PMPO · 80W RMS'},{k:'Bluetooth',v:'5.0'},{k:'Batería',v:'5000 mAh gel'},{k:'Transporte',v:'Ruedas + asa'}]
        },
        {
          codigo:'002813', nombre:'Bossa MW-PB250 900W Bluetooth 5.0', marca:'Moonki',
          descripcion:'Party Speaker 2 vías 900W PMPO / 60W RMS. Bluetooth 5.0, ~4h batería.',
          img:'https://www.moonki.com.ar/cdn/shop/files/P01_879cfb61-f751-428f-bd64-e50bca608470.png?v=1683118476',
          specs:[{k:'Potencia',v:'900W PMPO · 60W RMS'},{k:'Bluetooth',v:'5.0'},{k:'Batería',v:'Recargable ~4h'},{k:'Diseño',v:'2 vías activa'}]
        },
        {
          codigo:'002013', nombre:'MW-PB265BLT 1500W Bluetooth', marca:'Moonki',
          descripcion:'Corneta portátil activa 1500W PMPO con Bluetooth y batería recargable.',
          img:'',
          specs:[{k:'Potencia',v:'1500W PMPO'},{k:'Bluetooth',v:'Sí'},{k:'Batería',v:'Recargable'}]
        },
        {
          codigo:'000845', nombre:'Maui SPK Active MS-900B 2 Vías', marca:'Moonki',
          descripcion:'Active speaker 2 vías woofer 6.5", 900W PMPO / 60W RMS, LED, micrófono incluido.',
          img:'https://www.moonki.com/cdn/shop/products/P01_d29dcc4a-a00b-4100-b572-1e0453dcbbb5.png?v=1684428813',
          specs:[{k:'Potencia',v:'900W PMPO · 60W RMS'},{k:'Woofer',v:'6.5"'},{k:'LED',v:'Sí'},{k:'Incluye',v:'Micrófono'}]
        },
        {
          codigo:'002009', nombre:'Aruba 10" MS-1600B Active Bluetooth', marca:'Moonki',
          descripcion:'Active speaker 10" con Bluetooth, batería recargable y micrófono incluido.',
          img:'https://www.moonki.com/cdn/shop/products/P01_8650f440-d5e4-4b64-aae5-e569282dd0c6.png?v=1684428823',
          specs:[{k:'Woofer',v:'10"'},{k:'Bluetooth',v:'Sí'},{k:'Batería',v:'Recargable'},{k:'Incluye',v:'Micrófono'}]
        },
        {
          codigo:'002346', nombre:'MW-T280 Sound Tower 2700W BT 5.0', marca:'Moonki',
          descripcion:'Sound Tower dual woofer 8", 2700W PMPO / 180W RMS, Bluetooth, LED, control remoto.',
          img:'https://www.moonki.com/cdn/shop/files/MW-T280_01.png?v=1714490022',
          specs:[{k:'Potencia',v:'2700W PMPO · 180W RMS'},{k:'Woofers',v:'2× 8"'},{k:'Bluetooth',v:'5.0'},{k:'Batería',v:'~8 horas'},{k:'Control',v:'Remoto incluido'}]
        },
        {
          codigo:'001666', nombre:'Waikiki 15" MS-115B Active Bluetooth', marca:'Moonki',
          descripcion:'Active speaker 15" con Bluetooth, batería recargable y micrófono incluido.',
          img:'https://www.moonki.com/cdn/shop/products/P01_fbc8e40b-77ad-41a0-8ffd-87f69f7de594.png?v=1684434144',
          specs:[{k:'Woofer',v:'15"'},{k:'Bluetooth',v:'Sí'},{k:'Batería',v:'Recargable'},{k:'Incluye',v:'Micrófono'}]
        }
      ]
    }
  ]
};
