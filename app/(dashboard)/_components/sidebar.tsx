import { Logo } from "./logo";
import { SildebarRoutes } from "./sildebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full flex border-r-4 flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SildebarRoutes />
      </div>
    </div>
  );
};
