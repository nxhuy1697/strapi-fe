import { GetServerSideProps } from "next";
import articleService from "../../services/articleService";
import Image from "next/image";

interface ArticleDetail {
  id: number;
  title: string;
  description?: string;
  slug?: string;
  cover?: {
    url: string;
  };
  blocks?: {
    id: number;
    body: string;
  }[];
}

export default function ArticleDetail({ article }: { article: ArticleDetail }) {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-4">{article.description}</p>
      {article.cover && (
        <Image
          src={`http://localhost:1337${article.cover.url}`}
          alt={article.title}
          width={800}
          height={600}
          className="rounded-lg mb-4"
        />
      )}
      {article.blocks &&
        article.blocks.map((block) => (
          <div key={block.id} className="mb-4">
            <p className="text-gray-800">{block.body}</p>
          </div>
        ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!; // Lấy id từ URL params
  try {
    const response = await articleService.getArticleById(Number(id));
    return {
      props: {
        article: response.data,
      },
    };
  } catch (error) {
    console.error("Failed to fetch article details", error);
    return {
      notFound: true, // Trả về 404 nếu không tìm thấy bài viết
    };
  }
};
