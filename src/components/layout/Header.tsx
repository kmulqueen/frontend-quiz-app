type HeaderProps = {
  section?: string;
};

export default function Header({ section }: HeaderProps) {
  return <header>{section}</header>;
}
