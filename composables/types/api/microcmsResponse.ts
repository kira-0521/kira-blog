type Attributes = {
  link?: string;
  target?: string;
  alt?: string;
  width: number;
  height: number;
};

type Texts = {
  type: string;
  value: string;
  attributes?: Attributes;
};

type ContentsVal = {
  type: string;
  value: Array<Texts>;
  attributes?: Attributes;
};

// リッチエディターのオブジェクト指定時使用
type Contents = {
  contents: Array<ContentsVal>;
};

export type ResData = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  alt?: string;
  previewContents: string;
};

export type Data = {
  contents: ResData[];
  limit: number;
  offset: number;
  totalCount: number;
};
