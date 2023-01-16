type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type members<T='get'> = Structure<
T,
{
  /**
   * アイコン
   */
  icon_img?: { url: string, width: number, height: number }
  /**
   * 名前
   */
  name: string
  /**
   * 説明
   */
  discription?: string
}>

export type games<T='get'> = Structure<
T,
{
  /**
   * タイトル
   */
  title?: string
  /**
   * 画像
   */
  icon_img?: { url: string, width: number, height: number }
  /**
   * リンクURL
   */
  link_url?: string
}>

export type about<T='get'> = Structure<
T,
{
  /**
   * タイトル
   */
  title?: string
  /**
   * 説明
   */
  description?: string
}>


export interface EndPoints {
  get: {
    'members': members<'get'>
    'games': games<'get'>
    'about': about<'get'>
  }
  gets: {
    'members': members<'gets'>
    'games': games<'gets'>
    'about': about<'gets'>
  }
  post: {
    'members': members<'post'>
    'games': games<'post'>
    'about': about<'post'>
  }
  put: {
    'members': members<'put'>
    'games': games<'put'>
    'about': about<'put'>
  }
  patch: {
    'members': members<'patch'>
    'games': games<'patch'>
    'about': about<'patch'>
  }
}
