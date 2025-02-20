// artist-detail.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service'; // Importa el servicio

interface Artist {
  id: string;
  name: string;
  image: string;
  backgroundImage: string;
  description: string;
  location: string;
  dates: string[]; // Nueva propiedad: fechas disponibles para el artista
}

type TicketType = 'Pista General' | 'Pista VIP' | 'Pista Platinum';

@Component({
  selector: 'app-artist-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css'],
})
export class ArtistDetailComponent {
  artistId!: string;
  genre!: string;
  currentArtist?: Artist;
  allArtists: Artist[] = [
    // POP
    {
      id: 'beyonce',
      name: 'Beyoncé',
      image: 'https://s1.elespanol.com/2023/09/05/corazon/estilo/792181283_235821734_1024x576.jpg',
      backgroundImage: 'https://e00-telva.uecdn.es/assets/multimedia/imagenes/2023/06/09/16863053946094.jpg',
      description: 'La reina del pop y R&B, conocida por su poderosa voz y shows impresionantes.',
      location: 'Madrid',
      dates: ['10 May', '12 May', '15 May'],
    },
    {
      id: 'taylor-swift',
      name: 'Taylor Swift',
      image: 'https://i.blogs.es/8f9a0e/taylor-swift-eras-moments/1366_2000.jpeg',
      backgroundImage: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/news/generic/2024/05/30/fotos/ND-CONCIERTO-TAYLOR-SWITH-1.jpg',
      description: 'Una de las artistas más influyentes del pop y country.',
      location: 'Barcelona',
      dates: ['20 May', '22 May', '25 May'],
    },
    {
      id: 'rihanna',
      name: 'Rihanna',
      image: 'https://img.rtve.es/imagenes/rihanna-regresa-espectacular-concierto-super-bowl/1676301484125.jpg',
      backgroundImage: 'https://www.themusicrepublic.es/wp-content/uploads/2022/04/AliveValencia_NathyPeluso_%C2%A9NereaColl-web.jpg',
      description: 'Icono global del pop y R&B.',
      location: 'Valencia',
      dates: ['30 May', '1 Jun', '3 Jun'],
    },
    {
      id: 'drake',
      name: 'Drake',
      image: 'https://indiehoy.com/wp-content/uploads/2023/09/drake.jpg',
      backgroundImage: 'https://seattlerefined.com/resources/media/55fa1942-e1cf-4976-b45b-db3f2c784ca1-full16x9_IMG5871.jpg',
      description: 'El rey del rap y R&B contemporáneo.',
      location: 'Sevilla',
      dates: ['5 Jun', '7 Jun', '10 Jun'],
    },
    {
      id: 'lady-gaga',
      name: 'Lady Gaga',
      image: 'https://www.twincities.com/wp-content/uploads/2017/02/bc-fbn-super-bowl-the-latest-img-jpg.jpg?w=525',
      backgroundImage: 'https://cdn.prod.website-files.com/64b2817e1aecdee44b535e78/65504a8fde2293e054ac846e_Lady-Gaga-Joanne-2017-5.jpg',
      description: 'Una artista innovadora y vanguardista.',
      location: 'Málaga',
      dates: ['12 Jun', '14 Jun', '17 Jun'],
    },
    {
      id: 'justin-bieber',
      name: 'Justin Bieber',
      image: 'https://www.telemadrid.es/2022/10/06/noticias/cultura/_2493960698_35574522_1300x731.jpg',
      backgroundImage: 'https://media.vanityfair.com/photos/597663e8fe060e64db80eb57/master/pass/Justin-Bieber-Tour.jpg',
      description: 'Estrella mundial del pop juvenil.',
      location: 'Bilbao',
      dates: ['20 Jun', '22 Jun', '25 Jun'],
    },
    {
      id: 'ariana-grande',
      name: 'Ariana Grande',
      image: 'https://assets.teenvogue.com/photos/592d9ba130adb34b07d487ed/16:9/w_2560%2Cc_limit/GettyImages-451357572.jpg',
      backgroundImage: 'https://static01.nyt.com/images/2017/06/05/arts/05ariana-grande-hp2/05ariana-grande-hp2-superJumbo.jpg',
      description: 'Voz prodigiosa del pop actual.',
      location: 'Zaragoza',
      dates: ['28 Jun', '30 Jun', '3 Jul'],
    },
    {
      id: 'adele',
      name: 'Adele',
      image: 'https://www.kissfm.es/wp-content/uploads/2023/03/Adele.webp',
      backgroundImage: 'https://www.fxguide.com/wp-content/uploads/2024/11/adele_featured.jpg',
      description: 'Cantante británica con una voz emocionalmente profunda.',
      location: 'Granada',
      dates: ['5 Jul', '7 Jul', '10 Jul'],
    },
    {
      id: 'bts',
      name: 'BTS',
      image: 'https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2021/04/29/4076965e-be0f-4e39-bebc-b65acae19a45_9e406ef1.jpg',
      backgroundImage: 'https://i.ytimg.com/vi/qFDTm_TBAcg/maxresdefault.jpg',
      description: 'Grupo surcoreano que ha revolucionado la música global.',
      location: 'Madrid',
      dates: ['12 Jul', '14 Jul', '17 Jul'],
    },
  
    // REGGAETON
    {
      id: 'bad-bunny',
      name: 'Bad Bunny',
      image: 'https://images.axios.com/BF828CfZnAzC04IrBFKRtlfmWFQ=/0x255:6000x3630/1920x1080/2024/02/21/1708550511456.jpg',
      backgroundImage: 'https://i0.wp.com/billypenn.com/wp-content/uploads/2022/03/badbunnyconcert.jpg?fit=2225%2C1483&ssl=1',
      description: 'Uno de los máximos exponentes del reggaetón actual.',
      location: 'Barcelona',
      dates: ['20 Jul', '22 Jul', '25 Jul'],
    },
    {
      id: 'karol-g',
      name: 'Karol G',
      image: 'https://www.billboard.com/wp-content/uploads/2023/08/01-Karol-G-cr-Alive-Coverage-billboard-1548.jpg',
      backgroundImage: 'https://www.themusicrepublic.es/wp-content/uploads/2022/04/AliveValencia_NathyPeluso_%C2%A9NereaColl-web.jpg',
      description: 'Reina femenina del reggaetón.',
      location: 'Valencia',
      dates: ['28 Jul', '30 Jul', '2 Aug'],
    },
    {
      id: 'rauw-alejandro',
      name: 'Rauw Alejandro',
      image: 'https://highxtar.com/wp-content/uploads/2023/08/highxtar-Rauw-Alejandro-Saturno-World-Tour-1440x960.jpg',
      backgroundImage: 'https://www.themusicrepublic.es/wp-content/uploads/2022/04/AliveValencia_NathyPeluso_%C2%A9NereaColl-web.jpg',
      description: 'Cantante puertorriqueño conocido por su estilo único.',
      location: 'Sevilla',
      dates: ['5 Aug', '7 Aug', '10 Aug'],
    },
    {
      id: 'j-balvin',
      name: 'J Balvin',
      image: 'https://www.billboard.com/wp-content/uploads/2024/10/j-balvin-cheetos-concert-lmw-2024-billboard-espanol-espanol-1548.jpg?w=942&h=623&crop=1',
      backgroundImage: 'https://3ca9a566.delivery.rocketcdn.me/wp-content/uploads/2019/11/j_balvin_featured.jpg',
      description: 'Líder mundial del reggaetón.',
      location: 'Málaga',
      dates: ['12 Aug', '14 Aug', '17 Aug'],
    },
    {
      id: 'anuel-aa',
      name: 'Anuel AA',
      image: 'https://a.vsstatic.com/cms-uploads/anuel-aa-rectangle.jpg',
      backgroundImage: 'https://www.themusicrepublic.es/wp-content/uploads/2022/04/AliveValencia_NathyPeluso_%C2%A9NereaColl-web.jpg',
      description: 'Artista destacado del trap latino.',
      location: 'Bilbao',
      dates: ['20 Aug', '22 Aug', '25 Aug'],
    },
    {
      id: 'feid',
      name: 'Feid',
      image: 'https://dynamicmedia.livenationinternational.com/h/f/x/20e705d7-06d4-41ec-9018-f80caed7296d.jpg?format=webp&width=3840&quality=75',
      backgroundImage: 'https://media-s3-us-east-1.ceros.com/remezcla/images/2023/03/14/3ce5ad53a70b732f20e08da76dfc3bdf/ferxxo-allaccess-back-poster-frame-0.jpg?imageOpt=1',
      description: 'Cantante colombiano famoso por su estilo fresco.',
      location: 'Zaragoza',
      dates: ['28 Aug', '30 Aug', '2 Sep'],
    },
    {
      id: 'myke-towers',
      name: 'Myke Towers',
      image: 'https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2024/06/06083723/shutterstock_2465473333-1-1024x683.jpg',
      backgroundImage: 'https://www.themusicrepublic.es/wp-content/uploads/2022/04/AliveValencia_NathyPeluso_%C2%A9NereaColl-web.jpg',
      description: 'Artista urbano con un sonido innovador.',
      location: 'Granada',
      dates: ['5 Sep', '7 Sep', '10 Sep'],
    },
    {
      id: 'ozuna',
      name: 'Ozuna',
      image: 'https://www.rollingstone.com/wp-content/uploads/2020/01/10376152htW.jpg',
      backgroundImage: 'https://www.themusicrepublic.es/wp-content/uploads/2022/04/AliveValencia_NathyPeluso_%C2%A9NereaColl-web.jpg',
      description: 'El príncipe del reggaetón.',
      location: 'Madrid',
      dates: ['12 Sep', '14 Sep', '17 Sep'],
    },
    {
      id: 'daddy-yankee',
      name: 'Daddy Yankee',
      image: 'https://www.billboard.com/wp-content/uploads/2023/12/Daddy-Yankee-live-billboard-1548.jpg?w=942&h=623&crop=1',
      backgroundImage: 'https://es.chauvetprofessional.com/wp-content/uploads/2023/03/DaddyYankee_1.jpeg',
      description: 'Pionero del reggaetón.',
      location: 'Barcelona',
      dates: ['20 Sep', '22 Sep', '25 Sep'],
    },
  
    // TRAP
    {
      id: 'duki',
      name: 'Duki',
      image: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/news/generic/2024/06/08/fotos/ND-CONCIERTO-DUKI-003_DUKI_WilmaLorenzo.jpg',
      backgroundImage: 'https://www.clarin.com/2024/06/08/uXfRp3_81_2000x1500__2.jpg',
      description: 'Artista argentino conocido por su estilo único en el trap latino.',
      location: 'Madrid',
      dates: ['28 Sep', '30 Sep', '2 Oct'],
    },
    {
      id: 'ysya',
      name: 'YSY A',
      image: 'https://pbs.twimg.com/media/Gi-H2kAWIAAh615?format=jpg&name=large',
      backgroundImage: 'https://i.ytimg.com/vi/U4BCd4pz9Vc/maxresdefault.jpg',
      description: 'El dios del trap argentino que ha ganado popularidad por ser el creador del GAME.',
      location: 'Valencia',
      dates: ['5 Oct', '7 Oct', '10 Oct'],
    },
    {
      id: 'neo-pistea',
      name: 'Neo Pistea',
      image: 'https://infocronos.com.ar/uploads/noticias/5/2025/02/20250219165408_image-2025-02-19t165355-757.webp',
      backgroundImage: 'https://www.themusicrepublic.es/wp-content/uploads/2022/04/AliveValencia_NathyPeluso_%C2%A9NereaColl-web.jpg',
      description: 'Artista rumano conocido por su estilo trap europeo.',
      location: 'Sevilla',
      dates: ['12 Oct', '14 Oct', '17 Oct'],
    },
    {
      id: 'trueno',
      name: 'Trueno',
      image: 'https://i.ytimg.com/vi/mul3XIfqB9Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCp_YOAKbniLeEPWz4EkzA1RRR8Aw',
      backgroundImage: 'https://cloudfront-us-east-1.images.arcpublishing.com/artear/UW6HE6FQENHBVLNR2YBW6WZR2Q.jpg',
      description: 'Artista argentino que ha logrado gran éxito en el mundo del trap.',
      location: 'Málaga',
      dates: ['20 Oct', '22 Oct', '25 Oct'],
    },
    {
      id: 'khea',
      name: 'Khea',
      image: 'https://cdn.wegow.com/media/artists/khea/khea-1535010192.78.jpeg',
      backgroundImage: 'https://czcomunicacion.com/images/CZ/Contenidos/Noticias/KHEA/KHEA.LUNAPARK-330.jpg',
      description: 'Artista argentino que mezcla trap y reggaeton en sus canciones.',
      location: 'Bilbao',
      dates: ['28 Oct', '30 Oct', '2 Nov'],
    },
    {
      id: 'bhavi',
      name: 'Bhavi',
      image: 'https://www.clarin.com/2022/06/15/53C55nXgz_2000x1500__1.jpg',
      backgroundImage: 'https://i0.wp.com/expectador.cl/wp-content/uploads/2023/12/2-13.jpg?resize=1020%2C600&ssl=1',
      description: 'Artista trapero con gran influencia en España.',
      location: 'Zaragoza',
      dates: ['5 Nov', '7 Nov', '10 Nov'],
    },
    {
      id: 'falke912',
      name: 'Falke912',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHvjXUf5cMIB8fCp0Xs4214PSDsI2yoVVLA&s',
      backgroundImage: 'https://www.themusicrepublic.es/wp-content/uploads/2022/04/AliveValencia_NathyPeluso_%C2%A9NereaColl-web.jpg',
      description: 'Productor y artista trapero reconocido por su creatividad.',
      location: 'Granada',
      dates: ['12 Nov', '14 Nov', '17 Nov'],
    },
    {
      id: 'quevedo',
      name: 'Quevedo',
      image: 'https://s1.ppllstatics.com/lasprovincias/www/multimedia/2024/06/30/quevedo-bigsound%20(1).jpg',
      backgroundImage: 'https://www.hola.com/horizon/original_aspect_ratio/43f36620e4ec-whatsapp-image-2025-02-20-at-003233.jpg',
      description: 'Artista español con gran éxito en el trap nacional.',
      location: 'Madrid',
      dates: ['20 Nov', '22 Nov', '25 Nov'],
    },
    {
      id: 'saiko',
      name: 'Saiko',
      image: 'https://nostresport.com/wp-content/uploads/2024/07/saiko-concierto-granada.jpg',
      backgroundImage: 'https://estaticos-cdn.prensaiberica.es/clip/ad046550-e8b0-4780-80cd-4e44e1a9fe71_16-9-discover-aspect-ratio_default_0.jpg',
      description: 'Artista peruano que ha marcado tendencia en el trap latino.',
      location: 'Barcelona',
      dates: ['28 Nov', '30 Nov', '2 Dec'],
    },
  
    // ROCK
    {
      id: 'queen',
      name: 'Queen',
      image: 'https://metropolitano.gal/wp-content/uploads/2018/10/diosalvealareina.jpg',
      backgroundImage: 'https://www.queenonline.com/global/uploads/FIREFIGHTAUS-QUEEN-JORDAN-MUNNS-@jordankmunns-9.jpg',
      description: 'Una legendaria banda británica de rock liderada por Freddie Mercury.',
      location: 'Madrid',
      dates: ['5 Dec', '7 Dec', '10 Dec'],
    },
    {
      id: 'acdc',
      name: 'AC/DC',
      image: 'https://networksites.livenationinternational.com/networksites/jlxcnipc/acdc-2024-us-tour-announce-036-2.jpg?format=webp&width=3840&quality=75',
      backgroundImage: 'https://sevillasecreta.co/wp-content/uploads/2024/02/Concierto-AC_DC-Sevilla-gira-Power-up-1024x650.jpg',
      description: 'Una banda australiana de hard rock con himnos como "Back in Black".',
      location: 'Barcelona',
      dates: ['12 Dec', '14 Dec', '17 Dec'],
    },
    {
      id: 'metallica',
      name: 'Metallica',
      image: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/07/12/17208198320557.jpg',
      backgroundImage: 'https://meyersound.es/es/wp-content/uploads/2023/06/metallica-2.jpeg',
      description: 'Una de las bandas más influyentes del heavy metal.',
      location: 'Valencia',
      dates: ['20 Dec', '22 Dec', '25 Dec'],
    },
    {
      id: 'the-rolling-stones',
      name: 'The Rolling Stones',
      image: 'https://imagenes.elpais.com/resizer/v2/PWUSYNSTBVDZVMXP2ZDSYEDBVM.jpg?auth=229453892132a22d4a508276b8de02f5d95436604e907fa875e3395dfecf1f78&width=1960&height=1470&focal=1866%2C719',
      backgroundImage: 'https://es.rollingstone.com/wp-content/uploads/2022/05/WEB-APERTURA-Daily-Mirror-Mirrorpix-Mirrorpix-via-Getty-Images-GettyImages-592263750.jpg',
      description: 'Una icónica banda británica de rock and roll.',
      location: 'Sevilla',
      dates: ['28 Dec', '30 Dec', '2 Jan'],
    },
    {
      id: 'foo-fighters',
      name: 'Foo Fighters',
      image: 'https://www.themetalcircus.com/wp-content/uploads/2022/03/FooFighters-ForoSol-OCESA-FotoLilianaEstrada-21-1020x676.jpg',
      backgroundImage: 'https://www.ultrabrit.com/wp-content/uploads/2018/03/foo-fighters-rayos-1.jpeg',
      description: 'Una banda estadounidense de rock conocida por su energía en vivo.',
      location: 'Málaga',
      dates: ['5 Jan', '7 Jan', '10 Jan'],
    },
    {
      id: 'nirvana',
      name: 'Nirvana',
      image: 'https://img.huffingtonpost.es/files/image_1200_720/uploads/2023/09/06/kurt-cobain-dave-grohl-y-krist-novoselic-de-nirvana.jpeg',
      backgroundImage: 'https://www.themusicrepublic.es/wp-content/uploads/2022/04/AliveValencia_NathyPeluso_%C2%A9NereaColl-web.jpg',
      description: 'Definió el grunge en los 90 con su icónico álbum "Nevermind".',
      location: 'Bilbao',
      dates: ['12 Jan', '14 Jan', '17 Jan'],
    },
    {
      id: 'pink-floyd',
      name: 'Pink Floyd',
      image: 'https://www.sala-apolo.com/uploads/media/default/0001/07/thumb_6941_default_wide.jpeg',
      backgroundImage: 'https://www.binaural.es/wp-content/uploads/2020/04/pinkfloyd.jpg',
      description: 'Una banda británica famosa por su música progresiva y conceptos profundos.',
      location: 'Zaragoza',
      dates: ['20 Jan', '22 Jan', '25 Jan'],
    },
    {
      id: 'led-zeppelin',
      name: 'Led Zeppelin',
      image: 'https://img2.rtve.es/v/1617413?w=1600&preview=1355909703936.jpg',
      backgroundImage: 'https://www.themusicrepublic.es/wp-content/uploads/2022/04/AliveValencia_NathyPeluso_%C2%A9NereaColl-web.jpg',
      description: 'Una leyenda del rock conocida por su poderoso sonido.',
      location: 'Granada',
      dates: ['28 Jan', '30 Jan', '2 Feb'],
    },
    {
      id: 'red-hot-chili-peppers',
      name: 'Red Hot Chili Peppers',
      image: 'https://cdn.artphotolimited.com/images/6151ece5bd40b85e3db8fef8/1000x1000/concert-red-hot-chili-peppers.jpg',
      backgroundImage: 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/M3U5VLDL4MY7DY4EFDJOYR6XRI.jpg',
      description: 'Una banda de funk rock con un estilo único y energético.',
      location: 'Madrid',
      dates: ['5 Feb', '7 Feb', '10 Feb'],
    },
  

    {
      id: 'iron-maiden',
      name: 'Iron Maiden',
      image: 'https://i.ytimg.com/vi/6KdN6_4a8IY/maxresdefault.jpg',
      backgroundImage: 'https://plsn.com/site/wp-content/uploads/01-main-shot.jpg',
      description: 'Una banda británica de heavy metal clásico.',
      location: 'Valencia',
      dates: ['20 Feb', '22 Feb', '25 Feb'],
    },
    {
      id: 'slipknot',
      name: 'Slipknot',
      image: 'https://steamuserimages-a.akamaihd.net/ugc/1896595492217554671/5C031E96FAF12D82498E4529C8D8BFFB4DACCA06/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
      backgroundImage: 'https://knotfest.com/cdn/shop/articles/Untitled-design-2024-03-11T222939.926.png?v=1739912157',
      description: 'Una banda estadounidense de nu metal conocida por su estilo agresivo.',
      location: 'Sevilla',
      dates: ['28 Feb', '1 Mar', '3 Mar'],
    },
    {
      id: 'rammstein',
      name: 'Rammstein',
      image: 'https://consequence.net/wp-content/uploads/2022/08/Rammstein-Mind-Blowing-Featured.jpg',
      backgroundImage: 'https://a.storyblok.com/f/132420/bacad78deb/rammstein-nimes-13-07-2017_327.jpeg',
      description: 'Una banda alemana de industrial metal con un show visual impactante.',
      location: 'Málaga',
      dates: ['5 Mar', '7 Mar', '10 Mar'],
    },
    {
      id: 'megadeth',
      name: 'Megadeth',
      image: 'https://www.antiheromagazine.com/wp-content/uploads/2022/05/megadeth-4757.jpg',
      backgroundImage: 'https://upload.wikimedia.org/wikipedia/it/thumb/b/bb/The_Big_4_-_Live_from_Sofia%2C_Bulgaria.png/1200px-The_Big_4_-_Live_from_Sofia%2C_Bulgaria.png',
      description: 'Una banda estadounidense de thrash metal liderada por Dave Mustaine.',
      location: 'Bilbao',
      dates: ['12 Mar', '14 Mar', '17 Mar'],
    },
    {
      id: 'gojira',
      name: 'Gojira',
      image: 'https://via.placeholder.com/150',
      backgroundImage: 'https://via.placeholder.com/600x400',
      description: 'Una banda francesa de metal progresivo conocida por su mensaje ecológico.',
      location: 'Zaragoza',
      dates: ['20 Mar', '22 Mar', '25 Mar'],
    },
    {
      id: 'avenged-sevenfold',
      name: 'Avenged Sevenfold',
      image: 'https://via.placeholder.com/150',
      backgroundImage: 'https://via.placeholder.com/600x400',
      description: 'Una banda estadounidense de heavy metal con un estilo único.',
      location: 'Granada',
      dates: ['28 Mar', '30 Mar', '2 Apr'],
    },
    {
      id: 'mastodon',
      name: 'Mastodon',
      image: 'https://via.placeholder.com/150',
      backgroundImage: 'https://via.placeholder.com/600x400',
      description: 'Una banda estadounidense de metal progresivo conocida por su complejidad musical.',
      location: 'Madrid',
      dates: ['5 Apr', '7 Apr', '10 Apr'],
    },
    {
      id: 'trivium',
      name: 'Trivium',
      image: 'https://via.placeholder.com/150',
      backgroundImage: 'https://via.placeholder.com/600x400',
      description: 'Una banda estadounidense de metal moderno con un estilo técnico.',
      location: 'Barcelona',
      dates: ['12 Apr', '14 Apr', '17 Apr'],
    },
  ];

