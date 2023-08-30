import { AppHeader } from "./components/header";

const AppLayout = ({ children }) =>
  <div className="app-container">
    <AppHeader />
    {children}
  </div>

export default AppLayout;
