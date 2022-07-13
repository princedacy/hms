import {
  TemplateIcon,
  TableIcon,
  ClipboardListIcon,
  CashIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
function Sidebar() {
  return (
    <div className="w-1/6 min-h-screen border-r">
      <div className="flex flex-col items-center p-5 border-b">
      <Image
        className="object-contain"
        src="/assets/hms-1.svg"
        alt="HMS logo"
        width={90}
        height={45}
      />
      </div>
      <div className="p-5">
        <SidebarItem title="Dashboard" Icon={TemplateIcon} />
        <SidebarItem title="Inventory" Icon={TableIcon} />
        <SidebarItem title="Reporting" Icon={ClipboardListIcon} />
        <SidebarItem title="Accounting" Icon={CashIcon} />
        <SidebarItem title="Clients" Icon={UserGroupIcon} />
      </div>
    </div>
  );
}

export default Sidebar;
