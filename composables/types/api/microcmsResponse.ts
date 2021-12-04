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
  content: Contents;
  image?: {
    url: string;
    height: number;
    width: number;
  };
  alt: string;
};
