import Selectize from "./Selectize";
import { FormField } from "./FormField";

export const SelectField = ({ name, isMulti, ...props }: any) => {
  return (
    <FormField name={name} isMulti={isMulti} component={Selectize} {...props} />
  );
};
