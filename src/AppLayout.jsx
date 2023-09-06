import { Suspense } from "react";
import { AppHeader } from "./components/header";
import { Spinner1 } from "./components/loader";

const AppLayout = ({ children }) =>
  <div className="app-container">
    <AppHeader />
    <Suspense fallback={<Spinner1 />}>
      {children}
    </Suspense>
  </div>

export default AppLayout;
