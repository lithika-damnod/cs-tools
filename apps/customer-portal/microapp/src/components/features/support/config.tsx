import { MessageSquare, OctagonAlert, RefreshCcw, Settings, type LucideIcon } from "@wso2/oxygen-ui-icons-react";
import type { ItemType } from "./ItemCard";
import { colors, type ChipProps } from "@wso2/oxygen-ui";

export const TYPE_CONFIG: Record<ItemType, { icon: LucideIcon; color: string }> = {
  case: {
    icon: OctagonAlert,
    color: colors.red[500],
  },
  chat: {
    icon: MessageSquare,
    color: colors.blue[500],
  },
  service: {
    icon: Settings,
    color: colors.purple[500],
  },
  change: {
    icon: RefreshCcw,
    color: colors.cyan[500],
  },
};

export const PRIORITY_CHIP_COLOR_CONFIG: Record<string, ChipProps["color"]> = {
  13: "success",
  12: "info",
  11: "primary",
  10: "primary",
  14: "primary",
};

export const STATUS_CHIP_COLOR_CONFIG: Record<string, ChipProps["color"]> = {
  1: "info",
  10: "primary",
  18: "success",
  1003: "info",
  6: "default",
  3: "info",
  1006: "info",
};
