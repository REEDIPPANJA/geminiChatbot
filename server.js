import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv"

dotenv.config();
 const app = express();
 app.use(express.json());

 app.use(cors());

 app.post('/', async (req,res)=>{
    try{
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMENI_URL}`,
         req.body
        );
        console.log(response);
        res.json(response.data);

    }catch{
console.error(error.response?.data || error.message);
  res.status(500).json({ error: error.message });
    }
 })
const PORT =3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));