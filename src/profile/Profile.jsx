import DonutChart from "./DonutChart";
import ShortCuts from "./ShortCuts";
import User from "./User";

const Profile = () => {
  return (
    <div className="px-2 py-4  bg-gray-200  rounded-lg w-full dark:bg-gray-700 lg:w-60 flex flex-col justify-between gap-4">
      <User />
      <ShortCuts />
      <DonutChart />
    </div>
  );
};

export default Profile;
