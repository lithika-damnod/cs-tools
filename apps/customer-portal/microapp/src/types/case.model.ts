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

/* 
interface BaseItemCardProps {
  id: string;
  title: string;
  timestamp: string;
  to: string;
}

interface CaseItemCardProps extends BaseItemCardProps {
  type: "case";
  priority: Priority;
  status: Status;
  assignee: string;
}
  */

export interface Case {
  id: string;
  internalId: string;
  number: string;
  createdOn: Date;
  title: string;
  description?: string;
  assigned?: string;
  statusId?: string;
  severityId?: string;
  issueTypeId?: string;
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
