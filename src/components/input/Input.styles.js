import styled from 'styled-components'

export const styles = (theme) => ({
    cancelButton: {
        color: 'white'
    }
});

export const InputContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.12);   
    width: 100%;

    input::-webkit-calendar-picker-indicator {
        display: none;
    }
`;

export const StyledInput = styled.input`
    width: 90%;
    background: transparent;
    border: 0;
    padding: 20px;
    font: 12px Arial, Helvetica, sans-serif;
    color: white;

    &:focus {
        outline: 0;
    }
`;