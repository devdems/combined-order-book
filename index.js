const server = require('./server')

const port = process.env.PORT || 5000;

server().listen(port, (err) => {
  if (err) return console.log(err)
  console.log(`Listening on ${port}`);
});
