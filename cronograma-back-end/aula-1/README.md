# Aula 1: Introdução às Ferramentas

## Logica da api

![img](/cronograma-back-end/arquivos/image_example.png)

## Preparação do Ambiente de Desenvolvimento

- **Instalação do Node.js e npm**

  - Baixar e instalar o Node.js: [Node.js](/cronograma-front-end/arquivos/)
  - Verificar a instalação usando `node -v` e `npm -v`

- **Configuração do Editor de Código**
  - Recomendação: Visual Studio Code, Sublime Text, Atom, etc.
  - Instalar extensões úteis para desenvolvimento web.

## Conhecendo a Ferramenta e seu Corpo de Desenvolvimento

- [Criação de um Projeto api](https://github.com/marco0antonio0/About-api-next-js)

## Conhecendo os Diretórios do Projeto Gerado

![img](/cronograma-back-end/arquivos/image_diagrama_esquema.png)
Vamos explorar alguns dos principais diretórios:

- **`src`**: O diretório principal onde você irá desenvolver seu aplicativo.

  - **`src/pages/api`**: Um diretorio que armazena as rotas api

- **`node_modules`**: Este diretório contém todas as dependências do projeto, incluindo o React e outras bibliotecas necessárias.

- **`package.json`**: O arquivo que descreve as configurações do projeto, incluindo as dependências, scripts e outras informações importantes.

- **`README.md`**: Um arquivo de markdown contendo informações sobre o projeto, instruções de instalação e outras notas importantes.

- **`yarn.lock` ou `package-lock.json`**: Esses arquivos são usados para garantir que as versões das dependências sejam consistentes entre diferentes desenvolvedores e ambientes.

## Conhecendo a Ferramenta e seus Principais

```JavaScript
// api/exemplo.js

export default function handler(req, res) {
res.status(200).json({ message: "Esta é uma rota de API de exemplo" });
}
```

### res - Resposta HTTP

O objeto res é um argumento usado na função handler para manipular a resposta HTTP que será enviada de volta ao cliente. Alguns métodos comuns incluem:

- res.status(code): Define o código de status da resposta.
- res.json(data): Envia uma resposta JSON para o cliente.
- res.send(text): Envia uma resposta de texto para o cliente.
- res.end(): Finaliza a resposta sem enviar nenhum dado.

Exemplo:

```JavaScript
res.status(200).json({ message: "Sucesso!" });
```

### req - Requisição HTTP

O objeto req é outro argumento na função handler e é usado para acessar dados da requisição HTTP feita pelo cliente. Algumas propriedades comuns incluem:

- req.method: O método HTTP da requisição (GET, POST, etc.).
- req.body: Os dados enviados no corpo da requisição (útil para métodos POST).
- req.query: Os parâmetros da URL da requisição.

Exemplo:

```JavaScript
console.log(req.method); // "GET"
console.log(req.query); // { id: '123' }
```
