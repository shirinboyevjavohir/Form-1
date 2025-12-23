type Props = {
  title: string;
  description: string;
  index: number;
  isLine: boolean;
};
export const Step = ({ title, description, index, isLine }: Props) => {
  return (
    <div className="step_container">
      <div className="left">
        <div className="radio">{index + 1}</div>
        <div className={`line ${isLine ? "not_line" : ""}`}></div>
      </div>
      <div className="right">
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </div>
    </div>
  );
};
