import { Suspense } from "react";
import { AppHeader } from "./components/header";
import { LoadingPage } from "./pages";
import { AppFooter } from "./components/footer";
import { SubHeader } from "./components/subheader";

const AppLayout = ({ children }) =>
  <div className="app-container">
    <AppHeader />
    <SubHeader />
    <Suspense fallback={<LoadingPage />}>
      {children}
    </Suspense>
    <AppFooter />
  </div>

export default AppLayout;
