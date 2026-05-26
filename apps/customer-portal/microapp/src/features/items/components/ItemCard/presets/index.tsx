import type { CaseSummary } from "@features/cases/types";
import type { ChangeRequestSummary } from "@features/changes/types";
import type { Chat } from "@features/chats/types";
import { ItemCard } from "@features/items/components";
import type { ServiceRequestSummary } from "@features/service-requests/types";

import { PriorityChip, StatusChip } from "@shared/components/support";

import { CASE_TYPE_CONFIGS, CASE_TYPES } from "@shared/constants";
import { useDateTime } from "@shared/hooks";

export function CaseItemCard({ to, ...props }: CaseSummary & { to: string }) {
  const { fromNow } = useDateTime();
  const { icon, color } = CASE_TYPE_CONFIGS[CASE_TYPES.DEFAULT];

  return (
    <ItemCard.Root to={to}>
      <ItemCard.Header
        icon={icon}
        iconColor={color}
        number={props.number}
        internalId={props.internalId}
        chips={<PriorityChip size="small" id={props.severityId} />}
        status={<StatusChip type={CASE_TYPES.DEFAULT} size="small" id={props.statusId} />}
      />
      <ItemCard.Body title={props.title} description={props.description} />
      <ItemCard.Footer
        timestamp={`Created ${fromNow(props.createdOn)}`}
        fields={[
          {
            label: "Assignee",
            value: props.assigned ?? "Not Assigned",
          },
        ]}
      />
    </ItemCard.Root>
  );
}

export function ChatItemCard({ to, ...props }: Chat & { to: string }) {
  const { fromNow } = useDateTime();
  const { icon, color } = CASE_TYPE_CONFIGS[CASE_TYPES.CHAT];

  return (
    <ItemCard.Root to={to}>
      <ItemCard.Header
        icon={icon}
        iconColor={color}
        number={props.number}
        status={<StatusChip type={CASE_TYPES.CHAT} size="small" id={props.statusId} />}
      />
      <ItemCard.Body title={props.description} />
      <ItemCard.Footer
        timestamp={`Created ${fromNow(props.createdOn)}`}
        fields={[
          {
            value: `${props.count} messages`,
          },
        ]}
      />
    </ItemCard.Root>
  );
}

export function ServiceRequestItemCard({ to, ...props }: ServiceRequestSummary & { to: string }) {
  const { fromNow } = useDateTime();
  const { icon, color } = CASE_TYPE_CONFIGS[CASE_TYPES.SERVICE_REQUEST];

  return (
    <ItemCard.Root to={to}>
      <ItemCard.Header
        icon={icon}
        iconColor={color}
        number={props.number}
        internalId={props.internalId}
        chips={<PriorityChip size="small" id={props.severityId} />}
        status={<StatusChip type={CASE_TYPES.SERVICE_REQUEST} size="small" id={props.statusId} />}
      />
      <ItemCard.Body title={props.title} description={props.description} />
      <ItemCard.Footer
        timestamp={`Created ${fromNow(props.createdOn)}`}
        fields={[
          {
            label: "Assignee",
            value: props.issueType ?? "Unspecified",
          },
        ]}
      />
    </ItemCard.Root>
  );
}

export function ChangeRequestItemCard({ to, ...props }: ChangeRequestSummary & { to: string }) {
  const { fromNow } = useDateTime();
  const { icon, color } = CASE_TYPE_CONFIGS[CASE_TYPES.CHANGE_REQUEST];

  return (
    <ItemCard.Root to={to}>
      <ItemCard.Header
        icon={icon}
        iconColor={color}
        number={props.number}
        internalId={props.internalId}
        chips={<PriorityChip type={CASE_TYPES.CHANGE_REQUEST} size="small" id={props.impactId} />}
        status={<StatusChip type={CASE_TYPES.CHANGE_REQUEST} size="small" id={props.statusId} />}
      />
      <ItemCard.Body title={props.title} description={props.description} />
      <ItemCard.ScheduledDate date={props.endDate} />
      <ItemCard.Footer
        timestamp={`Updated ${fromNow(props.updatedOn)}`}
        fields={[
          {
            label: "Assignee",
            value: props.assignedTeam ?? "N/A",
          },
        ]}
      />
    </ItemCard.Root>
  );
}

export function SecurityReportAnalysisItemCard({ to, ...props }: CaseSummary & { to: string }) {
  const { fromNow } = useDateTime();
  const { icon, color } = CASE_TYPE_CONFIGS[CASE_TYPES.SECURITY_REPORT_ANALYSIS];

  return (
    <ItemCard.Root to={to}>
      <ItemCard.Header
        icon={icon}
        iconColor={color}
        number={props.number}
        internalId={props.internalId}
        chips={<PriorityChip size="small" id={props.severityId} />}
        status={<StatusChip type={CASE_TYPES.SECURITY_REPORT_ANALYSIS} size="small" id={props.statusId} />}
      />
      <ItemCard.Body title={props.title} description={props.description} />
      <ItemCard.Footer
        timestamp={`Created ${fromNow(props.createdOn)}`}
        fields={[
          {
            label: "Created By",
            value: props.createdBy,
          },
        ]}
      />
    </ItemCard.Root>
  );
}

export function EngagementItemCard({ to, ...props }: CaseSummary & { to: string }) {
  const { fromNow } = useDateTime();
  const { icon, color } = CASE_TYPE_CONFIGS[CASE_TYPES.ENGAGEMENT];

  return (
    <ItemCard.Root to={to}>
      <ItemCard.Header
        icon={icon}
        iconColor={color}
        number={props.number}
        internalId={props.internalId}
        status={<StatusChip type={CASE_TYPES.ENGAGEMENT} size="small" id={props.statusId} />}
      />
      <ItemCard.Body title={props.title} description={props.description} />
      <ItemCard.Footer
        timestamp={`Created ${fromNow(props.createdOn)}`}
        fields={[
          {
            label: "Type",
            value: props.engagementType ?? "Unspecified",
          },
        ]}
      />
    </ItemCard.Root>
  );
}

export function AnnouncementItemCard({ to, ...props }: CaseSummary & { to: string }) {
  const { fromNow } = useDateTime();
  const { icon, color } = CASE_TYPE_CONFIGS[CASE_TYPES.ANNOUNCEMENT];

  return (
    <ItemCard.Root to={to}>
      <ItemCard.Header icon={icon} iconColor={color} number={props.number} />
      <ItemCard.Body title={props.title} description={props.description.trim()} />
      <ItemCard.Footer
        timestamp={`Created ${fromNow(props.createdOn)}`}
        fields={[
          {
            value: <StatusChip type={CASE_TYPES.ANNOUNCEMENT} size="small" id={props.statusId} />,
          },
        ]}
      />
    </ItemCard.Root>
  );
}
