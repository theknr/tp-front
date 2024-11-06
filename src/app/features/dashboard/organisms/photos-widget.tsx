import WidgetFactory from "@/app/features/dashboard/molecules/widget-factory.tsx";
import useZsStore from "@/app/infrastructure/hooks/use-zs-store.ts";

function PhotosWidget() {
  const { photos } = useZsStore();

  const displayedPhotos = photos
    .filter((photo) => photo.id !== "profile-pic")
    .slice(0, 4);

  return (
    <WidgetFactory title="Photos">
      <div className="grid grid-cols-2 grid-rows-2 gap-2 p-2">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="relative w-24 h-16 border-2 border-yellow-400 rounded-lg flex items-center justify-center overflow-hidden"
          >
            {displayedPhotos[index] ? (
              <img
                src={displayedPhotos[index].url}
                alt={`Photo ${index + 1}`}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="text-yellow-400 text-4xl" />
            )}
          </div>
        ))}
      </div>
    </WidgetFactory>
  );
}

export default PhotosWidget;
