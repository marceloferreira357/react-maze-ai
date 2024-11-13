import { cn } from "../common/utils";

function Route({ className, children }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-dvw h-dvh",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Route;
