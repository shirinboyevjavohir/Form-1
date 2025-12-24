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
  const [okText, setOkText] = useState("Keyingi");

  const components = [
    {
      id: 1,
      component: <FormStepOne />,
      title: "Step 1",
      description: "Step description 1",
    },
    {
      id: 2,
      component: <FormStepSecond />,
      title: "Step 2",
      description: "Step description 2",
    },
    {
      id: 3,
      component: <FormStepThird />,
      title: "Step 3",
      description: "Step description 3",
    },
    {
      id: 4,
      component: <FormStepFourth />,
      title: "Step 4",
      description: "Step description 4",
    },
  ];

  const onOk = () => {
    if (components.length !== activeStep) {
      dispatch(setActiveStep(activeStep + 1));
      setOkText(components.length - 1 === activeStep ? "Save" : "Next");
    } else {
      dispatch(setActiveStep(components.length));
    }

    if (activeStep === components.length) {
      formInstance.submit();
    }
  };

  const onFinish = () => {
    const values = formInstance.getFieldsValue(true);
    console.log("All fields:", values);
  };

  const onCancel = () => {
    dispatch(setMainModal(false));
    formInstance.resetFields();
    dispatch(setActiveStep(1));
    setOkText("Next");
  };

  return (
    <Modal
      forceRender
      className="modal"
      title={<p>Form</p>}
      open={visible}
      onCancel={onCancel}
      width={1147}
      onOk={onOk}
      cancelText="Close"
      okText={okText}
    >
      <div className="container">
        <div className="step">
          <Steps data={components} />
        </div>

        <div className="form">
          <Form
            form={formInstance}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ color: "painted", mdf1: true, mdf2: false }}
          >
            {components.find((item) => item.id === activeStep)?.component}
          </Form>
        </div>
      </div>
    </Modal>
  );
};
