# REPORTE DE IMÁGENES — Mastoner Center
**Generado:** 2026-05-18

---

## Resumen ejecutivo

| Estado | Cantidad |
|--------|----------|
| Imágenes descargadas y funcionando | **19 / 20** |
| Sin imagen encontrada | 1 |
| Baja resolución (< 500×500) | 5 (ver nota) |
| Catálogo HTML actualizado | ✅ |

---

## Estructura creada

```
Mastonercenter/
├── EPSON/              ← 7 imágenes (.jpg)
├── HP/                 ← 3 imágenes (.jpg/.png)
├── Canon/              ← 9 imágenes (.jpg)
├── catalogo-imagenes/
│   ├── impresoras/
│   │   ├── epson/      ← 7 copias nombradas (epson-l1250.jpg, etc.)
│   │   ├── hp/         ← 3 copias nombradas
│   │   └── canon/      ← 9 copias nombradas
│   ├── toners-cartuchos/
│   │   ├── originales-canon/
│   │   ├── originales-hp/
│   │   ├── asta/
│   │   ├── ac-ink/
│   │   ├── print-line/
│   │   └── maxi-print/
│   └── accesorios/
│       ├── marvo/
│       └── trust/
├── pendientes.txt
└── REPORTE.md
```

---

## Imágenes por carpeta

### EPSON — 7/7 encontradas

| Modelo | Archivo | Dimensiones | Fuente |
|--------|---------|-------------|--------|
| EcoTank L1250 | `EPSON L1250.jpg` | 550×310 | mediaserver.goepson.com |
| EcoTank L3250 | `Epson L3250.jpg` | 550×310 | mediaserver.goepson.com |
| EcoTank L4260 | `Epson L4260.jpg` | 1500×1500 ✅ | tiendaepson.com.mx |
| EcoTank L4360 | `Epson L4360.jpg` | 1200×1100 ✅ | mediaserver.goepson.com |
| EcoTank L5590 | `Epson L5590.jpg` | 1000×564 ✅ | mediaserver.goepson.com |
| EcoTank M2170 | `Epson M2170.jpg` | 690×460 | mediaserver.goepson.com |
| Sure Color M170 | `Epson Sure Color M170.jpg` | 550×310 ⚠️ | epson.com.ve (WorkForce M205) |

> ⚠️ **Sure Color M170**: Modelo no encontrado en catálogos actuales Epson. Se usó imagen
> de WorkForce M205 como modelo equivalente. Verificar si el modelo en stock es M205 o M170.

### HP — 3/3 encontradas

| Modelo | Archivo | Dimensiones | Fuente |
|--------|---------|-------------|--------|
| LaserJet M111w | `HP 111W.jpg` | 325×155 ⚠️ | stech.ink |
| LaserJet MFP M137w | `HP 137W.jpg` | 600×450 | lancetrend.com |
| LaserJet MFP M141w | `HP 141W.png` | 800×800 ✅ | stech.ink |

> ⚠️ **M111w**: Imagen de baja resolución. Máxima encontrada disponible. Reemplazar manualmente desde hp.com.

### Canon — 9/10 encontradas

| Modelo | Archivo | Dimensiones | Fuente |
|--------|---------|-------------|--------|
| imageCLASS LBP6030W | `Canon 6030W.jpg` | 800×800 ✅ | s7d1.scene7.com (Canon USA) |
| PIXMA G1130 | `Canon G1130.jpg` | 800×534 ✅ | s7d1.scene7.com |
| PIXMA G2170 | `Canon G2170.jpg` | 600×600 ✅ | compuimpresion.com.co |
| PIXMA G4170 | `Canon G4170.jpg` | 1200×640 ✅ | s7d1.scene7.com (Canon Panamá) |
| imageRUNNER 1643 | `Canon Imagenruner1643.jpg` | 800×601 ✅ | s7d1.scene7.com (Canon USA) |
| **MAXIFY MB3010** | ❌ **NO ENCONTRADA** | — | — |
| PIXMA TS3610 | `Canon Ts3610.jpg` | 1200×720 ✅ | s7d1.scene7.com |
| imageCLASS MF272dw | `Canon imageCLASS MF272dw.jpg` | 800×640 ✅ | s7d1.scene7.com (Canon USA) |
| imageCLASS MF455dw | `Canon imageCLASS MF455dw.jpg` | 800×800 ✅ | s7d1.scene7.com (Canon USA) |
| imageCLASS MF465dw | `Canon imageCLASS MF465dw.jpg` | 800×640 ✅ | s7d1.scene7.com (Canon USA) |

---

## Sin imagen encontrada (1)

| Producto | Motivo |
|----------|--------|
| Canon MAXIFY MB3010 | No aparece en catálogos activos de Canon LATAM. Posible descontinuación. El GX3010 parece ser su sucesor. Ver `pendientes.txt` |

---

## Imágenes en baja resolución (5)

Estas imágenes son las máximas disponibles públicamente. Son funcionales en el catálogo
pero conviene reemplazarlas con versiones de mayor calidad cuando sea posible.

| Producto | Dimensiones | Nota |
|----------|-------------|------|
| HP LaserJet M111w | 325×155 | Tamaño nativo de todas las fuentes consultadas |
| Epson L1250 | 550×310 | Dimensión nativa Epson CDN (formato landscape) |
| Epson L3250 | 550×310 | Dimensión nativa Epson CDN (formato landscape) |
| Epson M2170 | 690×460 | Dimensión nativa Epson CDN (formato landscape) |
| HP M137w | 600×450 | Máximo encontrado en fuentes accesibles |

---

## Toners, cartuchos y accesorios

Las carpetas están creadas y listas:
- `catalogo-imagenes/toners-cartuchos/originales-canon/`
- `catalogo-imagenes/toners-cartuchos/originales-hp/`
- `catalogo-imagenes/toners-cartuchos/asta/`
- `catalogo-imagenes/toners-cartuchos/ac-ink/`
- `catalogo-imagenes/toners-cartuchos/print-line/`
- `catalogo-imagenes/toners-cartuchos/maxi-print/`
- `catalogo-imagenes/accesorios/marvo/`
- `catalogo-imagenes/accesorios/trust/`

**Estado**: Vacías — pendiente de poblar en una segunda fase.
Los catálogos web de Asta, AC Ink, Print Line y Maxi Print no están indexados
públicamente o están en sitios solo para distribuidores. Se recomienda solicitar
el kit de imágenes directamente a cada proveedor.

---

## Fuentes consultadas

| Marca | Fuente principal | Notas |
|-------|-----------------|-------|
| Epson | mediaserver.goepson.com | CDN oficial con parámetros de resolución |
| HP | stech.ink (Shopify) | sito hp.com no accesible por timeout |
| Canon (imageCLASS/LBP) | s7d1.scene7.com (Canon USA) | Patrón: `[SKU]_[model]_primary` |
| Canon (PIXMA G) | s7d1.scene7.com + compuimpresion.com.co | G-series LatAm: SKU distinto al mercado US |
| Canon (imageRUNNER) | s7d1.scene7.com (Canon USA) | — |

---

## Cambios en el catálogo HTML

`catalogo-impresoras.html` fue actualizado: todas las 20 referencias de imágenes
cambiaron de `.webp` a `.jpg`/`.png` para coincidir con los archivos descargados.
