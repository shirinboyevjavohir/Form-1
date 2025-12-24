import type { FC } from "react";

import { FormStepOne } from "../components/form-steps/step-1/FormStepOne";
import { FormStepSecond } from "../components/form-steps/step-2/FormStepSecond";
import { FormStepThird } from "../components/form-steps/step-3/FormStepThird";
import { FormStepFourth } from "../components/form-steps/step-4/FormStepFourth";

export interface StepConfig {
  id: number;
  component: FC<any>; // Props bo‘lsa aniq type yozing
  title: string;
  description: string;
}

export const components: StepConfig[] = [
  {
    id: 1,
    component: FormStepOne,
    title: "Step 1",
    description: "Step description 1",
  },
  {
    id: 2,
    component: FormStepSecond,
    title: "Step 2",
    description: "Step description 2",
  },
  {
    id: 3,
    component: FormStepThird,
    title: "Step 3",
    description: "Step description 3",
  },
  {
    id: 4,
    component: FormStepFourth,
    title: "Step 4",
    description: "Step description 4",
  },
];
