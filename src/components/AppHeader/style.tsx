import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    .settings-button {
        height: 3rem;
        width: 3rem;
        font-size: 1.3rem;
    }

    .header-settings-column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
    }

    .app-header-logo {
        height: 100%;
        align-content: flex-start;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        float: left;
        color: white;
        padding-right: 1em;
        margin-top: 0.2em;

        .logo-icon {
            font-size: 32px;
            align-self: center;
            padding-bottom: 10px;
            margin-right: 0.2em;
        }

        .logo-text {
            align-self: center;
        }
    }
`;
