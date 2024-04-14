## This is Travel Diary Platform Backend with `Express`, `Zod`, `Nodemon`, `JWT`, `Mongoose`

### It allowing users to create, read, update, and delete travel entries.

### Functionality 
- Implemented methods for user registration, login, and profile management.
- Ensured validation and error handling were in place for all user-related activities.
- Incorporated authentication methods like JWT for secure access.
- Developed methods for CRUD operations on diary entries.
- Ensured validation and error handling for diary entry operations.
- Used encapsulation principles for database interactions within class methods.
- Designed routes for user registration, login, and profile management.
- Implemented routes for CRUD operations on diary entries.
- Used middlewares for authentication to secure the API.


It is deployed on render platform and access based on
```bash
    https://swivl-backend-4g6m.onrender.com
```

#### EACH API DOCUMENTATION

1. User Registration:

   ```bash
    https://swivl-backend-4g6m.onrender.com/user/register
   ```
   ## Output
    ```json
        {
        "message": "User registered successfully"
        }
      ```
![image](https://github.com/Saivaraprasad48/swivl_back/assets/93783719/7caf1c4e-279d-4d52-a33f-f63ec64df7cf)

2. User Login:
   ```bash
   https://swivl-backend-4g6m.onrender.com/user/login
   ```
   ## Output
    ```json
        {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            }
      ```
![image](https://github.com/Saivaraprasad48/swivl_back/assets/93783719/f081b2ec-3659-4cb5-b64f-0df8c92f4699)

3. Get user profile for profile management:
   ```bash
   https://swivl-backend-4g6m.onrender.com/user/get-profile
   ```
   ## Output
    ```json
       {
        "_id": "661ba191d39d784264d53114",
        "username": "Ram jan",
        "email": "sai@gmail.com",
        "password": "$2a$10$GaW1UcrQhcPJurzw5ABnRud.jcdMu1pWJi7n/sZngmsEpQueaRmPu",
        "diaryEntries": [],
        "__v": 0
        }
      ```
![image](https://github.com/Saivaraprasad48/swivl_back/assets/93783719/16614226-2263-4d15-9114-d6b1d441c4f4)
