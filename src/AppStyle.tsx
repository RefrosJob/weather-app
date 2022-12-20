import styled, { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from './types/theme';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  .app-footer {
    background: ${({ theme }) => theme.colors.body};
  }

  .app-header {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    .app-header-menu {
      background: ${({ theme }) => theme.colors.body};
      color: ${({ theme }) => theme.colors.text};
    }
    .app-header-logo {
      color: ${({ theme }) => theme.colors.text};
      > .logo-text {
        color: ${({ theme }) => theme.colors.text};
      }
      > .logo-icon {
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }
`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;

    .ant-layout-header {
        padding: 0 2rem 0 2rem;
    }
`;
