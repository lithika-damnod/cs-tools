import { useNavigate } from "react-router-dom";

import { useProject } from "@context/project";

import type { Case } from "@features/cases/types";

import { CASE_TYPES, OUTSTANDING_CASES_BY_SEVERITY_TITLE, ROUTES } from "@shared/constants";

export const useCaseNavigation = () => {
  const navigate = useNavigate();
  const { noveraEnabled } = useProject();

  return {
    toBySeverity: (id: string | number, label: string) =>
      navigate(
        {
          pathname: "/support/all",
          search: new URLSearchParams([
            ["type", CASE_TYPES.DEFAULT],
            ["severity", String(id)],
          ]).toString(),
        },
        { state: { title: OUTSTANDING_CASES_BY_SEVERITY_TITLE(label) } },
      ),

    toCaseCreate: () => navigate(noveraEnabled ? ROUTES[CASE_TYPES.CHAT].create : ROUTES[CASE_TYPES.DEFAULT].create),
    toRelativeCaseCreate: (data: Case) => navigate(ROUTES[CASE_TYPES.DEFAULT].create, { state: { case: data } }),
  };
};
