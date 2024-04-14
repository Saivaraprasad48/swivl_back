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

3. Get a user profile for profile management:

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

4. Add a new diary:

   ```bash
   https://swivl-backend-4g6m.onrender.com/diary/new-diary
   ```
   ## Output
    ```json
           {
        "message": "Diary entry created successfully",
        "diaryEntry": {
            "title": "Learn HTML",
            "description": "Learning HTML makes you only structure the elements on page",
            "date": "2024-04-14T09:57:47.833Z",
            "location": "India",
            "user": "661ba191d39d784264d53114",
            "_id": "661ba89b4e2c9e053da001c5",
            "__v": 0
        }
        }
      ```
![image](https://github.com/Saivaraprasad48/swivl_back/assets/93783719/48b1f42b-b8b1-4bad-8a28-c4a1a440f5fa)

5. Get all diaries:

   ```bash
   https://swivl-backend-4g6m.onrender.com/diary/user-diaries
   ```
   ## Output
    ```json
            [
        {
            "_id": "661ba89b4e2c9e053da001c5",
            "title": "Learn HTML",
            "description": "Learning HTML makes you only structure the elements on page",
            "date": "2024-04-14T09:57:47.833Z",
            "location": "India",
            "user": "661ba191d39d784264d53114",
            "__v": 0
        },
        {
            "_id": "661ba9274e2c9e053da001c9",
            "title": "Learn CSS",
            "description": "Learning CSS makes you only styling the webapge",
            "date": "2024-04-14T10:00:07.060Z",
            "location": "India",
            "user": "661ba191d39d784264d53114",
            "__v": 0
        }
            ]
      ```
![image](https://github.com/Saivaraprasad48/swivl_back/assets/93783719/6515098d-83ca-48f8-88f5-bf31e9209d9b)


6. Update the specific diary:

   ```bash
   https://swivl-backend-4g6m.onrender.com/diary/update-diary/:id
   ```
   ## Output
    ```json
               {
        "message": "Diary entry updated successfully",
        "diaryEntry": {
            "_id": "661ba89b4e2c9e053da001c5",
            "title": "Learn JS",
            "description": "Learning JS makes you dynamic the webapge",
            "date": "2024-04-14T09:57:47.833Z",
            "location": "India",
            "user": "661ba191d39d784264d53114",
            "__v": 0
        }
            }
      ```
![image](https://github.com/Saivaraprasad48/swivl_back/assets/93783719/57c9fa7a-66c7-4cd6-82cb-a62a397e7014)

7. Delete the specific diary:

   ```bash
   https://swivl-backend-4g6m.onrender.com/diary/remove-diary/:id
   ```
   ## Output
    ```json
              {
        "message": "Diary entry deleted successfully",
        "diaryEntry": {
            "_id": "661ba89b4e2c9e053da001c5",
            "title": "Learn JS",
            "description": "Learning JS makes you dynamic the webapge",
            "date": "2024-04-14T09:57:47.833Z",
            "location": "India",
            "user": "661ba191d39d784264d53114",
            "__v": 0
        }
        }
      ```
![image](https://github.com/Saivaraprasad48/swivl_back/assets/93783719/c62e487b-c3d2-4fd7-8026-a1f93e68ffb9)

8. Update the profile management:

   ```bash
   https://swivl-backend-4g6m.onrender.com/user/update-profile
   ```
   ## Output
    ```json
            {
        "message": "User information updated successfully",
        "user": {
            "_id": "661ba191d39d784264d53114",
            "username": "Sai Vara Prasad",
            "email": "sai@gmail.com",
            "password": "$2a$10$GaW1UcrQhcPJurzw5ABnRud.jcdMu1pWJi7n/sZngmsEpQueaRmPu",
            "diaryEntries": [
                "661ba89b4e2c9e053da001c5",
                "661ba9274e2c9e053da001c9"
            ],
            "__v": 0
        }
        }
      ```
![image](https://github.com/Saivaraprasad48/swivl_back/assets/93783719/ef21b558-ec31-4dd3-9dd9-36232ff9c3d5)


9. Delete the profile management:

   ```bash
   https://swivl-backend-4g6m.onrender.com/user/delete-profile
   ```
   ## Output
    ```json
          {
        "message": "User account deleted successfully"
        }
      ```
![image](https://github.com/Saivaraprasad48/swivl_back/assets/93783719/3eaaf0ef-84ba-4c03-9ef9-610bf225b220)


