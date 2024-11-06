import { useEffect, useState } from "react";
import useZsStore from "@/app/infrastructure/hooks/use-zs-store.ts";

type ProfileIconProps = {
  size?: string;
};

const ProfileIcon = ({ size = "w-16 h-16" }: ProfileIconProps) => {
  const { photos } = useZsStore();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const storedPhoto = photos.find((photo) => photo.id === "profile-pic");
    if (storedPhoto) {
      setProfileImage(storedPhoto.url);
    }
  }, [photos]);

  return (
    <div
      className={`flex items-center justify-center border-2 border-yellow-400 rounded-lg ${size}`}
      style={{
        backgroundColor: profileImage ? "transparent" : "#4A4A4A",
      }}
    >
      {profileImage ? (
        <img
          src={profileImage}
          alt="Profile"
          className="object-cover w-full h-full rounded-lg"
        />
      ) : (
        <PlaceholderIcon />
      )}
    </div>
  );
};

const PlaceholderIcon = () => (
  <svg
    className="w-8 h-8 text-yellow-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <path d="M21 15l-5-5L5 21" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default ProfileIcon;
