import { ArticleRepository } from "./article";
import { Kysely } from "kysely";
import { DB } from "./dbTypes";

export const sqlArticleRepository = (db: Kysely<DB>): ArticleRepository => {
    return {
        async create(article) {
            await db.insertInto('article').values(article).execute();
            const articleId = article.id;
            if(article.tagList.length > 0) {
                await db.insertInto('tags').values(article.tagList.map(tag => ({name: tag, articleId}))).execute();
            }
        },
        async update(article) {
            await db.updateTable('article as a').set(article).where('a.id', '=', article.id).execute();
            await db.deleteFrom('tags').where('tags.articleId', '=', article.id).execute();
            if(article.tagList.length > 0) {
                await db.insertInto('tags').values(article.tagList.map(tag => ({name: tag, articleId: article.id}))).execute();
            }
        },
        async findBySlug(slug) {
            const article = await db.selectFrom('article').where('article.slug', '=', slug).selectAll().executeTakeFirst();
            if(!article) return null;
            const tags = await db.selectFrom('tags').where('tags.articleId', '=', article.id).select(['tags.name']).execute();
            return {...article, tagList: tags.map(tag => tag.name)};
        },
    };
};