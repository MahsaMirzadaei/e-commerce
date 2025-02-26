This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Setting Up & Running the Development Server

1️⃣ Create an .env File
Begin by creating a .env file in the root of your project and adding your environment variables same as .env.production

run the development server:

```bash
npm install

npm run dev
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

## Production Build

To build and start the production server:

```bash
npm install

npm run build

npm start
```

The production server will be available at [http://localhost:3000](http://localhost:3000).

## 🌍 Visit Demo

You can check out the deployed project on Vercel:
🔗 [Live Demo](https://e-commerce-five-blond.vercel.app/)

## 📌 Features & Architecture

- Implemented debouncing on the homepage to enhance search performance and reduce unnecessary re-renders.

- Designed reusable and responsive components using MUI for a seamless user experience.

- Extended MUI's default components with custom styles in the theme configuration for better UI consistency.

- API calls are handled in server actions, ensuring optimal performance by fetching data on the server.

- Integrated Redux Toolkit as an example of state management configuration, although not strictly required due to server actions handling state in this case.

- Integrated the ducanh2912/next-pwa package to enable PWA functionality and efficiently cache routes.
