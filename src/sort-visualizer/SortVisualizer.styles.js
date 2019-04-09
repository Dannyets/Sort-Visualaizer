import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
`;

export const MainContent = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ConfigurationsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ConfigurationSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ConfigurationSectionTitle = styled.span`
    width: 50%;
`;

export const ExplosionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;