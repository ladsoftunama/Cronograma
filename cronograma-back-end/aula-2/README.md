# Aula 2: conclusão da atividade proposta

## Logica da api

![img](/cronograma-back-end/arquivos/image_example.png)

## Ambiente de Desenvolvimento

### Endpoint: _getdata_

O codigo abaixo retrata o conceito de politicas de segurança a acesso de origem dos EndPoints

```Javascript
res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
```

No codigo abaixo é realizado a conexão com banco de dados sql server em que ao ser instanciado é executado a query sql e como retorno temos a nossa resposta da api

```Javascript
const DatabaseConnection = require("./../../models/connection"); // Ajuste o caminho conforme necessário

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  const db = new DatabaseConnection();
  try {
    // faz a conexão com db
    await db.connect();
    console.log("Connected to the database");
    // query sql a ser executada
    const sql = "SELECT * FROM post"; // query SQL atribuida a variavel
    // retorno guardado na var 'results'
    const results = await db.query(sql); // query SQL sendo executada

    console.log("Query results:", results); // em caso de sucesso ira print a mensagem results
    // envio da resposta do sql no caso o envio da var 'result'
    res.status(200).json({ data: results });
  } catch (error) {
    console.error("Error:", error); // caso falhe irar printar o erro
    res.status(400).json({ data: "erro" + error });
  } finally {
    // Certifique-se de fechar a conexão quando terminar
    await db.close(); // por fim ele encerra a conexão
  }
}
```
