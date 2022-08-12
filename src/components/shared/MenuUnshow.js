import { useAuth } from "../../context/auth";

export default function UnShowMenu() {
  const { hoverProfile, setHoverProfile } = useAuth();
  if (hoverProfile) setHoverProfile(false);
  return <></>;
}
