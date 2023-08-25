import { AppHeader, MobileAppHeader } from "./components/header";

const AppLayout = ({ children }) =>
  <div className="app-container">
    <AppHeader />
    <MobileAppHeader />
    {children}
  </div>

export default AppLayout;
