import styled from "@emotion/styled";

export const LoginPageContainer = styled.div`
    background-color:rgb(243 244 246);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;                                                                                                                                                                                                                               ㅡ
`

export const LoginPageWrapper = styled.div`
    max-width: 24rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    background-color: white;
    padding: 1.5rem;
    margin-top: 1.5rem;
    border-width: 1px;
    border-color: rgb(229 231 235);
`

export const TextContainer = styled.div`
    text-align: center;
    margin-top: 0.5rem; 
`

export const LoginText = styled.h1`
    font-weight: 700;
    font-size: 1.875rem; 
    line-height: 2.25rem; 
`

export const SubText = styled.p`
    color: rgb(113 113 122);
`

export const EmailContainer = styled.div`
    margin-top: 1rem;
`

export const EmailWrapper = styled.div`
    margin-top: 0.5rem;
`

export const EmailInput = styled.input`
    margin-top: 0.5rem;
    width: 355px;
    height: 32px;
    font-size: 15px;
    border: 1px solid gray;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
`

export const LoginButton = styled.button`
    background-color:#4285F4;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    padding: 8px 20px;
    border: 1px solid white;
`