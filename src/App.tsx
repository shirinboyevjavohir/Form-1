import React from "react";
import { Button, Form, Input, Modal, Row, Col, InputNumber } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Item = Form.Item;

const App: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [formInstance] = Form.useForm();

  const showLoading = () => {
    setOpen(true);
  };

  const onOk = () => {
    formInstance.submit();
  };

  const onFinish = () => {
    console.log(formInstance);
  };

  return (
    <>
      <Button type="primary" onClick={showLoading} icon={<PlusOutlined />}>
        Asos yaratish
      </Button>
      <Modal
        className="modal"
        title={<p>Eshik asosini yaratish</p>}
        open={open}
        onCancel={() => setOpen(false)}
        width={1147}
        onOk={onOk}
        cancelText="Yopish"
        okText="Keyingi"
      >
        <div className="container">
          <div className="container">
            <div className="step">Test</div>

            <div className="form">
              <Form form={formInstance} layout="vertical" onFinish={onFinish}>
                <h1 className="form_title">Asosiy ma’lumotlar</h1>
                <Row>
                  <Col span={24}>
                    <Item
                      name="name"
                      label={<p className="name">Nomi</p>}
                      required={false}
                      rules={[{ required: true, message: "" }]}
                    >
                      <Input placeholder="Nomni kiriting" />
                    </Item>
                  </Col>

                  <div className="form_line"></div>
                </Row>
                <h2 className="standard_size">Standart o’lcham</h2>

                <Row gutter={12}>
                  <Col span={12}>
                    <Item
                      name="height"
                      label={<p className="name">Mahsulot bo’yi</p>}
                      required={false}
                      rules={[{ required: true, message: "" }]}
                    >
                      <InputNumber
                        controls={false}
                        style={{ width: "100%" }}
                        min={0}
                        suffix={<span className="suffix">mm</span>}
                      />
                    </Item>
                  </Col>
                  <Col span={12}>
                    <Item
                      name="width"
                      label={<p className="name">Mahsulot eni</p>}
                      required={false}
                      rules={[{ required: true, message: "" }]}
                    >
                      <InputNumber
                        controls={false}
                        style={{ width: "100%" }}
                        min={0}
                        suffix={<span className="suffix">mm</span>}
                      />
                    </Item>
                  </Col>
                </Row>

                <div className="form_line"></div>

                <h2 className="standard_size">Bo‘yoq</h2>
                <div className="color_container">
                  <Row gutter={12}>
                    <Col span={12}>
                      <div className="color_item">
                        <p className="color_item_title">Bo‘yoqli</p>
                        <div className="radio_container"></div>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="color_item">
                        <p className="color_item_title">Bo‘yoqsiz</p>
                        <div className="radio_container"></div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default App;
