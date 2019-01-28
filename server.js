const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({
	extended: true
}));
app.use(express.static('public')); // allows serving static content from public folder
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, function () {
	console.log(`Express server running at http://localhost:${PORT}`);
});