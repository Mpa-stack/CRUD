# Angular CRUD App with JSONPlaceholder

This project is a simple Angular 17 CRUD application that demonstrates:
- **Create**, **Read**, **Update**, **Delete** (CRUD) operations
- **Routing** between pages
- API integration with **https://jsonplaceholder.typicode.com**

---

## 📌 Features
- **View all posts** (`GET /posts`)
- **View single post detail** (`GET /posts/{id}`)
- **Create a new post** (`POST /posts`)
- **Update a full post** (`PUT /posts/{id}`)
- **Partially update a post (title only)** (`PATCH /posts/{id}`)
- **Delete a post** (`DELETE /posts/{id}`)

---

## 📸 Screenshots

### Home Page
![Home Page] <img width="1919" height="1003" alt="Screenshot 2025-07-17 143453" src="https://github.com/user-attachments/assets/62450534-1ac7-443e-bb01-495ee664c01e" />


### Posts List
![Posts List] <img width="1919" height="973" alt="Screenshot 2025-07-17 143509" src="https://github.com/user-attachments/assets/a46bc611-3840-4057-bb60-a4ecc6cb799d" />


### Post Detail
![Post Detail] <img width="1919" height="1002" alt="Screenshot 2025-07-17 143738" src="https://github.com/user-attachments/assets/ade7c1d3-6548-4b40-a10f-f59a296205c8" />


### Create New Post
![Create New Post] <img width="1919" height="1002" alt="Screenshot 2025-07-17 143527" src="https://github.com/user-attachments/assets/5f52313f-5536-4a52-b352-81837301c4fb" />


---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 16.x
- Angular CLI >= 17.x

##📂 Project Structure
```
src/app/
│
├── home/                     # Home component
│   ├── home.ts
│   ├── home.html
│   └── home.css
│
├── posts/                    # Posts list, create, and detail components
│   ├── posts.component.ts
│   ├── posts.html
│   ├── post-create.ts
│   ├── post-create.html
│   ├── post-detail.ts
│   ├── post-detail.html
│
├── services/                 # Post service for API requests
│   └── post.ts
│
├── app.routes.ts             # Routing configuration
├── app.config.ts             # Application configuration
└── app.ts                    # Root App component
```
