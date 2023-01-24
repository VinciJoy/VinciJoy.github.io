import { AppNavBar, NavItem, setItemActive } from 'baseui/app-nav-bar';
import { useState } from 'react';

export function CustomHeader() {
  const [mainItems, setMainItems] = useState<NavItem[]>([
    // { label: "Home" },
  ]);

  function handleMainItemSelect(item: NavItem) {
    setMainItems(prev => setItemActive(prev, item));
  }

  return (
    <AppNavBar
      overrides={{
        Root: {
          style: {
            position: "fixed",
            top: 0,
            background: "left",
            width: "100%",
            zIndex: 100,
            border: 0,
          }
        },
        AppName: {
          style: {
            color: "#359381"
          }
        },
        MainMenuItem: {
          style: ({ $active }) => ({
            color: $active ? "white" : "#359381",
            background: "left",
            padding: "10px",
            border: 0,
            ":hover": {
              color: $active ? "white" : "#57b5a3",
            }
          })
        }
      }}
      title="VinciJoy"
      mainItems={mainItems}
      onMainItemSelect={handleMainItemSelect}
    />
  )
}