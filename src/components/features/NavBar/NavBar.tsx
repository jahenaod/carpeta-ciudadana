import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { LogoutIcon } from "../../svgs/LogoutIcon";
import { HistoryIcon } from "../../svgs/HistoryIcon";
import { HomeIcon } from "../../svgs/HomeIcon";
import {
  DashboardPageBottomSection,
  DashboardPageOptionButton,
} from "./NavBar.styled";
import { useTheme } from "../../../styles/themeContext";

export const NavBar = () => {
  const { theme } = useTheme();
  const isDarkThemeActive = theme === "dark";
  const navigate = useNavigate();
  const isActive = (path: string) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/home");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <>
      <DashboardPageBottomSection>
        <Link to="/dashboard">
          <DashboardPageOptionButton active={isActive("/dashboard")}>
            <HomeIcon
              color={
                isActive("/dashboard")
                  ? isDarkThemeActive
                    ? "#FFFFFF"
                    : "#1A5BE1"
                  : "#777777"
              }
            />
          </DashboardPageOptionButton>
        </Link>
        <Link to="/history">
          <DashboardPageOptionButton active={isActive("/history")}>
            <HistoryIcon
              color={
                isActive("/history")
                  ? isDarkThemeActive
                    ? "#FFFFFF"
                    : "#1A5BE1"
                  : "#777777"
              }
            />
          </DashboardPageOptionButton>
        </Link>

        <DashboardPageOptionButton
          active={isActive("/logout")}
          onClick={handleLogout}
        >
          <LogoutIcon
            color={
              isActive("/logout")
                ? isDarkThemeActive
                  ? "#FFFFFF"
                  : "#1A5BE1"
                : "#777777"
            }
          />
        </DashboardPageOptionButton>
      </DashboardPageBottomSection>
    </>
  );
};
