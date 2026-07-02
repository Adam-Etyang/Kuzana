import { redirect } from "next/navigation";

export default function MentorSignupRedirect() {
  redirect("/mentor/apply");
}
