import { createServer } from "http";
import { once } from "events";
import { randomUUID } from "crypto"; // Mais rapido que o package UUID pois é nativo

const Database = new Map();

function respondeJSON(data, response) {
  return response.end(JSON.stringify(data));
}

async function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    return respondeJSON([...Database.values()], response);
  }
  if (method === "POST") {
    const body = JSON.parse(await once(request, "data"));
    console.log("Recebido", body);

    const id = randomUUID();
    Database.set(id, body);

    return respondeJSON({ ok: 1 }, response);
  }
  if (method === "DELETE") {
    Database.clear();
    return respondeJSON({ ok: 1 }, response);
  }
}

export default createServer(handler);
