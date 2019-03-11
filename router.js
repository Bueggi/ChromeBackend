const Router = require("koa-router");
const router = new Router();
const controller = require("./controller/");

console.log(controller);

// getting Information about a specific video
router.get("/getVideo/:id", controller.getVideo);

router.post("/addNewVideo", controller.addNewVideo);
router.post("/test", controller.paramsTest);

module.exports = router;
