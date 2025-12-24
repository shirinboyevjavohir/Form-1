import { useForm } from "antd/es/form/Form";
import { Form, Modal, message } from "antd";
import { useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setMainModal } from "../../slices/slices";
import { setActiveStep } from "../../slices/slices";
import "./basicInformation.css";
import { Steps } from "../steps/Steps";
import { components } from "../../data/formSteps.ts";

const stepFields: Record<number, string[]> = {
  1: ["name", "height", "width", "color"],
  2: ["mdf1", "mdf2"],
  3: ["consumption"],
  4: ["totalPremium"],
};

export const BasicInformation = () => {
  const visible = useSelector((state: RootState) => state.mainModal.visible);
  const activeStep = useSelector(
    (state: RootState) => state.mainModal.activeStep
  );
  const dispatch = useDispatch();
  const [formInstance] = useForm();
  const isLastStep = activeStep === components.length;

  const okText = useMemo(() => {
    if (components.length === activeStep) return "Save";
    return "Next";
  }, [activeStep]);

  const activeComponent = useMemo(() => {
    const Comp = components.find((item) => item.id === activeStep)?.component;
    return Comp ? <Comp /> : null;
  }, [activeStep]);

  const onCancel = () => {
    if (activeStep === 1) {
      const name = formInstance.getFieldValue("name");
      const height = formInstance.getFieldValue("height");
      const width = formInstance.getFieldValue("width");

      if (name || height || width) {
        confirmModal();
      } else {
        resetModal();
      }
      return;
    }

    confirmModal();
  };

  const confirmModal = () => {
    Modal.confirm({
      title: "Are you sure?",
      content: "Unsaved changes will be lost",
      okText: "Yes",
      cancelText: "No",
      wrapClassName: "confirm-modal",
      onOk: () => {
        resetModal();
      },
    });
  };

  const resetModal = () => {
    dispatch(setMainModal(false));
    formInstance.resetFields();
    dispatch(setActiveStep(1));
  };

  const onOk = async () => {
    try {
      await formInstance.validateFields(stepFields[activeStep] || []);

      if (!isLastStep) {
        dispatch(setActiveStep(activeStep + 1));
        return;
      }

      formInstance.submit();
    } catch {}
  };

  const onFinish = () => {
    const values = formInstance.getFieldsValue(true);
    console.log(values);
    message.success("Successfully Submitted!");
    resetModal();
  };

  return (
    <Modal
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
          <Steps
            data={components.map(({ id, title, description }) => ({
              id,
              title,
              description,
            }))}
          />
        </div>

        <div className="form">
          <Form
            form={formInstance}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ color: "painted", mdf1: true, mdf2: false }}
          >
            {activeComponent}
          </Form>
        </div>
      </div>
    </Modal>
  );
};
