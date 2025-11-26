const request = require("supertest");
const app = require("./index");

describe("GET /", function () {
  afterAll(() => {
    app.close();
  });

  it("should return hello world", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World!");
  });
});
