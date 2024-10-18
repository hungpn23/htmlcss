const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-[1110px] max-w-[calc(100%-48px)]">{children}</div>
  );
};

export default Content;
