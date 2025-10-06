# 🌸 FLORAL BLYSS 💐

**Floral Blyss** is a modern, responsive front-end application for an elegant online flower shop, built using **React** and **Vite**. It features a clean, sophisticated design implemented with **Tailwind CSS**.

---

## 🚀 Tech Stack

| Category | Technology | Version / Tooling |
| :--- | :--- | :--- |
| **Framework** | **React** | ^19.1.1 |
| **Build Tool** | **Vite** | ^7.1.7 |
| **Styling** | **Tailwind CSS** | ^4.1.14 (with `@tailwindcss/vite` plugin) |
| **Linting** | **ESLint** | ^9.36.0 (with React Hooks and Refresh plugins) |
| **Icons** | **Lucide React** | ^0.544.0 |

---

## 📦 Project Structure

The main application components and sections are logically organized within the `src/` directory:

```

└── src/
[cite\_start]├── App.jsx             \# Main application layout, importing all sections
[cite\_start]├── index.css           \# Global styles and Tailwind imports 
├── assets/
[cite\_start]│   └── data.js         \# Placeholder for data (currently empty) 
├── components/
[cite\_start]│   ├── MarqueeText.jsx \# Component for scrolling text (currently empty)
[cite\_start]│   ├── NavBar.jsx      \# Sticky, responsive navigation bar 
[cite\_start]│   ├── ProductCard.jsx \# Reusable component to display a single product
[cite\_start]│   └── ui/             \# Reusable UI elements 
│       ├── Button.jsx
│       ├── SocialIcon.jsx
│       └── TestimonialCard.jsx
[cite\_start]└── sections/           \# Large, page-level components 
├── Footer.jsx
[cite\_start]├── FutureFavouritesSlider.jsx \# Auto-playing, full-screen image slider 
[cite\_start]├── HeroSlider.jsx             \# Main homepage hero slider 
[cite\_start]├── ProductsShowcase.jsx       \# Grid display with category filters 
[cite\_start]├── SloganMarquee.jsx          \# Scrolling slogan banner 
[cite\_start]└── Testimonials.jsx           \# Customer feedback section 

````

---

## ✨ Key Features

The application is composed of the following major sections integrated in `App.jsx`:

1.  **NavBar:** Sticky navigation with links (Home, Bouquets, Plants, About) and a prominent "Order Now" CTA button.
2.  **HeroSlider:** A primary, high-impact image slider showcasing elegance and key service messages.
3.  **ProductsShowcase:** A product grid with filtering functionality by category (**Bouquets**, **Arrangements**, **Plants**).
4.  **FutureFavouritesSlider:** A dedicated auto-playing slider for featured collections (e.g., Seasonal, Wedding, Exotic Orchids).
5.  **SloganMarquee:** A scrolling banner highlighting brand promises like "**FRESHNESS GUARANTEED**" and "**SAME-DAY DELIVERY**".
6.  **Testimonials:** A responsive grid showing customer feedback from various clients (e.g., Wedding Planner, Corporate Client).
7.  **Footer:** Contains quick links, contact info, social media icons, and a full-width **"Call Now"** CTA bar.

---

## ⚙️ Getting Started

### Prerequisites

You need **Node.js 20** installed on your system[cite: 138].

### Installation

1.  Clone the repository:
    ```bash
    git clone shaayar/Floral_Blyss
    cd floral-blyss
    ```
2.  Install the dependencies:
    ```bash
    npm install
    # or using the command from dev.nix:
    # npm i --no-audit --no-progress --timing
    ```

### Available Scripts

In the project directory, you can run:

* **`npm run dev`**: Starts the development server with **Vite**.
* **`npm run build`**: Builds the app for production in the `dist` folder.
* **`npm run lint`**: Runs ESLint against the project file.
* **`npm run preview`**: Serves the production build locall.

---

## 🛠️ Configuration Details

* **Vite:** Uses the standard React plugin for **Fast Refresh** and integrates Tailwind CSS directly via a plugin.
* **ESLint:** Configured to lint `.{js,jsx}` files and includes rules for React hooks and refresh mechanisms. It is set to ignore the `dist` directory.
* **Nix Environment:** For development environments like Google IDX, the project is configured to use the `stable-24.05` channel and includes `nodejs_20`.