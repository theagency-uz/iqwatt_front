import Contacts from "@/Components/main/contacts";
import Partners from "@/Components/main/partners";

export default function Home({ params: { lng }, ...props }) {
  return (
    <main>
      <Contacts lng={lng} />
      <Partners lng={lng} />
    </main>
  );
}
