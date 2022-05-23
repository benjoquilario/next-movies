interface ITextProps {
  text: string;
}

const Button = ({ text }: ITextProps) => (
  <button className="text-sm inline-flex items-center justify-center px-[8px] py-[3px] min-w-[66px] md:min-w-[86px] min-h-[38px] bg-transparent text-[#ff206e] border-solid border-[1px] border-[#ff206e] rounded">
    {text}
  </button>
);

export default Button;
