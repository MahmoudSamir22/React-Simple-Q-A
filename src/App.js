import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/formInput";
import QAList from "./components/QAList";
import { useState } from "react";
import { questions } from "./data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(questions);
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...questions]));
    setData([...questions]);
    notify("تمت الإضافه بنجاح", "success")
  };
  const deleteAllItems = () => {
    localStorage.removeItem("items");
    questions.splice(0, questions.length);
    setData([]);
    notify("تم مس الكل بنجاح", "success")
  };
  const deleteItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items]);
    if (items.length === 0) {
      deleteAllItems();
    } else {
      notify("تم مسح العنصر بنجاح", "success")
    }
  };

  const notify = (message, type) => {
    if(type === "error") {
      toast.error(message);
    } else {
      toast.success(message);
    }
  }

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        {/* <h1>تطبيق سؤال و إجابة</h1> */}
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-3">أسئله و أجوبه شائعه</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify}/>
            <QAList data={data} onRemove={deleteItem} />
            {localStorage.getItem("items") !== null ? (
              <button onClick={deleteAllItems} className="btn-color w-100 my-2">
                مسح الكل
              </button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
