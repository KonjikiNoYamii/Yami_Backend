import request from "supertest";
import app from "../app";

describe("GET /api/category", () => {
  it("should return 200 and list of categories", async () => {
    const res = await request(app).get("/api/category");

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});

// describe("GET /api/category/:id", () => {
//   it("should return 404 if category not found", async () => {
//     const id = 999999;
//     const res = await request(app).get(`/api/category/${id}`);

//     expect(res.statusCode).toEqual(404);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 200 and category detail", async () => {
//     const id = 1;
//     const res = await request(app).get(`/api/category/${id}`);

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id");
//   });
// });

// describe("POST /api/category", () => {
//   it("should return 400 if payload invalid", async () => {
//     const res = await request(app)
//       .post("/api/category")
//       .send({});

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 201 and create category", async () => {
//     const res = await request(app)
//       .post("/api/category")
//       .send({
//         name: "Komik Test",
//       });

//     expect(res.statusCode).toEqual(201);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id");
//   });
// });

// describe("PUT /api/category/:id", () => {
//   it("should return 400 if category not found", async () => {
//     const id = 999999;
//     const res = await request(app)
//       .put(`/api/category/${id}`)
//       .send({ name: "Majalah Baru" });

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 201 and update category", async () => {
//     const id = 1;
//     const res = await request(app)
//       .put(`/api/category/${id}`)
//       .send({ name: "Majalah" });

//     expect(res.statusCode).toEqual(201);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id");
//   });
// });

// describe("DELETE /api/category/:id", () => {
//   it("should return 404 if category not found", async () => {
//     const id = 999999;
//     const res = await request(app)
//       .delete(`/api/category/${id}`);

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 200 and delete category", async () => {
//     const id = 1;
//     const res = await request(app)
//       .delete(`/api/category/${id}`);

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty("id");
//   });
// });
