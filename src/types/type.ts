interface Song {
  duration: number;
  explicit_content_cover: number;
  explicit_content_lyrics: number;
  explicit_lyrics: boolean;
  id: number;
  link: string;
  md5_image: string;
  preview: string;
  rank: number;
  readable: true;
  title: string;
  title_short: string;
  title_version: string;
  type: string;
  album: {
    cover: string;
    cover_big: "https://e-cdns-images.dzcdn.net/images/cover/3126ba1749714af0a956292a389c7dc8/500x500-000000-80-0-0.jpg";
    cover_medium: string;
    cover_small: "https://e-cdns-images.dzcdn.net/images/cover/3126ba1749714af0a956292a389c7dc8/56x56-000000-80-0-0.jpg";
    cover_xl: string;
    id: number;
    md5_image: string;
    title: string;
    tracklist: string;
    type: string;
  };
  artist: {
    id: number;
    link: string;
    name: string;
    picture: string;
    picture_big: "https://e-cdns-images.dzcdn.net/images/artist/377106ddca35c3b0ebc9847825070b90/500x500-000000-80-0-0.jpg";
    picture_medium: string;
    picture_small: string;
    picture_xl: string;
    tracklist: string;
    type: string;
  };
}

export default Song;
