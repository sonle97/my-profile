import React, { useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { useId } from "react-id-generator";
import { yupResolver } from "@hookform/resolvers/yup";

interface Errors {
  [key: string]: string;
}

interface FormProps {
  className?: string;
  children?: any;
  onSubmit?: (values: any, defaultValues?: any) => any;
  validationSchema: yup.AnyObjectSchema;
  defaultValues?: any;
  mode?: "onBlur" | "onSubmit" | "onChange" | undefined;
  style?: any;
}

export class SubmitError extends Error {
  errors: Errors;

  constructor(errors: Errors) {
    super("SubmitError");
    this.name = "SubmitError"; // (2)
    this.errors = errors;
  }
}

export const Form = ({
  mode = "onSubmit",
  defaultValues = {},
  validationSchema,
  ...props
}: FormProps) => {
  const formHandlers = useForm<any>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const [formId] = useId();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = formHandlers.handleSubmit(async (values) => {
    try {
      props.onSubmit && (await props.onSubmit(values, defaultValues));
      const formValues = formHandlers.getValues();
      formHandlers.reset(formValues);
    } catch (e: any) {
      console.warn({ e, errors: e.errors });
      if (e instanceof SubmitError && e.errors) {
        Object.keys(e.errors).map((name) =>
          formHandlers.setError(name, { type: "error" }, e.errors[name])
        );
      }
    }
  });

  return (
    <FormProvider {...formHandlers}>
      <form {...props} id={formId} onSubmit={onSubmit} ref={formRef}>
        {props.children}
      </form>
    </FormProvider>
  );
};

export default Form;
