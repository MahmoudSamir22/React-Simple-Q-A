import React from "react";
import { Accordion, Row } from "react-bootstrap";
import { questions } from "../data";

const QAList = ({ onRemove }) => {
  let localData = JSON.parse(localStorage.getItem("items"));
  const removeItem = (id) => {
    if(localStorage.getItem("items") !== null) {
      const index = questions.findIndex((question) => question.id === id);
      questions.splice(index, 1);
      onRemove(questions);
    }
  }
  return (
    <Row>
      <Accordion>
        {localStorage.getItem("items") !== null ? (
          localData.map((question, index) => {
            return (<Accordion.Item key={index} eventKey={question.id}>
              <Accordion.Header>
                <div className="m-auto">{question.question}</div>
              </Accordion.Header>
              <Accordion.Body className="text-end">
                <div className="px-3 d-inline">{question.answer}</div>
                <button onClick={() => removeItem(question.id)} className="btn-color">مسح السؤال</button>
              </Accordion.Body>
            </Accordion.Item>);
          })
        ) : (
          <h2 className="fs-4 text-center">لا يوجد اسأله</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QAList;
