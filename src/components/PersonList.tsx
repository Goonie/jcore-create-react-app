import { ReactNode } from "react";

interface PersonListProps {
  children: ReactNode;
}

function PersonList({ children }: PersonListProps) {
  return <section className="PersonList">{children}</section>;
}

export default PersonList;
