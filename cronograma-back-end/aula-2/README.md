# Aula 2: conclusão da atividade proposta

## Logica da api simples

![img](/cronograma-back-end/aula-2/img-rep-back-des.png)

## Ambiente de Desenvolvimento

### Endpoint: get-pokemons

Este código Node.js funciona como um controlador (handler) para uma API simples que fornece informações sobre pokémons e suas habilidades. Vamos dividir a explicação em seções:

#### Cabeçalhos CORS(regras de acesso de segurança da rota):

Configura os cabeçalhos CORS (Cross-Origin Resource Sharing) para permitir solicitações de qualquer origem (\*) e define os métodos permitidos.

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

#### Lista de Pokémons e Habilidades(analogia ao armazenamento de dados):

Cria um array chamado pokemonList, contendo objetos que representam diferentes pokémons e suas habilidades.

```Javascript
const pokemonList = [
  { name: "Bulbasaur", abilities: ["Tackle", "Growl", "Leech Seed", "Vine Whip"] },
  // ... Outros pokémons
  { name: "Drowzee", abilities: ["Pound", "Hypnosis", "Disable"] },
];

```

#### Envio da Resposta(disponibiliza como resposta ao endPoint):

Retorna a lista de pokémons como resposta para a solicitação.

```Javascript
res.status(200).json({ data: pokemonList });
```

## Codigo completo

[arquivo disponivel aqui](/cronograma-back-end/aula-2/arquivos/)

```Javascript
export default function handler(req, res) {
  //===========================================================================
  //                      CORS
  //===========================================================================
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS, PATCH, DELETE, POST, PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  //===========================================================================
  //                    Pokemons e suas habilidades
  //===========================================================================
  const pokemonList = [
    {
      name: "Bulbasaur",
      abilities: ["Tackle", "Growl", "Leech Seed", "Vine Whip"],
    },
    { name: "Charmander", abilities: ["Scratch", "Growl", "Ember"] },
    { name: "Squirtle", abilities: ["Tackle", "Tail Whip", "Bubble"] },
    {
      name: "Pikachu",
      abilities: ["Thunder Shock", "Growl", "Quick Attack"],
    },
    { name: "Jigglypuff", abilities: ["Sing", "Defense Curl", "Pound"] },
    { name: "Meowth", abilities: ["Scratch", "Growl", "Bite"] },
    { name: "Psyduck", abilities: ["Scratch", "Tail Whip", "Water Gun"] },
    { name: "Geodude", abilities: ["Tackle", "Defense Curl", "Rock Throw"] },
    { name: "Machop", abilities: ["Low Kick", "Leer", "Karate Chop"] },
    { name: "Tentacool", abilities: ["Poison Sting", "Supersonic", "Wrap"] },
    { name: "Slowpoke", abilities: ["Confusion", "Disable", "Headbutt"] },
    {
      name: "Magnemite",
      abilities: ["Tackle", "Sonic Boom", "Thunder Wave"],
    },
    { name: "Farfetch'd", abilities: ["Peck", "Sand Attack", "Leek Slash"] },
    { name: "Doduo", abilities: ["Peck", "Growl", "Quick Attack"] },
    { name: "Seel", abilities: ["Headbutt", "Growl", "Aurora Beam"] },
    { name: "Grimer", abilities: ["Pound", "Disable", "Sludge"] },
    { name: "Shellder", abilities: ["Tackle", "Withdraw", "Supersonic"] },
    { name: "Gastly", abilities: ["Hypnosis", "Lick", "Spite"] },
    { name: "Onix", abilities: ["Tackle", "Screech", "Rock Throw"] },
    { name: "Drowzee", abilities: ["Pound", "Hypnosis", "Disable"] },
  ];
  //============================
  // regras de negocio
  //       . . .
  //============================

  //            Envio da mensagem
  res.status(200).json({ data: pokemonList });
}

```
