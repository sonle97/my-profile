import { Input } from "antd";
import styled from "@emotion/styled";
import { FormField } from "./FormField";
const { TextArea } = Input;

const baseInputStyled = `
  .ant-input {
    background-color: #fdfefe;
    border: 2px solid #dadada;
    color: #3c3e41;
    box-shadow: none;
    border-radius: 6px;
    transition: 0.4s;
    letter-spacing: 1px;
    padding: 7px 15px;
    font-size: 14px;
    &:focus {
      border: 2px solid #ff014f;
    }
    &:hover, &:focus {
      border-right-width: 2px !important;
    }
  }
`;

export const InputField = styled(({ name, ...props }: any) => {
  return (
    <FormField variants="outline" name={name} {...props} component={Input} />
  );
})`
  ${baseInputStyled}
`;

export const TextAreaField = styled(({ name, ...props }: any) => {
  return (
    <FormField variants="outline" name={name} {...props} component={TextArea} />
  );
})`
  ${baseInputStyled}
`;
