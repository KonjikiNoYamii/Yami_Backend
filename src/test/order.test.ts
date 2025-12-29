import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../app";
import config from "../utils/env";

// describe("POST /api/orders/checkout", () => {
//   const userToken = jwt.sign(
//     { id: 1, role: "USER" },
//     config.JWT_SECRET
//   );

//   it("should return 401 if no token provided", async () => {
//     const res = await request(app)
//       .post("/api/orders/checkout")
//       .send({
//         orderItem: [
//           { productId: 1, quantity: 1 }
//         ]
//       });

//     expect(res.statusCode).toBe(401);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 400 if product not found or stock insufficient", async () => {
//     const res = await request(app)
//       .post("/api/orders/checkout")
//       .set("Authorization", `Bearer ${userToken}`)
//       .send({
//         orderItem: [
//           { productId: 999999, quantity: 10 }
//         ]
//       });

//     expect(res.statusCode).toBe(404);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 201 and create order successfully", async () => {
//     const res = await request(app)
//       .post("/api/orders/checkout")
//       .set("Authorization", `Bearer ${userToken}`)
//       .send({
//         orderItem: [
//           { productId: 1, quantity: 1 }
//         ]
//       });

//     expect(res.statusCode).toBe(201);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id");
//   });
// });


describe("GET /api/orders", () => {
  const token = jwt.sign({ id: 1, role: "ADMIN" }, config.JWT_SECRET);

  it("should return 401 if no token provided", async () => {
    const res = await request(app).get("/api/orders");

    expect(res.statusCode).toBe(401);
    expect(res.body.success).toBe(false);
  });

  it("should return 200 and list of orders", async () => {
    const res = await request(app)
      .get("/api/orders")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});

// describe("GET /api/orders/stats", () => {
//   it("should return 200 and order statistics", async () => {
//     const res = await request(app).get("/api/orders/stats");

//     expect(res.statusCode).toBe(200);
//     expect(res.body.success).toBe(true);
//     expect(typeof res.body.data).toBe("object");
//   });
// });

// describe("GET /api/orders/:id", () => {
//   const token = jwt.sign({ id: 1, role: "USER" }, config.JWT_SECRET);

//   it("should return 401 if no token provided", async () => {
//     const res = await request(app).get("/api/orders/1");

//     expect(res.statusCode).toBe(401);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 404 if order not found", async () => {
//     const res = await request(app)
//       .get("/api/orders/999999")
//       .set("Authorization", `Bearer ${token}`);

//     expect(res.statusCode).toBe(404);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 200 and order detail", async () => {
//     const res = await request(app)
//       .get("/api/orders/1")
//       .set("Authorization", `Bearer ${token}`);

//     expect(res.statusCode).toBe(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id");
//   });
// });

// describe("DELETE /api/orders/:id", () => {
//   const token = jwt.sign({ id: 1, role: "ADMIN" }, config.JWT_SECRET);

//   it("should return 404 if order not found", async () => {
//     const res = await request(app)
//       .delete("/api/orders/999999")
//       .set("Authorization", `Bearer ${token}`);

//     expect(res.statusCode).toBe(400);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 200 and soft delete order", async () => {
//     const res = await request(app)
//       .delete("/api/orders/2")
//       .set("Authorization", `Bearer ${token}`);

//     expect(res.statusCode).toBe(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id");
//   });
// });
