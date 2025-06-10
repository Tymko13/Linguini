import { Component } from '@angular/core';
import {Topic} from '../_models/topic';

@Component({
  selector: 'app-texts',
  imports: [],
  templateUrl: './texts.component.html',
  styleUrl: './texts.component.scss'
})
export class TextsComponent {
  topics: Topic[];

  constructor() {
    this.topics = JSON.parse(this.topicsString);
    console.log(this.topics);
  }

  topicsString = `[
  {
    "name": "Fashion 1",
    "title": "Dior and the New Look",
    "text": "In 1947, French designer Christian Dior changed the world of fashion with his New Look. After World War II, people were tired of simple and practical clothes. Dior’s new collection brought back elegance and glamour. It featured narrow waists, full skirts, and soft shoulders, creating a very feminine silhouette. Many fashion lovers were amazed by the luxurious fabrics and beautiful embroidery. The dresses were often made from silk and decorated with lace and beads. This look was not only stylish but also gave people hope and joy. It showed that fashion could be expressive and artistic, even after hard times. Today, Dior’s New Look is still remembered as a symbol of haute couture and timeless style.",
    "words": [
      {
        "word": "designer",
        "translation": "дизайнер",
        "sentence1": "Christian Dior was a famous fashion",
        "sentence2": "from France."
      },
      {
        "word": "collection",
        "translation": "колекція",
        "sentence1": "The new spring",
        "sentence2": "includes bright colors and floral prints."
      },
      {
        "word": "elegance",
        "translation": "витонченість",
        "sentence1": "Her style is a mix of modern and classic, full of",
        "sentence2": "."
      },
      {
        "word": "glamour",
        "translation": "гламур",
        "sentence1": "That evening gown was full of",
        "sentence2": "and sparkle."
      },
      {
        "word": "narrow waist",
        "translation": "вузька талія",
        "sentence1": "The dress had a",
        "sentence2": "that made the waist look smaller."
      },
      {
        "word": "full skirt",
        "translation": "повна спідниця",
        "sentence1": "The model walked down the runway in a dress with a",
        "sentence2": "."
      },
      {
        "word": "feminine",
        "translation": "жіночний",
        "sentence1": "I love the way the dress moves — it’s so",
        "sentence2": "and romantic."
      },
      {
        "word": "silhouette",
        "translation": "силует",
        "sentence1": "Her dress had a natural",
        "sentence2": ", soft and beautiful."
      },
      {
        "word": "luxurious",
        "translation": "розкішний",
        "sentence1": "The royal wedding dress was made of a very",
        "sentence2": "fabric."
      },
      {
        "word": "embroidery",
        "translation": "вишивка",
        "sentence1": "She wore a blouse with white",
        "sentence2": "on the sleeves."
      },
      {
        "word": "lace",
        "translation": "мереживо",
        "sentence1": "She wore a blouse made of black silk and",
        "sentence2": "."
      },
      {
        "word": "beads",
        "translation": "намистини",
        "sentence1": "The skirt had tiny silver",
        "sentence2": "sewn into the fabric."
      },
      {
        "word": "expressive",
        "translation": "виразний",
        "sentence1": "This look is very emotional and",
        "sentence2": ", perfect for the runway."
      },
      {
        "word": "artistic",
        "translation": "художній",
        "sentence1": "I admire how the dress looks like a work of art — it’s very",
        "sentence2": "."
      },
      {
        "word": "haute couture",
        "translation": "висока мода",
        "sentence1": "In Paris, we visited a museum with clothes from",
        "sentence2": "fashion houses."
      }
    ]
  },
  {
    "name": "Travel 1",
    "title": "A Trip to Iceland",
    "text": "Last summer, I went on an unforgettable trip to Iceland. I joined a small tour group and explored the beautiful landscape — volcanoes, glaciers, and waterfalls were everywhere! We stayed in a cozy guesthouse in a quiet village. Every morning, we packed our backpacks and drove to a new destination. My favorite part was visiting the Blue Lagoon — a famous hot spring where you can swim in warm water even when it’s snowing. I also loved the local cuisine, especially fresh fish and traditional lamb soup. The locals were friendly and gave us great travel tips. We used a detailed travel guide to plan our days and avoid tourist traps. It was the perfect mix of adventure and relaxation. I’d recommend Iceland to anyone who loves nature and exploration.",
    "words": [
      {
        "word": "trip",
        "translation": "подорож",
        "sentence1": "The travel agency offered a three-day",
        "sentence2": "to the mountains."
      },
      {
        "word": "tour group",
        "translation": "тургрупа",
        "sentence1": "We joined a small",
        "sentence2": "to explore the city with a guide."
      },
      {
        "word": "landscape",
        "translation": "ландшафт",
        "sentence1": "The view from the hill showed a breathtaking",
        "sentence2": "of lakes and hills."
      },
      {
        "word": "volcano",
        "translation": "вулкан",
        "sentence1": "The huge",
        "sentence2": "erupted last year and created a lava field."
      },
      {
        "word": "glacier",
        "translation": "льодовик",
        "sentence1": "We saw a",
        "sentence2": "slowly melting near the mountain base."
      },
      {
        "word": "waterfall",
        "translation": "водоспад",
        "sentence1": "They took a photo in front of a beautiful",
        "sentence2": "in the forest."
      },
      {
        "word": "guesthouse",
        "translation": "гостьовий будинок",
        "sentence1": "We stayed in a small",
        "sentence2": "by the lake during our trip."
      },
      {
        "word": "backpack",
        "translation": "рюкзак",
        "sentence1": "We packed our lunch and water bottles into a",
        "sentence2": "before leaving."
      },
      {
        "word": "hot spring",
        "translation": "гаряче джерело",
        "sentence1": "The Blue Lagoon is a famous",
        "sentence2": "in Iceland."
      },
      {
        "word": "local cuisine",
        "translation": "місцева кухня",
        "sentence1": "The Icelandic",
        "sentence2": "includes fish, lamb, and dairy dishes."
      },
      {
        "word": "travel tips",
        "translation": "поради для мандрівників",
        "sentence1": "I asked the locals for some good",
        "sentence2": "about where to eat."
      },
      {
        "word": "travel guide",
        "translation": "гід для мандрівників",
        "sentence1": "We followed a",
        "sentence2": "to find the best places to visit."
      },
      {
        "word": "destination",
        "translation": "місце призначення",
        "sentence1": "Their next",
        "sentence2": "is Japan — they’re flying tomorrow."
      },
      {
        "word": "nature",
        "translation": "природа",
        "sentence1": "She studies biology because she loves",
        "sentence2": "and wildlife."
      },
      {
        "word": "exploration",
        "translation": "дослідження",
        "sentence1": "The trip included hiking and cave",
        "sentence2": "every day."
      }
    ]
  },
  {
    "name": "Technology 1",
    "title": "The Rise of Smart Devices",
    "text": "In the past decade, technology has changed our daily lives dramatically. Today, many people use smart devices — like phones, watches, and even refrigerators — to make life easier and more connected. A smartphone can be used for communication, work, and entertainment. It connects to the internet through Wi-Fi or mobile data and allows people to send messages, check emails, or join a video call from anywhere. At home, we now have voice assistants that respond to our commands. For example, you can say 'play music' and your speaker will do it! Many homes also use smart security systems with cameras and motion sensors. Thanks to apps and cloud storage, we can save and access data easily. But with all these benefits, we must also think about privacy and cybersecurity to keep our information safe.",
    "words": [
      {
        "word": "technology",
        "translation": "технології",
        "sentence1": "",
        "sentence2": "is changing how we shop, travel, and even sleep."
      },
      {
        "word": "smart device",
        "translation": "розумний пристрій",
        "sentence1": "This",
        "sentence2": "lets me control the lights in my house using my voice."
      },
      {
        "word": "smartphone",
        "translation": "мобільний телефон",
        "sentence1": "A",
        "sentence2": "today is more powerful than a computer from 20 years ago."
      },
      {
        "word": "communication",
        "translation": "спілкування",
        "sentence1": "Many people rely on",
        "sentence2": "to stay in touch with family and friends."
      },
      {
        "word": "Wi-Fi",
        "translation": "Wi-Fi",
        "sentence1": "Most restaurants offer free",
        "sentence2": "for customers."
      },
      {
        "word": "mobile data",
        "translation": "мобільні дані",
        "sentence1": "His phone uses too much",
        "sentence2": "when streaming videos."
      },
      {
        "word": "video call",
        "translation": "відеодзвінок",
        "sentence1": "You can join the meeting by clicking the link for the",
        "sentence2": "."
      },
      {
        "word": "voice assistant",
        "translation": "голосовий помічник",
        "sentence1": "This",
        "sentence2": "lets me play music by saying a command."
      },
      {
        "word": "smart security system",
        "translation": "розумна система безпеки",
        "sentence1": "We installed a",
        "sentence2": "with cameras and alarms."
      },
      {
        "word": "camera",
        "translation": "камера",
        "sentence1": "The new phone has a high-quality",
        "sentence2": "with night mode."
      },
      {
        "word": "motion sensor",
        "translation": "сенсор руху",
        "sentence1": "My house alarm has a",
        "sentence2": "that turns on when someone walks past."
      },
      {
        "word": "app",
        "translation": "додаток",
        "sentence1": "I downloaded an",
        "sentence2": "that helps me learn languages."
      },
      {
        "word": "cloud storage",
        "translation": "хмарне сховище",
        "sentence1": "I backed up all my photos using",
        "sentence2": "."
      },
      {
        "word": "privacy",
        "translation": "конфіденційність",
        "sentence1": "We should always protect our personal data and respect other people’s",
        "sentence2": "."
      },
      {
        "word": "cybersecurity",
        "translation": "кібербезпека",
        "sentence1": "A good",
        "sentence2": "protects your information from online attacks."
      }
    ]
  },
  {
    "name": "Music 1",
    "title": "Music for Every Mood",
    "text": "Music is a big part of our lives. It can change our mood, help us relax, or give us energy. Some people listen to classical music to focus while studying. Others enjoy pop or rock when they want to dance or sing along. Each person has their own taste in music. Some love instrumental songs, while others prefer lyrics they can relate to. Streaming platforms let us make our own playlists and discover new artists and bands every day. Live concerts are also popular — many people travel to see their favorite performers on stage. Some even play an instrument themselves or sing in a choir. No matter the genre, music connects people around the world. It’s more than just sound — it’s emotion, memory, and expression.",
    "words": [
      {
        "word": "mood",
        "translation": "настрій",
        "sentence1": "I use music to change my",
        "sentence2": "when I feel tired or sad."
      },
      {
        "word": "relax",
        "translation": "розслаблятись",
        "sentence1": "I like to",
        "sentence2": "after work by listening to soft music."
      },
      {
        "word": "classical music",
        "translation": "класична музика",
        "sentence1": "I listen to",
        "sentence2": "when I want to calm down and study."
      },
      {
        "word": "pop",
        "translation": "поп",
        "sentence1": "I usually listen to",
        "sentence2": "music when I want to dance."
      },
      {
        "word": "rock",
        "translation": "рок",
        "sentence1": "He doesn’t like",
        "sentence2": "music, he thinks it’s too noisy."
      },
      {
        "word": "taste in music",
        "translation": "музичний смак",
        "sentence1": "My",
        "sentence2": "changes every day — sometimes I like jazz, sometimes techno."
      },
      {
        "word": "instrumental",
        "translation": "інструментальна (музика)",
        "sentence1": "Do you prefer songs with words or just",
        "sentence2": "music?"
      },
      {
        "word": "lyrics",
        "translation": "пісенний текст",
        "sentence1": "This song’s",
        "sentence2": "are beautiful — they made me cry."
      },
      {
        "word": "playlist",
        "translation": "плейлист",
        "sentence1": "She made a new",
        "sentence2": "of songs for her road trip."
      },
      {
        "word": "artist",
        "translation": "виконавець",
        "sentence1": "My favorite",
        "sentence2": "is Adele — her voice is amazing."
      },
      {
        "word": "band",
        "translation": "гурт",
        "sentence1": "Coldplay is a famous",
        "sentence2": "that plays around the world."
      },
      {
        "word": "concert",
        "translation": "концерт",
        "sentence1": "We bought tickets to a live",
        "sentence2": "next Friday night."
      },
      {
        "word": "instrument",
        "translation": "інструмент",
        "sentence1": "My sister can play more than one",
        "sentence2": ", including piano and guitar."
      },
      {
        "word": "choir",
        "translation": "хор",
        "sentence1": "He joined a school",
        "sentence2": "because he loves singing."
      },
      {
        "word": "genre",
        "translation": "жанр",
        "sentence1": "What’s your favorite musical",
        "sentence2": "— jazz, hip-hop, or something else?"
      }
    ]
  },
  {
    "name": "Communication 1",
    "title": "The Power of Communication",
    "text": "Communication is one of the most important skills in life. We use it every day — to express ideas, solve problems, or simply stay in touch with others. Some people prefer face-to-face talks, while others use text messages, emails, or social media. Good communication isn’t only about words — body language, tone of voice, and active listening also matter. In the workplace, clear communication helps avoid misunderstandings. It’s useful to know how to give feedback, ask questions, and make small talk. These skills are also helpful when meeting new people. Whether you're talking to a friend or giving a presentation, being a good communicator helps build strong relationships and confidence.",
    "words": [
      {
        "word": "communication",
        "translation": "спілкування",
        "sentence1": "Good",
        "sentence2": "can solve many problems before they get bigger."
      },
      {
        "word": "stay in touch",
        "translation": "залишатися на зв’язку",
        "sentence1": "We still",
        "sentence2": "even though we live in different countries."
      },
      {
        "word": "face-to-face",
        "translation": "віч-на-віч",
        "sentence1": "I prefer",
        "sentence2": "conversations because I can see the person’s reactions."
      },
      {
        "word": "text message",
        "translation": "текстове повідомлення",
        "sentence1": "He sent a quick",
        "sentence2": "to say he’d be late."
      },
      {
        "word": "email",
        "translation": "електронна пошта",
        "sentence1": "I don’t like phone calls — I usually write an",
        "sentence2": "."
      },
      {
        "word": "social media",
        "translation": "соціальні мережі",
        "sentence1": "We use",
        "sentence2": "platforms like Instagram and TikTok to share news."
      },
      {
        "word": "body language",
        "translation": "мова тіла",
        "sentence1": "His",
        "sentence2": "showed he was nervous, even though he smiled."
      },
      {
        "word": "tone of voice",
        "translation": "тон голосу",
        "sentence1": "She used a soft",
        "sentence2": "when talking to the children."
      },
      {
        "word": "active listening",
        "translation": "активне слухання",
        "sentence1": "I admire people who practice",
        "sentence2": "instead of interrupting."
      },
      {
        "word": "clear communication",
        "translation": "чітке спілкування",
        "sentence1": "Strong",
        "sentence2": "is key for teamwork and good results."
      },
      {
        "word": "give feedback",
        "translation": "давати зворотний зв'язок",
        "sentence1": "The teacher asked us to",
        "sentence2": "to each other after the group task."
      },
      {
        "word": "ask questions",
        "translation": "ставити запитання",
        "sentence1": "It’s important to",
        "sentence2": "if something isn’t clear."
      },
      {
        "word": "make small talk",
        "translation": "світська бесіда",
        "sentence1": "During interviews, it helps to",
        "sentence2": "about hobbies or the weather."
      },
      {
        "word": "presentation",
        "translation": "презентація",
        "sentence1": "She gave a great",
        "sentence2": "at the meeting about the new project."
      },
      {
        "word": "communicator",
        "translation": "комунікатор",
        "sentence1": "A true",
        "sentence2": "listens carefully and speaks clearly."
      }
    ]
  }
]`

}
