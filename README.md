# static-site-starter-kit

Static site starter kit.

## Installation

```bash
./setup.sh
```

## Launch

```bash
# Development mode
yarn dev

# Production mode (build & launch server)
yarn prod

# Production build only
yarn build

# Distribution build (for Dockerfile etc.)
yarn dist:stg
yarn dist:prod
```

## Directory Structure

### Root directory

```bash
.
├── config      # Config files
├── public      # Public static files
├── src         # Source files
└── typings     # TypeScript definition files
```

### `src` directory

```bash
src/
├── assets
│   ├── iconfonts             # svg files for Iconfonts
│   ├── images                # image files
│   ├── scripts               # TypeScript files
│   │   ├── libs              # library scripts
│   │   └── pages             # page scripts (webpack entry files)
│   └── styles                # CSS files
│       ├── components        # component styles
│       │   ├── atoms         # Atoms styles
│       │   ├── molecules     # Molecules styles
│       │   ├── organisms     # Organisms styles
│       │   └── templates     # Templates styles
│       └── vars              # Variables (custom properties) styles
└── views                     # HTML(pug) files
    ├── layouts               # Layout view files
    ├── partials              # Partial view files (for target include files)
    │   └── gtm               # GTM tag files
    └── root                  # Page view files
```

## Architecture Design for CSS

This project uses CSS Level 4 for stage 1.  
CSS design is [rscss](https://rscss.io).  

## Utility functions

### HTML & CSS

#### resolve (for CSS)

Cachebuster url for CSS.  
This use insted of `url` function.  

* Example

```css
background-image: resolve('../images/sample.svg');
```

#### image-set-rs (for CSS)

Cachebuster image-set urls for CSS.  
This use insted of `image-set` function.  

* Example

```css
/* Prepare sample.png, sample@2x.png, sample@3x.png in the same directory */
background-image: image-set-rs('../images/sample.png');
```

#### +lazyload (for Pug)

Lazyload images for using img tag srcset.

* Example

```pug
+lazyimg(
  `/assets/images/sample02.png?${env.time}`,
  `/assets/images/sample02@2x.png?${env.time} 2x, /assets/images/sample02@3x.png?${env.time} 3x`,
  "Sample 01"
)
```
