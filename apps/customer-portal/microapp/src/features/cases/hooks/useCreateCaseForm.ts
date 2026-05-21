import * as Yup from "yup";
import { useFormik } from "formik";

import { useProject } from "@context/project";

import { useCreateCase } from "@features/cases/hooks";

export interface CreateCaseFormValues {
  project: string;
  product: string;
  deployment: string;
  type: string;
  severity: string;
  title: string;
  description: string;
}

const validationSchema = Yup.object({
  project: Yup.string().required("Project is required"),
  deployment: Yup.string().required("Deployment type is required"),
  product: Yup.string().required("Product & version is required"),
  title: Yup.string()
    .trim()
    .min(5, "Title must be at least 5 characters")
    .max(200, "Title must be 200 characters or less")
    .required("Issue title is required"),
  description: Yup.string()
    .trim()
    .min(20, "Description must be at least 20 characters")
    .max(5000, "Description must be 5000 characters or less")
    .required("Case description is required"),
  type: Yup.number().typeError("Issue type is required").required("Issue type is required"),
  severity: Yup.number().typeError("Severity level is required").required("Severity level is required"),
});

export function useCreateCaseForm() {
  const { projectId } = useProject();
  const { state, create } = useCreateCase();

  const formik = useFormik<CreateCaseFormValues>({
    initialValues: {
      project: projectId!,
      product: "",
      deployment: "",
      title: "",
      description: "",
      type: "",
      severity: "",
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      create.mutateAsync({
        type: "default_case",
        projectId: values.project,
        deploymentId: values.deployment,
        deployedProductId: values.product,
        title: values.title,
        description: values.description,
        issueTypeKey: Number(values.type),
        severityKey: Number(values.severity),
        relatedCaseId: state?.case?.id,
      });
    },
  });

  return formik;
}
