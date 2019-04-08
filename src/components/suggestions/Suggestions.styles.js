import styled from 'styled-components';

export const styles = (theme) => ({
    collapse: {
        zIndex: 2000,
        position: 'absolute',
        width: '100%'
    }
});

export const NoResultSuggestion = styled.div`
    padding: 20px;
`;

export const SuggestionsContainer = styled.div`
    background-color: #424242;
    border: 1px solid rgba(255, 255, 255, 0.12);
    margin-top: 5px;
`;