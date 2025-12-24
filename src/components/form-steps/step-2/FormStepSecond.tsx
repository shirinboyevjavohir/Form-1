import "./formStepSecond.css";
import { Switch, Form } from "antd";
import { useEffect, useState } from "react";
import type { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

const Item = Form.Item;

export const FormStepSecond = () => {
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
    <div className="step_second">
      <h2 className={`step_second_title ${animateTitle ? "open" : "close"}`}>
        Type
      </h2>
      <div className={`switch_container ${animateTitle ? "open" : "close"}`}>
        <div className="switch_container_item">
          <div className="switch_container_item_left">
            <p>Type 1</p>
            <span>Description 1</span>
          </div>
          <Item name="mdf1" valuePropName="checked">
            <Switch defaultChecked />
          </Item>
        </div>
        <div className="switch_container_item">
          <div className="switch_container_item_left">
            <p>Type 2</p>
            <span>Description 2</span>
          </div>
          <Item name="mdf2" valuePropName="checked">
            <Switch defaultChecked />
          </Item>
        </div>
      </div>
    </div>
  );
};
