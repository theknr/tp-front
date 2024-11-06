import background from "@/assets/background.png";
import RenderImageBox from "@/app/features/photos/molecules/render-image-box.tsx";
import useZsStore from "@/app/infrastructure/hooks/use-zs-store.ts";
import { v4 as uuidv4 } from "uuid";
import { resizeImage } from "@/app/features/photos/photos.helpers.ts";

const PhotosPage = () => {
  const { photos, addPhoto, removePhoto } = useZsStore();
  const totalBoxes = 6;

  const handleAddPhoto = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const resizedBase64 = await resizeImage(file, 280, 280);
        addPhoto({ id: uuidv4(), url: resizedBase64 });
      }
    };
    input.click();
  };

  const handleDeletePhoto = (id: string) => {
    removePhoto(id);
  };

  const boxesToRender = Array(totalBoxes).fill(null);

  photos
    .filter((photo) => photo.id !== "profile-pic")
    .forEach((photo, index) => {
      boxesToRender[index] = photo;
    });

  return (
    <div
      className="w-full h-full bg-cover bg-center p-8 flex flex-col items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="text-4xl text-white mb-6">Photos</h1>

      <div className="grid grid-cols-3 gap-14">
        {Array.from({ length: totalBoxes }, (_, index) => (
          <RenderImageBox
            key={index}
            image={boxesToRender[index]}
            index={index}
            onAddPhoto={handleAddPhoto}
            onDeletePhoto={handleDeletePhoto}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotosPage;
