import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 10rem;
    .weather-card-carousel-row {
        height: 100%;
    }
    .weather-carousel-col {
        background-color: #91def8;
        border-radius: 1rem;
    }
    .weather-carousel-space {
        min-width: 100%;
        height: 7rem;
        justify-content: center;
        padding: 0.5rem;
    }
    .weather-carousel-text {
        color: white;
        font-weight: bold;
        font-size: 2rem;
    }
`;
