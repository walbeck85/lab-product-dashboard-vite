# Lab: Product Dashboard Manager

## Project Description

This React-based Product Dashboard dynamically displays a list of products for an e-commerce platform. Users can:
- Filter products by availability (All vs. In Stock only)
- Visually distinguish out-of-stock items via conditional rendering
- Remove products from the dashboard
- View responsive styling via CSS Modules

The project meets the requirements of a Flatiron lab assignment, including passing all unit tests with **Jest** and **React Testing Library**.

---

## Screenshot

![Product Dashboard Screenshot](https://imgur.com/a/gJYBQrf)

---

## Setup Instructions

### 1. Fork and Clone the Repository
```sh
git clone <https://github.com/walbeck85/lab-product-dashboard-vite>
cd lab-product-dashboard-vite
npm install
```

### 2. Start the Development Server
```sh
npm run dev
```

This will launch the application in your browser at `http://localhost:5173/` by default.

---

## 3. Run the Tests

```sh
npm test
```

All tests must pass in `src/__tests__/indexTest.test.jsx`. These tests check for:

- Correct rendering of the dashboard
- Accurate display of product data
- Conditional styling based on stock status
- Product removal functionality

---

## Key Features

### Dynamic UI via React
- Components: `App`, `ProductList`, `ProductCard`
- Props and State management
- Filtering logic and conditional rendering

### Styling
- **CSS Modules** for scoped styling
- Out-of-stock products styled with `.outOfStockClass`
- Optional customization with **Material UI** (not required)

### Testing
- **Jest** + **React Testing Library** used to validate user interface and behavior

---

## Component Structure

```
App
 └── ProductList
      └── ProductCard
```

- `App.jsx`: Holds state, filter buttons, and passes data
- `ProductList.jsx`: Renders a list of products
- `ProductCard.jsx`: Renders individual product with conditional styling and remove button

---

## Bonus Feature: Delete Product

Each product card includes a **Remove** button. When clicked:
- The product is removed from the stateful list in `App`
- The DOM updates accordingly
- The test confirms this behavior

---

## Resources

- [React Documentation](https://react.dev)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Material UI](https://mui.com)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com)

---

## Comments in Code

All main files (`App.jsx`, `ProductList.jsx`, `ProductCard.jsx`) include comments explaining:
- State usage
- Prop passing
- Conditional logic
- JSX rendering patterns
