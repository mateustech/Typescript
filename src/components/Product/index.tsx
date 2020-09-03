import React from 'react';

import { Container, Row, Painel, Column, Gallery, Section, Description } from './styles';
import TshirtImg from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo'
import ProductAction from '../ProductAction'
const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Painel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={TshirtImg} />

          </Gallery>
          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Painel>
    </Container>
  );
};
const WarrantySection = () =>
  (
    <Section>
      <h4>Garantia</h4>
      <div>
        <span>
          <p className="title">Compra garantida com o lorem inpsum</p>
          <p className="description">Receba o produto que esta esperando ou devolvemos o seu dinheiro.</p>
        </span>
        <span>
          <p className="title">Garantia do vendedor</p>
          <p className="description">Sem garantia</p>
        </span>
      </div>
      <a href="#">Saiba mais sobre garantia</a>
    </Section>
  )

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos illo rem natus incidunt suscipit reiciendis non eveniet excepturi quasi in nulla sit exercitationem earum corporis, deserunt unde dolorem nihil?</p>
    <br />
    <br />
   Itens inclusos: <br />
   - 1x LED <br />
   - 1x LED <br />
   - 1x LED <br />
   - 1x LED <br />
   - 1x LED <br />
   - 1x LED <br />
    <br />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa pariatur est excepturi similique nostrum iste minus perspiciatis quae omnis. Veritatis voluptatem earum excepturi sint iusto doloribus debitis magnam dolore dolor?</p>
  </Description>
)
export default Product;
