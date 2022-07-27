import {
  TemplateIcon,
  ClipboardListIcon,
  CashIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/outline";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
function Sidebar() {
  return (
    <div className="w-1/6 min-h-screen border-r border-primary-gray">
      <div className="flex flex-col items-center p-5 border-b border-primary-gray">
        <Image
          className="object-contain"
          src="/assets/hms-1.svg"
          alt="HMS logo"
          width={90}
          height={45}
        />
      </div>
      <div className="p-5">
          <SidebarItem title="Dashboard" Icon={TemplateIcon} url='/dashboard'/>
          <SidebarItem title="Stock" Icon={PresentationChartLineIcon} url='/dashboard/stock'/>
          <SidebarItem title="Products" Icon={ShoppingBagIcon} url='/dashboard/products'/>
          <SidebarItem title="Reporting" Icon={ClipboardListIcon} url='/dashboard/reporting'/>
          <SidebarItem title="Accounting" Icon={CashIcon} url='/dashboard/accounting'/>
          <SidebarItem title="Clients" Icon={UserGroupIcon} url='/dashboard/clients'/>
      </div>
    </div>
  );
}

export default Sidebar;
