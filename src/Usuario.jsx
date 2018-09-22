import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

const Usuario = (props) => {
  return (
    <div>
      <Row>
        <Col sm={{ size: 'auto', offset: 5 }} >
            <Card>
                <CardImg top width="10%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                <CardTitle>Usuário</CardTitle>
                <CardSubtitle>Rodolfo Jordão Bacini</CardSubtitle>
                <CardText>@rodolforjb</CardText>
                </CardBody>
            </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Usuario;