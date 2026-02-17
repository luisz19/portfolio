# Guia de Componentes

Documentação dos componentes do design system.

## AnimatedContainer

Container com animação fade + movimento vertical ao aparecer na viewport.

```tsx
import { AnimatedContainer } from '@/components'

<AnimatedContainer delay={0.2}>
  <p>Conteúdo animado</p>
</AnimatedContainer>
```

**Props:**
- `delay` (number, opcional): Delay da animação em segundos
- Aceita todas as props de `motion.div` do Framer Motion

## Button

Botão estilizado com duas variantes.

```tsx
import { Button } from '@/components'

<Button variant="primary">Clique aqui</Button>
<Button variant="secondary">Saiba mais</Button>
```

**Props:**
- `variant`: `'primary'` (gradiente) | `'secondary'` (glass)
- Aceita todas as props de `button` HTML

**Variantes:**
- `primary`: Fundo com gradiente, aumenta ao hover
- `secondary`: Glass com borda, muda cor ao hover

## GlassCard

Card com efeito glassmorphism (translúcido com blur).

```tsx
import { GlassCard } from '@/components'

<GlassCard hover={true}>
  <h3>Título do Card</h3>
  <p>Conteúdo</p>
</GlassCard>
```

**Props:**
- `hover` (boolean): Habilita animação ao hover (padrão: true)
- Aceita todas as props de `div` HTML

## Hero

Seção hero principal com título gradiente e botões.

```tsx
import { Hero } from '@/components'

<Hero />
```

## ProjectCard

Card especializado para exibição de projetos.

```tsx
import { ProjectCard } from '@/components'

<ProjectCard
  title="Meu Projeto"
  description="Descrição do projeto"
  tags={['React', 'TypeScript']}
/>
```

**Props:**
- `title` (string): Título do projeto
- `description` (string): Descrição do projeto
- `tags` (string[]): Array de tecnologias/tags

## Section

Container de seção com título e subtítulo animados.

```tsx
import { Section } from '@/components'

<Section 
  title="Título da Seção"
  subtitle="Subtítulo opcional"
>
  {/* Conteúdo */}
</Section>
```

**Props:**
- `title` (string): Título da seção
- `subtitle` (string, opcional): Subtítulo da seção
- `children` (ReactNode): Conteúdo da seção

## Padrões de Animação

Todos os componentes seguem padrões consistentes:

- **Duração:** 0.4s - 0.6s
- **Easing:** easeOut
- **Tipo:** fade + movimento vertical (y: 20px)
- **Viewport:** `{ once: true }` - anima apenas uma vez

Use as constantes de `@/lib/animations` para criar animações customizadas consistentes com o design system.
