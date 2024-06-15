import { cn } from "@/lib/utils";

function OutsideLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn("text-blue-600", className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default OutsideLink;
