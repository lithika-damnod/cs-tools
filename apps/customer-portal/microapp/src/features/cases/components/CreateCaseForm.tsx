import { Form } from "react-router-dom";

import { Button, CircularProgress, InputAdornment, Stack, Typography } from "@wso2/oxygen-ui";
import { Folder } from "@wso2/oxygen-ui-icons-react";
import { useFormikContext } from "formik";

import { DEPLOYMENT_DISABLED_PROJECT_TYPES } from "@config/constants";

import {
  CaseReference,
  ClassificationBadge,
  ConversationSummary,
  SelectField,
  TextField,
} from "@features/cases/components";
import { useClassification } from "@features/cases/context";
import { type CreateCaseFormValues, useAutoFill, useCreateCase, useCreateCaseFormOptions } from "@features/cases/hooks";

export function CreateCaseForm() {
  useAutoFill();

  const { state, create } = useCreateCase();
  const { projects, deployments, products, issueTypes, severities } = useCreateCaseFormOptions();
  const { values, setFieldValue, ...formik } = useFormikContext<CreateCaseFormValues>();
  const { classified, remove } = useClassification();

  return (
    <Form onSubmit={formik.handleSubmit}>
      {state.case && <CaseReference />}

      <Stack pb={5} gap={5}>
        <Stack gap={2}>
          <SelectField
            required
            disabled
            name="project"
            label="Project"
            options={projects.options}
            slots={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Folder size={20} />
                  </InputAdornment>
                ),
              },
            }}
          />

          <SelectField
            required
            name="deployment"
            label="Deployment Type"
            placeholder="Select Deployment Type"
            options={deployments.options}
            disabled={!!state.case || deployments.pending || DEPLOYMENT_DISABLED_PROJECT_TYPES.includes(values.project)}
            slots={{
              label: { endAdornment: classified.has("deployment") && <ClassificationBadge label="Auto Detected" /> },
            }}
            onChange={(e) => {
              setFieldValue("product", "");
              remove([e.target.name, "product"]);
            }}
          />

          <SelectField
            required
            name="product"
            label="Product & Version"
            placeholder="Select Product & Version"
            options={products.options}
            disabled={!!state.case || !values.deployment || products.pending}
            slots={{
              label: { endAdornment: classified.has("product") && <ClassificationBadge label="Auto Detected" /> },
            }}
            onChange={(e) => remove([e.target.name])}
          />
        </Stack>

        <Stack gap={2}>
          <Typography variant="body1" fontWeight="medium">
            Case Details
          </Typography>

          {state.case && <TextField required disabled name="relatedCaseId" label="Related Case ID" />}

          <TextField
            required
            disabled={!!state.case}
            name="title"
            label="Issue Title"
            placeholder="Briefly describe the issue"
            slots={{
              label: { endAdornment: classified.has("title") && <ClassificationBadge label="Generated from Chat" /> },
            }}
            onChange={(e) => remove([e.target.name])}
          />

          <TextField
            required
            multiline
            name="description"
            label="Case Description"
            placeholder="Explain the issue, including any relevant details"
            slots={{
              label: {
                endAdornment: classified.has("description") && <ClassificationBadge label="From Conversation" />,
              },
            }}
            onChange={(e) => remove([e.target.name])}
          />

          <SelectField
            required
            name="type"
            label="Issue Type"
            placeholder="Select Issue Type"
            options={issueTypes.options}
            slots={{ label: { endAdornment: classified.has("type") && <ClassificationBadge label="AI Classified" /> } }}
            onChange={(e) => remove([e.target.name])}
          />

          <SelectField
            required
            name="severity"
            label="Severity Levels"
            placeholder="Select Severity"
            options={severities.options}
            slots={{
              label: { endAdornment: classified.has("severity") && <ClassificationBadge label="AI Classified" /> },
            }}
            onChange={(e) => remove([e.target.name])}
          />
        </Stack>

        {state.messages.length > 0 && <ConversationSummary />}

        <Button
          type="submit"
          variant="contained"
          sx={{ textTransform: "initial" }}
          startIcon={
            formik.isSubmitting || create.isPending ? <CircularProgress size={16} color="inherit" /> : undefined
          }
        >
          {formik.isSubmitting ? "Saving..." : "Create Case"}
        </Button>
      </Stack>
    </Form>
  );
}
