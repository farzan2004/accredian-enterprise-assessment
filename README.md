# Accredian Enterprise Assessment

A responsive landing page for Accredian Enterprise built using **Next.js**, **Tailwind CSS**, and **TypeScript**. The project closely replicates the provided design while incorporating reusable components, smooth navigation, form validation, and backend integration for enquiry submissions.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- MongoDB Atlas
- Mongoose
- React Hot Toast
- Lucide React

---

# Setup Instructions

## 1. Clone the repository

```bash
git clone https://github.com/farzan2004/accredian-enterprise-assessment.git
cd accredian_assignment
```

## 2. Install dependencies

```bash
npm install
```

## 3. Configure environment variables

Create a `.env.local` file in the project root.

```env
MONGODB_URI=mongodb+srv://farzanrashid2004_db_user:R1tXnY0Fooqejk6t@accredian-assignment.q2bzly0.mongodb.net/?appName=accredian-assignment
```

## 4. Run the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

# Project Features

- Fully responsive landing page
- Component-based architecture
- Smooth scrolling navigation
- Active navbar section highlighting
- Enquiry modal
- Form validation using React Hook Form
- MongoDB integration for enquiry submissions
- Success and error toast notifications
- Reusable UI components
- Modern responsive layout

---

# Approach Taken

The application was built using a modular, component-driven architecture to improve maintainability and scalability.

### UI

- Built reusable layout and UI components.
- Used Tailwind CSS for responsive styling.
- Followed a mobile-first approach.

### Navigation

- Implemented smooth scrolling between sections.
- Added active section highlighting using the Intersection Observer API.

### Form Handling

The enquiry form uses React Hook Form for:

- client-side validation
- controlled submission
- field constraints
- error messaging
- form reset after closing/submission

### Backend

A Next.js Route Handler (`/api/enquiry`) handles form submissions.

Submitted enquiries are stored in MongoDB Atlas using Mongoose.

Project structure:

```
Form
    ↓
API Route
    ↓
MongoDB Atlas
```

---

# AI Usage

AI tools (ChatGPT) were used as a development assistant for:

- discussing implementation approaches
- debugging React and Next.js issues
- refining UI components
- improving validation logic
- reviewing code structure
- generating documentation

All architectural decisions, implementation, testing, and final integration were completed manually.

---

# Improvements With More Time

Given additional time, I would:

- add loading states during form submission
- implement email confirmation or notification service
- write unit and integration tests
- optimize images and intial bundle using Next.js Image optimization and Lazy Loading optimization
- create an admin dashboard to view submitted enquiries
- implement rate limiting for the API endpoint

---

# Deployment

The application is deployed on Vercel.

```
https://accredian-enterprise-assessment.vercel.app/
```

---

# Author

Farzan Rashid
