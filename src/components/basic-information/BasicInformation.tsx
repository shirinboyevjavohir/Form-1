import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { Form, Modal, Row, Col } from "antd";
import { FaCheck } from "react-icons/fa";
import { InputNumberComponent } from "../input-number/InputNumber";
import { TextInput } from "../text-input/TextInput";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setMainModal } from "../../slices/slices";

const Item = Form.Item;

export const BasicInformation = () => {
  const visible = useSelector((state: RootState) => state.mainModal.visible);
  const dispatch = useDispatch();
  const [formInstance] = useForm();
  const [color, setColor] = useState(
    formInstance.getFieldValue("color") || "painted"
  );

  const handleColorClick = (value: string) => {
    setColor(value);
    formInstance.setFieldsValue({ color: value });
  };

  const onOk = () => {
    formInstance.submit();
  };

  const onFinish = (fields: unknown) => {
    console.log(fields);
    // formInstance.resetFields();
  };

  return (
    <Modal
      className="modal"
      title={<p>Eshik asosini yaratish</p>}
      open={visible}
      onCancel={() => {
        dispatch(setMainModal(false));
      }}
      width={1147}
      onOk={onOk}
      cancelText="Yopish"
      okText="Keyingi"
    >
      <div className="container">
        <div className="container">
          <div className="step">Test</div>

          <div className="form">
            <Form
              form={formInstance}
              layout="vertical"
              onFinish={onFinish}
              initialValues={{ color: "painted" }}
            >
              <h1 className="form_title">Asosiy ma’lumotlar</h1>
              <TextInput
                title="Nomi"
                required={false}
                name="name"
                placeholder="Nomni kiriting"
              />
              <div className="form_line"></div>

              <h2 className="standard_size">Standart o’lcham</h2>

              <Row gutter={12}>
                <InputNumberComponent
                  title="Mahsulot bo’yi"
                  name="height"
                  suffix="mm"
                  type="number"
                />
                <InputNumberComponent
                  title="Mahsulot eni"
                  name="width"
                  suffix="mm"
                  type="number"
                />
              </Row>

              <div className="form_line"></div>

              <h2 className="standard_size">Bo‘yoq</h2>
              <div className="color_container">
                <Item name="color">
                  <Row gutter={12}>
                    <Col span={12}>
                      <div
                        className={`color_item ${
                          color === "painted" ? "active" : ""
                        }`}
                        onClick={() => handleColorClick("painted")}
                      >
                        <p className="color_item_title">Bo‘yoqli</p>
                        <div className="radio_container">
                          {color === "painted" && (
                            <FaCheck className="check_icon" />
                          )}
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
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  );
};
