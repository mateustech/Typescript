import React from 'react';

import { Container, Wrapper } from './styles';
import Product from '../Product'
const Layout: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Product />
            </Wrapper>
        </Container>)
}

export default Layout;