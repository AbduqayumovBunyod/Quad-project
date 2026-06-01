import { createBrowserRouter, Navigate } from "react-router-dom";

// 🏢 Layoutlar
import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// 📄 Public (Mijoz) sahifalari
import AboutLayout from "../pages/public/About/AboutLayout";
import BasketLayout from "../pages/public/Basket/BasketLayout";
import HomeLayout from "../pages/public/Home/HomeLayout";
import MenuLayout from "../pages/public/Menu/MenuLayout";
import NewsLayout from "../pages/public/News/NewsLayout";

// 🔐 Auth sahifalari (Vaqtinchalik mock, o'zingizda fayl bo'lsa import qilasiz)
import Login from "../pages/auth/Login";

// 👨‍🍳 Dashboard (Ichki tizim) sahifalari
const WaiterTables = () => (
  <div className="p-8">🍽️ Ofitsiant uchun Stol paneli</div>
);

export const router = createBrowserRouter([
  {
    // 🌐 1. Tashqi sayt qismi (Mijozlar uchun)
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomeLayout /> },
      { path: "menu", element: <MenuLayout /> },
      { path: "news", element: <NewsLayout /> },
      { path: "about", element: <AboutLayout /> },
      { path: "basket", element: <BasketLayout /> },
    ],
  },

  // 🔐 2. AVTORIZATSIYA (Siz aytgan /auth/login yo'li)
  {
    path: "/auth",
    children: [
      { index: true, element: <Navigate to="/auth/login" replace /> }, // /auth o'zi yozilsa ham /auth/login ga o'tadi
      { path: "login", element: <Login /> }, // 👈 Mana o'sha /auth/login manzili!
    ],
  },

  // 🔄 Eski yo'lni yangisiga yo'naltirish (Xatolik bermasligi uchun)
  {
    path: "/login",
    element: <Navigate to="/auth/login" replace />,
  },

  {
    // 👨‍🍳 3. Ichki tizim (Dashboard qismi)
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/waiter/tables" replace />,
      },
      {
        path: "waiter",
        children: [{ path: "tables", element: <WaiterTables /> }],
      },
    ],
  },
  {
    // 🛑 4. Noto'g'ri havola kiritilganda bosh sahifaga qaytarish
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
