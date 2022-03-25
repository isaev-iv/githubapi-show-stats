import { Card } from "react-bootstrap";

export const NoMatch = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>404</Card.Title>
        <Card.Text>
          Эта страница недоступна. Может, поискать что-нибудь другое?
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
