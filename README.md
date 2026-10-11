# Operação Duo Lendária

Convite interativo para a Beatriz. HTML, CSS e JavaScript puros, sem backend e sem dependências.

## Arquivos
- `index.html` — estrutura das 7 etapas
- `style.css` — visual e animações
- `script.js` — configuração (no topo), navegação, minigames, WhatsApp, áudio e efeitos

As ilustrações são SVG embutido no HTML, por isso não há pasta `assets/`.

## Abrir no computador
Dê dois cliques em `index.html`. Não precisa instalar nada.

## Editar
Tudo o que é texto ou ajuste fica no início de `script.js`:
- `WHATSAPP_NUMBER` — só dígitos: 55 + DDD + número
- `WHATSAPP_MESSAGE` — a mensagem que a Beatriz envia
- `ACHIEVEMENTS`, `PESSIMISM_LINES`, `LOADING_MESSAGES`, `CONFIG`

## Publicar (grátis)
- **Netlify Drop**: acesse app.netlify.com/drop e arraste a pasta inteira. O link sai na hora.
- **GitHub Pages**: crie um repositório, envie os 3 arquivos e ative Settings → Pages → branch `main`.
- **Vercel**: `npx vercel` dentro da pasta.

Depois é só mandar o link para ela.
