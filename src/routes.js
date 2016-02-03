import home from './controllers/home.js';

export default function (app) {
  app.get('/:name', home.get);
}
