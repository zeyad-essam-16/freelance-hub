# Freelance Directory Web App

A responsive, production-grade freelance marketplace web app built with **Next.js**, **TypeScript**, and **Redux**.  
It supports multilingual functionality (English & Arabic) with advanced search, filters, sorting, and smooth UI animations.

---

## 🚀 Live Demo

[https://freelance-hub-alpha.vercel.app/en](https://freelance-hub-alpha.vercel.app/en)

---

## 🛠 Tools Used

- **Next.js** (latest version 15.3.3) with TypeScript
- **Redux Toolkit** & **React-Redux** for state management
- **next-intl** for internationalization (English & Arabic support)
- **TailwindCSS** for styling
- **Framer Motion** for animations and smooth transitions
- **Lucide React** for SVG icons
- **Swiper** for any carousel/slider needs
- ESLint and TypeScript for code quality and type safety

---

## 🎯 Features & Implementation

- **Search Bar** with debounce for efficient freelancer name searches
- **Filters** including:

  - Service Category
  - Seller Level
  - Budget
  - Delivery Time
  - Secondary Location (with Arabic-to-English partial matching).  
    For example, typing `القاهرة` or partial input like `القا` will still find freelancers with Cairo as their secondary location.
    **Available Secondary Locations for Search:**
    - Abu Dhabi (أبو ظبي)
    - Ajman (عجمان)
    - Alexandria (الإسكندرية)
    - Cairo (القاهرة)
    - Dubai (دبي)
    - Makka (مكة)

- **Sorting Dropdown** fully functional with options:
  - Most Rated
  - Lowest Rated
  - Highest Price
  - Lowest Price
- **Freelancer Cards** include:
  - Profile photo, name, level (with star icons), role, rating (stars + review count), price, and a "See More" button
- **Responsive grid layout** for freelancer cards, adapting smoothly across devices
- **Footer** with:
  - Category listings
  - Client & Freelancer sections
  - Company info
  - Social media icons
  - Language switcher supporting `/en` and `/ar` routes
- **Internationalization** fully implemented using `next-intl` with locale-aware routing and language switcher in the footer
- **State Management**:
  - Redux stores filter, search, and sorting states
  - Middleware and rehydration preserve user preferences across sessions
- **Animations** with Framer Motion for card transitions when filtering or sorting
- **Performance optimizations** such as debounced search input and efficient Redux selectors for sorting and filtering logic
- **Location mapping** feature enabling search by Arabic location input that matches freelancers tagged with English location values (supports partial matching)

---

## 📦 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/zeyad-essam-16/freelance-hub.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.
   It will redirect you to `/en` automatically. You can also visit [http://localhost:3000/ar](http://localhost:3000/ar) to view the Arabic version or use the language switcher in the footer.

---

## 💡 Notes

- The project uses the latest Next.js Turbopack development server for fast builds.
- Internationalization supports RTL layout for Arabic and LTR for English seamlessly.
- The "Secondary Location" filter supports input in Arabic and finds matching English location tags via mapping, enabling smooth bilingual search.
- Animations enhance UX with smooth fade/scale/reorder effects when cards are added or removed or reordered.

---

## 📊 Performance

Achieved a perfect score on Chrome Lighthouse audit across all categories:

![Lighthouse Score](https://res.cloudinary.com/drru4lsys/image/upload/v1750360165/Freelance_Hub_-_Google_Chrome_6_19_2025_10_08_05_PM.png)

---

## 🔗 Links

- **GitHub Repository:** [https://github.com/zeyad-essam-16/freelance-hub](https://github.com/zeyad-essam-16/freelance-hub)
- **Live Demo:** [https://freelance-hub-alpha.vercel.app/](https://freelance-hub-alpha.vercel.app/)
