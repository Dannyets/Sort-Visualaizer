import styled from 'styled-components';

export const NumberVisualizerContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const VisualNumberContainer = styled.div`
    height: 50%;
    width: 90%;
    display: flex;
    flex-direction: column;
`;


export const PositiveVisualNumberContainer = styled(VisualNumberContainer)`
    justify-content: flex-end;
    transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;


export const NegativeVisualNumberContainer = styled(VisualNumberContainer)`
    justify-content: 'flex-start';
`;

const VisualNumber = styled.div`
    width: 33%;
    background-color: ${props => getColor(props.number)};
`;

export const PositiveVisualNumber = styled(VisualNumber)`
    height: ${props => props.number >= 0 ? `${props.number}%` : '0'};
`;

export const NegativeVisualNumber = styled(VisualNumber)`
    height: ${props => props.number < 0 ? `${Math.abs(props.number)}%` : '0'};
`;

export const NumberTitle = styled.div`
    width: 33%;
    text-align: center;
    margin: 5px 0;
`;

const getColor = (number) => {
    const red = 18;
    const green = 54;
    const blue = 107;

    const factor = 100;
    const addon = (Math.abs(number) / 100) * factor;

    return `rgb(${red + addon}, ${green + addon}, ${blue + addon})`
}