import React from 'react';

import {
  Container,
  Conditional,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon
} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Conditional>Novo | 9 vendidos</Conditional>
      <Row>
        <h1>Camiseta de marca desconhecida </h1>
        <HeartIcon />
      </Row>
      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>
        <InstallmentsInfo>em 3x de 12,99</InstallmentsInfo>
      </PriceCard>
      <StockStatus>Estoque disponivel</StockStatus>
      <MethodCard>
        <CheckIcon>
          <div>
            <span className="title">Frete grátis</span>
            <span className="details">Benefício lorem ipsum</span>
          </div>
        </CheckIcon>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button >Adicionar ao carrinhoo</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>Compra Garantida</p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
