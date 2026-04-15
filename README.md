# Clínica Médica BIØRC — Landing Page

Landing page em **React + TypeScript + Tailwind** com backend **Node + Express + TypeScript** para envio de mensagens via email.

## Requisitos

- Node.js 18+ (recomendado) e npm

## Como executar

### Frontend

```bash
cd frontend
npm install
npm run dev
```

O frontend sobe por padrão em `http://localhost:5173`.

### Backend

```bash
cd backend
npm install
cp .env.example .env
# edite o arquivo .env com suas credenciais SMTP
npm run dev
```

O backend sobe por padrão em `http://localhost:3001`.

## Variáveis de ambiente (frontend)

Crie um arquivo `frontend/.env` (opcional) para apontar o frontend ao backend:

```env
VITE_API_URL=http://localhost:3001
```

