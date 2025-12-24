import { Row, Col, Form, Input } from "antd";
import "./textInput.css";
import { useEffect, useRef } from "react";
import type { InputRef } from "antd";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

type Props = {
  title: string;
  required: boolean;
  name: string;
  placeholder: string;
  classNameTextInput: string;
};

export const TextInput = ({
  title,
  required,
  name,
  placeholder,
  classNameTextInput,
}: Props) => {
  const inputRef = useRef<InputRef>(null);
  const visible = useSelector((state: RootState) => state.mainModal.visible);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [visible]);

  return (
    <Row>
      <Col span={24}>
        <Form.Item
          name={name}
          label={<p className="name">{title}</p>}
          required={required}
          rules={[{ required: true, message: "" }]}
          className={`input ${classNameTextInput}`}
        >
          <Input ref={inputRef} placeholder={placeholder} />
        </Form.Item>
      </Col>
    </Row>
  );
};
