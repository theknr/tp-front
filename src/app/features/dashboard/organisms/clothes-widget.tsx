import WidgetFactory from "@/app/features/dashboard/molecules/widget-factory.tsx";
import useZsStore from "@/app/infrastructure/hooks/use-zs-store.ts";
import { Cell, Pie, PieChart, LabelList } from "recharts";
import { COLORS } from "@/app/features/clothing/clothing.props.ts";

function ClothesWidget() {
  const clothingData = useZsStore((state) => state.clothingData);

  return (
    <WidgetFactory title="Clothes">
      <div className="flex justify-center items-center">
        <PieChart width={150} height={150}>
          <Pie
            data={clothingData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          >
            {clothingData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <LabelList
              dataKey="name"
              position="outside"
              style={{ fontSize: "8px", fill: "#333" }}
            />
          </Pie>
        </PieChart>
      </div>
    </WidgetFactory>
  );
}

export default ClothesWidget;
