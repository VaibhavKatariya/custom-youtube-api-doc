# Custom YouTube Stats API Documentation Website

### **⚠️ Deprecated**  
> This project is no longer maintained. It was originally created to provide public access to YouTube dislike counts and other statistics after YouTube removed public dislike visibility. The API and documentation provided here are outdated and may no longer function as intended.

## Overview
This project was created on **January 26, 2022**, in response to YouTube removing public dislike counts on videos. The core functionality revolves around an API documentation that updates a Firebase real-time database (RTDB) every minute with my YouTube channel statistics. These stats are then made accessible through a public-facing API documentation website, allowing anyone to view my YouTube statistics, including dislike counts, likes, views, and more.

## Authentication
The website implements **Firebase Authentication** with email and password sign-up and login functionality. A custom email verification system has also been integrated to enhance user security.

### Key Features:
- **Firebase RTDB**: Real-time syncing of YouTube stats.
- **API Documentation**: A dedicated section for API usage and endpoints.
- **Email & Password Auth**: Secure login and sign-up using Firebase Auth.
- **Custom Email Verification**: A unique email verification system for user account validation.
- **Password Reset**: Functionality for users to reset their password if forgotten.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase (Authentication, Real-time Database)
- **API Integration**: YouTube API v3