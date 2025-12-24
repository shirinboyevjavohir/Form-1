import { Col, Form } from "antd";
import { InputNumber } from "antd";
import "./inputNumber.css";

const Item = Form.Item;

type Props = {
  title: string;
  name: string;
  suffix: string;
  type: string;
  widthInput?: number;
};
export const InputNumberComponent = ({
  title,
  name,
  suffix,
  type,
  widthInput,
}: Props) => {
  return (
    <Col span={12}>
      <Item
        name={name}
        label={<p className="name">{title}</p>}
        required={false}
        rules={[
          {
            validator: (_, value) =>
              value === 0 ? Promise.reject(new Error()) : Promise.resolve(),
          },
          { required: true, message: "" },
        ]}
      >
        <InputNumber
          controls={false}
          style={{ width: widthInput ? `${widthInput}px` : "100%" }}
          min={0}
          type={type}
          suffix={<span className="suffix">{suffix}</span>}
        />
      </Item>
    </Col>
  );
};
