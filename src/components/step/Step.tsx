import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { FaCheck } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  isLine: boolean;
  index: number;
};
export const Step = ({ title, description, isLine, index }: Props) => {
  const activeStep = useSelector(
    (state: RootState) => state.mainModal.activeStep
  );

  return (
    <div className="step_container">
      <div className="left">
        <div
          className={`radio ${index + 1 === activeStep && "radio_active"} ${
            index + 1 < activeStep && "radio_done"
          }`}
        >
          {index + 1 >= activeStep ? (
            `${index + 1}`
          ) : (
            <FaCheck className="check_icon" />
          )}
        </div>
        <div className={`line ${isLine && "not_line"}`}>
          {index + 1 < activeStep && (
            <div className="stepper_line_progress"></div>
          )}
        </div>
      </div>
      <div className="right">
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </div>
    </div>
  );
};
