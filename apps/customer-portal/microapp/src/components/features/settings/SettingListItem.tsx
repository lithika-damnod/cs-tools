import type { ReactNode } from "react";
import { pxToRem, Stack, Typography, useTheme } from "@wso2/oxygen-ui";
import { ChevronRight, type LucideIcon } from "@wso2/oxygen-ui-icons-react";
import { Link } from "react-router-dom";

export function SettingListItem({
  name,
  value,
  icon,
  iconColor,
  iconBackgroundColor,
  description,
  suffix,
  to,
}: {
  name: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBackgroundColor?: string;
  value?: string | ReactNode;
  description?: string;
  suffix?: "chevron" | ReactNode;
  to?: string;
}) {
  const theme = useTheme();
  const Icon = icon;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="background.paper"
      sx={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}
      p={1.5}
      {...(to && { component: Link, to })}
    >
      <Stack direction="row" alignItems="center" gap={1.5} width="100%">
        <Stack
          width={40}
          height={40}
          alignItems="center"
          justifyContent="center"
          borderRadius={1}
          bgcolor={iconBackgroundColor}
        >
          <Icon size={pxToRem(18)} color={iconColor} />
        </Stack>
        <Stack width="100%">
          {value && (
            <Typography variant="caption" color="text.secondary">
              {name}
            </Typography>
          )}

          <Typography variant="body1" sx={{ flex: 1 }}>
            {value ?? name}
          </Typography>

          {description && (
            <Typography variant="caption" fontWeight="regular" color="text.secondary">
              {description}
            </Typography>
          )}
        </Stack>
      </Stack>
      {suffix && suffix === "chevron" ? (
        <ChevronRight size={pxToRem(16)} color={theme.palette.text.secondary} style={{ flexShrink: 0 }} />
      ) : (
        suffix
      )}
    </Stack>
  );
}
