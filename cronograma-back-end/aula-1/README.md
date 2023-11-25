# Aula 1: Introdução às Ferramentas

## Preparação do Ambiente de Desenvolvimento

- **Instalação do Node.js e npm**

  - Baixar e instalar o Node.js: [Node.js](/cronograma-front-end/arquivos/)
  - Verificar a instalação usando `node -v` e `npm -v`

- **Configuração do Editor de Código**
  - Recomendação: Visual Studio Code, Sublime Text, Atom, etc.
  - Instalar extensões úteis para desenvolvimento web.

## Conhecendo a Ferramenta e seu Corpo de Desenvolvimento

- **Criação de um Projeto React**

  - Utilizar o comando `npx create-react-app nome-do-projeto` para criar um novo projeto React.
  - Explorar a estrutura de pastas gerada.

## Conhecendo os Diretórios do Projeto Gerado

Após criar um novo projeto React usando o comando `npx create-react-app nome-do-projeto`, a estrutura de pastas gerada contém diversos diretórios que desempenham papéis específicos. Vamos explorar alguns dos principais diretórios:

- **`public`**: Este diretório contém os arquivos públicos do seu aplicativo, como o HTML principal (`index.html`) e outros recursos estáticos que não precisam passar por webpack.

- **`src`**: O diretório principal onde você irá desenvolver seu aplicativo.

  - **`src/index.js`**: O ponto de entrada do aplicativo. Este arquivo renderiza o componente principal no elemento com o ID `root`.

  - **`src/App.js`**: O componente principal do seu aplicativo. Aqui você pode começar a construir sua aplicação.

  - **`src/components`**: Um diretório para armazenar componentes reutilizáveis.

  - **`src/ App.css`**: O arquivo de estilos globais para o seu aplicativo.

  - **`src/ index.css`**: Outro arquivo de estilos globais.

  - **`src/pages/`**: Um diretorio que armazena as paginas que forem sendo criadas.

- **`node_modules`**: Este diretório contém todas as dependências do projeto, incluindo o React e outras bibliotecas necessárias.

- **`package.json`**: O arquivo que descreve as configurações do projeto, incluindo as dependências, scripts e outras informações importantes.

- **`README.md`**: Um arquivo de markdown contendo informações sobre o projeto, instruções de instalação e outras notas importantes.

- **`yarn.lock` ou `package-lock.json`**: Esses arquivos são usados para garantir que as versões das dependências sejam consistentes entre diferentes desenvolvedores e ambientes.

- **`public/favicon.ico`**: O ícone exibido na guia do navegador.

- **`public/manifest.json`**: Um arquivo de manifesto usado para configurar propriedades do aplicativo, como ícones e nome.

## Conhecendo a Ferramenta e seus Principais HOOKS

### `useEffect()`

- **Objetivo**: Gerenciar efeitos colaterais em componentes funcionais.

- **Passo a Passo de Utilização**:
  1. Importar o hook no início do arquivo: `import React, { useEffect } from 'react';`
  2. Dentro do componente funcional, utilizar o `useEffect` da seguinte forma:
     ```jsx
     useEffect(() => {
       // Código a ser executado ao montar ou atualizar o componente
       return () => {
         // Código a ser executado ao desmontar o componente (cleanup)
       };
     }, [dependencies]);
     ```
  3. Explicar o conceito de dependências e quando usá-las.

### `useState()`

- **Objetivo**: Gerenciar o estado em componentes funcionais.

- **Passo a Passo de Utilização**:
  1. Importar o hook no início do arquivo: `import React, { useState } from 'react';`
  2. Dentro do componente funcional, utilizar o `useState` da seguinte forma:
     ```jsx
     const [state, setState] = useState(initialState);
     ```
  3. `state` representa o estado atual, e `setState` é uma função para atualizar esse estado.
  4. Exemplificar a utilização básica do `useState`.

### `useRouter()`

- **Objetivo**: Gerenciar a navegação em componentes funcionais.

- **Passo a Passo de Utilização**:
  1. Importar o hook no início do arquivo: `import { useRouter } from 'next/router';`
  2. Dentro do componente funcional, utilizar o `useRouter` para acessar informações sobre a rota:
     ```jsx
     const router = useRouter();
     // Utilizar as propriedades de router, por exemplo, router.pathname
     ```
  3. Demonstração prática de como navegar entre páginas.

#### Propriedades do Objeto `router`

- **`router.pathname`**

  - **Descrição**: Retorna o caminho da URL da página.
  - **Exemplo**:
    ```jsx
    console.log(router.pathname); // "/exemplo"
    ```

- **`router.query`**
  - **Descrição**: Retorna um objeto contendo os parâmetros de consulta da URL.
  - **Exemplo**:
    ```jsx
    console.log(router.query); // { id: '123' }
    ```

#### Métodos do Objeto `router`

- **`router.push(url, as, options)`**

  - **Descrição**: Navega para uma nova página. Pode ser uma URL, um objeto com a estrutura `{ pathname, query }` ou uma combinação dos dois.
  - **Exemplo**:
    ```jsx
    // Navegar para a página com o ID 123
    router.push("/p/[id]", "/p/123");
    ```

- **`router.query`**

  - **Descrição**: Retorna um objeto contendo os parâmetros de consulta da URL.
  - **Exemplo**:
    ```jsx
    console.log(router.query); // { id: '123' }
    ```

- **`router.query`**
  - **Descrição**: Retorna um objeto contendo os parâmetros de consulta da URL.
  - **Exemplo**:
    ```jsx
    console.log(router.query); // { id: '123' }
    ```
