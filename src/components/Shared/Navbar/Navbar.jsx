import React, { useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { IoLogoMastodon } from "react-icons/io5";
import MenuDrawer from "../Drawer/MenuDrawer";

export function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Navbar className="mx-auto max-w-screen-2xl pt-2 px-4 lg:px-8 lg:pt-4 shadow-none pb-0">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900 border-b-2 pb-2 lg:pb-4">
          <div className="flex items-center gap-5 lg:hidden">
            {/* open drawer icon */}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent "
              ripple={false}
              onClick={() => {
                setOpenDrawer(!openDrawer);
              }}
            >
              {openDrawer ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          {/* logo */}
          <div>
            <Typography
              as="a"
              href="#"
              className="cursor-pointer py-1.5 font-bold flex items-center gap-2 text-2xl"
            >
              <IoLogoMastodon /> Logo
            </Typography>
          </div>
          {/* login button */}
          <Button
            variant="outlined"
            size="md"
            className="text-blue-gray-700 border-blue-gray-700 rounded-md py-3 px-8"
          >
            <span>Login</span>
          </Button>
        </div>
      </Navbar>
      {/* drawer */}
      <MenuDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
}
