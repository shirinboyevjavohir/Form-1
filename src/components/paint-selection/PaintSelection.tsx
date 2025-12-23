import { useState } from "react";
import { Row, Col, Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { FaCheck } from "react-icons/fa";
import "./paintSelection.css";

const Item = Form.Item;

export const PaintSelection = () => {
  const [formInstance] = useForm();
  const [color, setColor] = useState(
    formInstance.getFieldValue("color") || "painted"
  );

  const handleColorClick = (value: string) => {
    setColor(value);
    formInstance.setFieldsValue({ color: value });
  };
  return (
    <div>
      <h2 className="standard_size">Bo‘yoq</h2>
      <div className="color_container">
        <Item name="color">
          <Row gutter={12}>
            <Col span={12}>
              <div
                className={`color_item ${color === "painted" ? "active" : ""}`}
                onClick={() => handleColorClick("painted")}
              >
                <p className="color_item_title">Bo‘yoqli</p>
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
                <p className="color_item_title">Bo‘yoqsiz</p>
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
