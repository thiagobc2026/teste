# ENGSEG + EFICAZ — Motion graphics V2

Dois filmes corporativos verticais de 24 segundos, 1080 × 1920, 30 fps, produzidos em Remotion. A V2 refaz a montagem para dar mais movimento às letras, imagens e elementos gráficos, com trilhas e efeitos sincronizados às novas ações.

## O que mudou na V2

- Tipografia por letra, com rotação, perspectiva e entradas em sequência.
- Escudo e símbolo de saúde com profundidade e órbitas animadas.
- Documentos que entram em perspectiva, se organizam e recebem marcações.
- Fotografias reveladas em faixas, com movimento de enquadramento.
- Transições por abertura circular, deslocamento vertical e recorte diagonal.
- Montagem de palavras com impactos sonoros e faixas de texto em movimento.
- Logos sem os retângulos de fundo, preservando o desenho e as cores da referência.

## Abrir e editar

Requisitos: Node.js 22 ou superior.

```sh
npm ci
npm run studio
```

No Studio, selecione `ENGSEG-Motion` ou `EFICAZ-Motion` para a V2. As pastas `V2-Cenas-ENGSEG` e `V2-Cenas-EFICAZ` permitem editar e visualizar cada cena individualmente. A pasta `Versao-1` mantém os filmes anteriores.

## Exportar

```sh
npm run render:engseg
npm run render:eficaz
```

A montagem atual fica em `src/v2/Films.tsx`. A identidade visual e os elementos compartilhados ficam em `src/v2/MotionKit.tsx`. Cada cena tem seu próprio arquivo em `src/v2/`. A primeira versão permanece em `src/Films.tsx` e `src/scenes/`.

## Recursos

- `public/assets/logos.png`: logos preparadas a partir das referências enviadas no chat. O componente `BrandLogo` remove o fundo durante a renderização, sem redesenhar as marcas.
- `public/assets/engseg-photos.png` e `eficaz-photos.png`: fotografias ilustrativas geradas para o projeto. Não representam funcionários ou instalações reais das empresas.
- `public/audio/engseg-v2.wav` e `eficaz-v2.wav`: trilhas instrumentais originais com os efeitos sincronizados à V2. Não há locução.
- `public/fonts/`: Barlow Condensed e Manrope, com suas licenças OFL.

Todos os recursos de renderização são locais. Títulos, chamadas, documentos, linhas, símbolos e transições permanecem editáveis.

## Informações utilizadas

ENGSEG: gestão de eSocial, treinamentos, documentos e laudos; contato `@engsegconsultoria`.

EFICAZ: consultas, avaliações, exames clínicos e ocupacionais, admissional e demissional; contato `@eficaz.med`, telefone `(66) 3497-3833`, conforme bio enviada.

Cores e direção visual baseadas nas logos e nos prints fornecidos. As referências do Pinterest não ficaram acessíveis durante a produção.
