import WidgetFactory from "@/app/features/dashboard/molecules/widget-factory.tsx";
import Spinner from "@/ui/atoms/spinner.tsx";
import useFetchNews from "@/app/infrastructure/hooks/use-fetch-news.ts";

function NewsWidget() {
  const { data, isLoading, error } = useFetchNews();

  if (isLoading) {
    return (
      <WidgetFactory title="News">
        <Spinner />
      </WidgetFactory>
    );
  }

  if (error) {
    return (
      <WidgetFactory title="News">
        <p className="text-red-500">Failed to load news</p>
      </WidgetFactory>
    );
  }

  return (
    <WidgetFactory title="News">
      <div>
        <div className="text-sm font-bold mb-2 text-gray-800 leading-tight">
          {data?.title}
        </div>
        <div className="text-gray-700 text-sm leading-snug">
          {data?.contentSnippet}
        </div>
      </div>
    </WidgetFactory>
  );
}

export default NewsWidget;
