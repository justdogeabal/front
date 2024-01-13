import { Link } from 'react-router-dom';
import {
  EmailContainer,
  EmailInput,
  EmailWrapper,
  LoginButton,
  LoginPageContainer,
  LoginPageWrapper,
  LoginText,
  SubText,
  TextContainer,
} from './styles';

export const Login = () => (
  <LoginPageContainer>
    <LoginPageWrapper>
      <TextContainer>
        <LoginText>Login</LoginText>
        <SubText>로그인시 사용할 이메일을 입력해주세요</SubText>
      </TextContainer>
      <EmailContainer>
        <EmailWrapper>
          <label htmlFor="email">Email</label>
          <EmailInput
            id="email"
            placeholder="m@example.com"
            required
            type="email"
          />
        </EmailWrapper>
      </EmailContainer>
      <br />
      <LoginButton>이메일로 시작하기</LoginButton>
      <div className="display-flex">
        <SubText>아직 책물교환의 회원이 아니신가요?</SubText>
        <Link to={'/register'} className="mt-17-ml-4">
          회원가입
        </Link>
      </div>
    </LoginPageWrapper>
  </LoginPageContainer>
);
