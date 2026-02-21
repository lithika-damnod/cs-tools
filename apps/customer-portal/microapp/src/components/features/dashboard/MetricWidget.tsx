import type { ReactNode } from "react";
import { colors, pxToRem, Skeleton, Stack, Typography } from "@wso2/oxygen-ui";
import { TrendingDown, TrendingUp } from "@wso2/oxygen-ui-icons-react";
import { WidgetBox } from "@components/ui";

export interface MetricWidgetProps {
  label: string;
  value?: number | string;
  icon?: ReactNode;
  size?: "small" | "large";
  base?: boolean;
  trend?: {
    direction: "up" | "down";
    value: number | string;
  };
}

export function MetricWidget({ label, value, icon, size, base, trend }: MetricWidgetProps) {
  const small = size === "small";
  const TrendIcon = trend?.direction === "up" ? TrendingUp : TrendingDown;

  return (
    <WidgetBox>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {!base && icon}

        {trend && !base && (
          <Stack direction="row" gap={0.5} alignItems="center">
            {value !== undefined ? (
              <>
                <TrendIcon size={pxToRem(20)} color={colors.green[500]} />
                <Typography variant="body2" fontWeight="medium" sx={{ color: "components.portal.accent.green" }}>
                  {trend.value}
                </Typography>
              </>
            ) : (
              <Skeleton variant="rounded" width={60} height={20} animation="wave" />
            )}
          </Stack>
        )}
      </Stack>

      <Typography variant={small ? "h4" : "h3"} fontWeight="bold">
        {/* {value} */}
        {value ?? <Skeleton width="60%" animation="wave" />}
      </Typography>

      <Typography variant={small ? "subtitle1" : "h6"} fontWeight="medium" color="text.secondary">
        {label}
      </Typography>
    </WidgetBox>
  );
}
