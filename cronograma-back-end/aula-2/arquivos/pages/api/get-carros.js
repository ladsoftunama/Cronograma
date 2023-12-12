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
  //                          Marca de carros
  //===========================================================================
  const carBrands = [
    { name: "Toyota", popularModels: ["Camry", "Corolla", "Rav4"] },
    { name: "Ford", popularModels: ["F-150", "Escape", "Explorer"] },
    { name: "Honda", popularModels: ["Accord", "Civic", "CR-V"] },
    { name: "Chevrolet", popularModels: ["Silverado", "Equinox", "Malibu"] },
    { name: "Volkswagen", popularModels: ["Jetta", "Passat", "Tiguan"] },
    { name: "Nissan", popularModels: ["Altima", "Rogue", "Maxima"] },
    { name: "Mercedes-Benz", popularModels: ["C-Class", "E-Class", "GLC"] },
    { name: "BMW", popularModels: ["3 Series", "5 Series", "X5"] },
    { name: "Audi", popularModels: ["A4", "Q5", "A6"] },
    { name: "Hyundai", popularModels: ["Sonata", "Tucson", "Santa Fe"] },
    { name: "Kia", popularModels: ["Optima", "Sorento", "Sportage"] },
    { name: "Mazda", popularModels: ["Mazda3", "CX-5", "Mazda6"] },
    { name: "Subaru", popularModels: ["Outback", "Forester", "Impreza"] },
    { name: "Tesla", popularModels: ["Model S", "Model 3", "Model X"] },
    { name: "Volvo", popularModels: ["S60", "XC60", "XC90"] },
    { name: "Porsche", popularModels: ["911", "Cayenne", "Panamera"] },
    { name: "Jeep", popularModels: ["Wrangler", "Cherokee", "Grand Cherokee"] },
    { name: "Ram", popularModels: ["1500", "2500", "3500"] },
    { name: "Lexus", popularModels: ["RX", "ES", "NX"] },
    { name: "Acura", popularModels: ["MDX", "RDX", "TLX"] },
  ];
  //           Envio da mensagem
  res.status(200).json({ data: carBrands });
}
