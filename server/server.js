const app = require('./app.js');
const { sequelize } = require('./database/models/');
require('env2')('config.env');

app.set('port', process.env.PORT || 3002);
sequelize.sync().then(() => {
  app.listen(app.get('port'), () => {
  console.log('Our app running on port', app.get('port')); //eslint-disable-line
  });
});