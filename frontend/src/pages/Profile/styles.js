import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
  background: ${({ theme }) => theme.colors.background};

  div {
    margin-left: auto;
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.text};
  }

  .button{
    margin-left: 16px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;

    li {
      background: ${({ theme }) => theme.colors.primary};
      padding: 24px;
      border-radius: 8px;
      position: relative;

      button {
        position: absolute;
        background: none;
        right: 24px;
        top: 24px;
        border: 0;

        :hover {
          opacity: 0.8;
          
          svg {
            color: #e02041 !important;
          }
        }
      }

      strong {
        display: block;
        margin-bottom: 16px;
        color:${({ theme }) => theme.colors.textSecondary};
      }

      p + strong {
        margin-top: 32px;
      }

      p {
        color: ${({ theme }) => theme.colors.textP};
        line-height: 21px;
        font-size: 16px;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
    color: ${({ theme }) => theme.colors.text};
  }

  img {
    height: 64px;
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 6px;
    border: ${({ theme }) => theme.title === 'dark' ? '1px solid #444' : '1px solid #dcdce6'};
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;
    background: ${({ theme }) => theme.title === 'dark' ? '#333 !important' : 'none'};

    :hover {
      border-color: ${({ theme }) => theme.title === 'dark' ? '#555' : '#999'};
    }
  }
`;