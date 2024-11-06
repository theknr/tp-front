import { ReactNode } from "react";

type WidgetFactoryProps = {
  title: string;
  children: ReactNode;
};

const WidgetFactory = ({ title, children }: WidgetFactoryProps) => {
  return (
    <div className="relative border border-yellow-400 rounded-lg overflow-hidden w-72 shadow-md">
      <div className="bg-yellow-400 p-2 text-center font-semibold text-black text-2xl">
        {title}
      </div>

      <div
        className="p-4 h-40 flex items-center justify-center"
        style={{ backgroundColor: "rgba(229, 231, 235, 0.5)" }}
      >
        {children}
      </div>
    </div>
  );
};

export default WidgetFactory;
