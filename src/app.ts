import express from "express";
import path from "path"
import router from "./router";
import routerAdmin from "./routerAdmin"
import morgan from "morgan";

import session from "express-session";
import ConncectMongoDb from "connect-mongodb-session"

const MongoDBStore = ConncectMongoDb(session);
const store  = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions"
})

/* <1-ENTRANCE> */
// Инициализация приложения Express

const app = express();

// web site orqali shu fileizmizga kirishga imkon beradi
app.use(express.static(path.join(__dirname, 'public')))

// url encoded data larni qabul qilib va ularni tarjima qilish uchun ishlatilinadi
app.use(express.urlencoded({ extended: true }))

// Разбор входящих JSON-запросов
app.use(express.json());
app.use(morgan(':method :url :response-time ms [:status] \n'));

/* <2-SESSIONS> */

app.use(session({
    secret: String(process.env.SECRET_KEY),
    resave: true,
    saveUninitialized: false,
    store: store,
    cookie: {
        maxAge: 1000 * 60 * 60 * 3, // 30 days
    }
}))


/* <3-VIEWS> */

// views template file lari qayerda ekanligini aytadi
app.set('views', path.join(__dirname, 'views'))

// Установка шаблонизатора EJS
app.set('view engine', 'ejs')

/* <4-ROUTERS> */
app.use("/admin", routerAdmin)
app.use("/", router)

export default app