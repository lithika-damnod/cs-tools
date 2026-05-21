import { useEffect, useRef } from "react";

import { useFormikContext } from "formik";

import { useClassification } from "@features/cases/context";
import { type CreateCaseFormValues, useCreateCase, useCreateCaseFormOptions } from "@features/cases/hooks";

export function useAutoFill() {
  const { setFieldValue } = useFormikContext<CreateCaseFormValues>();
  const { set } = useClassification();
  const { projects, deployments, products, issueTypes, severities } = useCreateCaseFormOptions();

  const { state } = useCreateCase();
  const classifications = state.classifications;

  const hasRunRef = useRef(false);

  useEffect(() => {
    if (!classifications || hasRunRef.current) return;

    const isReady = [projects, deployments, products, issueTypes, severities].every(({ pending }) => !pending);
    if (!isReady) return;

    const classifiedFields: string[] = [];

    const { caseInfo, issueType, severityLevel } = classifications;
    const { environment, productName, shortDescription, description } = caseInfo || {};

    const deploymentMatch = deployments.options.find((d) => d.label === environment);
    if (deploymentMatch) {
      setFieldValue("deployment", String(deploymentMatch.value));
      classifiedFields.push("deployment");
    }

    const productMatch = products.options.find((p) => p.label === productName);
    if (productMatch) {
      setFieldValue("product", String(productMatch.value));
      classifiedFields.push("product");
    }

    const typeMatch = issueTypes.options.find((i) => i.label === issueType);
    if (typeMatch) {
      setFieldValue("type", String(typeMatch.value));
      classifiedFields.push("type");
    }

    const severityMatch = severities.options.find((s) => s.label === severityLevel);
    if (severityMatch) {
      setFieldValue("severity", String(severityMatch.value));
      classifiedFields.push("severity");
    }

    if (shortDescription) {
      setFieldValue("title", shortDescription);
      classifiedFields.push("title");
    }

    if (description) {
      setFieldValue("description", description);
      classifiedFields.push("description");
    }

    if (classifiedFields.length > 0) {
      set(classifiedFields);
    }
    hasRunRef.current = true;
  }, [classifications, deployments, products, issueTypes, severities]);
}
