import { Row, Col, Form } from "antd";
import { FaCheck } from "react-icons/fa";
import "./paintSelection.css";

const Item = Form.Item;

export const PaintSelection = () => {
  // use parent form instance so the `color` field is set on the main form
  const form = Form.useFormInstance();
  const color = Form.useWatch("color", form) || "painted";

  const handleColorClick = (value: string) => {
    form.setFieldsValue({ color: value });
  };

  return (
    <div>
      <h2 className="standard_size">Color</h2>
      <div className="color_container">
        <Item name="color">
          <Row gutter={12}>
            <Col span={12}>
              <div
                className={`color_item ${color === "painted" ? "active" : ""}`}
                onClick={() => handleColorClick("painted")}
              >
                <p className="color_item_title">Painted</p>
                <div className="radio_container">
                  {color === "painted" && <FaCheck className="check_icon" />}
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div
                className={`color_item ${
                  color === "not_painted" ? "active" : ""
                }`}
                onClick={() => handleColorClick("not_painted")}
              >
                <p className="color_item_title">Not painted</p>
                <div className="radio_container">
                  {color === "not_painted" && (
                    <FaCheck className="check_icon" />
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Item>
      </div>
    </div>
  );
};
