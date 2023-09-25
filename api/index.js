import express from "express"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import multer from "multer"

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })

const upload = multer({storage})


app.get('/', (req, res) => {
  res.json("Slayyy5")
});

app.post("/api/upload", upload.single('file'), function(req, res){
    const file = req.file
    res.status(200).json(file.filename)
})

app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)


app.listen(8800,()=>{
    console.log("Api Running!")
})