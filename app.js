import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

let customers = [
  { id: 1, name: "Phoenix Wright", email: "phoenixwright@gmail.com" },
  { id: 2, name: "Mia Fey", email: "miafey@gmail.com" },
  { id: 3, name: "Dick Gumshoe", email: "dickgumshoe@gmail.com" },
];

//GET
app.get("/customers", (req, res) => {
  res.status(200).json(customers);
});

app.get("/customers/:id", (req, res) => {
  const cusID = +req.params.id;
  const cus = customers.find((cus) => cus.id == cusID);
  if (!cus) {
    return res.status(404).json({ message: "Customer not found" });
  }
  res.status(200).json(cus);
});

app.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});
