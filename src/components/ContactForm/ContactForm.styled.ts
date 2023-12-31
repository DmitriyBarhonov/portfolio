import styled from 'styled-components';

export const ContactFormWrapper = styled.section`
  //height: 100vh;
  background-color: #4eb68b;
  padding: 100px 0;
`

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContactFormTitle = styled.h2`
  background-color: #e1ff3d;
`

export const Form = styled.form`
  background-color: #FFFFFFFF;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 50px 0;
  border: 1px solid;
`

export const NameField = styled.input`
  background-color: #e1ff3d;
  width: 100%;
`

export const EmailField = styled.input`
  background-color: #e1ff3d;
  width: 100%;
`

export const MessageField = styled.textarea`
  background-color: #e1ff3d;
  max-width: 100%;
  min-width: 100%;
`

export const SubmitButton = styled.input`
  padding: 5px 20px;
  background-color: #e1ff3d;
`

