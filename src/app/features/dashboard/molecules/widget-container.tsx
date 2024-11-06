import { ReactNode } from "react";

type WidgetContainerProps = {
  children: ReactNode;
};

function WidgetContainer({ children }: WidgetContainerProps) {
  return (
    <div className="grid gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
      {children}
    </div>
  );
}

export default WidgetContainer;
