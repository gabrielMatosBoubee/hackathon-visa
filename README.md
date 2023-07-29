# FinanceGame - Jogo de Educação Financeira

![FinanceGame](link_para_imagem_do_logo.png) (se houver um logo, coloque a imagem na raiz do repositório)

## Visão Geral

O FinanceGame é um emocionante jogo de educação financeira que visa ensinar habilidades financeiras essenciais de forma lúdica e interativa. O jogo é projetado para atrair o público jovem e incentivá-los a assumir hábitos financeiros conscientes, aprendendo a gerenciar suas finanças, investir e tomar decisões financeiras inteligentes.

## Como Jogar

1. **Orçamento Mensal:** No início do jogo, o jogador deve criar seu orçamento mensal. Insira sua renda mensal e aloque-a para despesas essenciais, despesas discricionárias e economias/investimentos. Tome decisões inteligentes para equilibrar suas finanças.

2. **Desafios Financeiros:** Ao longo do jogo, o jogador enfrentará diversos desafios financeiros, como emergências, oportunidades de investimento e mudanças econômicas. Resolva-os usando suas habilidades financeiras e estratégias aprendidas.

3. **Eventos Inesperados:** Esteja preparado para eventos inesperados que afetarão suas finanças. Lidar com essas situações requer tomada de decisão rápida e cuidadosa.

4. **Momentos de Educação Financeira:** Durante o jogo, você encontrará momentos de aprendizado sobre diversos tópicos financeiros, como poupança, investimentos, crédito e muito mais.

## Tecnologias Utilizadas

- Frontend: React.js, HTML, CSS.

## Instalação

1. Faça o clone deste repositório.

2. Instale as dependências do frontend e do backend usando `npm install` nas respectivas pastas.

3. Inicie o projeto usando `npm run dev`.

4. Acesse o jogo em http://localhost:3000 (ou a porta que você configurou).

## Equipe

- Desenvolvedores: Nome do Desenvolvedor 1, Nome do Desenvolvedor 2.
- Designer: Nome do Designer.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir um Pull Request com melhorias, correções de bugs ou novas funcionalidades.

## Licença

Este projeto é licenciado sob a Licença MIT. Sinta-se à vontade para utilizar, modificar e distribuir o código, desde que a atribuição apropriada seja fornecida.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
