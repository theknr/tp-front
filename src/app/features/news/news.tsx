import background from "@/assets/background.png";
import useFetchNews from "@/app/infrastructure/hooks/use-fetch-news.ts";
import Spinner from "@/ui/atoms/spinner.tsx";

function NewsPage() {
  const { data, isLoading } = useFetchNews();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex justify-start mb-10 mt-10">
        <h1 className="text-5xl font-bold text-white">News</h1>
      </div>

      <h2 className="text-2xl font-bold text-white mb-4 text-center">
        {data?.title}
      </h2>

      <div className="max-w-3xl mx-auto">
        <p className="text-white mb-2">{data?.contentSnippet}</p>
      </div>
    </div>
  );
}

export default NewsPage;
