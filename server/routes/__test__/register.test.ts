import request from "supertest";
import { app } from "../../app";

describe("Successful Signin", () => {
  const email = "test@test.com";
  const password = "password";
  it("responds with a cookie when given valid credentials", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({ email, password })
      .expect(201);

    const response = await request(app)
      .post("/api/auth/login")
      .send({ email, password })
      .expect(200);
    expect(response.get("Set-Cookie")).toBeDefined();
  });
});

describe("Unsuccessful Signin", () => {
  const email = "test@test.com";
  const password = "password";
  it("fails when an incorrect password is supplied", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({ email, password })
      .expect(201);

    await request(app)
      .post("/api/auth/login")
      .send({ email, password: "incorrectpassword" })
      .expect(400);
  });

  it("fails when an email that does not exist is supplied", async () => {
    return request(app)
      .post("/api/auth/login")
      .send({ email: "", password })
      .expect(400);
  });

  it("fails when an incorrect email is supplied", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({ email, password })
      .expect(201);

    await request(app)
      .post("/api/auth/login")
      .send({ email: "incorrectemail@test.com", password })
      .expect(400);
  });
});
