import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="flex flex-row items-center">
        <div className="pt-6 pr-2 pb-6 pl-8">
          <Logo />
        </div>
        <p className="text-lg font-[700] text-sky-700">
          Learnow
        </p>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
