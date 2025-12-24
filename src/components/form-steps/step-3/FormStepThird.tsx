import { useRef, useEffect, useState } from "react";
import { Select, Form } from "antd";
import type { RefSelectProps } from "antd/es/select";

import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import "./formStepThird.css";

const Item = Form.Item;

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];

export const FormStepThird = () => {
  const [animateTitle, setAnimateTitle] = useState(false);
  const visible = useSelector((state: RootState) => state.mainModal.visible);
  const selectRef = useRef<RefSelectProps>(null);

  useEffect(() => {
    selectRef.current?.focus();
  }, []);

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
    <div className="step_third">
      <h2 className={`step_third_title ${animateTitle ? "open" : "close"}`}>
        Select
      </h2>
      <Item name="consumption" rules={[{ required: true, message: "" }]}>
        <Select
          ref={selectRef}
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
