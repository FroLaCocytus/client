import { createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import TruckStore from "./store/TruckStore";
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";


export const Context = createContext(null);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      truck: new TruckStore(),
      device: new DeviceStore()
    }}
  >
    <App />
  </Context.Provider>
);
