import Express, {
  type Application,
  type Request,
  type Response,
} from "express";
import dotenv from "dotenv";
import { characters } from "./character";

dotenv.config();

const app: Application = Express();
const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.use(Express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "Selamat datang di E-commerce",
    nama: "Konjiki No Yami",
    status: "succes",
  });
});

app.get("/api/characters", (_req: Request, res: Response) => {
  res.json({
    status: true,
    jumlah: characters.length,
    data: characters,
  });
});

app.get("/api/characters/:id", (req: Request, res: Response) => {
  if (!req.params.id) {
    res.json({
      message: "tidak ditemukan",
    });
    return;
  }
  const id = parseInt(req.params.id);
  const character = characters.find((c) => c.id === id);

  if (!character) {
  return res.status(404).json({
    status: false,
    message: "Character tidak ditemukan"
  });
}

  res.json({
    status: true,
    data: character,
  });
});

app.get("/api/search", (req: Request, res: Response) => {
  const { nama, kelangkaan, min_power, max_power } = req.query;

  let result = characters;

  if (nama) {
    result = result.filter((c) =>
      c.name.toLowerCase().includes((nama as string).toLowerCase())
    );
  }

  if (kelangkaan) {
    result = result.filter((c) =>
      c.rarity.toLowerCase().includes((kelangkaan as string).toLowerCase())
    );
  }

  if (min_power) {
    result = result.filter((c) => c.power >= Number(min_power));
  }

  if (max_power) {
    result = result.filter((c) => c.power <= Number(max_power));
  }

  res.json({
    succes: true,
    result: result,
  });
});

app.post("/api/characters", (req: Request, res: Response) => {
  const {
    name,
    category,
    rarity,
    power,
    effect,
    stats: {
      attack,
      critChance,
      element,
      magic,
      charm,
      speed,
      aggression,
      agility,
      mana,
      magicDefense,
      magicPower,
      poisonDamage,
    } = {},
    description,
  } = req.body;

  const newCharacter : any = {
    id: characters.length + 1,
    name: name,
    category: category,
    rarity: rarity,
    power: power,
    effect: effect,
    description: description,
    stats: {
      attack,
      critChance,
      element,
      magic,
      charm,
      speed,
      aggression,
      agility,
      mana,
      magicDefense,
      magicPower,
      poisonDamage,
    },
  };

  characters.push(newCharacter)

  res.status(201).json({
    status: true,
    message:'Character ditambahkan!!',
    data:characters
  })
});

    app.put('/api/characters/:id', (req:Request, res:Response) =>{
        if (!req.params.id) {
            res.json({
                message:'tidak ditemukan'
            })
            return
        }

        const id = parseInt(req.params.id)
        const index = characters.findIndex((c) => c.id === id)

        if (index === -1) {
            return res.status(404).json({
                status: false,
                message:'Character tidak ditemukan'
            })
        }
        characters[index] = {...characters[index], ...req.body, stats:{...characters[index]?.stats, ...req.body.stats}}

        res.json({
            status:true,
            message:"character berhasil di update",
            data:characters[index]
        })
    })

    app.delete('/api/characters/:id', (req:Request, res:Response) =>{
        if (!req.params.id) {
            res.json({
                message:'Tidak ditemukan'
           })
           return
        }
        const id = parseInt(req.params.id)
        const index = characters.findIndex((c) => c.id === id)

        if (index === -1) {
            return res.status(404).json({
                status:false,
                message:'Character tidak ada',
            })
        }

        const deleted = characters.splice(index, 1)

        res.json({
            status:true,
            message:'Character berhasil dihapus',
            data:deleted[0]
        })
    })

app.listen(PORT, () => {
  console.log(`Server running at ${HOST}; ${PORT}`);
});
