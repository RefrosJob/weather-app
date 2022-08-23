import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    .app-layout {
        height: 100%;
        background: rgb(34, 32, 51);
        background: linear-gradient(
            25deg,
            rgba(34, 32, 51, 1) 0%,
            rgba(97, 80, 213, 1) 50%,
            rgba(69, 163, 236, 1) 100%
        );
        .app-content {
            margin: 1em 1em 1em 1em;
        }
    }
`;
