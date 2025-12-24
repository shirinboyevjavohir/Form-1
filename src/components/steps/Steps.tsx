import type { ReactNode } from "react";
import { Step } from "../step/Step";
import "./steps.css";

type Props = {
  id: number;
  title: string;
  description: string;
  component: ReactNode;
};

export const Steps = ({ data }: { data: Props[] }) => {
  const dataLength = data.length - 1;
  return (
    <div>
      {data.map((item, index) => {
        return (
          <Step
            key={index}
            title={item.title}
            description={item.description}
            index={index}
            isLine={index === dataLength}
          />
        );
      })}
    </div>
  );
};
