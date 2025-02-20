import { Injectable } from '@angular/core';

export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string; // URL de la imagen del artista
}

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private artists: Artist[] = [
    // POP
    {
      id: 'beyonce',
      name: 'Beyoncé',
      genre: 'pop',
      image: 'https://forbes.es/wp-content/uploads/2023/11/beyonce-renaissance-gettyimages-1503043534-64e5239-2.jpg',
    },
    {
      id: 'taylor-swift',
      name: 'Taylor Swift',
      genre: 'pop',
      image: 'https://static.euronews.com/articles/stories/07/96/28/88/1200x675_cmsv2_51910cb5-bd27-5f30-8f60-8e7efed460c0-7962888.jpg',
    },
    {
      id: 'rihanna',
      name: 'Rihanna',
      genre: 'pop',
      image: 'https://hips.hearstapps.com/hmg-prod/images/rihanna-jadore-dior-elle-66d4897876bb2.jpg',
    },
    {
      id: 'drake',
      name: 'Drake',
      genre: 'pop',
      image: 'https://imageio.forbes.com/specials-images/imageserve/5ed578988b3c370006234c35/0x0.jpg?format=jpg&crop=1031,1031,x43,y49,safe&height=416&width=416&fit=bounds',
    },
    {
      id: 'lady-gaga',
      name: 'Lady Gaga',
      genre: 'pop',
      image: 'https://media.glamour.mx/photos/67a018deb5a7485b66a781f8/1:1/w_2000,h_2000,c_limit/Lady%20Gaga.png',
    },
    {
      id: 'justin-bieber',
      name: 'Justin Bieber',
      genre: 'pop',
      image: 'https://media.revistavanityfair.es/photos/60e8375624e5f096406be69a/master/w_1600%2Cc_limit/202292.jpg',
    },
    {
      id: 'ariana-grande',
      name: 'Ariana Grande',
      genre: 'pop',
      image: 'https://www.hola.com/horizon/square/66ebbd9f85f6-gettyimages-2185437864.jpg',
    },
    {
      id: 'adele',
      name: 'Adele',
      genre: 'pop',
      image: 'https://static.mujerhoy.com/www/multimedia/202111/04/media/cortadas/adele-vuelve-kmLD-U1501046519946RKH-1248x1248@MujerHoy.jpg',
    },
    {
      id: 'bts',
      name: 'BTS',
      genre: 'pop',
      image: 'https://akamai.sscdn.co/uploadfile/letras/fotos/7/0/9/b/709bbe520ed8c793a763ca4496c540ec.jpg',
    },

    // REGGAETON
    {
      id: 'bad-bunny',
      name: 'Bad Bunny',
      genre: 'reggaeton',
      image: 'https://i.scdn.co/image/ab6761610000e5eb81f47f44084e0a09b5f0fa13',
    },
    {
      id: 'karol-g',
      name: 'Karol G',
      genre: 'reggaeton',
      image: 'https://cdn-images.dzcdn.net/images/artist/dd8c6b3068d2761955eb6e432046ed91/1900x1900-000000-80-0-0.jpg',
    },
    {
      id: 'rauw-alejandro',
      name: 'Rauw Alejandro',
      genre: 'reggaeton',
      image: 'https://www.hola.com/us/horizon/43/e5f1e8985134-miami-florida-rauw-alejandro-attends-the-25th-latin-grammy-awards-at-kaseya-cent.jpg',
    },
    {
      id: 'j-balvin',
      name: 'J Balvin',
      genre: 'reggaeton',
      image: 'https://i.scdn.co/image/ab67616d00001e02922a7339d969b5f0262580f5',
    },
    {
      id: 'anuel-aa',
      name: 'Anuel AA',
      genre: 'reggaeton',
      image: 'https://yt3.googleusercontent.com/pr1rmNpAFIgLTldDns9k89Omyila2usAELAfdSUFiCoAKmg_lKBdGONQW6Dnm4yRtBPQSYQSRLA=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 'feid',
      name: 'Feid',
      genre: 'reggaeton',
      image: 'https://www.miamihispano.com/wp-content/uploads/2024/09/Feid-se-une-a-las-estrellas-que-estaran-en-Miami-para-la-Billboard-Latin-Music-Week-2024.jpg',
    },
    {
      id: 'myke-towers',
      name: 'Myke Towers',
      genre: 'reggaeton',
      image: 'https://i.scdn.co/image/ab6761610000e5eb8372345609bebaf1e948ef7f',
    },
    {
      id: 'ozuna',
      name: 'Ozuna',
      genre: 'reggaeton',
      image: 'https://i1.sndcdn.com/artworks-000263666513-etbn4x-t500x500.jpg',
    },
    {
      id: 'daddy-yankee',
      name: 'Daddy Yankee',
      genre: 'reggaeton',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKcPLDNvyny2h8SWxaTncgmrgW2iTUkVFYg&s',
    },

    // TRAP
    {
      id: 'duki',
      name: 'Duki',
      genre: 'trap',
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2Pw5JdBtX43FdMA2QDcLII4gd6W1nTn3aYE6MprgfknKCv1l2QEI3i1UAJA_RjDLxm8X8zoU0v-S3RBpbDKyYPA ',
    },
    {
      id: 'ysya',
      name: 'YSY A',
      genre: 'trap',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13ddzOz5zrpmou-kcagiLTJiqz6mqqMK2NMaMPofKnfu1Bq9m3DTucSC9IXZct1P0dpKwqxXxG1fIRywhpcz0_A ',
    },
    {
      id: 'neo-pistea',
      name: 'Neo Pistea',
      genre: 'trap',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/6ff368c9c95614ae0b1bcdd7ae3e3475.680x680x1.png/640px-6ff368c9c95614ae0b1bcdd7ae3e3475.680x680x1.png',
    },
    {
      id: 'trueno',
      name: 'Trueno',
      genre: 'trap',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39SzJboT8Jx850V7J2usmSwTcOMBLNj_c4g&s',
    },
    {
      id: 'khea',
      name: 'Khea',
      genre: 'trap',
      image: 'https://yt3.googleusercontent.com/Zp1OtLEV-HxXzjtV2v3RDLeAYN3YK26fzKUpKF4Vi68UPtruXJ6UAkQqo1BR2r3RnTG1Lcp4zA=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 'bhavi',
      name: 'Bhavi',
      genre: 'trap',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBaTLOFAej2-1d3I8dZgLW7kwY62WFDf9_w&s',
    },
    {
      id: 'falke912',
      name: 'Falke912',
      genre: 'trap',
      image: 'https://yt3.googleusercontent.com/lg-bECV_D_DyKRny9snTG5Uu7PU7Jku62wG8GndjGIDYVHMh-JRp48rV8eRiCCR7lxLN1ODvXw=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 'quevedo',
      name: 'Quevedo',
      genre: 'trap',
      image: 'https://yt3.googleusercontent.com/lUkgGqUdmDu6JlftN606h8O9lNpH_9sFX6xR5VnVOV6Usbv-2SNz5GRCit5C4wdJLIsAfClZ=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 'saiko',
      name: 'Saiko',
      genre: 'trap',
      image: 'https://i.scdn.co/image/ab6761610000e5ebd3ac55d0cfd372835c182d33',
    },

    // ROCK
    {
      id: 'queen',
      name: 'Queen',
      genre: 'rock',
      image: 'https://discovinilotop.com/wp-content/uploads/2023/09/queen-nueva.jpg',
    },
    {
      id: 'acdc',
      name: 'AC/DC',
      genre: 'rock',
      image: 'https://cdn-p.smehost.net/sites/5b3bac59eb36401694af3a241173447f/wp-content/uploads/2018/10/foto_de_acdc-1.jpg',
    },
    {
      id: 'metallica-rock',
      name: 'Metallica',
      genre: 'rock',
      image: 'https://s3.abcstatics.com/abc/www/multimedia/cultura/2023/04/13/Metallica-R-ReoHPlfXn08hieR7JXNNOLK-1200x840@abc.jpeg',
    },
    {
      id: 'the-rolling-stones',
      name: 'The Rolling Stones',
      genre: 'rock',
      image: 'https://e00-elmundo.uecdn.es/especiales/2012/cultura/rolling-stones/img/labanda05-g.jpg',
    },
    {
      id: 'foo-fighters',
      name: 'Foo Fighters',
      genre: 'rock',
      image: 'https://imagenes.elpais.com/resizer/v2/U3H3WP6R7NIZXZ7HQ3LIXBYW2E.jpg?auth=d58e58eda960c268e563165e0bd272be17c853b312b5e874e62a8b26bebd3449&width=414',
    },
    {
      id: 'nirvana',
      name: 'Nirvana',
      genre: 'rock',
      image: 'https://cdn-ijfed.nitrocdn.com/DtYdoFkTGLHFYfuSCOprrunYCajuUVPb/assets/images/optimized/rev-718321c/mariskalrock.com/wp-content/uploads/2023/09/nirvana-trajes-kurt-cobain-dave-grohl.jpg',
    },
    {
      id: 'pink-floyd',
      name: 'Pink Floyd',
      genre: 'rock',
      image: 'https://hips.hearstapps.com/hmg-prod/images/pink-floyd-64a52419edba4.png?crop=0.854xw:0.687xh;0.0780xw,0.0746xh&resize=1200:*',
    },
    {
      id: 'led-zeppelin',
      name: 'Led Zeppelin',
      genre: 'rock',
      image: 'https://static.grupojoly.com/clip/53b86732-260c-473c-b288-1e8c8914c0ea_source-aspect-ratio_1600w_0.jpg',
    },
    {
      id: 'red-hot-chili-peppers',
      name: 'Red Hot Chili Peppers',
      genre: 'rock',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Red_Hot_Chili_Peppers_logo.png',
    },

    // METAL

    {
      id: 'iron-maiden',
      name: 'Iron Maiden',
      genre: 'metal',
      image: 'https://cd1.taquilla.com/data/images/t/66/iron-maiden.webp',
    },
    {
      id: 'slipknot',
      name: 'Slipknot',
      genre: 'metal',
      image: 'https://i.scdn.co/image/ab6761610000e5ebd0cdb283a7384a0edb665182',
    },
    {
      id: 'rammstein',
      name: 'Rammstein',
      genre: 'metal',
      image: 'https://i.scdn.co/image/ab67616d0000b27397ea8cd106d06260c2c76cd6',
    },
    {
      id: 'megadeth',
      name: 'Megadeth',
      genre: 'metal',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyBAk25vjVLy-ONFRONlsWD7IKxMFWgXZsA&s',
    },
    {
      id: 'gojira',
      name: 'Gojira',
      genre: 'metal',
      image: 'https://cdn-images.dzcdn.net/images/artist/e144a10ac405b4a1173aa06ea41610b9/1900x1900-000000-80-0-0.jpg',
    },
    {
      id: 'avenged-sevenfold',
      name: 'Avenged Sevenfold',
      genre: 'metal',
      image: 'https://i.pinimg.com/564x/2f/db/f7/2fdbf7afe1effc98c708aca47b6fd48a.jpg',
    },
    {
      id: 'mastodon',
      name: 'Mastodon',
      genre: 'metal',
      image: 'https://www.spirit-of-metal.com/les%20goupes/M/Mastodon/pics/c847_3.jpg',
    },
    {
      id: 'trivium',
      name: 'Trivium',
      genre: 'metal',
      image: 'https://www.spirit-of-metal.com/les%20goupes/T/Trivium/pics/4b13_2.jpg',
    },
  ];

  constructor() {}

  /**
   * Método para buscar artistas por nombre.
   * @param query - Término de búsqueda.
   * @returns Lista de artistas coincidentes.
   */
  searchArtists(query: string): Artist[] {
    if (!query.trim()) return [];
    return this.artists.filter(artist =>
      artist.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  /**
   * Método para obtener todos los artistas.
   * @returns Lista completa de artistas.
   */
  getAllArtists(): Artist[] {
    return this.artists;
  }

  /**
   * Método para obtener un artista por su ID.
   * @param id - ID del artista.
   * @returns Artista encontrado o undefined si no existe.
   */
  getArtistById(id: string): Artist | undefined {
    return this.artists.find(artist => artist.id === id);
  }
}