import { NextPage, GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/dist/client/router";
import { ArticleResponse } from "../../../src/types/article";
import { client } from "../../../src/utils/api";
import { toStringId } from "../../../src/utils/toStringId";


type StaticProps = {
  blog: ArticleResponse;
  draftKey?: string;
};
type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Page: NextPage<PageProps> = (props) => {
  const { blog } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <main></main>
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
  };
};

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const { params } = context;

  if (!params?.id) {
    throw new Error("Error: ID not found");
  }

  const id = toStringId(params.id);

  try {
    const blog = await client.v1.articles._id(id).$get({
      query: {
        fields: "id,title,body,publishedAt,tags",
      },
    });
    return {
      props: { blog },
      revalidate: 60,
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default Page;