import { useForm } from "antd/es/form/Form";
import { Form, Modal } from "antd";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setMainModal } from "../../slices/slices";
import { setActiveStep } from "../../slices/slices";
import "./basicInformation.css";
import { Steps } from "../steps/Steps";
import { FormStepOne } from "../form-steps/step-1/FormStepOne";
import { FormStepSecond } from "../form-steps/step-2/FormStepSecond";
import { FormStepThird } from "../form-steps/step-3/FormStepThird";
import { FormStepFourth } from "../form-steps/step-4/FormStepFourth";

export const BasicInformation = () => {
  const visible = useSelector((state: RootState) => state.mainModal.visible);
  const activeStep = useSelector(
    (state: RootState) => state.mainModal.activeStep
  );
  const dispatch = useDispatch();
  const [formInstance] = useForm();
  // const [activeStep, setActiveStep] = useState(1);
  const [okText, setOkText] = useState("Keyingi");

  const components = [
    {
      id: 1,
      component: <FormStepOne />,
    },
    {
      id: 2,
      component: <FormStepSecond />,
    },
    {
      id: 3,
      component: <FormStepThird />,
    },
    {
      id: 4,
      component: <FormStepFourth />,
    },
  ];

  const onOk = () => {
    if (components.length !== activeStep) {
      dispatch(setActiveStep(activeStep + 1));
      setOkText(components.length - 1 === activeStep ? "Saqlash" : "Keyingi");
    } else {
      dispatch(setActiveStep(components.length));
    }

    // formInstance.submit();
  };

  const onFinish = (fields: unknown) => {
    console.log(fields);
    // formInstance.resetFields();
  };

  const onCancel = () => {
    dispatch(setMainModal(false));
    formInstance.resetFields();
    dispatch(setActiveStep(1));
    setOkText("Keyingi");
  };

  return (
    <Modal
      forceRender
      className="modal"
      title={<p>Eshik asosini yaratish</p>}
      open={visible}
      onCancel={onCancel}
      width={1147}
      onOk={onOk}
      cancelText="Yopish"
      okText={okText}
    >
      <div className="container">
        <div className="step">
          <Steps />
        </div>

        <div className="form">
          <Form
            form={formInstance}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ color: "painted" }}
          >
            {components.find((item) => item.id === activeStep)?.component}
          </Form>
        </div>
      </div>
    </Modal>
  );
};
