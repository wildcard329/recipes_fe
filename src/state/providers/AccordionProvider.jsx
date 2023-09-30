import { useState } from "react";
import { accordionContext } from "../contexts";

const AccordionProvider = ({ children, numDrawers }) => {
  const [accordionDrawers, setAccordionDrawers] = useState(Array.from({ length: numDrawers}, (v, i) => ({ id: `drawer-${i}`, isOpen: true })));

  const toggleDrawer = (drawerId) => {
    const drawer = accordionDrawers.find((drawer) => drawer.id === drawerId);
    const updatedDrawer = { ...drawer, isOpen: !drawer.isOpen };
    const updatedDrawers = accordionDrawers.map((drawerItem) => drawerItem.id === drawerId ? updatedDrawer : drawerItem);
    setAccordionDrawers(() => updatedDrawers);
  };

  const openAllDrawers = () => {
    const updatedDrawers = accordionDrawers.map((drawerItem) => ({ ...drawerItem, isOpen: true }));
    setAccordionDrawers(() => updatedDrawers);
  };

  const closeAllDrawers = () => {
    const updatedDrawers = accordionDrawers.map((drawerItem) => ({ ...drawerItem, isOpen: false }));
    setAccordionDrawers(() => updatedDrawers);
  };

  return(
    <accordionContext.Provider value={{ accordionDrawers, toggleDrawer, closeAllDrawers, openAllDrawers }}>
      {children}
    </accordionContext.Provider>
  )
}

export default AccordionProvider;
