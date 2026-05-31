import React from "react";

const DataStore = React.createContext([
  {
    MealTitle: " Chicken Dry Fry",
    MealDescription:
      "2Hrs Marinated chicken will be serve for you ( 15 pieces )",
    MealAmount: "650",
  },
  {
    MealTitle: "Pork Dry Fry",
    MealDescription: "Crispy Pork with spicy chilly ( 15 pieces )",
    MealAmount: "950",
  },
  {
    MealTitle: "Duck Dry Fry",
    MealDescription: "Crispy Duck with Lemon flavour. ( 15 Pieces )",
    MealAmount: "1250",
  },
  {
    MealTitle: "spinach chutney and Salad",
    MealDescription: "You Can add this to your dry fries. Taste get to heaven",
    MealAmount: "250",
  },
]);
export default DataStore;
