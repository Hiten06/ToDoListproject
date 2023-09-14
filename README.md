# ToDoListproject
Created an TODO CRUD REST APIS where user can create manage and  delete the tasks and also the JWT Authorization is implemented to protect the routes

Swagger UI for the Todo routes and User routes
![swagger-docs](https://github.com/Hiten06/ToDoListproject/assets/58945128/22657232-074f-4616-805e-b695c695f03f)
The Schema of Todo and User 
![swagger_docs2](https://github.com/Hiten06/ToDoListproject/assets/58945128/d8385c07-afda-4ccc-b5ef-c306183a73d0)

1.Registering the new User via Signup Route
![userSignUp](https://github.com/Hiten06/ToDoListproject/assets/58945128/aff1afa9-7b7e-4d97-beaa-112e14bf2a54)

![userSignUp2](https://github.com/Hiten06/ToDoListproject/assets/58945128/fe1cabe0-2546-48fc-8d2e-1d06b199bf7b)

2.Authenticating the newly created user via Login Route and generating the JWT Token 
![userloginIn](https://github.com/Hiten06/ToDoListproject/assets/58945128/db14ef27-dac6-4825-ac76-e94dc39d3ac9)
![userloginIn2](https://github.com/Hiten06/ToDoListproject/assets/58945128/13f42b5b-8bfd-4431-ac88-101df715b703)


Validating the JWT Token so we can access the protected Todo Routes(we can pass JWT Token via request body token or request headers to verify the JWT)
![auth](https://github.com/Hiten06/ToDoListproject/assets/58945128/206d0f97-d5f0-4aab-aa4b-12380d6001aa)

Adding the new Todo Task via addTodo route 

![addTodoTask](https://github.com/Hiten06/ToDoListproject/assets/58945128/4eeca7ba-3ef8-43a0-96a4-abc221a27b24)

![addTodoTask2](https://github.com/Hiten06/ToDoListproject/assets/58945128/eb843728-b6fa-49c9-9ce5-eda60944f6de)

Retriving all the Todo Task via getAllTodos route

![getAllTodoTask](https://github.com/Hiten06/ToDoListproject/assets/58945128/da337827-44aa-408e-ae30-f77e9d353f4f)

![getAllTodoTask1](https://github.com/Hiten06/ToDoListproject/assets/58945128/5705e92f-e035-4cfa-b450-11b1ac10eabf)


Retriving the Single Todo based on the Todo Id via getTodo route

![getSingleTodo](https://github.com/Hiten06/ToDoListproject/assets/58945128/e43e8046-4cc8-45bb-9ffc-9645af922d3c)

Now on the basis of Todo Id we are updating it completed status from false to true put route updateTodo is used for this

![updateTask](https://github.com/Hiten06/ToDoListproject/assets/58945128/a0f65550-fa62-4f26-ad75-760bfc28916e)
![updateTask2](https://github.com/Hiten06/ToDoListproject/assets/58945128/d8f31211-a52c-41b3-80e8-17dafcdeba55)


Deleting the Task by ID via deleteTodo route

![deleteTodo](https://github.com/Hiten06/ToDoListproject/assets/58945128/5f23766e-1ddc-4a2c-8e87-c69656d25bd2)





