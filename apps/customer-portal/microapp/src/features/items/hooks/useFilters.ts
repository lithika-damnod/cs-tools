import { useMemo } from "react";

import { useLocation, useSearchParams } from "react-router-dom";

import type { CaseType } from "@shared/types";

export interface ListFilterParams {
  types: CaseType[];
  states?: string[];
  severities?: string[];
  search?: string;
}

export function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state } = useLocation();

  const filters: ListFilterParams = useMemo(
    () => ({
      types: searchParams.getAll("type") as CaseType[],
      states: searchParams.getAll("state") || undefined,
      severities: searchParams.getAll("severity") || undefined,
      search: searchParams.get("search") ?? "",
    }),
    [searchParams],
  );

  const patch = (partial: Partial<ListFilterParams>) => {
    setSearchParams(
      (prev) => {
        if (partial.types) {
          prev.delete("type");
          partial.types.forEach((t) => prev.append("type", t));
        }
        if (partial.states) {
          prev.delete("state");
          partial.states.forEach((s) => prev.append("state", s));
        }
        if (partial.severities) {
          prev.delete("severity");
          partial.severities.forEach((s) => prev.append("severity", s));
        }
        if (partial.search !== undefined) prev.set("search", partial.search);
        return prev;
      },
      { replace: true },
    );
  };

  const reset = () => setSearchParams(new URLSearchParams());

  return {
    state: state as { title?: string } | undefined,
    filters,
    set: patch,
    reset,
  };
}
