import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 1em 1em 1em 0;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .city-weather-report-body {
        margin-top: 1em;
        padding-top: 1em;
        border-top: 1px solid lightgray;
    }

    .loading-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        font-size: 10em;
        color: blue;
    }

    .full-width {
        width: 100%;
    }

    .full-height {
        height: 100%;
    }

    .center-text {
        text-align: center;
    }

    .weather-main-card {
        height: 7rem;
        border-radius: 1rem;
        transition: height 0.3s ease-out;
    }

    .weather-current-input {
        min-height: 4rem;
        font-size: 1rem;
        border-radius: 0.6rem;
        background-color: rgba(0, 0, 0, 0.1);
        input {
            background-color: rgba(0, 0, 0, 0.01);
        }
    }

    .weather-grow {
        height: 29rem;
        transition: height 0.3s ease-out;
    }

    .weather-card-fade-in {
        animation: fadeIn 2s;
    }

    .weather-input-label {
        text-align: center;
    }
`;
