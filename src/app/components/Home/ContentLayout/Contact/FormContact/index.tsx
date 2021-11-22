import React from "react";
import * as yup from "yup";

import { FormContactStyled, Label, Button } from "./styles";
import { Form, InputField, TextAreaField } from "../../../../ui/Form";
import { Row } from "../../../../ui/layout";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object().shape({
  name: yup.string().strict(false).trim().required("Name is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .strict(false)
    .trim()
    .required("Email is required"),
  subject: yup.string().strict(false).trim().nullable(true),
  message: yup.string().strict(false).trim().nullable(true),
});

const FormContact = () => {
  const onSubmit = async (values: any): Promise<void> => {
    console.log(values);
  };

  return (
    <FormContactStyled>
      <Form
        onSubmit={onSubmit}
        className="form"
        validationSchema={validationSchema}
      >
        <Row className="justify-between items-start md:flex-row flex-col">
          <div className="md:mr-6 mr-0 md:w-1/2 w-full md:mb-0 mb-5">
            <Label>Your name</Label>
            <InputField name="name" placeholder="Name" />
          </div>
          <div className="md:w-1/2 w-full">
            <Label>PHONE NUMBER</Label>
            <InputField name="phone" placeholder="Phone number" />
          </div>
        </Row>
        <Row>
          <div className="w-full">
            <Label>EMAIL</Label>
            <InputField name="email" placeholder="Email" />
          </div>
        </Row>
        <Row>
          <div className="w-full">
            <Label>SUBJECT</Label>
            <InputField name="subject" placeholder="Subject" />
          </div>
        </Row>
        <Row>
          <div className="w-full">
            <Label>YOUR MESSAGE</Label>
            <TextAreaField name="message" rows={6} placeholder="Message..." />
          </div>
        </Row>
        <Button className="mt-3" type="submit">
          SEND MESSAGE
        </Button>
      </Form>
    </FormContactStyled>
  );
};

export default FormContact;
