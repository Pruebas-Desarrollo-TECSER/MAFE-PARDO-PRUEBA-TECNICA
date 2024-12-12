import {Navbar,NavbarBrand,NavbarContent,NavbarItem,
        Link,DropdownItem,DropdownTrigger,Dropdown,
        DropdownMenu,Avatar,} from "@nextui-org/react";

export const AcmeLogo = ({width, height}) => {
  return (
    <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="48" fill="#F0F4F8" />
    
    <path
      d="M50 20C50 20 35 35 35 50C35 65 50 80 50 80C50 80 65 65 65 50C65 35 50 20 50 20Z"
      fill="#FF9A8B"
    />
    <path
      d="M20 50C20 50 35 35 50 35C65 35 80 50 80 50C80 50 65 65 50 65C35 65 20 50 20 50Z"
      fill="#FF9A8B"
    />
    <circle cx="50" cy="50" r="10" fill="#FFDAB9" />
    
    <path
      d="M70 75C70 75 85 65 85 50C85 35 70 25 70 25"
      stroke="#4CAF50"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
  );
};

 const  NavBar = () => {
  return (
    <Navbar className="border-b-2 border-rose-300">
      <NavbarBrand>
        <AcmeLogo width={50} height={50} />
        <p className="font-bold text-inherit">Botanic Store</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link  color="foreground" href="/sellers" className="hover:text-green-500">
            Sellers
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="/" className="hover:text-green-500">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="sales" className="hover:text-green-500">
            Sales
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="success"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings" className="hover:text-rose-500">My Settings</DropdownItem>
            <DropdownItem key="team_settings" className="hover:text-rose-500">Team Settings</DropdownItem>
            <DropdownItem key="analytics" className="hover:text-rose-500">Analytics</DropdownItem>
            <DropdownItem key="system" className="hover:text-rose-500">System</DropdownItem>
            <DropdownItem key="configurations" className="hover:text-rose-500">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback" className="hover:text-rose-500">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" className="hover:text-rose-500">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
export default NavBar;