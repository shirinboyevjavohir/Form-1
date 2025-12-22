import { Row, Col, Form, Input } from "antd";
import "./textInput.css";

type Props = {
  title: string;
  required: boolean;
  name: string;
  placeholder: string;
};

export const TextInput = ({ title, required, name, placeholder }: Props) => {
  return (
    <Row>
      <Col span={24}>
        <Form.Item
          name={name}
          label={<p className="name">{title}</p>}
          required={required}
          rules={[{ required: true, message: "" }]}
        >
          <Input placeholder={placeholder} />
        </Form.Item>
      </Col>
    </Row>
  );
};
