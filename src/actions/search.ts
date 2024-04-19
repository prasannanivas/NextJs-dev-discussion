import { redirect } from "next/navigation";

export async function search(formData: FormData) {
  const term = formData.get("term");

  console.log("ttt", term);

  if (typeof term !== "string" || !term) {
    redirect("/");
  }

  redirect(`/search?term=${term}`);
}
