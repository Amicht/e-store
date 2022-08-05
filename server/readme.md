## API Doc

### Products
Endpoint:  http://localhost:3001/api

| Description            | Method   | Path           | Request / Response     
| -------------          | -------- | ----------     | -------- |
| get all products       | GET      | /products      | *Response* : <br>  [  { <br> id:1,<br> name: "Bamba", <br>category_id: 2,<br> price: 8.90, <br>   image: '/api/images/kdsjhkjhksdbihcbhjcj.jpg' ,<br> }  ]       |
| get products by partial searcword | GET | /search/:searchword | *Response* : <br>  [  { <br> id:1,<br> name: "Bamba", <br>category_id: 2,<br> price: 8.90, <br>   image: '/api/images/kdsjhkjhksdbihcbhjcj.jpg' ,<br> }  ] |
| get products by food category | GET | /category/:categoryId | *Response* : <br>  [  { <br> id:1,<br> name: "Bamba", <br>category_id: 2,<br> price: 8.90, <br>   image: '/api/images/kdsjhkjhksdbihcbhjcj.jpg' ,<br> }  ] |
| add new product | POST | /products | *Request* : <br>  { <br> name: "Bamba", <br>category_id: 2,<br> price: 8.90, <br>   image: *File*<br> } <br> *Response* : none  |
| update product | PUT | /products | *Request* : <br>  { <br> name: "Bamba 2", <br>category_id: 3,<br> price: 9.90, <br>  } <br> *Response* : none |

