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
  //            Envio da mensagem
  res.status(200).json({ data: pokemonList });
}
