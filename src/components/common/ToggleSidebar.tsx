import { Menu, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useSidebar } from "../ui/sidebar";

const ToggleSidebar = () => {
  const { open, toggleSidebar, state } = useSidebar();
  return (
    <div
      className="bg-secondary-background p-2 rounded-lg cursor-pointer hover:bg-primary hover:text-white transition-colors"
      onClick={toggleSidebar}
    >
      {open ? (
        <PanelLeftClose
          className="text-primary-background hidden md:block"
          size={20}
        />
      ) : (
        <PanelLeftOpen
          className="text-primary-background hidden md:block"
          size={20}
        />
      )}

      <Menu className="md:hidden" size={20} />
    </div>
  );
};

export default ToggleSidebar;
