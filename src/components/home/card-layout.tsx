function CardLayout({
  children,
  action,
}: {
  children: React.ReactNode;
  action?: () => void;
}) {
  return (
    <div className="bg-white w-full flex md:flex-row flex-col">
      {children}

      <button
        className="md:w-10 w-full bg-[#FBEAE9] flex-center"
        onClick={action}
      >
        &times;
      </button>
    </div>
  );
}

export default CardLayout;
