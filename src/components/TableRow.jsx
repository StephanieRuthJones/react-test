import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
const TableRow = ({ index, name, age, salary }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("show", show);
  return (
    <>
      <tr onClick={handleShow}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{`$${salary}`}</td>
      </tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You clicked...</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`${name} who is ${age} and makes ${salary}`}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TableRow;
