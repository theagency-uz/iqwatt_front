import Container from '@/Container';
import { getArticle } from '@/services/articles';

import classes from './page.module.css';
import EditorContent from '@/Components/common/editorContent';
import { strapiImageUrl } from '@/utils/endpoints';

export async function generateMetadata({
  params: { lng, articleSlug },
  ...props
}) {
  const article = await getArticle({ lng, slug: articleSlug });

  return {
    title: article.attributes.name,
    description: 'Успех партнеров — наша миссия',
    openGraph: {
      images: [strapiImageUrl + article.attributes.image.data.attributes.url],
    },
  };
}

async function Article({ params: { lng, articleSlug } }) {
  const article = await getArticle({ lng, slug: articleSlug });

  if(article.attributes.description.includes('oembed')){
    article.attributes.description = article.attributes.description.replace()
  }

  return (
    <Container>
      <div>
        <h1>{article.attributes.name}</h1>
      </div>

      <EditorContent content={article.attributes.description} />
    </Container>
  );
}

export default Article;
