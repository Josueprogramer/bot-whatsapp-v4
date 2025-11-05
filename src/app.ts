import express from "express";
import { createBot, MemoryDB as Database } from "@builderbot/bot";
import { provider } from "./provider";
import { config } from "./config";
import templates from "./templates";
import path from "path";
import fs from "fs";

// 📂 Directorio de logs
const logDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}
const logPath = path.join(logDir, "core.class.log");
const logStream = fs.createWriteStream(logPath, { flags: "a" });

// 🎯 Redirigir console.log a archivo + consola
const originalLog = console.log;
console.log = function (...args) {
  logStream.write("[LOG] " + args.join(" ") + "\n");
  originalLog.apply(console, args);
};

const app = express();
app.use(express.json());

const PORT = config.PORT || 8080;

const main = async () => {
  const { handleCtx, httpServer } = await createBot({
    flow: templates,
    provider: provider,
    database: new Database(),
  });

  // ✅ Ruta para recibir mensajes de Meta (Webhook POST)
  app.post("/webhook", async (req, res) => {
    try {
      await handleCtx(req.body); // procesa mensajes entrantes
      res.sendStatus(200);
    } catch (err) {
      console.error("❌ Error en webhook:", err);
      res.sendStatus(500);
    }
  });

  // ✅ Ruta para verificación de Webhook (Webhook GET)
  app.get("/webhook", (req, res) => {
    const VERIFY_TOKEN = config.verifyToken;
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token === VERIFY_TOKEN) {
      console.log("✅ Webhook verificado correctamente.");
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  });

  // ✅ Arranca el servidor
  app.listen(PORT, () => console.log(`🚀 Bot corriendo en el puerto ${PORT}`));
};

main();
