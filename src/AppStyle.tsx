import styled, { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from './types/theme';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  .app-header {
    background: ${({ theme }) => theme.colors.header} !important;
    color: ${({ theme }) => theme.colors.text}  !important;
    .app-header-menu {
      background: ${({ theme }) => theme.colors.body}  !important;
      color: ${({ theme }) => theme.colors.text}  !important;
    }
    .app-header-logo {
      color: ${({ theme }) => theme.colors.text}  !important;
      > .logo-text {
        color: ${({ theme }) => theme.colors.text}  !important;
      }
      > .logo-icon {
        color: ${({ theme }) => theme.colors.text}  !important;
      }
    }
  }

  


  .custom-drawer {
      background: ${({ theme }) => theme.colors.bodyAccent} !important;
      * {
        color: ${({ theme }) => theme.colors.textAccent} !important;
      }
      
  }
  

  .app-layout {

    .custom-button {
      background-color: ${({ theme }) => theme.colors.body} !important;
      border: 1px solid ${({ theme }) => theme.colors.bodyAccent} !important;
      color: ${({ theme }) => theme.colors.textAccent} !important;

      :hover {
        border: 1px solid ${({ theme }) => theme.colors.textAccent} !important;
        background-color: ${({ theme }) => theme.colors.bodyAccent} !important;
      }
    }
    background: ${({ theme }) => theme.colors.body} !important;
    .app-content {
      * {
        color: ${({ theme }) => theme.colors.textAccent} !important;
      }
      .ant-card-body {
        .ant-spin-container::after {
           border-radius: 1rem !important;
        }
      }

      .custom-skeleton {
      background: ${({ theme }) => theme.colors.bodyAccent2};
      height: 100%;
      border-radius: 1rem !important;
      * {
        border-radius: 1rem !important;
      }
    }

    .custom-spin {
      border-radius: 1rem !important;
    }

    .weather-card-day-tabs {
        .ant-tabs-nav {
          border-right: 1px solid ${({ theme }) => theme.colors.textAccent} !important;
        }
    }

    .custom-ant-card-body {
      background: ${({ theme }) => theme.colors.bodyAccent} !important;
      div * {
        color: ${({ theme }) => theme.colors.textAccent} !important;
      }
    }

    .custom-carousel-tabs {
      background: ${({ theme }) => theme.colors.bodyAccent2} !important;
      .ant-tabs-nav {
        background: ${({ theme }) => theme.colors.header};
      }
    }

    .custom-better-carousel {
      .weather-carousel-col {
          background-color: ${({ theme }) => theme.colors.bodyAccent2} !important;
      }
      .weather-carousel-text {
         color: ${({ theme }) => theme.colors.textAccent} !important;
      }
    }
   }
    }

     .app-footer {
    background: ${({ theme }) => theme.colors.body}  !important;
  }
`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;

    .ant-layout-header {
        padding: 0 2rem 0 2rem;
    }

    .full-width {
        width: 100%;
    }
`;
