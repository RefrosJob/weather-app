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

    .full-height {
        height: 100%;
    }

    .center-text {
        text-align: center;
    }

    .weather-card-hourly {
        margin-top: 1rem;
    }

    .weather-main-card {
        height: 8rem;
        border-radius: 1rem;
        transition: height 0.3s ease-out;
        border: 0px;
    }

    .weather-inner-card {
        animation: fadeIn 2s;
        border: 0px;
    }
    .weather-current-input {
        min-height: 4rem;
        font-size: 1rem;
        border-radius: 0.6rem;
    }

    .weather-card-condition-icon {
        height: 4rem;
    }

    .weather-grow {
        height: 48rem;
        transition: height 0.3s ease-out;
    }

    .weather-card-fade-in {
        animation: fadeIn 2s;
        border: 0px;
    }

    .weather-input-label {
        text-align: center;
    }

    .content-tab {
        border: 0px;
    }

    .weather-carousel-tabs {
        border-radius: 0.5rem;
        height: 19.5rem;
        .ant-tabs-nav {
            border-radius: 0.5rem 0.5rem 0 0;
            padding: 0 1rem 0 1rem;
        }
    }
`;
