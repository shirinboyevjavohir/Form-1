import { useForm } from "antd/es/form/Form";
import { Form, Modal, Row } from "antd";
import { useState, useEffect } from "react";

import { InputNumberComponent } from "../input-number/InputNumber";
import { TextInput } from "../text-input/TextInput";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setMainModal } from "../../slices/slices";
import { PaintSelection } from "../paint-selection/PaintSelection";
import "./basicInformation.css";

export const BasicInformation = () => {
  const [animateTitle, setAnimateTitle] = useState(false);

  const visible = useSelector((state: RootState) => state.mainModal.visible);
  const dispatch = useDispatch();
  const [formInstance] = useForm();

  useEffect(() => {
    if (visible) {
      setAnimateTitle(false);
      requestAnimationFrame(() => {
        setAnimateTitle(true);
      });
    } else {
      setAnimateTitle(false);
    }
  }, [visible]);

  const onOk = () => {
    formInstance.submit();
  };

  const onFinish = (fields: unknown) => {
    console.log(fields);
    // formInstance.resetFields();
  };

  return (
    <Modal
      forceRender
      className="modal"
      title={<p>Eshik asosini yaratish</p>}
      open={visible}
      onCancel={() => {
        dispatch(setMainModal(false));
        formInstance.resetFields();
      }}
      width={1147}
      onOk={onOk}
      cancelText="Yopish"
      okText="Keyingi"
    >
      <div className="container">
        <div className="step">Test</div>

        <div className="form">
          <Form
            form={formInstance}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ color: "painted" }}
          >
            <h1 className={`form_title ${animateTitle ? "open" : "close"}`}>
              Asosiy ma’lumotlar
            </h1>
            <TextInput
              title="Nomi"
              required={false}
              name="name"
              placeholder="Nomni kiriting"
              classNameTextInput={`${animateTitle ? "open" : "close"}`}
            />
            <div
              className={`standard_size_container ${
                animateTitle ? "open" : "close"
              }`}
            >
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
            </div>
            <div
              className={`paint_selection ${animateTitle ? "open" : "close"}`}
            >
              <div className="form_line"></div>
              <PaintSelection />
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
