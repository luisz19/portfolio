# Portfolio

Portfolio moderno desenvolvido com React, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Tecnologias

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Build tool e dev server ultra-rápido
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações para React

## 🎨 Design System

### Tipografia
- **Fonte:** Instrument Sans (Google Fonts)
- **Pesos:** 
  - Regular (400) - texto corrido
  - Medium (500) - destaques
  - Semibold (600) - títulos

### Cores

```js
// Fundo
bg-base: '#110B31'

// Gradientes
gradient-1: rgba(48, 157, 200, 0.92)
gradient-2: rgba(8, 48, 94, 0.86)
gradient-3: rgba(13, 31, 194, 0.89)

// Texto
text-primary: '#EEF4ED'
text-secondary: rgba(238, 244, 237, 0.86)

// Cards
card-light: rgba(238, 244, 237, 0.08)
card-dark: rgba(15, 25, 40, 0.40)

// Bordas
stroke-default: rgba(238, 244, 237, 0.30)
```

### Espaçamento

```js
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
section: 96px
```

### Animações

Todas as animações seguem o padrão:
- **Tipo:** fade + movimento vertical (y)
- **Duração:** 0.4s - 0.6s
- **Easing:** easeOut
- **Viewport:** `{ once: true }` para animações ao scroll

## 📁 Estrutura

```
src/
├── components/        # Componentes reutilizáveis
│   ├── Hero.tsx      # Seção hero com gradiente
│   ├── Section.tsx   # Container de seção
│   └── ProjectCard.tsx # Card de projeto com glassmorphism
├── App.tsx           # Componente principal
├── main.tsx          # Entry point
└── index.css         # Estilos globais
```

## 🛠️ Comandos

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## ⚙️ Alias de Importação

O projeto está configurado com o alias `@/` apontando para `./src`:

```tsx
import { Hero } from '@/components/Hero'
```

## 🎯 Features

- ✅ Design dark elegante e minimalista
- ✅ Cards com efeito glassmorphism (backdrop blur)
- ✅ Animações suaves com Framer Motion
- ✅ Sistema de design consistente
- ✅ Totalmente tipado com TypeScript
- ✅ Configuração otimizada do Vite
- ✅ Hot Module Replacement (HMR)