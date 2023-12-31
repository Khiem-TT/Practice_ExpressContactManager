import {AppDataSource} from "./src/data-source";
import {PhoneBook} from "./src/entity/PhoneBook";
import multer from 'multer';

const upload = multer();
import express from 'express';
import bodyParser from "body-parser";

const port = 8000;

AppDataSource.initialize().then(async connection => {
    const app = express();
    app.set('view engine', 'ejs');
    app.set('views', './src/views');
    app.use(bodyParser.json());
    app.use(express.json());
    const PhoneBookRepo = connection.getRepository(PhoneBook);

    app.get('/phone/list', async (req, res) => {
        const phoneBooks = await PhoneBookRepo.find();
        res.render('list', {phoneBooks: phoneBooks});
    });
    app.get('/phone/create', (req, res) => {
        res.render('create');
    });
    app.post('/phone/create', upload.none(), async (req, res) => {
        const phoneData = {
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone
        }

        await PhoneBookRepo.save(phoneData);
        res.render('success');
    });

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
})