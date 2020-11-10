# Seminario MongoDB

Nicolás Laino - TUDAI 2020

The idea of this Final Proyect is to have an eCommerce backend on MongoDB where administrator is able to CRUD Products and create and list Sales with products associated.

**Steps to Test:**
1. Download Proyect
2. Run npm init
3. Test REST API calls on Postman:

**LIST PRODUCTS:** GET http://localhost:3000/product/
**LIST SPECIFIC PRODUCT :** GET http://localhost:3000/product/%ID%  (ID for example 5fa896feb72078179c3574a4)
**CREATE NEW PRODUCT:** POST http://localhost:3000/product/ 
(BODY FOR EXAMPLE {
    "name": "Product Title",
    "description": "Product Description",
    "stock": "1",
    "price": "900"    
})
**UPDATE EXISTING PRODUCT:** PATCH http://localhost:3000/product/%ID%  (ID for example 5fa896feb72078179c3574a4)
(BODY FOR EXAMPLE {
    "name": "Updated Product Title",
    "description": "Updated Product Description",
    "stock": "2",
    "price": "1800"    
})
**DELETE SPECIFIC PRODUCT :** DELETE http://localhost:3000/product/%ID%  (ID for example 5fa9ac2d2b7a8216f08a9aa7)

**LIST SALES:** GET http://localhost:3000/sales/
**LIST SPECIFIC SALE :** GET http://localhost:3000/sales/%ID%  (ID for example 5fa9dbbdcfc5ef1bf8526773)
**CREATE NEW SALE:** POST http://localhost:3000/sales/ 
(BODY FOR EXAMPLE {
    "direction": "UNICEN 123",
    "priceTotal": "999",
    "productID": "5fa896feb72078179c3574a4"
})


**Database:** MongoDB
**Backend:** NodeJS
**Frameworks:** 
    ExpressJS: NodeJS framework to manage routes and handle multiple different http requests at a specific url.
    Mongoose: Library that provides tools for object modeling in an asynchronous environment. 
    Dotenv: Module used to store and load evironment configuration separated from code.
    CORS: NodeJS package to enable CORS.
    Body-parser: Middleware to parse body request.
**Other Tools:** Postman

**Documentation used:**
1. https://nordicapis.com/building-a-restful-api-using-node-js-and-mongodb/
4. https://www.youtube.com/watch?v=vjf774RKrLc&
3. https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u
2. https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q