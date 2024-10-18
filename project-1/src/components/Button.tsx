import cn from "../utils";

const Button = ({
  content,
  className,
}: {
  content: string;
  className: string;
}) => {
  return (
    <a
      href="#!"
      className={cn(
        "bg-primary inline-block min-w-[98px] rounded-xl px-4 py-[15px] text-center text-sm font-medium text-[#ffffff] hover:opacity-85",
        className,
      )}
    >
      {content}
    </a>
  );
};

export default Button;
