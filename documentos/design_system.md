# Design System - Guia Completo de Traços (Once Human)

Este documento detalha todas as especificações visuais, componentes e preferências de design aplicadas ao projeto **Guia de Traços / Itens para Fusão**.

---

## 🎨 Paleta de Cores e Identidade Visual

O design segue uma estética **Gamer Premium / Dark Tech**, utilizando transparências (glassmorphism), gradientes vibrantes e efeitos de brilho (glow).

### Cores Principais (Variáveis CSS)
*   **Fundo:** `#131313` (Preto profundo para contraste)
*   **Texto Principal:** `#e0e0e0` (Cinza claro para legibilidade)
*   **Cor Primária (Roxo):** `rgb(153, 0, 255)`
*   **Cor Secundária (Luz):** `rgb(164, 53, 255)`
*   **Vidro (Glassmorphism):** `rgba(255, 255, 255, 0.05)` com bordas em `0.1` de opacidade.

### Sistema de Raridades (Cores Específicas)
Cada traço possui uma raridade que define a cor do seu crachá (badge) e o brilho do card:
*   🟣 **Épico:** `#ad49ff`
*   🔵 **Raro:** `#2196f3`
*   🟢 **Normal:** `#4caf50`
*   ⚪ **Comum:** `#ffffff`

---

## 🏗️ Layout e Estrutura

### Grid e Containers
*   **Container Master:** `max-width: 1200px` centralizado.
*   **Padding Lateral:** `20px` (Desktop) / `15px` (Mobile).
*   **Sticky Footer:** Implementado via Flexbox no `main` (`flex: 1`) para garantir que o rodapé nunca flutue no meio da tela em páginas com pouco conteúdo.

### Responsividade (Mobile First)
*   **Breakpoint Mobile:** `960px`.
*   **Transição de Grid:** No mobile, as categorias e grades de cards passam de colunas duplas/triplas para `100%` da largura (coluna única).
*   **Barra de Categoria:** Mantém `width: 100%` fixa tanto no PC quanto no Mobile para evitar saltos visuais ao expandir.

---

## 🧭 Componentes de Interface

### 1. Header (Navegação)
*   **Estilo:** Fundo semi-transparente (`0.85 opacity`) com `blur: 12px`.
*   **Logo Nav:** Imagem redonda (`45px`) com borda roxa e efeito de escala ao passar o mouse.
*   **Brand:** Texto "bolttexturas" com gradiente roxo e efeito de brilho.
*   **Botões Início / Fusão:** 
    *   **Ativo:** Fundo Roxo com sombra glow.
    *   **Inativo:** Fundo Escuro com borda roxa.

### 2. Menu Mobile (Hamburger)
*   **Trigger:** 3 traços brancos que se transformam em um "X" animado ao clicar.
*   **Drawer:** Painel lateral ocupando `80%` da tela (máx `300px`) com fundo desfocado e links verticais.

### 3. Categorias (Acordeão)
*   **Cabeçalho:** Barra escura com borda esquerda roxa fixa (`4px`).
*   **Interação:** Expansão suave com ícone `+` transformando-se em `-`.
*   **Largura:** Sempre `100%` do container para alinhamento profissional.

### 4. Cards de Traços
*   **Fundo:** Vidro fosco estilizado.
*   **Título:** Nome do item em **Branco** (`#ffffff`) para máximo destaque.
*   **Badges de Efeito:** Localizados no topo do título, dentro de um retângulo arredondado com borda da cor da raridade.
*   **Hover:** Elevação (`translateY: -5px`) e aumento da sombra roxa.

---

## ✨ Efeitos e Animações

### Efeitos de Texto e Logo
*   **Escala:** Logo e Títulos principais aplicam `scale(1.02)` ou `scale(1.05)` no hover.
*   **Brilho (Glow):** O texto roxo (`.r-purple`) e os botões ativos possuem `text-shadow` e `box-shadow` pulsantes.
*   **Logo Texturas:** Efeito de gradiente animado e filtro de sombra no hover.

### Transições de Sistema
*   **Surgimento Suave:** Animação `@keyframes surgirSuave` que move os elementos de baixo para cima com opacidade gradual ao carregar a página.
*   **Partículas:** Sistema de partículas flutuantes no fundo (Canvas) para profundidade visual, com quantidade reduzida para performance (15 PC / 10 Mobile).

---

## 📱 Preferências Mobile
*   **Otimização de Espaço:** No mobile, o título principal diminui de `2.5rem` para `1.5rem`.
*   **Menu Drawer:** Otimizado para `100dvh` (Dynamic Viewport Height) para evitar barras de navegação do sistema Android/iOS.
*   **Cards:** Exibição em coluna única para facilitar a leitura.

---
*Este sistema de design foi atualizado para refletir a fidelidade visual de 100% do projeto GuiaTraits.*
