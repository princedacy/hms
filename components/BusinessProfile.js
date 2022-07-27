import Image from "next/image";
import { ShoppingBagIcon,  UserGroupIcon} from "@heroicons/react/solid";
function BusinessProfile() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Image
          className="w-24 h-24 object-cover shadow rounded-full border border-primary-gray"
          src="/assets/hardware.jpeg"
          alt="Business logo"
          width={150}
          height={150}
        />
        <p className="title text-sm leading-[3rem] font-semibold">Hardware Ltd.</p>
      </div>
      <div className="stats grid grid-cols-2 gap-2 border border-primary-gray p-2">
        <div className="stats__products flex flex-row items-center border-r border-primary-gray pr-2">
          <ShoppingBagIcon className="h-5 w-10 text-gray-500 bg-gray-100 p-1 rounded-lg" />
          <div className="stats__data ml-1">
            <p className="text-xs font-bold">200</p>
            <p className="text-gray-500 text-xs">Products</p>
          </div>
        </div>
        <div className="stats__clients flex flex-row items-center">
          <UserGroupIcon className="h-5 w-5 text-gray-500 bg-gray-100 p-1 rounded-lg" />
          <div className="stats__data ml-2">
            <p className="text-sm font-bold">79</p>
            <p className="text-gray-500 text-xs">Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessProfile;
