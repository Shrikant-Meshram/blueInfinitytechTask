# blueInfinitytechTask

# for run the Application enter following command
1. cd blueInfinitytechTask
2. npm run dev

# for testing, use postman 
1. sign up Api use below url 
  method : post
  url    : http://localhost:4000/singup
  
  enter the data in postman body like this:

  {
    "Name":"kiran",
    "mobile":"7856988965", 
    "email":"ms99@gmail.com",
    "address":"surat",
    "password":"dhytr5287"
}


2. login Api use following url
  method:Post
  url:http://localhost:4000/login

   enter the data in postman body like this:

   {
      "email":"msr@mail.com",
    "password":"dhytr5287"
   }



3.profile Api 
method: get
url   : http://localhost:4000/profile

 enter the data in postman header section :
 Authorisation : "___enter token here___"


