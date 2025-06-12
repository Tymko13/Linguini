import { Injectable } from '@angular/core';
import {Topic} from '../_models/topic';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  topics: Topic[];
  constructor() { this.topics = JSON.parse(this.topicsString); }

  topicsString = `[
  {
    "name": "Fashion 1",
    "title": "Dior and the New Look",
    "text": "In 1947, French designer Christian Dior changed the world of fashion with his New Look. After World War II, people were tired of simple and practical clothes. Dior’s new collection brought back elegance and glamour. It featured narrow waists, full skirts, and soft shoulders, creating a very feminine silhouette. Many fashion lovers were amazed by the luxurious fabrics and beautiful embroidery. The dresses were often made from silk and decorated with lace and beads. This look was not only stylish but also gave people hope and joy. It showed that fashion could be expressive and artistic, even after hard times. Today, Dior’s New Look is still remembered as a symbol of haute couture and timeless style.",
    "words": [
      {
        "word": "designer",
        "translation": "дизайнер",
        "definition": "a person who creates clothes or fashion items",
        "sentence1": "Christian Dior was a famous fashion",
        "sentence2": "from France."
      },
      {
        "word": "collection",
        "translation": "колекція",
        "definition": "a group of clothes made by a fashion house",
        "sentence1": "The new spring",
        "sentence2": "includes bright colors and floral prints."
      },
      {
        "word": "elegance",
        "translation": "витонченість",
        "definition": "stylish beauty and grace",
        "sentence1": "Her style is a mix of modern and classic, full of",
        "sentence2": "."
      },
      {
        "word": "glamour",
        "translation": "гламур",
        "definition": "charm and attractive style",
        "sentence1": "That evening gown was full of",
        "sentence2": "and sparkle."
      },
      {
        "word": "narrow waist",
        "translation": "вузька талія",
        "definition": "a thin middle part of a body or dress",
        "sentence1": "The dress had a",
        "sentence2": "that made the waist look smaller."
      },
      {
        "word": "full skirt",
        "translation": "повна спідниця",
        "definition": "a wide skirt that flows from the waist",
        "sentence1": "The model walked down the runway in a dress with a",
        "sentence2": "."
      },
      {
        "word": "feminine",
        "translation": "жіночний",
        "definition": "soft and delicate in a womanly way",
        "sentence1": "I love the way the dress moves — it’s so",
        "sentence2": "and romantic."
      },
      {
        "word": "silhouette",
        "translation": "силует",
        "definition": "the shape or outline of something",
        "sentence1": "Her dress had a natural",
        "sentence2": ", soft and beautiful."
      },
      {
        "word": "luxurious",
        "translation": "розкішний",
        "definition": "rich and expensive in style or material",
        "sentence1": "The royal wedding dress was made of a very",
        "sentence2": "fabric."
      },
      {
        "word": "embroidery",
        "translation": "вишивка",
        "definition": "decorative stitching on fabric",
        "sentence1": "She wore a blouse with white",
        "sentence2": "on the sleeves."
      },
      {
        "word": "lace",
        "translation": "мереживо",
        "definition": "fine open fabric often used in dresses",
        "sentence1": "She wore a blouse made of black silk and",
        "sentence2": "."
      },
      {
        "word": "beads",
        "translation": "намистини",
        "definition": "small decorative items sewn onto clothing",
        "sentence1": "The skirt had tiny silver",
        "sentence2": "sewn into the fabric."
      },
      {
        "word": "expressive",
        "translation": "виразний",
        "definition": "showing emotions clearly",
        "sentence1": "This look is very emotional and",
        "sentence2": ", perfect for the runway."
      },
      {
        "word": "artistic",
        "translation": "художній",
        "definition": "creative or connected with art",
        "sentence1": "I admire how the dress looks like a work of art — it’s very",
        "sentence2": "."
      },
      {
        "word": "haute couture",
        "translation": "висока мода",
        "definition": "high-end fashion made by top designers",
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
        "definition": "a journey or short vacation",
        "sentence1": "The travel agency offered a three-day",
        "sentence2": "to the mountains."
      },
      {
        "word": "tour group",
        "translation": "тургрупа",
        "definition": "a group of tourists traveling together",
        "sentence1": "We joined a small",
        "sentence2": "to explore the city with a guide."
      },
      {
        "word": "landscape",
        "translation": "ландшафт",
        "definition": "the outside view of an area",
        "sentence1": "The view from the hill showed a breathtaking",
        "sentence2": "of lakes and hills."
      },
      {
        "word": "volcano",
        "translation": "вулкан",
        "definition": "a mountain that erupts with lava",
        "sentence1": "The huge",
        "sentence2": "erupted last year and created a lava field."
      },
      {
        "word": "glacier",
        "translation": "льодовик",
        "definition": "a large body of moving ice",
        "sentence1": "We saw a",
        "sentence2": "slowly melting near the mountain base."
      },
      {
        "word": "waterfall",
        "translation": "водоспад",
        "definition": "a natural flow of water falling from a height",
        "sentence1": "They took a photo in front of a beautiful",
        "sentence2": "in the forest."
      },
      {
        "word": "guesthouse",
        "translation": "гостьовий будинок",
        "definition": "a small hotel or house for guests",
        "sentence1": "We stayed in a small",
        "sentence2": "by the lake during our trip."
      },
      {
        "word": "backpack",
        "translation": "рюкзак",
        "definition": "a bag worn on the back for carrying things",
        "sentence1": "We packed our lunch and water bottles into a",
        "sentence2": "before leaving."
      },
      {
        "word": "hot spring",
        "translation": "гаряче джерело",
        "definition": "a natural warm water pool for bathing",
        "sentence1": "The Blue Lagoon is a famous",
        "sentence2": "in Iceland."
      },
      {
        "word": "local cuisine",
        "translation": "місцева кухня",
        "definition": "the typical food of a region",
        "sentence1": "The Icelandic",
        "sentence2": "includes fish, lamb, and dairy dishes."
      },
      {
        "word": "travel tips",
        "translation": "поради для мандрівників",
        "definition": "helpful advice for tourists",
        "sentence1": "I asked the locals for some good",
        "sentence2": "about where to eat."
      },
      {
        "word": "travel guide",
        "translation": "гід для мандрівників",
        "definition": "a book or person that gives travel advice",
        "sentence1": "We followed a",
        "sentence2": "to find the best places to visit."
      },
      {
        "word": "destination",
        "translation": "місце призначення",
        "definition": "the place you are going to visit",
        "sentence1": "Their next",
        "sentence2": "is Japan — they’re flying tomorrow."
      },
      {
        "word": "nature",
        "translation": "природа",
        "definition": "the natural world: animals, plants, etc.",
        "sentence1": "She studies biology because she loves",
        "sentence2": "and wildlife."
      },
      {
        "word": "exploration",
        "translation": "дослідження",
        "definition": "the act of discovering something new",
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
        "definition": "tools and machines developed to solve problems",
        "sentence1": "",
        "sentence2": "is changing how we shop, travel, and even sleep."
      },
      {
        "word": "smart device",
        "translation": "розумний пристрій",
        "definition": "a gadget that connects and interacts smartly",
        "sentence1": "This",
        "sentence2": "lets me control the lights in my house using my voice."
      },
      {
        "word": "smartphone",
        "translation": "мобільний телефон",
        "definition": "a mobile phone with internet and apps",
        "sentence1": "A",
        "sentence2": "today is more powerful than a computer from 20 years ago."
      },
      {
        "word": "communication",
        "translation": "спілкування",
        "definition": "speaking, texting, or video chatting",
        "sentence1": "Many people rely on",
        "sentence2": "to stay in touch with family and friends."
      },
      {
        "word": "Wi-Fi",
        "translation": "Wi-Fi",
        "definition": "a wireless internet connection",
        "sentence1": "Most restaurants offer free",
        "sentence2": "for customers."
      },
      {
        "word": "mobile data",
        "translation": "мобільні дані",
        "definition": "internet access using mobile networks",
        "sentence1": "His phone uses too much",
        "sentence2": "when streaming videos."
      },
      {
        "word": "video call",
        "translation": "відеодзвінок",
        "definition": "talking face-to-face using internet and camera",
        "sentence1": "You can join the meeting by clicking the link for the",
        "sentence2": "."
      },
      {
        "word": "voice assistant",
        "translation": "голосовий помічник",
        "definition": "a digital helper you talk to",
        "sentence1": "This",
        "sentence2": "lets me play music by saying a command."
      },
      {
        "word": "smart security system",
        "translation": "розумна система безпеки",
        "definition": "devices that protect homes",
        "sentence1": "We installed a",
        "sentence2": "with cameras and alarms."
      },
      {
        "word": "camera",
        "translation": "камера",
        "definition": "a device that takes photos or video",
        "sentence1": "The new phone has a high-quality",
        "sentence2": "with night mode."
      },
      {
        "word": "motion sensor",
        "translation": "сенсор руху",
        "definition": "a sensor that detects movement",
        "sentence1": "My house alarm has a",
        "sentence2": "that turns on when someone walks past."
      },
      {
        "word": "app",
        "translation": "додаток",
        "definition": "a program on a phone or tablet",
        "sentence1": "I downloaded an",
        "sentence2": "that helps me learn languages."
      },
      {
        "word": "cloud storage",
        "translation": "хмарне сховище",
        "definition": "storing files online",
        "sentence1": "I backed up all my photos using",
        "sentence2": "."
      },
      {
        "word": "privacy",
        "translation": "конфіденційність",
        "definition": "protection of personal data",
        "sentence1": "We should always protect our personal data and respect other people’s",
        "sentence2": "."
      },
      {
        "word": "cybersecurity",
        "translation": "кібербезпека",
        "definition": "protection against online threats",
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
        "definition": "your emotional state or feeling",
        "sentence1": "I use music to change my",
        "sentence2": "when I feel tired or sad."
      },
      {
        "word": "relax",
        "translation": "розслаблятись",
        "definition": "to become calm and less stressed",
        "sentence1": "I like to",
        "sentence2": "after work by listening to soft music."
      },
      {
        "word": "classical music",
        "translation": "класична музика",
        "definition": "music by famous composers",
        "sentence1": "I listen to",
        "sentence2": "when I want to calm down and study."
      },
      {
        "word": "pop",
        "translation": "поп",
        "definition": "popular, easy-to-listen music",
        "sentence1": "I usually listen to",
        "sentence2": "music when I want to dance."
      },
      {
        "word": "rock",
        "translation": "рок",
        "definition": "loud and energetic music with guitars",
        "sentence1": "He doesn’t like",
        "sentence2": "music, he thinks it’s too noisy."
      },
      {
        "word": "taste in music",
        "translation": "музичний смак",
        "definition": "the kind of music someone likes",
        "sentence1": "My",
        "sentence2": "changes every day — sometimes I like jazz, sometimes techno."
      },
      {
        "word": "instrumental",
        "translation": "інструментальна (музика)",
        "definition": "music with no singing",
        "sentence1": "Do you prefer songs with words or just",
        "sentence2": "music?"
      },
      {
        "word": "lyrics",
        "translation": "пісенний текст",
        "definition": "the written or sung words of a song",
        "sentence1": "This song’s",
        "sentence2": "are beautiful — they made me cry."
      },
      {
        "word": "playlist",
        "translation": "плейлист",
        "definition": "a list of selected songs",
        "sentence1": "She made a new",
        "sentence2": "of songs for her road trip."
      },
      {
        "word": "artist",
        "translation": "виконавець",
        "definition": "someone who performs or creates music",
        "sentence1": "My favorite",
        "sentence2": "is Adele — her voice is amazing."
      },
      {
        "word": "band",
        "translation": "гурт",
        "definition": "a group of musicians who play together",
        "sentence1": "Coldplay is a famous",
        "sentence2": "that plays around the world."
      },
      {
        "word": "concert",
        "translation": "концерт",
        "definition": "a live music performance",
        "sentence1": "We bought tickets to a live",
        "sentence2": "next Friday night."
      },
      {
        "word": "instrument",
        "translation": "інструмент",
        "definition": "an object used to make music",
        "sentence1": "My sister can play more than one",
        "sentence2": ", including piano and guitar."
      },
      {
        "word": "choir",
        "translation": "хор",
        "definition": "a group of singers",
        "sentence1": "He joined a school",
        "sentence2": "because he loves singing."
      },
      {
        "word": "genre",
        "translation": "жанр",
        "definition": "a type or category of music",
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
        "definition": "speaking, texting, or video chatting",
        "sentence1": "Good",
        "sentence2": "can solve many problems before they get bigger."
      },
      {
        "word": "stay in touch",
        "translation": "залишатися на зв’язку",
        "definition": "to continue contact with someone",
        "sentence1": "We still",
        "sentence2": "even though we live in different countries."
      },
      {
        "word": "face-to-face",
        "translation": "віч-на-віч",
        "definition": "in person, not via phone or text",
        "sentence1": "I prefer",
        "sentence2": "conversations because I can see the person’s reactions."
      },
      {
        "word": "text message",
        "translation": "текстове повідомлення",
        "definition": "a short message sent by phone",
        "sentence1": "He sent a quick",
        "sentence2": "to say he’d be late."
      },
      {
        "word": "email",
        "translation": "електронна пошта",
        "definition": "a digital letter sent over the internet",
        "sentence1": "I don’t like phone calls — I usually write an",
        "sentence2": "."
      },
      {
        "word": "social media",
        "translation": "соціальні мережі",
        "definition": "platforms like Instagram or TikTok",
        "sentence1": "We use",
        "sentence2": "platforms like Instagram and TikTok to share news."
      },
      {
        "word": "body language",
        "translation": "мова тіла",
        "definition": "non-verbal signals like gestures",
        "sentence1": "His",
        "sentence2": "showed he was nervous, even though he smiled."
      },
      {
        "word": "tone of voice",
        "translation": "тон голосу",
        "definition": "the sound or emotion in how you speak",
        "sentence1": "She used a soft",
        "sentence2": "when talking to the children."
      },
      {
        "word": "active listening",
        "translation": "активне слухання",
        "definition": "paying attention and responding thoughtfully",
        "sentence1": "I admire people who practice",
        "sentence2": "instead of interrupting."
      },
      {
        "word": "clear communication",
        "translation": "чітке спілкування",
        "definition": "when a message is easy to understand",
        "sentence1": "Strong",
        "sentence2": "is key for teamwork and good results."
      },
      {
        "word": "give feedback",
        "translation": "давати зворотний зв'язок",
        "definition": "to say what someone did well or should improve",
        "sentence1": "The teacher asked us to",
        "sentence2": "to each other after the group task."
      },
      {
        "word": "ask questions",
        "translation": "ставити запитання",
        "definition": "to politely request more information",
        "sentence1": "It’s important to",
        "sentence2": "if something isn’t clear."
      },
      {
        "word": "make small talk",
        "translation": "світська бесіда",
        "definition": "light conversation, often with strangers",
        "sentence1": "During interviews, it helps to",
        "sentence2": "about hobbies or the weather."
      },
      {
        "word": "presentation",
        "translation": "презентація",
        "definition": "a formal talk to an audience",
        "sentence1": "She gave a great",
        "sentence2": "at the meeting about the new project."
      },
      {
        "word": "communicator",
        "translation": "комунікатор",
        "definition": "someone skilled at sharing ideas clearly",
        "sentence1": "A true",
        "sentence2": "listens carefully and speaks clearly."
      }
    ]
  },
  {
    "name": "Education 1",
    "title": "Education is the key",
    "text": "Lina always loved learning. At primary school, she enjoyed reading stories. In secondary school, she studied math, science, and history, but her favorite subject was English. Her teachers encouraged her to think critically and ask questions. Now she’s at university, studying education. She wants to become a teacher and improve how children learn. She believes in skills-based teaching, not just exams. Her course includes theory, practice, and critical thinking. Lina is also taking online courses in child psychology and inclusive education. She often writes essays and gives presentations in class. Her goal is to build confidence and teamwork in her future students. To her, education is not just about facts — it’s about helping others grow.",
    "words": [
      {
        "word": "education",
        "translation": "освіта",
        "definition": "the process of learning and teaching",
        "sentence1": "__________",
        "sentence2": "helps people learn, grow, and develop."
      },
      {
        "word": "primary school",
        "translation": "початкова школа",
        "definition": "a place where children aged 6–11 learn",
        "sentence1": "In",
        "sentence2": ", students are 6 to 11 years old."
      },
      {
        "word": "secondary school",
        "translation": "середня школа",
        "definition": "school for students aged 12–18",
        "sentence1": "Before university, I studied at a local",
        "sentence2": "."
      },
      {
        "word": "subject",
        "translation": "шкільний предмет",
        "definition": "something you learn in school like math or art",
        "sentence1": "This year, I’ll study a new",
        "sentence2": "— geography."
      },
      {
        "word": "math",
        "translation": "математика",
        "definition": "understanding numbers and calculations",
        "sentence1": "We learned new formulas in our",
        "sentence2": "lesson today."
      },
      {
        "word": "science",
        "translation": "природничі науки",
        "definition": "the study of the world and nature through experiments",
        "sentence1": "She enjoyed doing experiments in",
        "sentence2": "class."
      },
      {
        "word": "history",
        "translation": "історія",
        "definition": "the study of past events",
        "sentence1": "I love learning about the past in my",
        "sentence2": "class."
      },
      {
        "word": "teacher",
        "translation": "вчитель",
        "definition": "someone who helps others learn",
        "sentence1": "Our",
        "sentence2": "asked great questions and made us think."
      },
      {
        "word": "skills",
        "translation": "навички",
        "definition": "useful ability like writing or teamwork",
        "sentence1": "You need strong communication",
        "sentence2": "to work in teams."
      },
      {
        "word": "exams",
        "translation": "іспити",
        "definition": "a test to measure knowledge",
        "sentence1": "We take our final",
        "sentence2": "in June every year."
      },
      {
        "word": "course",
        "translation": "курс",
        "definition": "a series of lessons on a topic",
        "sentence1": "I’m taking an online",
        "sentence2": "about psychology."
      },
      {
        "word": "theory",
        "translation": "теорія",
        "definition": "learning facts and ideas without practice",
        "sentence1": "The course includes both",
        "sentence2": "and hands-on activities."
      },
      {
        "word": "practice",
        "translation": "практика",
        "definition": "learning by doing something",
        "sentence1": "We did a lot of",
        "sentence2": "in the lab with real tools."
      },
      {
        "word": "critical thinking",
        "translation": "критичне мислення",
        "definition": "the ability to analyze and evaluate ideas",
        "sentence1": "You must use",
        "sentence2": "when solving complex problems."
      },
      {
        "word": "presentation",
        "translation": "презентація",
        "definition": "a spoken or visual talk on a topic",
        "sentence1": "The final",
        "sentence2": "was about climate change and lasted 20 minutes."
      }
    ]
  },
  {
    "name": "Weather 1",
    "title": "Talking About the Weather",
    "text": "Tom is obsessed with the weather. Every morning, he checks the forecast and writes down the temperature. He dreams of becoming a meteorologist. He likes all types of weather — sunny, cloudy, even rainy. In winter, he goes outside to photograph snowy landscapes. He wears a thick coat and warm boots. In summer, he puts on sunglasses and enjoys hot, dry afternoons. Last year, he visited Scotland, where the weather changed quickly. One minute it was windy, the next foggy. He learned how important weather is for travel, farming, and safety. Tom believes each season brings something special, and understanding the weather helps us connect with nature.",
    "words": [
      {
        "word": "weather",
        "translation": "погода",
        "definition": "daily conditions of the atmosphere",
        "sentence1": "The",
        "sentence2": "changes almost every day."
      },
      {
        "word": "forecast",
        "translation": "прогноз погоди",
        "definition": "a report predicting future weather",
        "sentence1": "The",
        "sentence2": "said it would be cold and wet tomorrow."
      },
      {
        "word": "temperature",
        "translation": "температура",
        "definition": "the degree of heat or cold in the air",
        "sentence1": "In summer, the",
        "sentence2": "can rise above 35°C."
      },
      {
        "word": "sunny",
        "translation": "сонячний",
        "definition": "full of sun and light",
        "sentence1": "It’s too warm for a jacket today — the weather is really",
        "sentence2": "."
      },
      {
        "word": "cloudy",
        "translation": "похмурий",
        "definition": "cloudy and dark, no sunshine",
        "sentence1": "It might rain — the sky looks very",
        "sentence2": "."
      },
      {
        "word": "rainy",
        "translation": "дощовий",
        "definition": "when water falls from the sky",
        "sentence1": "Children love jumping in puddles on",
        "sentence2": "days."
      },
      {
        "word": "snowy",
        "translation": "сніжний",
        "definition": "falling frozen white flakes",
        "sentence1": "Skiing is my favorite activity when it’s cold and",
        "sentence2": "."
      },
      {
        "word": "hot",
        "translation": "спекотний",
        "definition": "warm and often uncomfortable",
        "sentence1": "It’s",
        "sentence2": "outside — don’t forget water."
      },
      {
        "word": "dry",
        "translation": "сухий",
        "definition": "not wet or humid",
        "sentence1": "The Sahara is one of the most",
        "sentence2": "places on Earth."
      },
      {
        "word": "windy",
        "translation": "вітряний",
        "definition": "strong movement of air",
        "sentence1": "My hair gets messy every time it’s",
        "sentence2": "outside."
      },
      {
        "word": "foggy",
        "translation": "туманний",
        "definition": "cloudy air near the ground, hard to see through",
        "sentence1": "When it’s",
        "sentence2": ", it’s hard to see the road while driving."
      },
      {
        "word": "coat",
        "translation": "зимовий плащ",
        "definition": "a clothing item to keep warm in winter",
        "sentence1": "A warm",
        "sentence2": "is essential in winter."
      },
      {
        "word": "sunglasses",
        "translation": "сонцезахисні окуляри",
        "definition": "protective glasses worn in bright light",
        "sentence1": "I always wear my",
        "sentence2": "when the sun is bright."
      },
      {
        "word": "season",
        "translation": "сезон",
        "definition": "a period of the year with its own climate (e.g. winter)",
        "sentence1": "Spring is my favorite",
        "sentence2": "because everything starts to bloom."
      },
      {
        "word": "nature",
        "translation": "природа",
        "definition": "natural world including plants and animals",
        "sentence1": "I love walking in the forest and enjoying the beauty of",
        "sentence2": "."
      }
    ]
  },
  {
    "name": "Programming 1",
    "title": "Getting Started with Programming",
    "text": "Sasha started learning programming during lockdown. At first, she just wanted to build a website. But then she discovered Python and became fascinated by code. She watched tutorials, built functions, created variables, and made her first app. She used if-statements, loops, and even worked with databases. When she got stuck, she searched online or asked other developers. She also joined a forum and learned how to debug a tricky bug. Her favorite part? Designing the user interface so people could interact easily. Now she’s learning JavaScript to build more advanced features. She says coding isn’t about knowing everything — it’s about using logic and creativity to solve problems.",
    "words": [
      {
        "word": "programming",
        "translation": "програмування",
        "definition": "writing instructions to make a computer do something",
        "sentence1": "I started learning",
        "sentence2": "because I wanted to build websites."
      },
      {
        "word": "code",
        "translation": "код",
        "definition": "instructions written for a computer to follow",
        "sentence1": "I love writing clear and simple",
        "sentence2": "that others can read."
      },
      {
        "word": "function",
        "translation": "функція",
        "definition": "a reusable block of code that does something",
        "sentence1": "A good developer always tests each",
        "sentence2": "before launching the project."
      },
      {
        "word": "variable",
        "translation": "змінна",
        "definition": "a named storage for data like a number or text",
        "sentence1": "A(n)",
        "sentence2": "lets you store different values like names or numbers."
      },
      {
        "word": "bug",
        "translation": "баг / помилка",
        "definition": "an error or problem in your code",
        "sentence1": "My code didn’t work — there was a small",
        "sentence2": "in line 23."
      },
      {
        "word": "debugging",
        "translation": "відлагодження",
        "definition": "fixing problems in the code",
        "sentence1": "We spent hours",
        "sentence2": "to find out why the form didn’t submit."
      },
      {
        "word": "loop",
        "translation": "цикл",
        "definition": "repeating an action until a condition is met",
        "sentence1": "I used a simple",
        "sentence2": "to repeat the same action 10 times."
      },
      {
        "word": "if-statement",
        "translation": "умовне твердження (if)",
        "definition": "a decision-making part of code",
        "sentence1": "If the password is correct, the",
        "sentence2": "runs the login screen."
      },
      {
        "word": "database",
        "translation": "база даних",
        "definition": "a place to store and manage data",
        "sentence1": "We store all the user data in a secure",
        "sentence2": "."
      },
      {
        "word": "Python",
        "translation": "мова Python",
        "definition": "a popular programming language for many purposes",
        "sentence1": "In this course, we use",
        "sentence2": "to build backend applications."
      },
      {
        "word": "JavaScript",
        "translation": "мова JavaScript",
        "definition": "a language for websites and interactivity",
        "sentence1": "You can build interactive websites using",
        "sentence2": "."
      },
      {
        "word": "user interface",
        "translation": "користувацький інтерфейс",
        "definition": "the visible part of a program users interact with",
        "sentence1": "A good",
        "sentence2": "makes a program easy to use for people."
      },
      {
        "word": "logic",
        "translation": "логіка",
        "definition": "thinking clearly and solving problems step by step",
        "sentence1": "I enjoy solving problems using",
        "sentence2": "and creativity."
      },
      {
        "word": "developer",
        "translation": "розробник",
        "definition": "someone who writes code professionally",
        "sentence1": "My friend is a mobile",
        "sentence2": "— she created a fitness tracker."
      },
      {
        "word": "app",
        "translation": "застосунок (додаток)",
        "definition": "a program designed for phones, tablets, or web",
        "sentence1": "Every app is made up of many parts: buttons, screens, and",
        "sentence2": "."
      }
    ]
  },
  {
    "name": "Fashion 2",
    "title": "Timeless Style and Modern Fashion",
    "text": "Nora works as a fashion writer. Every season, she attends fashion weeks to report on new collections. She interviews designers, photographs the runway, and explores how trends change. This year, she noticed a return to timeless pieces — neutral colors, simple textures, and classic patterns. Many brands focused on ethical production and recycling. Accessories like scarves, belts, and jewelry added character to every outfit. Nora believes that fashion is more than clothes. It’s about storytelling. It’s how people express identity, values, and history through what they wear.",
    "words": [
      {
        "word": "fashion",
        "translation": "мода",
        "definition": "the industry and culture of clothing and style",
        "sentence1": "I love",
        "sentence2": ", but I try to shop from small, ethical labels."
      },
      {
        "word": "designer",
        "translation": "дизайнер",
        "definition": "a person who creates clothing or accessories",
        "sentence1": "He studied to become a",
        "sentence2": "and now creates his own clothing line."
      },
      {
        "word": "fashion week",
        "translation": "тиждень моди",
        "definition": "shows of new clothing by top brands",
        "sentence1": "At Paris",
        "sentence2": ", top brands show their latest ideas."
      },
      {
        "word": "collection",
        "translation": "колекція",
        "definition": "a group of clothes shown as one set",
        "sentence1": "The new spring",
        "sentence2": "features pastel colors and light fabrics."
      },
      {
        "word": "runway",
        "translation": "подіум",
        "definition": "the long stage where models walk during fashion shows",
        "sentence1": "They walked down the",
        "sentence2": "wearing dramatic black coats."
      },
      {
        "word": "trend",
        "translation": "тренд",
        "definition": "the current popular style or look",
        "sentence1": "This year’s biggest",
        "sentence2": "is wearing sneakers with formal clothes."
      },
      {
        "word": "timeless",
        "translation": "вічний / поза часом",
        "definition": "not affected by time, always in style",
        "sentence1": "I prefer a",
        "sentence2": "look — something that never goes out of style."
      },
      {
        "word": "texture",
        "translation": "текстура",
        "definition": "something that feels rough, soft, smooth, etc.",
        "sentence1": "His clothes mix smooth and rough",
        "sentence2": "for a unique feel."
      },
      {
        "word": "pattern",
        "translation": "візерунок",
        "definition": "repeated design (like stripes or flowers)",
        "sentence1": "This bag has a lovely floral",
        "sentence2": "that matches the dress."
      },
      {
        "word": "scarf",
        "translation": "шарф",
        "definition": "a stylish cloth worn around the neck",
        "sentence1": "A checked",
        "sentence2": "can make a simple outfit feel complete."
      },
      {
        "word": "belt",
        "translation": "пояс",
        "definition": "a strap worn around the waist",
        "sentence1": "Her wide leather",
        "sentence2": "makes her waist look smaller."
      },
      {
        "word": "jewelry",
        "translation": "прикраса / коштовність",
        "definition": "shiny or decorative items worn for beauty",
        "sentence1": "She always wears one special",
        "sentence2": "— a gold necklace from her grandmother."
      },
      {
        "word": "accessory",
        "translation": "аксесуар",
        "definition": "an item added to improve appearance or function",
        "sentence1": "A bright red handbag is her favorite",
        "sentence2": "."
      },
      {
        "word": "recycling",
        "translation": "переробка (рециклінг)",
        "definition": "using old materials to create new products",
        "sentence1": "This jacket is made from old jeans as part of a",
        "sentence2": "project."
      },
      {
        "word": "ethical",
        "translation": "етичний",
        "definition": "actions and products made with fairness and care",
        "sentence1": "More brands now focus on",
        "sentence2": "production, not harming people or the planet."
      }
    ]
  },
  {
    "name": "Finance 1",
    "title": "Smart with Money: Understanding Finance",
    "text": "Oleh never thought much about finance — until he moved out. Suddenly, he had to track his income, control his expenses, and stick to a budget. He opened a bank account, started a savings plan, and used apps to manage money. He learned that credit cards offer convenience, but also bring interest and debt. Now he reads about stocks, investments, and real estate. His friend even explained financial literacy — how to make smart decisions with money. Oleh still enjoys small treats, but now he understands the value of planning. Finance, he says, is about freedom and peace of mind.",
    "words": [
      {
        "word": "finance",
        "translation": "фінанси",
        "definition": "financial system or study of money management",
        "sentence1": "",
        "sentence2": "is about freedom and peace of mind."
      },
      {
        "word": "income",
        "translation": "прибуток / дохід",
        "definition": "money received (e.g. from a job)",
        "sentence1": "His",
        "sentence2": "comes from a part-time job and tutoring."
      },
      {
        "word": "expenses",
        "translation": "витрати",
        "definition": "total cost of things you spend money on",
        "sentence1": "I track my",
        "sentence2": "in a spreadsheet to see where my money goes."
      },
      {
        "word": "budget",
        "translation": "бюджет",
        "definition": "organized money plan for spending and saving",
        "sentence1": "He created a monthly",
        "sentence2": "to avoid overspending."
      },
      {
        "word": "bank",
        "translation": "банк",
        "definition": "a financial institution for holding money",
        "sentence1": "Maria opened a",
        "sentence2": "account to keep her money safe."
      },
      {
        "word": "savings",
        "translation": "заощадження",
        "definition": "small amounts of money kept for the future",
        "sentence1": "We started putting money into",
        "sentence2": "for emergencies."
      },
      {
        "word": "credit card",
        "translation": "кредитна картка",
        "definition": "borrowing tool that lets you buy now, pay later",
        "sentence1": "They used a",
        "sentence2": "to buy a laptop and paid it off in three months."
      },
      {
        "word": "interest",
        "translation": "відсоток (на кредит)",
        "definition": "extra money you pay when you borrow money",
        "sentence1": "They took out a loan with 8%",
        "sentence2": "."
      },
      {
        "word": "debt",
        "translation": "борг",
        "definition": "money you owe to others or institutions",
        "sentence1": "It's easy to fall into",
        "sentence2": "if you spend more than you earn."
      },
      {
        "word": "stocks",
        "translation": "акції",
        "definition": "parts of a company you can buy and trade",
        "sentence1": "You can lose or gain money when buying and selling",
        "sentence2": "."
      },
      {
        "word": "investment",
        "translation": "інвестиція",
        "definition": "putting money into something to earn more later",
        "sentence1": "I made my first",
        "sentence2": "in a company that makes solar panels."
      },
      {
        "word": "real estate",
        "translation": "нерухомість",
        "definition": "owning buildings or land as an investment",
        "sentence1": "Buying an apartment is considered a long-term",
        "sentence2": "."
      },
      {
        "word": "financial literacy",
        "translation": "фінансова грамотність",
        "definition": "knowledge about how to use and manage money",
        "sentence1": "She’s learning about",
        "sentence2": "so she can manage her future well."
      },
      {
        "word": "money",
        "translation": "гроші",
        "definition": "general word for cash, coins, currency",
        "sentence1": "Learning how to manage",
        "sentence2": "should be taught in every school."
      },
      {
        "word": "plan",
        "translation": "план",
        "definition": "a detailed future goal for money use",
        "sentence1": "We sat down together and made a financial",
        "sentence2": "for the next year."
      }
    ]
  },
  {
    "name": "Politics 1",
    "title": "Voices of Change: Understanding Politics Today",
    "text": "In her final year of university, Daria took a course on politics. She learned how governments work, who creates laws, and how elections are organized. They discussed the role of presidents, parliaments, and ministers. The class often debated freedom, rights, taxes, and public responsibility. Daria was especially interested in democracy and how citizens can create change. One day, she joined a peaceful protest for climate action. Now she reads political news daily and encourages friends to vote. Politics, she believes, isn’t boring — it’s how we shape the world we live in.",
    "words": [
      {
        "word": "politics",
        "translation": "політика",
        "definition": "activities related to governing a country or area",
        "sentence1": "Many young people are getting interested in",
        "sentence2": "and civic life."
      },
      {
        "word": "government",
        "translation": "уряд",
        "definition": "the group of people who control a country",
        "sentence1": "The",
        "sentence2": "plays an important role in running the country."
      },
      {
        "word": "law",
        "translation": "закон",
        "definition": "a rule made by a government",
        "sentence1": "The new",
        "sentence2": "was passed to protect online privacy."
      },
      {
        "word": "election",
        "translation": "вибори",
        "definition": "an event where people vote to choose leaders",
        "sentence1": "In a",
        "sentence2": ", people choose their leaders by voting."
      },
      {
        "word": "president",
        "translation": "президент",
        "definition": "the leader of a country",
        "sentence1": "The",
        "sentence2": "gave a speech about education reform."
      },
      {
        "word": "parliament",
        "translation": "парламент",
        "definition": "a group of people who make laws",
        "sentence1": "The",
        "sentence2": "creates and changes national laws."
      },
      {
        "word": "minister",
        "translation": "міністр",
        "definition": "a government official in charge of a department",
        "sentence1": "My uncle is a",
        "sentence2": "— he manages health care for the country."
      },
      {
        "word": "citizen",
        "translation": "громадянин",
        "definition": "someone who belongs to a country and has rights",
        "sentence1": "She became a",
        "sentence2": "last year and voted for the first time."
      },
      {
        "word": "right",
        "translation": "право",
        "definition": "a legal or natural ability to do something",
        "sentence1": "Every adult has the",
        "sentence2": "to express their opinion."
      },
      {
        "word": "freedom",
        "translation": "свобода",
        "definition": "the ability to act or speak freely",
        "sentence1": "In some places,",
        "sentence2": "is limited, and people can’t speak freely."
      },
      {
        "word": "tax",
        "translation": "податок",
        "definition": "money paid to the government for public services",
        "sentence1": "Our government collects money from workers through income",
        "sentence2": "."
      },
      {
        "word": "protest",
        "translation": "протест",
        "definition": "a public show of disagreement or demand for change",
        "sentence1": "Students organized a peaceful",
        "sentence2": "about environmental issues."
      },
      {
        "word": "democracy",
        "translation": "демократія",
        "definition": "a system where people vote for their leaders",
        "sentence1": "People showed support for the",
        "sentence2": "by putting signs in their windows."
      },
      {
        "word": "responsibility",
        "translation": "обов’язок",
        "definition": "something you should do because it is right",
        "sentence1": "In many countries, voting is not just a right, it's a",
        "sentence2": "."
      },
      {
        "word": "vote",
        "translation": "голосувати",
        "definition": "to choose someone or something in an election",
        "sentence1": "You must register to",
        "sentence2": "before the deadline."
      }
    ]
  },
  {
    "name": "Animals 1",
    "title": "Caring for Pets and Wild Animals",
    "text": "Ihor volunteers at an animal shelter. Every morning, he feeds the cats, walks the dogs, and checks on the hamsters. He loves spending time with pets, but he also cares deeply about wild animals. He once travelled to Kenya and saw zebras and penguins in nature reserves. Back home, he teaches children about endangered species and the importance of conservation. He believes every animal, whether it’s a farm animal like a cow or a chicken, deserves care and respect.",
    "words": [
      {
        "word": "animal",
        "translation": "тварина",
        "definition": "a living thing that moves and breathes",
        "sentence1": "Dogs are often called the most loyal",
        "sentence2": "."
      },
      {
        "word": "cat",
        "translation": "кіт",
        "definition": "a furry animal that meows",
        "sentence1": "A lost",
        "sentence2": "was found and returned to its owner."
      },
      {
        "word": "dog",
        "translation": "собака",
        "definition": "a four-legged pet known for loyalty",
        "sentence1": "I’ve always wanted a pet as a friend — especially a",
        "sentence2": "."
      },
      {
        "word": "hamster",
        "translation": "хом’як",
        "definition": "a small pet that runs in a wheel",
        "sentence1": "She has a small",
        "sentence2": "that runs in a wheel all day."
      },
      {
        "word": "pet",
        "translation": "домашній улюбленець",
        "definition": "a friendly animal kept at home",
        "sentence1": "Our family adopted a",
        "sentence2": "from the local shelter."
      },
      {
        "word": "wild animal",
        "translation": "дика тварина",
        "definition": "an animal living freely in nature",
        "sentence1": "Tigers, lions, and bears are examples of a",
        "sentence2": "."
      },
      {
        "word": "zebra",
        "translation": "зебра",
        "definition": "a striped wild animal from Africa",
        "sentence1": "A",
        "sentence2": "has stripes and lives in Africa."
      },
      {
        "word": "penguin",
        "translation": "пінгвін",
        "definition": "a black and white bird that slides on ice",
        "sentence1": "During our trip to Antarctica, we saw a",
        "sentence2": "slide on the ice."
      },
      {
        "word": "endangered species",
        "translation": "зникаючий вид",
        "definition": "animals at risk of disappearing",
        "sentence1": "Many",
        "sentence2": "like elephants and rhinos are at risk of extinction."
      },
      {
        "word": "conservation",
        "translation": "збереження природи",
        "definition": "protecting animals and nature",
        "sentence1": "They support",
        "sentence2": "efforts to protect animals in the wild."
      },
      {
        "word": "farm animal",
        "translation": "фермерська тварина",
        "definition": "an animal raised on a farm",
        "sentence1": "The farmer takes care of many",
        "sentence2": "like sheep and goats."
      },
      {
        "word": "cow",
        "translation": "корова",
        "definition": "a large farm animal that gives milk",
        "sentence1": "The children visited a farm and saw a",
        "sentence2": "being milked."
      },
      {
        "word": "chicken",
        "translation": "курка",
        "definition": "a farm bird that lays eggs",
        "sentence1": "My grandmother keeps",
        "sentence2": "in her backyard for eggs."
      },
      {
        "word": "shelter",
        "translation": "притулок",
        "definition": "a place that protects homeless animals",
        "sentence1": "Our family adopted a cat from the local",
        "sentence2": "."
      },
      {
        "word": "nature",
        "translation": "природа",
        "definition": "forests, rivers, and the natural world",
        "sentence1": "A healthy planet needs clean air, water, and safe",
        "sentence2": "for animals."
      }
    ]
  },
  {
    "name": "University 1",
    "title": "Campus Days: Life at University",
    "text": "Anya studies biology at university. Her schedule is packed with lectures, labs, and late-night study sessions. She lives in a shared dormitory on campus and has made friends through student clubs. Tuition isn’t cheap, so she works a part-time job and applies for scholarships. She’s writing a final essay for her degree and preparing for exams. Despite the pressure, Anya enjoys her university life. It’s helping her build independence, responsibility, and skills she’ll use long after graduation.",
    "words": [
      {
        "word": "university",
        "translation": "університет",
        "definition": "a place of higher learning after high school",
        "sentence1": "He hopes to study abroad next year at a different",
        "sentence2": "."
      },
      {
        "word": "lecture",
        "translation": "лекція",
        "definition": "a regular class where a teacher explains a topic",
        "sentence1": "Every Friday, we have a long",
        "sentence2": "in history."
      },
      {
        "word": "study",
        "translation": "навчатися",
        "definition": "to prepare and learn for school or exams",
        "sentence1": "Our next exam is on Monday, so I need to",
        "sentence2": "this weekend."
      },
      {
        "word": "exam",
        "translation": "іспит",
        "definition": "a test of knowledge, often at the end of a term",
        "sentence1": "Our next",
        "sentence2": "is on Monday, so I need to study this weekend."
      },
      {
        "word": "essay",
        "translation": "есе",
        "definition": "a written assignment that explores a topic",
        "sentence1": "I’m writing an",
        "sentence2": "about global warming for English class."
      },
      {
        "word": "dormitory",
        "translation": "гуртожиток",
        "definition": "where students live while studying",
        "sentence1": "She was excited to move into the",
        "sentence2": "and meet her roommates."
      },
      {
        "word": "campus",
        "translation": "університетське містечко",
        "definition": "the place where university buildings are located",
        "sentence1": "We often meet in the",
        "sentence2": "café between classes."
      },
      {
        "word": "student club",
        "translation": "студентський клуб",
        "definition": "an organized activity group for students",
        "sentence1": "I joined a",
        "sentence2": "for photography and made lots of friends."
      },
      {
        "word": "part-time job",
        "translation": "часткова зайнятість",
        "definition": "work done during free hours while still studying",
        "sentence1": "Many students work a",
        "sentence2": "to help pay their tuition."
      },
      {
        "word": "tuition",
        "translation": "плата за навчання",
        "definition": "money paid for education",
        "sentence1": "Many students work a part-time job to help pay their",
        "sentence2": "."
      },
      {
        "word": "degree",
        "translation": "диплом, ступінь",
        "definition": "a degree earned after completing university study",
        "sentence1": "After four years of hard work, he finally earned his",
        "sentence2": "."
      },
      {
        "word": "independence",
        "translation": "самостійність",
        "definition": "being able to live and decide things on your own",
        "sentence1": "Living alone teaches you",
        "sentence2": "and how to manage your time."
      },
      {
        "word": "responsibility",
        "translation": "відповідальність",
        "definition": "something you are expected to do or manage well",
        "sentence1": "Taking care of meals and money is part of adult",
        "sentence2": "."
      },
      {
        "word": "scholarship",
        "translation": "стипендія",
        "definition": "money given to students to support their studies",
        "sentence1": "She received a full",
        "sentence2": "because of her excellent grades."
      },
      {
        "word": "lab",
        "translation": "лабораторія",
        "definition": "a room or building used for scientific experiments",
        "sentence1": "Chemistry students spend hours each week in the",
        "sentence2": "."
      }
    ]
  },
  {
    "name": "Health 1",
    "title": "Whole-Body Wellness: Building a Healthy Life",
    "text": "Mark got sick last year, and it changed how he sees health. He now eats more vegetables, drinks water, and exercises regularly. He goes to the doctor for check-ups, takes medicine when needed, and gets his vaccines on time. But he also learned that mental health matters. He talked to a therapist when he felt anxious, and now practices relaxation to deal with stress. He keeps good hygiene habits, avoids too much sugar and fat, and believes in balance. For him, being healthy means caring for your whole self — body and mind.",
    "words": [
      {
        "word": "health",
        "translation": "здоров’я",
        "definition": "a general state of physical and mental well-being",
        "sentence1": "She believes that",
        "sentence2": "is not just about the body but also about the mind."
      },
      {
        "word": "doctor",
        "translation": "лікар",
        "definition": "a professional who helps people stay well or recover",
        "sentence1": "She goes to the",
        "sentence2": "once a year for a full check-up."
      },
      {
        "word": "check-up",
        "translation": "огляд",
        "definition": "a medical visit to see if you're healthy",
        "sentence1": "She goes to the doctor once a year for a full",
        "sentence2": "."
      },
      {
        "word": "medicine",
        "translation": "ліки",
        "definition": "pills or syrup that help treat illness",
        "sentence1": "After the flu, the doctor gave him some",
        "sentence2": "to recover faster."
      },
      {
        "word": "vaccine",
        "translation": "вакцина",
        "definition": "an injection that protects against disease",
        "sentence1": "A",
        "sentence2": "helps your body fight dangerous viruses."
      },
      {
        "word": "mental health",
        "translation": "психічне здоров’я",
        "definition": "emotional and psychological well-being",
        "sentence1": "Sleep, nutrition, and calm help maintain good",
        "sentence2": "."
      },
      {
        "word": "stress",
        "translation": "стрес",
        "definition": "unwanted emotional pressure or worry",
        "sentence1": "Stress is often caused by work overload or too much noise.",
        "sentence2": ""
      },
      {
        "word": "anxiety",
        "translation": "тривожність",
        "definition": "low or nervous emotional condition",
        "sentence1": "He had",
        "sentence2": "before his public speech and felt nervous."
      },
      {
        "word": "hygiene",
        "translation": "гігієна",
        "definition": "good habits like handwashing and cleanliness",
        "sentence1": "Clean hands and proper",
        "sentence2": "prevent many illnesses."
      },
      {
        "word": "sugar",
        "translation": "цукор",
        "definition": "sweet substance found in candy and soda",
        "sentence1": "Some snacks are full of",
        "sentence2": "and should be eaten less often."
      },
      {
        "word": "fat",
        "translation": "жир",
        "definition": "substance in fried or processed foods",
        "sentence1": "Fast food often contains too much",
        "sentence2": ", which can be harmful."
      },
      {
        "word": "vegetables",
        "translation": "овочі",
        "definition": "a nutrient from plants like broccoli and lettuce",
        "sentence1": "Eating",
        "sentence2": "like carrots and spinach helps your body stay strong."
      },
      {
        "word": "exercise",
        "translation": "вправи",
        "definition": "moving your body to improve health",
        "sentence1": "Regular",
        "sentence2": "like walking or cycling keeps your heart healthy."
      },
      {
        "word": "water",
        "translation": "вода",
        "definition": "clear liquid your body needs to stay hydrated",
        "sentence1": "It’s important to drink enough",
        "sentence2": "during the day, especially in summer."
      },
      {
        "word": "balance",
        "translation": "баланс",
        "definition": "the right amount of work, rest, food, and activity",
        "sentence1": "You should always look for",
        "sentence2": "in what you eat and how you live."
      }
    ]
  }
]`
}
