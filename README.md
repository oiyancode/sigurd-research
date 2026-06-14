# SIGD Inteligente (Sigurd)

O SIGD Inteligente é uma ferramenta web para transformar documentos em papel (ex.: listas de presença) em dados organizados, sem precisar digitar tudo manualmente.

Você envia uma foto do documento, a Inteligência Artificial lê a caligrafia e extrai os nomes. Em seguida, o sistema cria automaticamente uma linha organizada em uma planilha e guarda a imagem original em uma pasta.

O diferencial é a privacidade no modelo multiusuário: em vez de os arquivos ficarem guardados no servidor do dono do site, cada utilizador conecta o seu próprio Google Drive. Tudo o que for processado é salvo diretamente na conta do cliente.

## Status atual

- Front-end base em React + Vite + Tailwind
- Protótipo de UI com tema Claro/Escuro (toggle persistido)
- Fontes locais (Cinzel/Poppins) e tokens de cor em CSS

Ainda não existe integração real com Google OAuth, upload, Gemini, Drive/Sheets ou backend/orquestrador. Esta etapa atual entrega a base visual e a estrutura do front-end.

## Visão geral (arquitetura proposta)

Fluxo esperado no modelo SaaS multiusuário:

1. Utilizador acessa o site e conecta o seu Google Drive via OAuth
2. O sistema guarda com segurança o token de renovação (refresh token) associado ao e-mail do utilizador
3. O utilizador envia uma imagem/PDF do documento
4. Um orquestrador (ex.: n8n) renova o token, chama a IA (Gemini) para extrair os dados e grava:
   - o arquivo original em uma pasta no Drive do cliente
   - os dados estruturados em uma planilha (Google Sheets) do cliente

## Stack planejada (custo baixo / free tier)

- Front-end: React (Vite) + Tailwind, publicado como site estático (ex.: Vercel)
- Banco de dados (tokens): Supabase (PostgreSQL) para guardar credenciais por utilizador
- Orquestração: n8n (HTTP nodes) para mediar o fluxo e renovar credenciais em tempo real
- IA: Gemini (free tier) para OCR/extração e formatação de dados
- Destino final: Google Drive + Google Sheets do próprio utilizador

## Segurança (pontos principais)

- Isolamento de dados: documentos e planilhas vivem no Drive do cliente
- Princípio do menor privilégio: escopo recomendado `https://www.googleapis.com/auth/drive.file`
- Segredos do sistema (client secret, chaves da IA) ficam no backend/orquestrador (variáveis de ambiente), não no navegador
- CORS restrito no webhook/orquestrador para aceitar apenas o domínio de produção

## Rodando localmente

Pré-requisitos: Node.js e pnpm.

```bash
pnpm install
pnpm dev
```

O terminal vai mostrar a URL local (por exemplo `http://localhost:5173/`). Se a porta estiver ocupada, o Vite usa outra e imprime no terminal.

## Deploy (sugestão)

- Front-end: Vercel
- Backend/orquestrador: plataforma separada (ex.: Render/Railway/Fly) com endpoints para OAuth callback, webhook de upload e integração n8n
- Banco: Supabase para armazenar tokens por utilizador

