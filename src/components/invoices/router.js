const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { 
  create,
  findAll,
  findOne,
} = require('./actions');
const { create: createValidator } = require('./validators');
const {
  jsonApiParser,
  serialize,
  validate
} = require('./middlewares');

const router = new Router();

router.get('/api/v1/invoices',
  findAll,
  serialize
);
router.get('/api/v1/invoices/:id',
  findOne,
  serialize
);

router.post('/api/v1/invoices',
  bodyParser(),
  jsonApiParser,
  validate(createValidator),
  create,
  serialize
);

module.exports = router;