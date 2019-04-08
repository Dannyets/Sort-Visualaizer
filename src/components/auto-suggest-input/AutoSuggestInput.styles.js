import styled from 'styled-components';

export const styles = (theme) => ({
    refreshButton: {
        color: 'white',
        display: 'inline-block',
        height: '100%'
    }
});

export const InputWrapper = styled.div`
`;

export const InputRow = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const RefreshButtonContainer = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.12);   
`;