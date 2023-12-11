# Material de estudo

![img](/imagens/image_readme.png)

### Logica da api-1 -- front-end

**Situação problema**
![img](/materialDeEstudo/LogicaDaAPI-1/Captura%20de%20tela%202023-12-03%201035000.png)
Seu jose tem um site de vendas de produtos porem o site é estatico, cada atualização precisa parar o site inteiro deixando fora do ar ao atualizar, vendo esse problema seu jose pediu para que a cada atualização não seja necessario parar o site.
![img](/materialDeEstudo/LogicaDaAPI-1/Captura%20de%20tela%202023-12-03%201045270.png)

**Solução**
Para solucionar o problema proposto sera necessario utilizar de uma api que realiza consultas exibir os dados na interface criada pelo front-end e consumi a api para exibir os dados

**Lista recebida por meio da rota api**

```Javascript
var produtos = [
    {
        titulo: "coca-cola",
        image: "url.com.br"
    },
     {
        titulo: "coca-cola",
        image: "url.com.br"
    },
     {
        titulo: "coca-cola",
        image: "url.com.br"
    },
    ...
]
```

**Interface front-end**
Os dados da lista seram percorridos por meio de uma função **laço loop** que irar renderizar formando cada item necessario para nossa interface

![img](/materialDeEstudo/LogicaDoFront-1/Captura%20de%20tela%202023-12-03%20110306.png)
