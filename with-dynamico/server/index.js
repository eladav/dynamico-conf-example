const dynamico = require('@dynamico/express-middleware').default;
const { FSStorage } = require('@dynamico/fs-storage');
const jsonErrorHandler = require('express-json-error-handler').default;
const express = require('express');

const app = express();
app.use('/api/components', dynamico(new FSStorage('./components')));
const port = 1234;
app.use(jsonErrorHandler({ log: console.log }));
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});