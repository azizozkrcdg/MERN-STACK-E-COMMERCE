import { AdminLayout } from "./AdminLayout"
import MainLayout from "./MainLayout"

const isAdmin = window.location.pathname.startsWith("/admin");

export const Layout = isAdmin ? AdminLayout : MainLayout;