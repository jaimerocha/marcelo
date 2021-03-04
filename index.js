const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


//app.use(express.static("public"));


app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public/index.html'));
});


// Static route for files in the current directory...
// Note that this serves all files relative to the given
// path, even ones you probably don't want.
//app.use(express.static(path.join(__dirname, 'public')));


// Note: you should really put these files in a subdirectory
// And use static like this:
app.use('/imagenes', express.static(path.join(__dirname, 'public/imagenes/')));


app.listen(3000, function(){
    console.log("Listening on port 3000!")
});