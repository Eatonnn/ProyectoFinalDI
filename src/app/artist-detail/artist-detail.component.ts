import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interfaz para definir la estructura de los artistas
interface Artist {
  id: string;
  name: string;
  image: string;
  backgroundImage: string;
  description: string;
  location: string;
  date: string;
}

@Component({
  selector: 'app-artist-detail',
  standalone: true,
  imports: [], // Importa aquí los módulos necesarios si los usas
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  artistId!: string;
  genre!: string;
  currentArtist?: Artist; 

  // ======== ARTISTAS POR GÉNERO ========

  // Rock
  rockArtists: Artist[] = [
    {
      id: 'coldplay',
      name: 'Coldplay',
      image: 'https://i.pinimg.com/236x/50/8b/fc/508bfcc325b350cd862d79266238d69a.jpg',
      backgroundImage: 'https://i.pinimg.com/originals/8b/7e/cc/8b7ecc5bb6569dc81d7378f87e51242e.jpg',
      description: 'Coldplay es una banda británica de rock alternativo conocida por su sonido melódico y letras profundas.',
      location: 'Madrid',
      date: '15 Mar'
    },
    {
      id: 'queen',
      name: 'Queen',
      image: 'https://www.rollingstone.com/wp-content/uploads/2018/06/queen-by-neal-preston-courtesy-of-qpl-press-site-269.jpg',
      backgroundImage: 'https://wallpapercave.com/wp/wp5036812.jpg',
      description: 'Queen es una legendaria banda británica de rock liderada por Freddie Mercury, famosa por himnos como "Bohemian Rhapsody".',
      location: 'Barcelona',
      date: '20 Mar'
    },
    {
      id: 'the-beatles',
      name: 'The Beatles',
      image: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU0ODg5Njc1Mjc4/the-beatles-9209540-1-402.jpg',
      backgroundImage: 'https://cdn.wallpapersafari.com/38/63/8D0NcE.jpg',
      description: 'The Beatles revolucionaron la música y la cultura popular en los años 60 con su creatividad y talento inigualable.',
      location: 'Valencia',
      date: '25 Mar'
    },
    {
      id: 'nirvana',
      name: 'Nirvana',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg',
      backgroundImage: 'https://wallpaperaccess.com/full/423093.jpg',
      description: 'Nirvana, liderada por Kurt Cobain, definió el grunge en los 90 con su icónico álbum "Nevermind".',
      location: 'Sevilla',
      date: '01 Abr'
    }
  ];

  // Metal
  metalArtists: Artist[] = [
    {
      id: 'metallica',
      name: 'Metallica',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Metallica_at_The_O2_Arena_London_2008.jpg',
      backgroundImage: 'https://wallpapercave.com/wp/wp4362842.jpg',
      description: 'Metallica es una de las bandas más influyentes del heavy metal, con álbumes legendarios como "Master of Puppets".',
      location: 'Málaga',
      date: '05 Abr'
    },
    {
      id: 'acdc',
      name: 'AC/DC',
      image: 'https://upload.wikimedia.org/wikipedia/en/a/a3/ACDC_Highway_to_Hell.JPG',
      backgroundImage: 'https://wallpapercave.com/wp/wp1913118.jpg',
      description: 'AC/DC es una banda australiana de hard rock con himnos como "Back in Black" y "Highway to Hell".',
      location: 'Bilbao',
      date: '10 Abr'
    }
  ];

  // Rock Progresivo
  progressiveRockArtists: Artist[] = [
    {
      id: 'pink-floyd',
      name: 'Pink Floyd',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pink_Floyd_-_The_Dark_Side_of_the_Moon.png',
      backgroundImage: 'https://wallpaperaccess.com/full/1256353.jpg',
      description: 'Pink Floyd es una banda pionera del rock progresivo, famosa por su álbum conceptual "The Dark Side of the Moon".',
      location: 'Zaragoza',
      date: '15 Abr'
    },
    {
      id: 'led-zeppelin',
      name: 'Led Zeppelin',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/55/LedZeppelinFourSymbols.jpg',
      backgroundImage: 'https://wallpaperaccess.com/full/1274664.jpg',
      description: 'Led Zeppelin es una de las bandas más influyentes del rock, famosa por "Stairway to Heaven".',
      location: 'Córdoba',
      date: '25 Abr'
    }
  ];

  // Trap/Urban
  trapArtists: Artist[] = [
    {
      id: 'duki',
      name: 'Duki',
      image: 'https://publish-p47754-e237306.adobeaemcloud.com/content/dam/portals/realmadrid-com/es-es/news/generic/2024/06/08/fotos/ND-CONCIERTO-DUKI-003_DUKI_WilmaLorenzo.jpg',
      backgroundImage: 'https://www.clarin.com/2024/06/08/uXfRp3_81_2000x1500__2.jpg',
      description: 'Duki es un artista argentino conocido por su estilo único en el trap latino.',
      location: 'Madrid',
      date: '15 Mar'
    },
    {
      id: 'trueno',
      name: 'Trueno',
      image: 'https://via.placeholder.com/600x300',
      backgroundImage: 'https://via.placeholder.com/1200x800',
      description: 'Trueno es un rapero argentino que ha ganado popularidad en la escena urbana.',
      location: 'Barcelona',
      date: '20 Mar'
    },
    {
      id: 'khea',
      name: 'Khea',
      image: 'https://via.placeholder.com/600x300',
      backgroundImage: 'https://via.placeholder.com/1200x800',
      description: 'Khea es un artista argentino que mezcla trap y reggaeton en sus canciones.',
      location: 'Valencia',
      date: '25 Mar'
    }
  ];

  // ======== MÉTODOS ========

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.artistId = params.get('id') || '';
      this.genre = params.get('genre') || '';
      this.currentArtist = this.findArtistById(this.artistId);

      if (!this.currentArtist) {
        console.warn(`Artista con ID "${this.artistId}" no encontrado.`);
      }
    });
  }

  findArtistById(id: string): Artist | undefined {
    const allArtists = [...this.rockArtists, ...this.metalArtists, ...this.progressiveRockArtists, ...this.trapArtists];
    return allArtists.find(artist => artist.id === id);
  }
}
