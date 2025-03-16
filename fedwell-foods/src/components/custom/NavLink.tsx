export const NavLink = ({
  text,
  targetRef,
}: {
  text: string;
  targetRef: React.RefObject<HTMLElement | null>;
}) => (
  <button
    className="text-gray-600 hover:text-gray-900 text-sm hover:underline custom-underline"
    onClick={() => {
      targetRef.current?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    {text}
  </button>
);
