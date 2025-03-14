import { employeesData } from "../../constants";
import Balance from "./Balance";
import Card from "./Card";

const Stats = ({ darkMode }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 ">
      <div className="flex flex-col gap-4 h-full">
        {employeesData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
      <Balance darkMode={darkMode} />
    </div>
  );
};

export default Stats;
