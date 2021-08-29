import { FC } from "react";

const Header: FC = () => {
  return (
    <>
      <div className="font-sans text-white">
        <div className="grid justify-items-center p-6 w-auto space-y-6 bg-gray-900">
          <h1 className="font-bold text-2xl ">Task List App</h1>
          <h2 className="font-normal text-lg">
            Create some lists and add some tasks to each list
          </h2>
        </div>
      </div>
    </>
  );
};

export default Header;
