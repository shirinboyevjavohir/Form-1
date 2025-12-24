import "./formStepFourth.css";
import { InputNumberComponent } from "../../input-number/InputNumber";
import { useEffect, useState } from "react";
import type { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

export const FormStepFourth = () => {
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
    <div className="step_fourth">
      <h2 className={`step_fourth_title ${animateTitle ? "open" : "close"}`}>
        Percent
      </h2>
      <div className={`step_fourth_input ${animateTitle ? "open" : "close"}`}>
        <InputNumberComponent
          title="Percent"
          name="totalPremium"
          suffix="%"
          type="number"
          widthInput={212}
          isFocus={true}
        />
      </div>
    </div>
  );
};
