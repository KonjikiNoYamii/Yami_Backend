import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../app";
import config from "../utils/env";
import path from "node:path";

describe("GET /api/products", () => {
  // const token = jwt.sign({ id: 1, role: 'ADMIN' }, config.JWT_SECRET)

  // it('should return 401 if no token provided', async () => {
  //     const res = await request(app).get('/api/products')

  //     expect(res.statusCode).toEqual(401)
  //     expect(res.body.success).toBe(false)
  // })

  // it('should return 200 and list of products', async () => {
  //     const res = await request(app).get('/api/products').set('Authorization', `Bearer ${token}`)

  //     expect(res.statusCode).toEqual(200)
  //     expect(res.body.success).toBe(true)
  //     expect(Array.isArray(res.body.data)).toBe(true)
  // })

  it("should return 200 and list of products", async () => {
    const res = await request(app).get("/api/products");

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});

// describe("GET /api/products/stats", () => {
//   it("should return 400 route is not found", async () => {
//     const res = await request(app).get("/api/products/statss");

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 200 and list of products", async () => {
//     const res = await request(app).get("/api/products/stats");

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toBe(true);
//     expect(typeof res.body.data).toBe("object");
//   });
// });

// describe("GET /api/products/:id", () => {
//   it("should return 400 or id is not found", async () => {
//     const id = 9999999999;
//     const res = await request(app).get(`/api/products/${id}`);

//     expect(res.statusCode).toEqual(400);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 200 and show products id", async () => {
//     const id = 1;
//     const res = await request(app).get(`/api/products/${id}`);

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toBe(true);
//     expect(res.body.data).toHaveProperty('id');
//   });
// });

// describe("POST /api/products", () => {
//   const token = jwt.sign({ id: 1, role: "ADMIN" }, config.JWT_SECRET);

//   it("should return 401 if no token provided", async () => {
//     const res = await request(app)
//       .post("/api/products")
//       .field("name", "abc")
//       .field("description", "abc")
//       .field("price", 100)
//       .field("stock", 5)
//       .field("categoryId", 20)
//       .attach("image", path.resolve(__dirname, "../../Gosick.jpeg"));

//     expect(res.statusCode).toEqual(401);
//     expect(res.body.success).toBe(false);
//   });

//   it("Should return 201 and product that has been created", async () => {
//     const res = await request(app)
//       .post("/api/products")
//       .field("name", "abc")
//       .field("description", "abc")
//       .field("price", 100)
//       .field("stock", 5)
//       .field("categoryId", 10)
//       .attach("image", path.resolve(__dirname, "../../Gosick.jpeg"))
//       // .send({
//       //     name: "abc",
//       //     description: "def",
//       //     price: 1,
//       //     stock: 1,
//       //     categoryId: 1,
//       //     image: "image/asdas.jpg"
//       // })
//       .set("Authorization", `Bearer ${token}`);

//     expect(res.statusCode).toEqual(201);
//     expect(res.body.success).toBe(true);
//   });
// });

// describe("PUT /api/products/:id", () => {
//   const token = jwt.sign({ id: 1, role: "ADMIN" }, config.JWT_SECRET);
//   it("should return 401 if product not found", async () => {
//     const id = 999999;
//     const res = await request(app)
//       .put(`/api/products/${id}`)
//       .field("name", "apcb")
//       .attach("image", path.resolve(__dirname, "../../Gosick.jpeg"));

//     expect(res.statusCode).toEqual(401);
//     expect(res.body.success).toBe(false);
//   });

//   it("should return 200 and update product with image", async () => {
//     const id = 1;
//     const res = await request(app)
//       .put(`/api/products/${id}`)
//       .field("name", "apcb")
//       .field("description", "def")
//       .field("price", 1)
//       .field("stock", 1)
//       .field("categoryId", 1)
//       .attach("image", path.resolve(__dirname, "../../Gosick.jpeg"))
//       .set("Authorization", `Bearer ${token}`);

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.success).toBe(true);
//   });
// });

// describe("DELETE /api/products/:id", () =>{
//     it("should retun 400 if product not found", async() =>{
//         const id = 999999
//         const res = await request(app)
//         .delete(`/api/products/${id}`)
        
//         expect(res.statusCode).toEqual(400)
//         expect(res.body.success).toBe(false)
//     })

//     it("should return 200 and delete the products", async() =>{
//         const id = 1
//         const res = await request(app)
//         .delete(`/api/products/${id}`)


//         expect(res.statusCode).toEqual(200)
//         expect(res.body.success).toBe(true)
//         expect(res.body.data).toHaveProperty('id')
//         })
// })
