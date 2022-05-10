import { Spinner } from "react-bootstrap";
export const SpinnerComponent = () => {
  return (
    <Spinner animation="border" variant="primary" as="span">
      <span>Loading...</span>
    </Spinner>
  );
};
