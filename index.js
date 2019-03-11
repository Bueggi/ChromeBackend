const Koa = require("koa");
const bodyparser = require("koa-body");
const app = new Koa();
const router = require("./router");
const db = require("./db");
const cors = require("@koa/cors");

app
  .use(cors())
  .use(bodyparser())
  .use(router.routes());

(async () => {
  try {
    await db.launch();
    app.listen(4000, () => {
      console.log("server running on port 4K");
    });
  } catch (e) {
    throw new Error(e);
  }
})();
