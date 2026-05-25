import { useNavigate } from "react-router-dom";

import {
  ACTION_REQUIRED_ITEMS_TITLE,
  ACTION_REQUIRED_STATUS_IDS,
  CLOSED_ITEMS_TITLE,
  OUTSTANDING_ITEMS_TITLE,
  OUTSTANDING_STATUS_IDS,
  OVERVIEW_CASE_TYPES,
  RESOLVED_STATUS_IDS,
} from "@shared/constants";

export const useMultipleNavigation = () => {
  const navigate = useNavigate();

  return {
    toClosedItems: () =>
      navigate(
        {
          pathname: "/support/all",
          search: new URLSearchParams([
            ...OVERVIEW_CASE_TYPES.map((type) => ["type", type]),
            ...RESOLVED_STATUS_IDS.map((state) => ["state", String(state)]),
          ]).toString(),
        },
        { state: { title: CLOSED_ITEMS_TITLE } },
      ),

    toOutstandingItems: () =>
      navigate(
        {
          pathname: "/support/all",
          search: new URLSearchParams([
            ...OVERVIEW_CASE_TYPES.map((type) => ["type", type]),
            ...OUTSTANDING_STATUS_IDS.map((state) => ["state", String(state)]),
          ]).toString(),
        },
        { state: { title: OUTSTANDING_ITEMS_TITLE } },
      ),

    toActionRequiredItems: () =>
      navigate(
        {
          pathname: "/support/all",
          search: new URLSearchParams([
            ...OVERVIEW_CASE_TYPES.map((type) => ["type", type]),
            ...ACTION_REQUIRED_STATUS_IDS.map((state) => ["state", String(state)]),
          ]).toString(),
        },
        { state: { title: ACTION_REQUIRED_ITEMS_TITLE } },
      ),
  };
};
