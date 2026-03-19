import type { ReactNode } from "react";
import type { AppBarVariant } from "@src/context/layout";
import { FilterAppBarSlot } from "@pages/AllItemsPage";
import { MessageSquareQuote } from "@wso2/oxygen-ui-icons-react";
import { Box, pxToRem } from "@wso2/oxygen-ui";

type AppBarConfig = {
  showNotifications: boolean;
  showProjectSelector: boolean;
  showChips: boolean;
};

export interface MainLayoutConfigType {
  path: string;
  title?: string;
  tabIndex: number;
  showAppBar?: boolean;
  hasBackAction?: boolean;
  appBarVariant?: AppBarVariant;
  overlineSlot?: ReactNode | string;
  subtitleSlot?: ReactNode | string;
  startSlot?: ReactNode;
  endSlot?: ReactNode;
  appBarSlots?: ReactNode;
}

export const APP_BAR_CONFIG: Record<AppBarVariant, AppBarConfig> = {
  default: {
    showNotifications: true,
    showProjectSelector: true,
    showChips: false,
  },
  notifications: {
    showNotifications: false,
    showProjectSelector: true,
    showChips: false,
  },
  minimal: {
    showNotifications: false,
    showProjectSelector: false,
    showChips: false,
  },
  extended: {
    showNotifications: true,
    showProjectSelector: true,
    showChips: true,
  },
};

export const MAIN_LAYOUT_CONFIG: MainLayoutConfigType[] = [
  { path: "/", appBarVariant: "extended", tabIndex: 0 },
  { path: "/select", tabIndex: -1 },
  { path: "/support", tabIndex: 1 },
  { path: "/users", tabIndex: 2 },
  { path: "/users/invite", title: "Invite User", appBarVariant: "minimal", hasBackAction: true, tabIndex: -1 },
  { path: "/users/edit", title: "Edit User", appBarVariant: "minimal", hasBackAction: true, tabIndex: -1 },
  { path: "/profile", appBarVariant: "minimal", tabIndex: 3 },
  {
    path: "/profile/update",
    title: "Update Profile",
    subtitleSlot: "Update your contact information",
    appBarVariant: "minimal",
    hasBackAction: true,
    tabIndex: -1,
  },
  {
    path: "/notifications",
    title: "Notifications",
    appBarVariant: "notifications",
    hasBackAction: true,
    tabIndex: -1,
  },
  {
    path: "/chat",
    startSlot: (
      <Box color="primary.main">
        <MessageSquareQuote size={pxToRem(36)} />
      </Box>
    ),
    title: "Chat with Novera",
    subtitleSlot: "AI-powered support assistant",
    appBarVariant: "minimal",
    hasBackAction: true,
    tabIndex: -1,
  },
  {
    path: "/create",
    title: "Create Support Case",
    subtitleSlot: "Auto-populated from chat",
    appBarVariant: "minimal",
    hasBackAction: true,
    tabIndex: -1,
  },
  {
    path: "/cases/all",
    title: "All Cases",
    appBarVariant: "minimal",
    hasBackAction: true,
    appBarSlots: <FilterAppBarSlot type="case" />,
    tabIndex: -1,
  },
  {
    path: "/cases/:id",
    appBarVariant: "minimal",
    hasBackAction: true,
    tabIndex: -1,
  },
  {
    path: "/chats/all",
    title: "All Chats",
    appBarVariant: "minimal",
    hasBackAction: true,
    tabIndex: -1,
    appBarSlots: <FilterAppBarSlot type="chat" />,
  },
  {
    path: "/chats/:id",
    appBarVariant: "minimal",
    hasBackAction: true,
    tabIndex: -1,
  },
  {
    path: "/services/all",
    title: "All Service Requests",
    appBarVariant: "minimal",
    hasBackAction: true,
    tabIndex: -1,
    appBarSlots: <FilterAppBarSlot type="service" />,
  },
  {
    path: "/services/:id",
    appBarVariant: "minimal",
    hasBackAction: true,
    tabIndex: -1,
  },
  {
    path: "/changes/all",
    title: "All Change Requests",
    appBarVariant: "minimal",
    hasBackAction: true,
    tabIndex: -1,
    appBarSlots: <FilterAppBarSlot type="change" />,
  },
  {
    path: "/changes/:id",
    appBarVariant: "minimal",
    hasBackAction: true,
    tabIndex: -1,
  },
];

export const SCROLL_OVERRIDES: Array<{ path: string; position: "top" | "bottom" | number }> = [
  { path: "/cases/all", position: "top" },
  { path: "/cases/:id", position: "bottom" },

  { path: "/chats/all", position: "top" },
  { path: "/chats/:id", position: "bottom" },

  { path: "/services/all", position: "top" },
  { path: "/services/:id", position: "bottom" },

  { path: "/changes/all", position: "top" },
  { path: "/changes/:id", position: "bottom" },
];
