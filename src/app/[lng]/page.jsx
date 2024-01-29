import Contacts from "@/Components/main/contacts";
import House from "@/Components/main/house";
import Info from "@/Components/main/info";
import Partners from "@/Components/main/partners";

export default function Home({ params: { lng }, ...props }) {
  return (
    <main>
      <Info lng={lng} />
      <House lng={lng} />
      <Partners lng={lng} />
      <Contacts lng={lng} />
    </main>
  );
}
