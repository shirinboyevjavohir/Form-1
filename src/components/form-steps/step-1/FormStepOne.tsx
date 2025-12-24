import { useState, useEffect } from "react";
import { TextInput } from "../../text-input/TextInput";
import { InputNumberComponent } from "../../input-number/InputNumber";
import { Row } from "antd";
import { PaintSelection } from "../../paint-selection/PaintSelection";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import "./formStepOne.css";

export const FormStepOne = () => {
  const [animateTitle, setAnimateTitle] = useState(false);
  const visible = useSelector((state: RootState) => state.mainModal.visible);

  useEffect(() => {
    if (visible) {
      requestAnimationFrame(() => {
        setAnimateTitle(false);
        setAnimateTitle(true);
      });
    } else {
      requestAnimationFrame(() => setAnimateTitle(false));
    }
  }, [visible]);

  return (
    <div>
      <h1 className={`form_title ${animateTitle ? "open" : "close"}`}>
        Step 1
      </h1>
      <TextInput
        title="Name"
        required={false}
        name="name"
        placeholder="Name"
        classNameTextInput={`${animateTitle ? "open" : "close"}`}
      />
      <div
        className={`standard_size_container ${animateTitle ? "open" : "close"}`}
      >
        <div className="form_line"></div>

        <h2 className="standard_size">Size</h2>

        <Row gutter={12}>
          <InputNumberComponent
            title="Height"
            name="height"
            suffix="mm"
            type="number"
          />
          <InputNumberComponent
            title="Width"
            name="width"
            suffix="mm"
            type="number"
          />
        </Row>
      </div>
      <div className={`paint_selection ${animateTitle ? "open" : "close"}`}>
        <div className="form_line"></div>
        <PaintSelection />
      </div>
    </div>
  );
};
