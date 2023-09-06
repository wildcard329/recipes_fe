import { useLocation, useNavigate } from "react-router-dom";

const useReactRouter = () => {
  const nav = useNavigate();
  const location = useLocation();
  const locationState = location.state;
  const routerPath = location.pathname;

  const checkRtMatch = (pathname) => routerPath === pathname;

  const navTo = (path, state=null) => nav(path, state);

  const goBack = () => navTo(-1);

  return {
    checkRtMatch,
    navTo,
    goBack,
    routerPath,
    locationState,
  }
}

export default useReactRouter;
