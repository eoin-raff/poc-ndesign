interface IMedia {
  //image or video from contentful
  type: string;
  url: string;
}

interface IRichText {
  raw: string;
  references: unknown[];
}

interface IHero {
  media: IMedia;
  content: IRichText;
}

interface IPage {
  slug: string;
}

interface IMenuItem {
  displayName: string;
  target: IPage;
  subMenu?: IMenuItem[];
}

interface INavigation {
  menu: IMenuItem[];
}
