export type Tag = string;
export type ArticleId = string;
export type Slug = string;
// tiny types
// type Slug = `${string}_slug`;
// type Slug = string & {_type: 'slug'};
// const Slug = (slug: string) => slug as Slug;
// const x: Slug = Slug("abc");

// domain

export type Article = {
    body: string;
    description: string;
    tagList: Array<Tag>;
    title: string;
    slug: Slug;
    id: ArticleId;
    createdAt: Date;
    updatedAt: Date;
};

export type ArticleRepository = {
    create(article: Article): Promise<void>;
    update(article: Article): Promise<void>;
    findBySlug(slug: Slug): Promise<Article | null>;
};
