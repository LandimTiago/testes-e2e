import { jest, expect, test, describe } from "@jest/globals";

import superTest from "supertest";
import Server from "../../src/server.js";

describe("API E2E Teste Suite -- GET", () => {
  test("GET / - Should return an array", async () => {
    const response = await superTest(Server).get("/");
    const data = JSON.parse(response.text);

    expect(data).toBeInstanceOf(Array);
    expect(data.length).toEqual(0);
  });
});

describe("API E2E Test Suite -- POST", () => {
  test("POST / - Should salve an item and return ok", async () => {
    const response = await superTest(Server)
      .post("/")
      .send({ nome: "tiago landim", age: 27 });
  });
});

describe("API E2E Test Suite -- DELETE", () => {
  test("DELETE / - Should delete database and return ok", async () => {
    const response = await superTest(Server).delete("/");

    const expectedResponse = { ok: 1 };
    expect(JSON.parse(response.text)).toStrictEqual(expectedResponse);
  });
});
