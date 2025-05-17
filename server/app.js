const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const connectDB = require('./db/db');
const userRouter = require('./routes/user.route');
const taskRouter = require('./routes/tasks.route')

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended : true}));

app.use('/api/auth', userRouter);
app.use('/api/task', taskRouter);

app.get('/', (req, res) => {
    return res.send("task manager")
})

app.listen(PORT, () => {
    console.log("server is running on port ", PORT);
})