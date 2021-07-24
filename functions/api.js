const express =  require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();
const router = express.Router();
app.use(cors())

router.get('/', cors(), (req, res) => {
    res.json(
        [
            {
                'id': '001',
                'name': 'Smith',
                'email': 'smith@gmail.com'
            },
            {
                'id': '002',
                'name': 'Sam',
                'email': 'sam@gmail.com'
            },
            {
                'id': '003',
                'name': 'lily',
                'email': 'lily@gmail.com'
            }
        ]
    )
})

app.use('/', router);
module.exports.handler = serverless(app);