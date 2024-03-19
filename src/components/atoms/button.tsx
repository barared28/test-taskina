interface IProps {
  label: string;
  onClick: () => void;
}

const Button = (props: IProps) => {
  const { label, onClick } = props;
  return (
    <button
      className="btn bg-yellow-dark hover:bg-yellow-light w-full py-3 px-4 text-sm rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