  isModalOpen = false;
  selectedDate: string | null = null;
  selectedTicketType: TicketType = 'Pista General';
  ticketPrice: Record<TicketType, number> = {
    'Pista General': 50,
    'Pista VIP': 75,
    'Pista Platinum': 100,
  };

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.artistId = params.get('id') || '';
      this.genre = params.get('genre') || '';
      this.currentArtist = this.findArtistById(this.artistId);
      if (!this.currentArtist) {
        console.warn(`Artista con ID "${this.artistId}" no encontrado.`);
      }
    });
  }

  findArtistById(id: string): Artist | undefined {
    return this.allArtists.find((artist) => artist.id === id);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedDate = null;
    this.selectedTicketType = 'Pista General';
  }

  selectDate(date: string) {
    this.selectedDate = date;
  }

  selectTicketType(type: TicketType) {
    this.selectedTicketType = type;
  }

  addToCart() {
    if (this.currentArtist && this.selectedDate && this.selectedTicketType) {
      const cartItem = {
        artistName: this.currentArtist.name,
        artistImage: this.currentArtist?.image,
        date: this.selectedDate,
        ticketType: this.selectedTicketType,
        price: this.ticketPrice[this.selectedTicketType],
      };
      this.cartService.addItemToCart(cartItem);
      alert('Producto agregado al carrito!');
      this.closeModal();
    } else {
      alert('Por favor, selecciona una fecha y tipo de entrada.');
    }
  }
}