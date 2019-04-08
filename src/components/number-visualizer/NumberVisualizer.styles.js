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
    background-color: white;
    width: 33%;
`;

export const PositiveVisualNumber = styled(VisualNumber)`
    height: ${props => props.number >= 0 ? `${props.number}%` : '0'};
`;

export const NegativeVisualNumber = styled(VisualNumber)`
    height: ${props => props.number < 0 ? `${-props.number}%` : '0'};
`;