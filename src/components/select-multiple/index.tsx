import Button from "@/components/atoms/button";
import Checkbox from "@/components/atoms/checkbox";
import { useState } from "react";

const SelectOption = ({
  value,
  label,
  onChange,
  isInterdeterminate,
}: {
  value: boolean;
  label: string;
  onChange: () => void;
  isInterdeterminate?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex justify-between items-center w-full cursor-pointer py-[10px]"
      onClick={onChange}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="text-sm select-none m-0">{label}</p>
      <Checkbox
        isChecked={value}
        isInterdeterminate={isInterdeterminate}
        isHovered={isHovered}
      />
    </div>
  );
};

interface IProps {
  label: string;
  data: { value: string; label: string }[];
}

const SelectMultiple = (props: IProps) => {
  const { label, data } = props;
  const [selected, setSelected] = useState<string[]>([]);
  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const handleReset = () => {
    setSelected([]);
  };

  return (
    <div className="min-w-[370px] border border-[#EEEEEE] px-[22px] py-5 shadow-select-multiple rounded-md">
      <SelectOption
        value={selected.length === data.length}
        label={label}
        onChange={() => {
          if (selected.length === data.length) {
            setSelected([]);
          } else {
            setSelected(data.map((item) => item.value));
          }
        }}
        isInterdeterminate={
          selected.length > 0 && selected.length < data.length
        }
      />
      <div className="divide my-5 border-t" />
      <div className="max-h-[174px] overflow-y-auto hide-scrollbar">
        {data.map((item) => (
          <SelectOption
            key={item.value}
            value={selected.includes(item.value)}
            label={item.label}
            onChange={() => handleSelect(item.value)}
          />
        ))}
      </div>
      <div className="divide my-5 border-t" />
      <Button label="Done" onClick={handleReset} />
    </div>
  );
};

export default SelectMultiple;
