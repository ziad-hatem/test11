import getData from "@/lib/data-hooks/getData";
import getGlobalSeoData from "@/lib/data-hooks/getGlobalSeoData";
import getPagesData from "@/lib/data-hooks/getPagesData";

const getMetaData = async ({ slug, isAr, fetchedData }) => {
  let data;
  if (fetchedData) {
    data = fetchedData;
  } else {
    data = await getData(slug, isAr);
  }
  const globalSeo = await getGlobalSeoData(isAr);
  const pageSeo = data?.page?.seo_group;
  const fallbackSeo = globalSeo?.fallbackSEO;
  const mainTitle = fallbackSeo?.global_website_title;
  // console.log(data);
  const title = pageSeo?.seo_title
    ? pageSeo?.seo_title
    : fallbackSeo?.seo_title;
  const description = pageSeo?.seo_description
    ? pageSeo?.seo_description
    : fallbackSeo?.seo_description;
  const keywords = pageSeo?.seo_keywords
    ? pageSeo?.seo_keywords
    : fallbackSeo?.seo_keywords;
  const image = pageSeo?.seo_image?.src
    ? pageSeo?.seo_image?.src
    : fallbackSeo?.seo_image?.src;
  return {
    title: mainTitle + " | " + title,
    description: description,
    keywords: keywords,
    openGraph: {
      title: mainTitle + " | " + title,
      description: description,
      images: [image],
      width: 1200,
      height: 628,
    },
    twitter: {
      title: mainTitle + " | " + title,
      description: description,
      images: [image],
      width: 1200,
      height: 628,
    },
  };
};

export default getMetaData;
