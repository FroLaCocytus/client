import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import TruckPage from "./pages/TruckPage";
import Autopark from "./pages/Autopark";
import Home from "./pages/Home";
import Analytic from "./pages/Analytic";
import {
  ADDUSER_ROUTE,
  LOGIN_ROUTE,
  TRUCK_ROUTE,
  AUTOPARK_ROUTE,
  HOME_ROUTE,
  ANALYTIC_ROUTE
} from "./utils/consts";

export const authAdminRoutes = [
  {
    path: ADDUSER_ROUTE,
    Element: <Admin />
  }
]
export const authRoutes = [
  {
    path: HOME_ROUTE,
    Element: <Home />
  },
  {
    path: TRUCK_ROUTE + "/:id",
    Element: <TruckPage />
  },
  {
    path: AUTOPARK_ROUTE,
    Element: <Autopark />
  },
  {
    path: ANALYTIC_ROUTE,
    Element: <Analytic />
  }
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Element: <Auth />
  }
];
