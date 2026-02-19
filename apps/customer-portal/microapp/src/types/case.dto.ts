import type { Pagination } from "@src/types";

/* 
    {
    "cases": [
        {
            "id": "1b5c172d1b43f250a002c9d3604bcb89",
            "internalId": "CUPRSUB-129",
            "number": "CS0438781",
            "createdOn": "2026-02-14 09:35:21",
            "title": "te",
            "description": null,
            "assignedEngineer": null,
            "project": {
                "id": "6fa0b42d1bfaa694a002c9d3604bcb77",
                "label": "Customer 3 Project 1 - Subscription"
            },
            "deployedProduct": null,
            "issueType": null,
            "deployment": null,
            "severity": null,
            "status": {
                "id": "1",
                "label": "Open"
            }
        },
    ],
    "totalRecords": 64,
    "offset": 0,
    "limit": 10
}
*/
export interface CasesDTO extends Pagination {
  cases: CaseDTO[];
}

interface CaseDTO {
  id: string;
  internalId: string;
  number: string;
  createdOn: string;
  title: string;
  description?: string;
  assignedEngineer?: EntityReference;
  project: EntityReference;
  deployedProduct?: EntityReference;
  issueType?: EntityReference;
  deployment?: EntityReference;
  severity?: EntityReference;
  status?: EntityReference;
}

export interface CasesFiltersDTO {
  caseStates: EntityReference[];
  severities: EntityReference[];
  issueTypes: EntityReference[];
  deploymentTypes: EntityReference[];
  callRequestStates: EntityReference[];
  changeRequestStates: EntityReference[];
  changeRequestImpacts: EntityReference[];
  caseTypes: EntityReference[];
  severityBasedAllocationTime: {
    "0": number;
    "10": number;
    "11": number;
    "12": number;
    "13": number;
    "14": number;
  };
}

interface EntityReference {
  id: string;
  label: string;
}

/*
    {
    "statuses": [
        {
            "id": "1",
            "label": "Open"
        },
        {
            "id": "10",
            "label": "Work In Progress"
        },
        {
            "id": "18",
            "label": "Awaiting Info"
        },
        {
            "id": "1003",
            "label": "Waiting On WSO2"
        },
        {
            "id": "6",
            "label": "Solution Proposed"
        },
        {
            "id": "3",
            "label": "Closed"
        },
        {
            "id": "1006",
            "label": "Reopened"
        }
    ],
    "severities": [
        {
            "id": "60",
            "label": "S0"
        },
        {
            "id": "61",
            "label": "S1"
        },
        {
            "id": "62",
            "label": "S2"
        },
        {
            "id": "63",
            "label": "S3"
        },
        {
            "id": "64",
            "label": "S4"
        }
    ],
    "issueTypes": [
        {
            "id": "6",
            "label": "Error"
        },
        {
            "id": "2",
            "label": "Partial Outage"
        },
        {
            "id": "3",
            "label": "Performance Degradation"
        },
        {
            "id": "4",
            "label": "Question"
        },
        {
            "id": "5",
            "label": "Security or Compliance"
        },
        {
            "id": "1",
            "label": "Total Outage"
        }
    ]
}

 */

export interface GetCasesRequestDTO {
  filters?: {
    caseTypeIds?: string[];
    deploymentId?: string;
    issueId?: number;
    searchQuery?: string;
    severityId?: number;
    statusIds?: number[];
  };
  pagination?: {
    limit?: number;
    offset?: number;
  };
  sortBy?: {
    field?: string;
    order?: "asc" | "desc";
  };
}
