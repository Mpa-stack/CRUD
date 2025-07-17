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
├── app.ts                    # Root App component
```
