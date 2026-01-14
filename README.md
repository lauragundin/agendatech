# AgendaTech

AgendaTech — agenda de eventos gratuitos de tecnologia, carreira e networking (SP).

## Sobre
Site curadoria de eventos gratuitos focados em TI, networking, comunicação e desenvolvimento profissional. Projetado para facilitar a descoberta de meetups, palestras e workshops em São Paulo.

## Tech stack
- Next.js + TypeScript (recomendado)
- Tailwind CSS
- Dados: `src/data/events.json` (gerado a partir de `dados/events.csv`)

## Como contribuir
1. Abra uma *issue* sugerindo um evento ou correção.
2. Faça um fork e um PR com atualização em `src/data/events.json` ou envie CSV para `dados/events.csv`.
3. Use o script `scripts/csv-to-json.js` para converter CSV em JSON.

## Rodando localmente
```bash
# clonar
git clone https://github.com/<seu-usuario>/agendatech.git
cd agendatech

# instalar dependências (exemplo Next.js)
npm install
npm run dev
