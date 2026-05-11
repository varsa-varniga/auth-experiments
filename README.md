# MERN Auth Lab

A hands-on authentication learning repository focused on understanding and implementing real-world authentication and authorization systems in the MERN stack.

This project is built as a backend engineering practice workspace to deeply understand how authentication works internally instead of only following tutorials.

---

# Goals

- Understand authentication architecture from scratch
- Learn both stateful and stateless authentication systems
- Implement secure backend authentication flows
- Compare sessions, custom tokens, and JWTs
- Practice protected routes and authorization
- Build production-style backend structure

---
# Authentication Systems Covered

## 1. Custom Token Authentication
A manually implemented authentication system where:
- server generates random tokens
- tokens are stored in database
- client sends token for protected requests

### Concepts Learned
- request lifecycle
- token generation
- middleware
- database token validation
- login/logout flow

---

## 2. Session-Based Authentication (Stateful)
Authentication using:
- sessions
- cookies
- server-side session storage

### Concepts Learned
- stateful authentication
- session IDs
- cookie handling
- express-session
- session persistence

---

## 3. JWT Authentication (Stateless)
Authentication using JSON Web Tokens.

### Concepts Learned
- stateless authentication
- access tokens
- refresh tokens
- token verification
- authorization headers


# Planned Features

- User registration
- User login
- Password hashing with bcrypt
- Protected routes
- Logout functionality
- Session management
- JWT access & refresh tokens
- Role-based authorization
- Admin/User roles
- Token expiration handling
- Persistent login
- Middleware architecture
- Authentication error handling

---

# Tech Stack

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication & Security
- bcryptjs
- express-session
- jsonwebtoken
- cookie-parser

## Utilities
- dotenv
- cors
- nodemon

## Future Scope

Planned future implementations:

- Google OAuth
- GitHub OAuth
- Redis session store
- Email verification
- Password reset flow
- Multi-device login handling
- Rate limiting
- CSRF protection
- Secure cookies
- RBAC (Role-Based Access Control)
- 2FA authentication




Author

Built as a backend authentication learning journey in the MERN stack.

~VARSAVARNIGA N M 