import { Article, ArticleId, ArticleRepository, Slug } from "../domain/article";

export const inMemoryArticleRepository = (): ArticleRepository => {
  let articles: Record<ArticleId, Article> = {};

  return {
    async create(article) {
      articles[article.id] = article;
    },
    async update(article) {
      articles[article.id] = article;
    },
    async findBySlug(slug) {
      const article = Object.values(articles).find(
        (article) => article.slug === slug
      );
      return article ?? null;
    },
    async deleteAll() {
      articles = {};
    },
  };
};
