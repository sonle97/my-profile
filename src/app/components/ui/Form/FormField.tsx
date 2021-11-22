import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const FormField = ({
  name,
  className,
  component,
  children,
  ...props
}: any) => {
  const formHandlers = useFormContext();

  const { control, formState } = formHandlers;

  return (
    <div className={`${className}`}>
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          React.createElement(component, { ...field, ...props })
        }
        {...props}
      />

      {formState.errors && formState.errors[name] && (
        <p className="text-red-600 text-left text-sm mb-0 mt-1">
          {formState.errors[name].message}
        </p>
      )}
    </div>
  );
};
