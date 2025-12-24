import { Select, Form } from "antd";
import "./formStepThird.css";
import { useEffect, useState } from "react";
import type { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

const Item = Form.Item;

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];

export const FormStepThird = () => {
  const [animateTitle, setAnimateTitle] = useState(false);
  const visible = useSelector((state: RootState) => state.mainModal.visible);

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

  return (
    <div className="step_third">
      <h2 className={`step_third_title ${animateTitle ? "open" : "close"}`}>
        Select
      </h2>
      <Item name="consumption">
        <Select
          className={`step_third_select ${animateTitle ? "open" : "close"}`}
          showSearch={{
            filterOption: (input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase()),
          }}
          options={options}
        />
      </Item>
    </div>
  );
};
