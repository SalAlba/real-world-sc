import {inMemoryArticleRepository} from "./inMemoryArticleRepository";
import {IdGenerator} from "./idGenerator";
import {Article, ArticleRepository} from "./article";
import makeSlug from "slug";
import {Clock} from "./clock";
import {ArticleInput} from "./parseArticleInput";

// use case/workflow/application service/application logic
export const createArticle =
    (
        articleRepository: ArticleRepository,
        articleIdGenerator: IdGenerator,
        clock: Clock
    ) =>
        async (input: ArticleInput) => {
            const now = clock();
            const article: Article = {
                body: input.body,
                description: input.description,
                tagList: input.tagList,
                title: input.title,
                slug: makeSlug(input.title),
                id: articleIdGenerator(),
                createdAt: now,
                updatedAt: now,
            };
            await articleRepository.create(article);
            return article;
        };

