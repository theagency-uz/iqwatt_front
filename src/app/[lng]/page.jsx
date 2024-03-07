import InfoWrapper from '@/Components/common/infoWrapper';
import Calculator from '@/Components/main/calculator';
import Category from '@/Components/main/category';
import Contacts from '@/Components/main/contacts';
import Faq from '@/Components/main/faq';
import FormContent from '@/Components/main/formContent';
import House from '@/Components/main/house';
import News from '@/Components/main/news';
import Partners from '@/Components/main/partners';
import Portfolio from '@/Components/main/portfolio';
import Gallery from '@/Components/main/gallery';
import Slider from '@/Components/main/slider';
import Stage from '@/Components/main/stage';
import Container from '@/Container';
import { useTranslation } from '../i18n';

export default async function Home({ params: { lng }, ...props }) {
  const { t } = await useTranslation(lng);
  return (
    <main>
      <Container>
        <Slider lng={lng} />
        <Category lng={lng} />
        <InfoWrapper
          lng={lng}
          title={t(
            'IQ WATT -- канадские системы \n для комфорта и безопасности'
          )}
          text={t(
            'Мы производим нагревательные и охлаждающие системы для домов и участков. В наше время комфорт не должен быть роскошью, поэтому наша миссия - предоставлять качественную продукцию по разумной  цене.'
          )}
        />
        <House lng={lng} />
        <Calculator lng={lng} />
        <FormContent lng={lng} />
        <Portfolio lng={lng} />
        <Gallery lng={lng} />
        <Stage lng={lng} />
        <Faq lng={lng} />
        <Partners lng={lng} />
        <News lng={lng} />
        <Contacts lng={lng} />
      </Container>
    </main>
  );
}
