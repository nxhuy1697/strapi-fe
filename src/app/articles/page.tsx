"use client";
import React, { useEffect, useState } from "react";
import articleService from "../services/articleService";
import Image from "next/image";
import Link from "next/link";

interface ArticlesItems {
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

export default function Articles() {
  const [articles, setArticles] = useState<ArticlesItems[]>([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await articleService.getAllArticle();
        setArticles(response.data); // Chỉ gán mảng từ key "data"
        console.log("articles data", response.data);
      } catch (error) {
        console.error("Fail to catch articles", error);
      }
    };
    fetchArticles();
  }, []);
  return (
    <div>
      <h1 className="text-center  p-5 text-red-500">This is article</h1>
      <div className="p-5">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="p-2 border-b">
              <h2 className="text-lg font-semibold">
                <Link href={`/articles/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="text-gray-600">{article.description}</p>
              {/* Render hình ảnh */}
              {article.cover && (
                <Image
                  src={`http://localhost:1337${article.cover.url}`}
                  alt={article.title}
                  width={600} // Đặt kích thước ảnh
                  height={400} // Đặt kích thước ảnh
                  className="mt-2 rounded-lg"
                />
              )}
              {/* Render blocks */}
              {/* Nếu muốn hiện tóm tắt block */}
              {article.blocks && article.blocks.length > 0 ? (
                <p>{article.blocks[0]?.body.substring(0, 100)}...</p>
              ) : (
                <p>No blocks available.</p>
              )}
              {/* Thêm nút hoặc link dẫn đến chi tiết */}
              <Link href={`/articles/${article.id}`}>
                <button className="mt-2 text-blue-500 underline">
                  Read more
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
}
