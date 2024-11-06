type RenderImageBoxProps = {
  image: { id: string; url: string } | null;
  index: number;
  onAddPhoto: (index: number) => void;
  onDeletePhoto: (id: string) => void;
};

const RenderImageBox = ({
  image,
  index,
  onAddPhoto,
  onDeletePhoto,
}: RenderImageBoxProps) => {
  return (
    <div
      className={`relative w-40 h-40 border-2 border-yellow-400 rounded-lg flex items-center justify-center overflow-hidden ${
        !image ? "cursor-pointer" : ""
      }`}
      onClick={() => !image && onAddPhoto(index)}
    >
      {image ? (
        <>
          <img
            src={image.url}
            alt="Photo"
            className="object-cover w-full h-full"
          />
          <button
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              onDeletePhoto(image.id);
            }}
          >
            &times;
          </button>
        </>
      ) : (
        index === 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddPhoto(index);
            }}
            className="text-yellow-400 text-7xl"
          >
            +
          </button>
        )
      )}
    </div>
  );
};

export default RenderImageBox;
