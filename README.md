
# Personal Portfolio Website

A responsive personal portfolio website built with **HTML5, CSS3, and JavaScript** to showcase my software development experience, technical skills, projects, education, and continuous learning.

The website serves as a central place for recruiters, hiring managers, and fellow developers to learn about my background and explore my work.

## About Me

I'm **Thabo Mavundza**, a software developer based in Gauteng, South Africa.

I hold a **Bachelor of Science in Information Technology** from North-West University, majoring in Software Development, with minors in Accounting and Statistics.

I have one year of professional experience developing full-stack applications using Angular, ASP.NET Core, C#, Entity Framework Core, and SQL Server.

My interests include full-stack development, software architecture, database design, data analytics, and building reliable, maintainable applications.

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Website structure and semantic markup |
| CSS3 | Styling, layouts, animations, and responsiveness |
| JavaScript | Interactive functionality and DOM manipulation |
| CSS Grid | Responsive project and bookshelf layouts |
| Flexbox | Component alignment and navigation |
| Google Fonts | Typography |
| Git & GitHub | Version control |

The website is built using vanilla HTML, CSS, and JavaScript without frontend frameworks.

## Features

### Responsive Design

- Desktop, tablet, and mobile layouts
- Responsive navigation with a hamburger menu
- CSS Grid and Flexbox layouts
- Mobile-friendly cards and sections

### Interactive User Interface

- Terminal-inspired typewriter animation
- Custom animated cursor with a gradient glow
- Hover animations and transitions
- Smooth scrolling between sections
- Interactive navigation menu

### About Section

- Professional summary
- Educational background
- Certifications and achievements

### Technical Skills

Skills organised into categories:

- Frontend development
- Backend development
- Databases
- Development tools and practices
- Data analytics
- IT support and systems

Includes a code-editor-inspired skills display.

### Professional Experience

Highlights my experience as a Software Developer Intern at Scenivision and as a Java Supplemental Instruction Facilitator at North-West University.

### Projects

#### BrightSmile Dental — Live Full-Stack Application

A deployed, fully connected dental practice management portfolio application using **Angular 21, TypeScript, ASP.NET Core 10 Web API, Entity Framework Core 10 and Supabase PostgreSQL**.

- **Hosting:** Angular on Netlify, ASP.NET Core API on Render, PostgreSQL on Supabase.
- **Authentication:** JWT bearer authentication, BCrypt password hashing and Admin / Dentist / Patient roles.
- **Patient workflows:** registration, profile management, booking, rescheduling and cancellation.
- **Dentist workflows:** assigned appointment management and authorized status transitions.
- **Admin workflows:** service and dentist management, patient records, reporting and CSV export.
- **Engineering:** 30-minute scheduling rules, PostgreSQL transactions and advisory locks, OpenAPI / Scalar reference, Docker backend build.
- **Documentation:** system architecture, ERD and data dictionary, software requirements, security design, deployment guide and testing strategy.
- **Quality status:** manual API checks recorded; automated tests and GitHub Actions CI/CD quality gates are planned.

[Live Application](https://brightsmiledentalfrontend.netlify.app/) · [Case Study](https://thabo.netlify.app/brightsmile.html) · [Frontend Source](https://github.com/AriesMaster/BrightSmileDentalFrontEnd) · [Backend Source](https://github.com/AriesMaster/BrightSmileDentalBackEnd) · [Engineering Documentation](https://github.com/AriesMaster/BrightSmileDentalBackEnd/tree/master/docs)

#### StockFlow — Stock and Purchase Order Management (In Development)

Angular 22 and Java/Spring Boot portfolio project with Supabase PostgreSQL, Flyway and automated tests. Domain rules, database schema and frontend infrastructure are implemented; persistence mappings, business endpoints and screens remain in development. Latest reported runs: 13 JUnit and 4 Vitest tests passed.

[Frontend](https://github.com/AriesMaster/StockPurchaseOrderFrontend) · [Backend](https://github.com/AriesMaster/StockPurchaseOrderBackend) · [Engineering Documentation](https://github.com/AriesMaster/StockPurchaseOrderBackend/tree/main/docs) · [Database Design](https://github.com/AriesMaster/StockPurchaseOrderBackend/blob/main/docs/database-design.md) · [API Contract](https://github.com/AriesMaster/StockPurchaseOrderBackend/blob/main/docs/api-contract.md)

#### Tech Trends REST API

An ASP.NET Core RESTful API demonstrating CRUD operations, authentication, and structured API development.

[View Repository](https://github.com/AriesMaster/Tech-Trends-Management-API-System-CRUD-RESTful-API)

#### Telemetry Portal MVC

An ASP.NET Core MVC application demonstrating database integration, CRUD functionality, and software design principles.

[View Repository](https://github.com/AriesMaster/CRUD-functionality-architectural-patterns-and-design-principles-ASP.NET-Core-MVC)

### Developer Bookshelf

A collection of software engineering and architecture books that influence my approach to software development.

Topics include:

- Software design principles
- Distributed systems
- Software architecture
- Domain-driven design
- Engineering practices

The Bookshelf uses a responsive CSS Grid layout with consistent book cover dimensions and interactive cards.

### Contact

Provides access to my professional contact information, GitHub profile, and LinkedIn profile.

## Project Structure

```text
portfolio-website/
│
├── index.html
├── style.css
├── mediaqQueries.css
├── script.js
├── README.md
│
└── assets/
    ├── profile-pic11.png
    ├── cv.pdf
    ├── linkedin.png
    ├── github.png
    ├── email.png
    └── ...other images and book covers
```

## Getting Started

### Prerequisites

- A modern web browser
- Git (optional)
- A code editor such as Visual Studio Code

No Node.js installation, package manager, or build process is required.

### Installation

Clone the repository:

```bash
git clone https://github.com/AriesMaster/hmtl-css-javascript-portfolio.git
```

Navigate to the project directory:

```bash
cd hmtl-css-javascript-portfolio
```

Open `index.html` in your browser.

Alternatively, use the Live Server extension in Visual Studio Code for automatic browser refresh during development.

## Responsive Layout

The website uses CSS media queries to adapt its layout to different screen sizes.

| Screen Size | Layout |
|-------------|--------|
| Desktop | Full navigation and multi-column layouts |
| Tablet | Hamburger navigation and adjusted grids |
| Mobile | Compact layouts and responsive cards |
| Small mobile | Single-column bookshelf and simplified spacing |

## Design Approach

The website follows a clean, minimalist design with developer-inspired visual elements.

Key design choices include:

- White background with a subtle dotted pattern
- Blue accent colours
- Rounded cards with soft shadows
- Terminal-inspired headings
- Code-editor-inspired components
- Responsive layouts
- Lightweight vanilla JavaScript interactions

The goal is to maintain a professional appearance while reflecting my interest in software engineering.

## Future Improvements

- [ ] Dark mode support
- [ ] Project screenshots and detailed case studies
- [ ] Improved accessibility and keyboard navigation
- [ ] Performance optimisation
- [ ] Automated deployment workflows
- [ ] Additional portfolio projects
- [ ] Technical writing and learning resources

## Author

**Thabo Mavundza**

Software Developer | Full-Stack Development | Data & Analytics

- **GitHub:** [AriesMaster](https://github.com/AriesMaster)
- **LinkedIn:** [Thabo Mavundza](https://linkedin.com/in/thabo-mavundza)
- **Portfolio:** [thabo.netlify.app](https://thabo.netlify.app/)

## License

Copyright © 2026 Thabo Mavundza.

All rights reserved unless a separate license is added to this repository.
