import React from "react";

import { ANALYTIC_ROUTE, AUTOPARK_ROUTE, HOME_ROUTE } from "../../utils/consts";
import { FaHome, FaTruck } from "react-icons/fa"
import { MdAutoGraph } from "react-icons/md"

export const SidebarData = [
    {   
        title: "Главная",
        icon: <FaHome />,
        path: HOME_ROUTE
    },
    {
        title: "Автопарк",
        icon: <FaTruck />,
        path: AUTOPARK_ROUTE,
    },
    {
        title: "Аналитика",
        icon: <MdAutoGraph />,
        path: ANALYTIC_ROUTE
    }
]