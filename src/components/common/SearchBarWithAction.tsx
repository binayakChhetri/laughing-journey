import { Plus, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface Props {
  inputValue: string;
  placeholder: string;
  buttonText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
}

const SearchAndActionButton = ({
  inputValue,
  placeholder,
  buttonText,
  onChange,
  onButtonClick,
}: Props) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
      <div className="flex-1 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#566267]" />
        <Input
          value={inputValue}
          placeholder={placeholder}
          onChange={onChange}
          type="text"
          className="pl-12 pr-4 py-2.5 h-11 rounded-full bg-white text-base shadow-none border-none w-full"
        />
      </div>
      <Button className="text-white rounded-full bg-primary hover:bg-primary/90 px-5 h-11 gap-2 cursor-pointer whitespace-nowrap" onClick={onButtonClick}>
        <Plus className="w-5 h-5" />
        <span className="hidden sm:inline">{buttonText}</span>
        <span className="sm:hidden">Add</span>
      </Button>
    </div>
  );
};

export default SearchAndActionButton;
