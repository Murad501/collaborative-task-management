import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MainSideBar = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const menus = [
    {
      id: 1,
      name: "All Tasks",
      url: "./dashboard/all-tasks",
    },
    {
      id: 2,
      name: "Add Tasks",
      url: "./dashboard/add-tasks",
    },
  ];

  return (
    <aside className="border-r-2 flex flex-col h-full overflow-hidden">
      {/* <div className="flex-none border-b-2 py-4">Header</div> */}
      <div
        className="flex-1 overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#888 #f1f1f1",
          overflowX: "hidden",
          scrollMarginRight: "15px", // Adjust as needed
        }}
      >
        <div>
          {menus?.map((menu) => (
            <Link className="flex items-center justify-between py-2 cursor-pointer hover:bg-blue-50 px-3">
              <Typography variant="text" className="text-gray-600 capitalize">
                {menu?.name}
              </Typography>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default MainSideBar;
