import React from 'react';
import {
  FormContainer,
  Row,
  ButtonRow,
  NameLabel,
  EmailLabel,
  SubjectLabel,
  MessageLabel,
  ClearFields,
  TextInput,
  MessageInput,
} from './styles';
import { Button } from 'components';

const ContactForm = () => {
  return (
    <FormContainer>
      <form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <Row>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <NameLabel>
            Name
            <TextInput
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
            />
          </NameLabel>

          <EmailLabel>
            Email
            <TextInput
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
          </EmailLabel>
        </Row>
        <Row>
          <SubjectLabel>
            Subject
            <TextInput
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter Subject"
            />
          </SubjectLabel>
        </Row>
        <Row>
          <MessageLabel>
            Message
            <MessageInput name="message" id="message" rows="8" />
          </MessageLabel>
        </Row>
        <ButtonRow>
          <Button type="submit">Send</Button>
          <ClearFields type="reset" value="Clear" />
        </ButtonRow>
      </form>
    </FormContainer>
  );
};

export { ContactForm };
