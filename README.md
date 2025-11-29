# Lumaro – Company Portfolio Website

Lumaro is a modern and interactive website created as a portfolio for a company offering various IT services such as web development, mobile applications, QA, business analysis, consulting, and creative design, as well as opportunities for collaboration and employment.

The website is built with Vite + React 18, featuring reusable components, animations, smooth interactions, and an optimized architecture to provide a polished user experience.

🌐 [Live Demo](https://bazzomir.github.io/lumaro)


## Features

* Portfolio slideshow with project previews and descriptions
* Client request form (personal details, company info, project description, budget)
* Job application form with tab navigation
* Smooth scrolling to sections
* Scroll spy (auto-highlights active section in the navbar)
* ScrollToTop button
* Lottie animations (loading bar, scroll indicator, decorative elements)
* AOS scroll animations
* Reusable and modular components
* Responsive layout built with Bootstrap 5.3
* Footer with company contact information (phone, e-mail, address, social links)


## Technologies

| Technology               | Purpose                                           |
| ------------------------ | ------------------------------------------------- |
| **Vite**                 | Fast development environment and build system     |
| **React 18**             | Modern UI built with functional components        |
| **JavaScript (ES6)**     | Core programming language following modern ECMAScript standards |
| **Bootstrap 5.3**        | Layout, grid system, responsive styling           |
| **React-Router-Dom**     | Client-side navigation                            |
| **React Query**          | Data fetching and caching                         |
| **Custom React Hooks**   | Logic for data handling, observers, and scrolling |
| **AOS**                  | Scroll-triggered animations                       |
| **Lottie**               | SVG/JSON-based animations                         |
| **IntersectionObserver** | Trigger animations and scroll spy functionality   |


## Data (JSON)

All textual and UI-related content is centralized in:
```/public/data.json```

#### This includes:
- section text 
- service descriptions
- portfolio items
- select options & default values for forms 
- UI labels, titles, paragraph, cards items, footer items, iamges, avatar and icons...
The data is fetched through the custom hook (useData.js) and used across the layout.
