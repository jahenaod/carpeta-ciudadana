import { styled } from "styled-components";

export const SignupWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  padding-top: 1.5rem;
  padding-left: 1.2rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 330px;
  height: 67px;
  background: ${({ theme }) => theme.mode.color1};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.mode.text2};

  &:focus {
    outline: none;
    border-color: none;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.5rem;
`;
export const ForgotPassword = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 122.02%;
  color: #fefefe;
  opacity: 0.8;
`;

export const SubmitButton = styled.button`
  justify-content: center;
  align-items: center;
  padding: 22px 38px;
  gap: 10px;

  width: 122px;
  height: 66px;

  background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
  box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
  border-radius: 25px;
  border: none;
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
