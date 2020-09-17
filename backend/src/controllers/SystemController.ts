import Express from "express";
import SystemInformation from "systeminformation";

const router = Express.Router();

router.get("/cpu", (request, response) => {
  SystemInformation.cpu().then((cpu) => {
    response.json(cpu);
  });
});

router.get("/memory", (request, response) => {
  SystemInformation.mem().then((memory) => {
    response.json(memory);
  });
});

router.get("/", (request, response) => {
  SystemInformation.system().then((system) => {
    response.json(system);
  });
});

router.get("/battery", (request, response) => {
  SystemInformation.battery().then((system) => {
    response.json(system);
  });
});

export default router;
