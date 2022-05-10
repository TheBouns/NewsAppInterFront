import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { CreateArticle } from "../CreateArticle/Article";
export const ModalComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow} size="sm">
        AddNew
      </Button>
      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Header>
          <Modal.Title>
            Add an article and will be publish in our website:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateArticle />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
