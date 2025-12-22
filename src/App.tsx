import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setMainModal } from "./slices/slices";
import { BasicInformation } from "./components/basic-information/BasicInformation";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const showLoading = () => {
    dispatch(setMainModal(true));
  };

  return (
    <>
      <Button
        className="send_btn"
        type="primary"
        onClick={showLoading}
        icon={<PlusOutlined />}
      >
        Asos yaratish
      </Button>
      <BasicInformation />
    </>
  );
};

export default App;
