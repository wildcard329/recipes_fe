import { AppHeader } from "./components/header";

const AppLayout = ({ children }) =>
  <div>
    <AppHeader />
    {children}
  </div>

export default AppLayout;
