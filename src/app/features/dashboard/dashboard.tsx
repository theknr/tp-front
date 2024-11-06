import background from "@/assets/background.png";
import WidgetContainer from "@/app/features/dashboard/molecules/widget-container.tsx";
import WeatherWidget from "@/app/features/dashboard/organisms/weather-widget.tsx";
import NewsWidget from "@/app/features/dashboard/organisms/news-widget.tsx";
import SportWidget from "@/app/features/dashboard/organisms/sport-widget.tsx";
import PhotosWidget from "@/app/features/dashboard/organisms/photos-widget.tsx";
import TasksWidget from "@/app/features/dashboard/organisms/tasks-widget.tsx";
import ClothesWidget from "@/app/features/dashboard/organisms/clothes-widget.tsx";
import ProfileIcon from "@/app/features/dashboard/molecules/profile-icon.tsx";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div
      className="w-full bg-cover bg-center p-8"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute top-8 left-8">
        <ProfileIcon size="w-16 h-16" />
      </div>

      <div className="flex justify-center mb-10 mt-20 sm:mt-2">
        <h1 className="text-6xl text-white">Good day Swapnil</h1>
      </div>

      <div className="flex justify-center">
        <WidgetContainer>
          <WeatherWidget />
          <Link to="/news">
            <NewsWidget />
          </Link>
          <Link to="/sport">
            <SportWidget />
          </Link>
          <Link to="/photos">
            <PhotosWidget />
          </Link>
          <Link to="/tasks">
            <TasksWidget />
          </Link>
          <Link to="/clothing">
            <ClothesWidget />
          </Link>
        </WidgetContainer>
      </div>
    </div>
  );
}

export default Dashboard;
