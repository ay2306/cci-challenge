# Coding Club Internship Challenge

#### What Have I Implemented? 
Here is a REST api of products, where user can add, find, delete or update a product

#### What is the data that is stored?
For a product we store the following:
1. Name of the product
2. Type of the product so that we can further use filters if required
3. Stock of the product so that we can only show in-stock products to the customer, or API-callers
4. Price, it is one of the most important data of product

#### How to make an API call?
There are four basic API calls possible so far on the design
API URL: ```host_name/product```
**1.** **GET**: This is used to retrieve data about product from database
- We can ask queries in GET form using four variables
    - **name(string):** This filters request on the basis of name of product
    example: ```host_name/product?name=ayush```
    - **type(integer):** This filters request on the basis of type of product
    example: ```host_name/product?type=1```
    - **price(integer):** This filters request on the basis of price of product
    example: ```host_name/product?price=5000```
    - **stock(integer):** This filters request on the basis of stock of product
    example: ```host_name/product?stock=10```

**2.** **POST**: This is used to Create new product in the database
url example: ```host_name/product```
- Request Body strictly require these 4 keys:
    1. name (string)
    2. price (number)
    3. stock (number)
    4. type (number)

**3.** **PUT**: This is used to Update existing product in the database with their product id
url example: ```host_name/product/product_id```
- Request Body can consist of following keys with update values:
    1. name (string)
    2. price (number)
    3. stock (number)
    4. type (number)

**4.** **DELETE**: This is used to Delete an existing product from database
url example: ```host_name/product/product_id```


#### About Product and Developers?
This is hosted on heroku for deployement purposes and I don't have enough money to deploy it on AWS