import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { questions } from "../data";


const FormInput = ({ onAdd, notify }) => {
  const [qu, setQu] = useState('');
  const [an, setAn] = useState('');
  const addNewItem = () => {
    if(qu === "" || an === "") {
      notify("الرجاء ملئ الحقول", "error");
      return;
    }
    questions.push({ question: qu, answer: an, id: Math.random() });
    setQu("");
    setAn("");
    onAdd();
  };
  return (
    <Row className="my-4">
      <Col sm="5">
        <Form.Control
          value={qu}
          onChange={(e) => setQu(e.target.value)}
          type="text"
          placeholder="أدخل السؤال"
        />
      </Col>
      <Col sm="5">
        <Form.Control
          value={an}
          onChange={(e) => setAn(e.target.value)}
          type="text"
          placeholder="أدخل الإجابه"
        />
      </Col>
      <Col sm="2">
        <button onClick={addNewItem} className="btn-color w-100" type="submit">
          إضافه
        </button>
      </Col>
    </Row>
  );
};

export default FormInput;
