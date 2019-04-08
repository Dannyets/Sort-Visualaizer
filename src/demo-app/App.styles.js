import styled from 'styled-components';
import { Icon } from '../components';

export const AppContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;
`;

export const Header = styled.header`
    /* FF3.6-15 */
    background: -webkit-linear-gradient(top, black 0%, transparent 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, black 0%, transparent 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 );
    /* IE6-9 */
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 40px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    box-sizing: border-box;
    z-index: 5;
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

export const ConfigurationsTitle = styled.h1`
    margin-bottom: 5px;
    width: 100%;
    text-align: center;
`;