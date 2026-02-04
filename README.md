# Soulful Soirées (Redux)

App web (Vite + React + TypeScript + Tailwind + shadcn/ui) para descobrir eventos e experiências de bem-estar no RJ.

## Requisitos

- Node.js 20+ (recomendado)
- npm 9+ (ou pnpm/yarn, mas o projeto usa npm por padrão)

> Dica (macOS): `brew install node`

## Rodando localmente

Clone o repositório e instale dependências:

```bash
git clone https://github.com/joaaosc/soulful-soirees-redux.git
cd soulful-soirees-redux
npm ci
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

## Scripts úteis

- Lint:
  ```bash
  npm run lint
  ```
- Typecheck:
  ```bash
  npm run typecheck
  ```
- Testes:
  ```bash
  npm run test
  ```
- Build de produção:
  ```bash
  npm run build
  ```
- Pré-visualizar build:
  ```bash
  npm run preview
  ```

## Deploy na Vercel

### Opção A — Via Dashboard (recomendado)

1. Crie uma conta na Vercel e conecte seu GitHub.
2. Clique em **Add New → Project** e importe o repositório `joaaosc/soulful-soirees-redux`.
3. Em **Configure Project**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm ci` (opcional, mas recomendado)
4. Clique em **Deploy**.

> Importante (SPA/React Router): para rotas como `/home` funcionarem ao dar refresh, adicione um `vercel.json` na raiz com rewrite para `index.html`:
>
> ```json
> {
>   "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
> }
> ```

### Opção B — Via Vercel CLI

1. Instale o CLI:
   ```bash
   npm i -g vercel
   ```
2. Faça login:
   ```bash
   vercel login
   ```
3. Deploy de preview:
   ```bash
   vercel
   ```
4. Deploy em produção:
   ```bash
   vercel --prod
   ```

## SPA / React Router (Vercel)

Se seu app usa React Router (SPA), o `vercel.json` acima é necessário para evitar 404 ao atualizar páginas internas.
