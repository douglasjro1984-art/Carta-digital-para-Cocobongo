# Carta digital para Cocobongo

Menú digital web para **Cocobongo**, una pizzería y hamburguesería de Tucumán, Argentina. Está pensado para consultarse desde el celular (por ejemplo, escaneando un código QR en la mesa) y se desarrolló para un local en funcionamiento.

## Qué incluye

- **Pizzas artesanales**, **hamburguesas** (con precios por simple, doble y triple), **milanesas**, **lomitos** y **pepitos venezolanos**.
- **Desayunos y meriendas**, con sus subsecciones de avocados, fitness y tostados.
- **Panadería**, **cafetería** y **licuados**.
- Tarjetas de producto con foto, descripción y precio, y etiquetas destacadas (por ejemplo, "HOT", "BEST" y "NEW").
- Barra de navegación por secciones, con menús desplegables para agrupar categorías.
- Diseño adaptable a pantallas de celular, con carga diferida de imágenes.
- Logo con efecto de brillo animado.

## Tecnologías

- HTML5
- CSS3
- JavaScript (`menu.js`)
- Google Fonts (Orbitron, Rajdhani y Poppins)

No necesita servidor ni instalación: es un sitio estático.

## Estructura

```
├── index.html    # Página con todo el menú
├── styles.css    # Estilos principales
├── menu.js       # Comportamiento de la navegación
├── css/          # Estilos adicionales
└── img/          # Fotos de los productos y logo
```

## Cómo usarlo

1. Descargá o cloná el repositorio:

   ```bash
   git clone https://github.com/douglasjro1984-art/Carta-digital-para-Cocobongo.git
   ```

2. Abrí `index.html` en el navegador.

Para publicarlo, activá GitHub Pages en *Settings > Pages* o subí los archivos a cualquier hosting estático. Después, generá un código QR con el link para ponerlo en las mesas del local.

## Cómo actualizar precios

Los precios y descripciones están escritos directamente en `index.html`. Para cambiar un producto, buscá su nombre en el archivo y editá el valor dentro de `card-price`.

## Autor

**Douglas Romero**, desarrollador backend junior.
[GitHub](https://github.com/douglasjro1984-art) · [LinkedIn](https://www.linkedin.com/in/douglas-romero-574576384)
