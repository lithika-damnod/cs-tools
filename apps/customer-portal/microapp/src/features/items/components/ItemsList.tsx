import type { ReactNode } from "react";

import type { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";

import { useDeclareLayout } from "@context/layout";

import {
  AnnouncementItemCard,
  CaseItemCard,
  ChangeRequestItemCard,
  ChatItemCard,
  EngagementItemCard,
  FilterContentSkeleton,
  Filters,
  ItemsListSubtitle,
  ItemsListWrapper,
  SecurityReportAnalysisItemCard,
  ServiceRequestItemCard,
} from "@features/items/components";
import {
  useAnnouncementItems,
  useCaseItems,
  useChangeRequestItems,
  useChatItems,
  useEngagementItems,
  useFilters,
  useInfiniteListTail,
  useSecurityReportAnalysisItems,
  useServiceRequestItems,
} from "@features/items/hooks";

import { InfiniteList } from "@shared/components/common";

import { CASE_TYPES } from "@shared/constants";
import type { CaseType } from "@shared/types";

export function CaseItemsList() {
  const { query, total, count } = useCaseItems();
  const { filters } = useFilters();

  useDeclareLayout(
    {
      title: "All Cases",
      slots: {
        bottom: <Filters type={CASE_TYPES.DEFAULT} />,
        subtitle: <ItemsListSubtitle count={count} total={total} />,
      },
    },
    { enabled: filters.types.length === 1 && !filters.severities?.length },
    [total, count],
  );

  return (
    <ItemsList type={CASE_TYPES.DEFAULT} query={query} total={total}>
      {(item) => <CaseItemCard {...item} to="" />}
    </ItemsList>
  );
}

export function ChatItemsList() {
  const { query, total, count } = useChatItems();
  const { filters } = useFilters();

  useDeclareLayout(
    {
      title: "All Chats",
      slots: {
        bottom: <Filters type={CASE_TYPES.CHAT} />,
        subtitle: <ItemsListSubtitle count={count} total={total} />,
      },
    },
    { enabled: filters.types.length === 1 && !filters.severities?.length },
    [total, count],
  );

  return (
    <ItemsList type={CASE_TYPES.CHAT} query={query} total={total}>
      {(item) => <ChatItemCard {...item} to="" />}
    </ItemsList>
  );
}

export function ServiceRequestItemsList() {
  const { query, total, count } = useServiceRequestItems();
  const { filters } = useFilters();

  useDeclareLayout(
    {
      title: "All Service Requests",
      slots: {
        bottom: <Filters type={CASE_TYPES.SERVICE_REQUEST} />,
        subtitle: <ItemsListSubtitle count={count} total={total} />,
      },
    },
    { enabled: filters.types.length === 1 && !filters.severities?.length },
    [total, count],
  );

  return (
    <ItemsList type={CASE_TYPES.SERVICE_REQUEST} query={query} total={total}>
      {(item) => <ServiceRequestItemCard {...item} to="" />}
    </ItemsList>
  );
}

export function ChangeRequestItemsList() {
  const { query, total, count } = useChangeRequestItems();
  const { filters } = useFilters();

  useDeclareLayout(
    {
      title: "All Change Requests",
      slots: {
        bottom: <Filters type={CASE_TYPES.CHANGE_REQUEST} />,
        subtitle: <ItemsListSubtitle count={count} total={total} />,
      },
    },
    { enabled: filters.types.length === 1 && !filters.severities?.length },
    [total, count],
  );

  return (
    <ItemsList type={CASE_TYPES.CHANGE_REQUEST} query={query} total={total}>
      {(item) => <ChangeRequestItemCard {...item} to="" />}
    </ItemsList>
  );
}

export function SecurityReportAnalysisItemsList() {
  const { query, total, count } = useSecurityReportAnalysisItems();
  const { filters } = useFilters();

  useDeclareLayout(
    {
      title: "All Service Requests",
      slots: {
        bottom: <Filters type={CASE_TYPES.SERVICE_REQUEST} />,
        subtitle: <ItemsListSubtitle count={count} total={total} />,
      },
    },
    { enabled: filters.types.length === 1 && !filters.severities?.length },
    [total, count],
  );

  return (
    <ItemsList type={CASE_TYPES.SECURITY_REPORT_ANALYSIS} query={query} total={total}>
      {(item) => <SecurityReportAnalysisItemCard {...item} to="" />}
    </ItemsList>
  );
}

export function EngagementItemsList() {
  const { query, total, count } = useEngagementItems();
  const { filters } = useFilters();

  useDeclareLayout(
    {
      title: "All Engagements",
      slots: {
        bottom: <Filters type={CASE_TYPES.ENGAGEMENT} />,
        subtitle: <ItemsListSubtitle count={count} total={total} />,
      },
    },
    { enabled: filters.types.length === 1 && !filters.severities?.length },
    [total, count],
  );

  return (
    <ItemsList type={CASE_TYPES.ENGAGEMENT} query={query} total={total}>
      {(item) => <EngagementItemCard {...item} to="" />}
    </ItemsList>
  );
}

export function AnnouncementItemsList() {
  const { query, total } = useAnnouncementItems();
  const { filters } = useFilters();

  useDeclareLayout(
    {
      title: "All Announcements",
      slots: {
        bottom: <Filters variant="search-only" type={CASE_TYPES.ANNOUNCEMENT} />,
      },
    },
    { enabled: filters.types.length === 1 && !filters.severities?.length },
  );

  return (
    <ItemsList type={CASE_TYPES.ANNOUNCEMENT} query={query} total={total}>
      {(item) => <AnnouncementItemCard {...item} to="" />}
    </ItemsList>
  );
}

function ItemsList<TItem, TError>({
  type,
  query,
  total,
  children,
}: {
  type: CaseType;
  query: Pick<
    UseInfiniteQueryResult<InfiniteData<TItem[]>, TError>,
    "data" | "hasNextPage" | "isFetchingNextPage" | "fetchNextPage"
  >;
  total?: number;
  children: (item: TItem, index: number) => ReactNode;
}) {
  const tail = useInfiniteListTail(total ?? 0);

  return (
    <ItemsListWrapper type={type}>
      <InfiniteList {...query} sentinel={<FilterContentSkeleton />} tail={tail}>
        {children}
      </InfiniteList>
    </ItemsListWrapper>
  );
}
