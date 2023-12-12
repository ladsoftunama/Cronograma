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
  //                      Cardapio de pizzaria
  //===========================================================================
  const pizzaMenu = [
    {
      name: "Margherita",
      ingredients: ["Tomato Sauce", "Mozzarella", "Fresh Basil"],
    },
    {
      name: "Pepperoni",
      ingredients: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
    },
    {
      name: "Vegetarian",
      ingredients: [
        "Tomato Sauce",
        "Mozzarella",
        "Bell Peppers",
        "Mushrooms",
        "Onions",
        "Olives",
      ],
    },
    {
      name: "Hawaiian",
      ingredients: ["Tomato Sauce", "Mozzarella", "Ham", "Pineapple"],
    },
    {
      name: "BBQ Chicken",
      ingredients: [
        "BBQ Sauce",
        "Mozzarella",
        "Grilled Chicken",
        "Red Onions",
        "Cilantro",
      ],
    },
    {
      name: "Supreme",
      ingredients: [
        "Tomato Sauce",
        "Mozzarella",
        "Pepperoni",
        "Sausage",
        "Bell Peppers",
        "Onions",
        "Olives",
      ],
    },
    {
      name: "Buffalo Chicken",
      ingredients: [
        "Buffalo Sauce",
        "Mozzarella",
        "Grilled Chicken",
        "Red Onions",
        "Ranch Drizzle",
      ],
    },
    {
      name: "Four Cheese",
      ingredients: [
        "Tomato Sauce",
        "Mozzarella",
        "Parmesan",
        "Romano",
        "Asiago",
      ],
    },
    {
      name: "Pesto Delight",
      ingredients: ["Pesto Sauce", "Mozzarella", "Tomatoes", "Spinach", "Feta"],
    },
    {
      name: "Meat Lovers",
      ingredients: [
        "Tomato Sauce",
        "Mozzarella",
        "Pepperoni",
        "Sausage",
        "Bacon",
        "Ham",
      ],
    },
  ];
  //            Envio da mensagem
  res.status(200).json({ data: pizzaMenu });
}
