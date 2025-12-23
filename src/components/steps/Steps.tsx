import { Step } from "../step/Step";
import "./steps.css";

const data = [
  {
    title: "Asosiy ma’lumot",
    description: "Mahsulotning tashkil etuvchi ma’lumotlarini kiritish",
  },
  {
    title: "Asos turi",
    description: "Asosni bir necha turda yaratish",
  },
  {
    title: "Jarayonlarni boshqarish",
    description:
      "Nalichnik asosiga biriktiriladigan jarayonlarni boshqarish sarflanadigan xomashyolarni biriktirish",
  },
  {
    title: "Mahsulot asosini narxlash",
    description: "Karobkaning standart o’lchami uchun narx kiritish",
  },
];

export const Steps = () => {
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
