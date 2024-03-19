interface IProps {
  isInterdeterminate?: boolean;
  isChecked?: boolean;
  isHovered?: boolean;
}

const Checkbox = (props: IProps) => {
  const { isInterdeterminate, isChecked = false, isHovered = false } = props;
  return (
    <div
      className={`w-[25px] h-[25px] ${
        isChecked
          ? isHovered
            ? "bg-blue-light "
            : "bg-blue-dark "
          : "bg-white border border-[#BDBDBD]"
      } rounded-md relative flex justify-center items-center cursor-pointer active:ring-2 active:ring-blue-light active:ring-opacity-10`}
    >
      {isHovered || isChecked || isInterdeterminate ? (
        <div className="absolute">
          <svg
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
              stroke={
                isChecked ? "white" : isInterdeterminate ? "#878787" : "#BDBDBD"
              }
              stroke-linecap="round"
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
};

export default Checkbox;
