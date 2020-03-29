import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.modal};
  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    width: 100%;
    max-width: 380px;

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
      margin-bottom: 32px;
      color: ${({ theme }) => theme.colors.text};
    }

    p {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.textSecondary};
      line-height: 32px;
    }

    a {
      color: ${({ theme }) => theme.colors.text};
    }
  
  }

  form {
    width: 100%;
    max-width: 450px;

    input {
      margin-top: 8px;
    }

    textarea {
      margin-top: 8px;
    }
  }

`;
