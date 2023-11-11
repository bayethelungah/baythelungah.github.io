import { forwardRef } from "react";

export interface CardProps {
  title: string;
  content?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, content, children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={
          "bg-white bg-opacity-5 rounded-md shadow p-4 relative overflow-hidden h-full" +
          className
        }
      >
        <div>
          <span className="absolute right-3 bottom-3 flex items-center justify-center rounded-md opacity-10"></span>
        </div>
        <div className="flex flex-col h-full justify-center items-center">
          <h3 className="text-2xl font-bold text-blue-500">{title}</h3>
          <p className="mt-2 text-base text-gray-300 flex-1">{content}</p>
          {children}
        </div>
      </div>
    );
  }
);

export default Card;
