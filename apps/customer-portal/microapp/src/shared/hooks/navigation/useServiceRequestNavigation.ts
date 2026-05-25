import { useNavigate } from "react-router-dom";

import { CASE_TYPES, OUTSTANDING_SERVICE_REQUESTS_STATUS_IDS } from "@shared/constants";

export const useServiceRequestNavigation = () => {
  const navigate = useNavigate();

  return {
    toOutstandingServiceRequests: () =>
      navigate({
        pathname: "/support/all",
        search: new URLSearchParams([
          ...[[" type", CASE_TYPES.CHANGE_REQUEST]],
          ...OUTSTANDING_SERVICE_REQUESTS_STATUS_IDS.map((state) => ["state", String(state)]),
        ]).toString(),
      }),
  };
};
