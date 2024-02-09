import Category from "@/Components/main/category";
import Contacts from "@/Components/main/contacts";
import Faq from "@/Components/main/faq";
import FormContent from "@/Components/main/formContent";
import House from "@/Components/main/house";
import Info from "@/Components/main/info";
import News from "@/Components/main/news";
import Partners from "@/Components/main/partners";
import Portfolio from "@/Components/main/portfolio";
import Reviews from "@/Components/main/reviews";
import Slider from "@/Components/main/slider";
import Stage from "@/Components/main/stage";

export default function Home({ params: { lng }, ...props }) {
  return (
    <main>
      <Category lng={lng} />
      <Info lng={lng} />
      <House lng={lng} />
      <FormContent lng={lng} />
      <Portfolio lng={lng} />
      <Stage lng={lng} />
      <Reviews lng={lng} />
      <Faq lng={lng} />
      <Partners lng={lng} />
      <News lng={lng} />
      <Contacts lng={lng} />
      {/* <Slider lng={lng} />
       */}
    </main>
  );
}
