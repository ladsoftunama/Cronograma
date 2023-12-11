# Material de estudo

![img](/imagens/image_readme.png)

### Logica da api

**Situação problema**
![img](/materialDeEstudo/LogicaDaAPI-1/Captura%20de%20tela%202023-12-03%201035000.png)
Seu jose tem um site de vendas de produtos porem o site é estatico, cada atualização precisa parar o site inteiro deixando fora do ar ao atualizar, vendo esse problema seu jose pediu para que a cada atualização não seja necessario parar o site.

**Operação realizada pelo jose para atualizar os produtos**
![img](/materialDeEstudo/LogicaDaAPI-1/Captura%20de%20tela%202023-12-03%20103924.png)

**Solução**
Para solucionar o problema proposto sera necessario utilizar de uma api que realiza consultas
![img](/materialDeEstudo/LogicaDaAPI-1/Captura%20de%20tela%202023-12-03%20102041.png)

O servidor que contem a **api** realiza a consulta no banco de dados executando uma **query** sql selecionando todos os produtos e como retorno da query temos a resposta do banco de dados que logo é entregue a **rota da api** que o back-end configura-se o nome

![img](/materialDeEstudo/LogicaDaAPI-1/Captura%20de%20tela%202023-12-03%201045270.png)
Alterar o banco de dados que logo por seguinte é alterado todos os dados fornecidos pela api de forma dinamica **sem que tenha a necessidade de para a aplicação front-end do cliente**
