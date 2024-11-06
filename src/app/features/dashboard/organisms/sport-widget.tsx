import WidgetFactory from "@/app/features/dashboard/molecules/widget-factory.tsx";
import useZsStore from "@/app/infrastructure/hooks/use-zs-store.ts";

function SportWidget() {
  const { team } = useZsStore();

  return (
    <WidgetFactory title="Sport">
      <div className="text-center">
        <div className="font-bold text-3xl">
          {team ? team : "No team selected"}
        </div>
      </div>
    </WidgetFactory>
  );
}

export default SportWidget;
