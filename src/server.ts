import express from 'express'
import user from './routes/user.js'

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({message: "Udało się HEHEHEH m"});
});

app.use(user)

const PORT = process.env.PORT! || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

