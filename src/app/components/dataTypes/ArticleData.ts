//cover formats
interface ImageFormat{
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    url: string;    
}

interface Cover{
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: ImageFormat;
        small?: ImageFormat;
        medium?: ImageFormat;
        large?: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: unknown| null;
}
//Author
interface Author{
    id: number;
    documentId: string;
    name: string;
    email: string;

}

//Category
interface Category{
    id: number;
    documentId: string;
    name: string;
    slug: string;
    description: string;
}
//blocks
interface RichTextBook{
    __component: "shared.rich-text";
    id: number;
    body: string;
}

interface QuoteBlock{
    __component: "shared.quote"
    id: number;
    title: string;
    body: string;
}

interface MediaBlock{
    __component: "shared.media";
    id: number;
}

interface SliderBlock{
    _component: "shared.slider";
    id: number;
}

type Block = RichTextBook | QuoteBlock | MediaBlock | SliderBlock;
//main article
export interface Article {
    id: number;
    documentId: string;
    title: string;
    description: string;
    slug: string;
    cover: Cover;
    author: Author;
    category: Category;
    blocks: Block[];
}