import { Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Box } from "@wso2/oxygen-ui";
import { House, MessageSquare, User, Users } from "@wso2/oxygen-ui-icons-react";
import { useLayout } from "@src/context/layout";
import { useThemeMode } from "@context/theme";
import { useLayoutEffect, useRef } from "react";

export function TabBar() {
  const ref = useRef<HTMLDivElement>(null);
  const { activeTabIndex } = useLayout();
  const mode = useThemeMode();

  useLayoutEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      document.documentElement.style.setProperty("--tab-bar-height", `${entry.contentRect.height}px`);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      position="fixed"
      bgcolor={mode === "dark" ? "black" : "white"}
      bottom={0}
      left={0}
      right={0}
      pt={1}
      pb={4}
    >
      <BottomNavigation value={activeTabIndex} showLabels>
        <BottomNavigationAction component={Link} to="/" label="Home" icon={<House />} disableRipple />
        <BottomNavigationAction component={Link} to="/support" label="Support" icon={<MessageSquare />} disableRipple />
        <BottomNavigationAction component={Link} to="/users" label="Users" icon={<Users />} disableRipple />
        <BottomNavigationAction component={Link} to="/profile" label="Profile" icon={<User />} disableRipple />
      </BottomNavigation>
    </Box>
  );
}
