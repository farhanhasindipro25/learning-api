// Javascript Object Notation (JSON)

const user = { id: 1, name: "A", job: "actor" };
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

// If property names/values are not int or boolean, and are strings, all are placed within double quotations("")

const shop = {
  owner: "A",
  address: {
    street: "B",
    city: "C",
    country: "D",
  },
  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
console.log(typeof shop);
console.log(typeof shopJSON);

// Convert JSON string back to object using parse method
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
console.log(typeof shopObj);
