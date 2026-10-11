# ENGSEG + EFICAZ — Motion graphics

Dois filmes corporativos verticais de 24 segundos, 1080 × 1920, 30 fps, produzidos em Remotion. Cada filme funciona sozinho; a linha gráfica, o ritmo e a assinatura sonora conectam as duas peças.

## Abrir e editar

Requisitos: Node.js 22 ou superior.

```sh
npm ci
npm run studio
```

No Studio, selecione `ENGSEG-Motion` ou `EFICAZ-Motion`. As pastas `Cenas-ENGSEG` e `Cenas-EFICAZ` permitem visualizar cada cena individualmente.

## Exportar

```sh
npm run render:engseg
npm run render:eficaz
```

As configurações visuais ficam em `src/design.tsx`. Os roteiros e tempos estão em `src/Films.tsx`. As cenas estão em `src/scenes/`.

## Recursos

- `public/assets/logos.png`: logos preparadas a partir das referências enviadas no chat, em duas metades. O componente `Logo` faz o recorte durante a composição.
- `public/assets/engseg-photos.png` e `eficaz-photos.png`: seis fotografias ilustrativas geradas para o projeto, em dois trípticos. Não representam funcionários ou instalações reais das empresas. Os recortes são controlados pelo componente `Photo`.
- `public/audio/`: trilhas instrumentais e efeitos sintetizados para o projeto. Não há locução.
- `public/fonts/`: Barlow Condensed e Manrope, com suas licenças OFL.

Todos os recursos de renderização são locais. Nenhum texto foi embutido nas fotografias. Títulos, chamadas, documentos, linhas e transições permanecem editáveis.

## Informações utilizadas

ENGSEG: gestão de eSocial, treinamentos, documentos e laudos; contato `@engsegconsultoria`.

EFICAZ: consultas, avaliações, exames clínicos e ocupacionais, admissional e demissional; contato `@eficaz.med`, telefone `(66) 3497-3833`, conforme bio enviada.

As cores e a direção visual foram baseadas nas logos e nos prints fornecidos. As referências do Pinterest não ficaram acessíveis durante a produção.
