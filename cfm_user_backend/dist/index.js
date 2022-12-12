const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv/config');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'CFM_DATA',
}).then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.log(err);
    console.log("Database not connected");
});
//Server Build Kiya
app.listen(process.env.PORT, () => {
    console.log("Listening to port ", process.env.PORT);
});
//# sourceMappingURL=index.js.map