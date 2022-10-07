const express = require('express');

// express serveris
const app = express();
const cors = require('cors');
const mainRouter = require("./routes/router");

app.use(cors());
// is front'o galiu siusti objektus, back'as lengvai juos skaityti gales
app.use(express.json());

app.listen(4000);

app.use('/', mainRouter);



// export import examples
// const { sayHi, sayGoodbye, sayCount, sayFirstAndLast, removeUppercase, multiplyNumbers } = require("./modules/sayHello");

// sayHi('Bea');
// sayGoodbye('Loui');
// sayCount('cube');
// sayFirstAndLast('cube');
// removeUppercase('The quick Brown fox jumps');
// multiplyNumbers('The2 quick Brown fox jumps');

// const validateEmail = require("./modules/someFunc");
// validateEmail('fsdfsf@');