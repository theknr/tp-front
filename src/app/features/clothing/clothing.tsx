import { useEffect, useMemo } from "react";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import useFetchClothingData from "@/app/infrastructure/hooks/use-fetch-clothing-data.ts";
import Spinner from "@/ui/atoms/spinner.tsx";
import {
  ClothingDistribution,
  COLORS,
} from "@/app/features/clothing/clothing.props.ts";
import useZsStore from "@/app/infrastructure/hooks/use-zs-store.ts";

function Clothing() {
  const { data, isLoading, error } = useFetchClothingData();
  const setClothingData = useZsStore((state) => state.setClothingData);

  const clothingDistribution = useMemo<ClothingDistribution[]>(() => {
    if (!data || data.payload.length === 0) return [];

    const distribution = data.payload.reduce<Record<string, number>>(
      (acc, entry) => {
        acc[entry.clothe] = (acc[entry.clothe] || 0) + 1;
        return acc;
      },
      {},
    );

    return Object.entries(distribution).map(([clothe, count]) => ({
      name: clothe,
      value: (count / data.payload.length) * 100,
    }));
  }, [data]);

  useEffect(() => {
    if (clothingDistribution.length > 0) {
      setClothingData(clothingDistribution);
    }
  }, [clothingDistribution, setClothingData]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) return <div>Error loading data</div>;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Clothing Distribution</h2>

      <PieChart
        width={600}
        height={500}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <Pie
          data={clothingDistribution}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
        >
          {clothingDistribution.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
        <Legend />
      </PieChart>
    </div>
  );
}

export default Clothing;
