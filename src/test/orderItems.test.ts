import request from "supertest";
import app from "../app";

describe("GET /api/order-items", () => {
  it("should return 200 and list of order items", async () => {
    const res = await request(app).get("/api/order-items");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});

// describe("GET /api/order-items/:id", () => {
//   it("should return 404 if order item not found", async () => {
//     const id = 999999;
//     const res = await request(app).get(`/api/order-items/${id}`);

//     expect(res.statusCode).toBe(404);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 200 and order item detail", async () => {
//     const id = 1;
//     const res = await request(app).get(`/api/order-items/${id}`);

//     expect(res.statusCode).toBe(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id");
//   });
// });

// describe("POST /api/order-items", () => {
//   it("should return 400 if payload invalid", async () => {
//     const res = await request(app)
//       .post("/api/order-items")
//       .send({
//         orderId: 1,
//         productId: 1
//         // quantity missing
//       });

//     expect(res.statusCode).toBe(400);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 201 and create order item", async () => {
//     const res = await request(app)
//       .post("/api/order-items")
//       .send({
//         orderId: 1,
//         productId: 1,
//         quantity: 2,
//       });

//     expect(res.statusCode).toBe(201);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id");
//   });
// });

// describe("PUT /api/order-items/:id", () => {
//   it("should return 404 if order item not found", async () => {
//     const id = 999999;
//     const res = await request(app)
//       .put(`/api/order-items/${id}`)
//       .send({ quantity: 5 });

//     expect(res.statusCode).toBe(400);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 200 and update order item", async () => {
//     const id = 1;
//     const res = await request(app)
//       .put(`/api/order-items/${id}`)
//       .send({ quantity: 5 });

//     expect(res.statusCode).toBe(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id");
//   });
// });

// describe("DELETE /api/order-items/:id", () => {
//   it("should return 404 if order item not found", async () => {
//     const id = 999999;
//     const res = await request(app)
//       .delete(`/api/order-items/${id}`);

//     expect(res.statusCode).toBe(400);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 200 and soft delete order item", async () => {
//     const id = 1;
//     const res = await request(app)
//       .delete(`/api/order-items/${id}`);

//     expect(res.statusCode).toBe(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id");
//   });
// });
