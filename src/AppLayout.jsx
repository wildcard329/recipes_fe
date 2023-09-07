import { Suspense } from "react";
import { AppHeader } from "./components/header";
import { Spinner1 } from "./components/loader";
import { AppFooter } from "./components/footer";

const AppLayout = ({ children }) =>
  <div className="app-container">
    <AppHeader />
    <Suspense fallback={<Spinner1 />}>
      {children}
    </Suspense>
    <AppFooter />
  </div>

export default AppLayout;
