import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};


export type GameInfo = {
    id: number;
    createdDate: string;
    title: string;
    description: string;
    instructions: string;
    category: string;
    source: string;
    thumb_1: string;
    thumb_2: string;
    thumb_small: string;
    url: string;
    width: string;
    height: string;
    tags: string;
    views: number;
    upvote: number;
    downvote: number;
    slug: string;
    last_modified: any,
    is_mobile: any,
    published: any;
    fields: string;
    extra_fields: any;
}