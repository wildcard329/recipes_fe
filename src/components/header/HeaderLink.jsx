import { useState, useEffect } from "react";
import { RouterLink } from "../router";
import { useReactRouter } from "../../utils/customhooks";

const HeaderLink = ({ path, classname, label }) => {
  const [isMatchingRt, setIsMatchingRt] = useState(false);
  const { checkRtMatch, routerPath } = useReactRouter();
  
  useEffect(() => {
    setIsMatchingRt(checkRtMatch(path));
  }, [routerPath]);

  return(
    <RouterLink path={path} classname={isMatchingRt ? classname + ' underline' : classname} label={label} />
  )
}

export default HeaderLink;
