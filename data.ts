import { AssignmentType } from "./types";
import nyc from "@/images//nyc.jpg";
import Mano from "@/images/Mano.jpg";

export const assignments: AssignmentType[] = [
  {
    id: "1",
    name: "Tanışma",
    prompt: `Yazma görevi: Kendinizi tanıtan bir metin yazın. ( Adınız, yaşınız, bölümünüz, araştırmalarınız, Türkçe öğrenme nedenleriniz hakkında yazın.)
Konuşma görevi: Arkadaşınızla ilgilendiğiniz bir sanat dalı hakkında konuşun. Bu alanda çalışmaya ne zaman başladınız, bu alana nasıl ilgi duydunuz, geçmişte neler yaptınız, şimdi neler yapıyorsunuz, ve ilginç bir anınız gibi noktalara değinin. `,
    title: "Kimim?",
    text: `Adım Emir. Türk asıllı Bulgaristanlıyım. Bu yıl Yale’da birinci sınıftayım. Önümüzdeki yıllarda Davenport Koleji’nde kalacağım ama bu yıl ana kampüste kalıyorum.
Bilgisayar Bilimleri bölümünde okuyorum. Ayrıca ikinci bir anadal yapmak istiyorum ama henüz tam olarak ne istediğimi bilmiyorum. Şimdilik bir araştırma üzerinde çalışmıyorum ama geçen dönem Veri Bilimi hocama bir projede yardım ettim. Bu dönem bir de Türkçe dersi alıyorum çünkü Türkiye'deki akrabalarımla daha çok konuşmak istediğim için Türkçemi geliştirmek istiyorum. Ayrıca etnik olarak Türk olduğum için kendimi Türk kültürüne daha yakın hissetmek istiyorum.
Bu dönem bir araştırma yapmazsam kampüste bir iş bulmak istiyorum. Ayrıca, boş zamanlarımda beste yapmayı seviyorum. Yakında bazı parçalarımı Spotify’a yüklemeye başlayacağım.
`,
    images: [nyc, Mano],
    center: false,
    audioUrl:
      "https://drive.google.com/file/d/1avLpY2G2MyfMUYZPiiOm4il8xGo_IQ6_/view?usp=sharing",
  },
  {
    id: "2",
    prompt: `Yazma görevi: Filmlerini bildiğiniz bir yönetmenin biyografisini yazın. 
Konuşma görevi: Konuşma partnerinizle Türk sineması hakkında konuşun. İzlediğiniz filmlerden ve Nuri Bilge Ceylan'dan bahsedin. `,
    name: "Nuri Bilge Ceylan",
    title: "Ivan Andonov",
    text: `Bulgar yönetmen ve oyuncu İvan Andonov, 3 Mayıs 1934’da Filibe’de dünyaya geldi. Andonov Ulusal Tiyatro ve Film Sanatları Akademisi'nde oyunculuk eğitimi aldı ve ilk büyük rolünü 1957'de kazandı. Oyuncukla devam ederken  yönetmencik tutkusunu keşfeden Andonov, 1963'da ilk animasyon filmi "Manzara" ile sinema dünyasına adım attı. Ancak ilk uzun metrajlı filmi “Zor Aşk”ı çekmesi 11 yıl sürdü! Bu film onun kariyerinde bir dönüm noktası oldu ve yetenekli yönetmen kısa sürede Bulgaristan’da adını duyurdu. “Kadınlar Davet Ediyor”, “Tehlikeli Cazibe” ve “Dün” gibi filmleriyle adını duyuran Andonov, Bulgar sinemasının en önemli isimlerinden biri olmuştur ve birçok prestijli ödül kazanmıştır.
`,
    images: [
      "https://images.videoclip.bg/Img/Thumbs/492483_97_preview.jpeg",
      "https://static.bnr.bg/gallery/cr/medium/e17c65d9ce26db45aea7e6c279820315.jpg",
      "https://m.media-amazon.com/images/M/MV5BM2QxMGZlMmItMTY3MS00ZGQ2LThlMmEtYjBiNDZlOGJmZGNiXkEyXkFqcGc@._V1_.jpg",
      "https://www.flashnews.bg/wp-content/uploads/2020/01/VCHERA-FILM4.jpg",
    ],
    center: false,
    audioUrl:
      "https://drive.google.com/file/d/1GdOSWWN46kCpRgv1xkraRsZqlOVUTGmz/view?usp=sharing",
  },
  {
    id: "3",
    prompt: `Yazma: 31 Ocak Cuma günü hakkında bir günlük yazısı yazın. Yazınıza gününüzü özetleyen bir çizim, resim ya da müzik ekleyin. Neden bu eseri seçtiğinizi bir cümleyle açıklayın. 
Konuşma: Konuşma partnerinizle bu hafta Orhan Pamuk hakkında öğrendiğiniz şeyleri paylaşın. Diyaloğunuzda yazarın notlarındaki ve çizimlerindeki detaylardan bahsedin. `,
    name: "Uzak Dağlar ve Hatıralar",
    title: "31 Ocak Cuma günüm (şimdilik)",
    text: `Bu haftaki alışkanlıklarıma göre bugün günlüğümü çok erken yazmaya başlıyorum. Şimdi saat 5:06 ve bu ana kadar bugün biraz heyecansız gidiyor. Bu haftaki her gün gibi geç kalktım ama bu sabah kahvaltı için vaktim vardı. Pierson’da kahvaltı yaptım ve sonra Davenport’un ana odasında piyano çaldım. Oradayken Nepal’dan arkadaşım Monu’yu gördüm ve haftamız ve yaz planlarımız için konuştuk. 
Az sonra onunla ve yurt arkadaşlarım Filipp ve Elias ile öğlen yemeği yedik ve dağcılık için konuştuk. Kodlama dersinden sonra arkadaşım Ayla ile beraber portföyümüz için konuşma görevini kaydettik. Daha sonra annem ve babam ile görüştüm ve onlara Yale’dan fotoğraf gönderdim. Anneannem nihayet hastaneden çıkmış. Onun hafıza sorunları tedavi olamaz artık ama evde kendini daha iyi hissediyor. Şimdiye kadar biraz beste yaptım. Yakında 3 yeni parçam hazır olacak! Simdi arkadaşlarım Filipp ve Ben ile akşamlık yemeği yiyeceğiz. Bunu daha sonra bitireceğim…
Saat 7:11 ve ben Davenport’un Kütüphanesi’ndeyim. Timothy Dwight’ta çok iyi akşam yemeği vardı. Arkadaşlarımla uzun süre konuştum ve kendimi çok daha enerjik hissettim. Portföy görevini bitirdikten sonra biraz kodlayacağım ve sonra spor salonuna gideceğim. Yurduma döndüğümde  daha beste yapacağım. Nedense bugün müzik için ilham alıyorum. Günümü en iyi özetleyen parçanın bugün üzerinde çalıştığım parça olması lazım. Günümün ikinci ve daha enerjik yarısına daha iyi uyuyor.
`,
    images: [],
    center: false,
    audioUrl:
      "https://drive.google.com/file/d/1KFLgYdRpjJ6taKHIkfdkYHys0zz9IoI1/view?usp=sharing",
  },
  {
    id: "4",
    prompt: `Yazma: Çokdilli ya da çokkültürlü  ve farklı sanat alanlarında  eserler üreten bir sanatçıyı tanıtın. 
Konuşma: Konuşma partnerinizle Etel Adnan ve onun Pera Müzesindeki sergisi hakkında konuşun. `,
    name: "Etel Adnan",
    title: "Christo Vladimirov Javacheff",
    text: `Amerikaya göçmüş Bulgar ressam, heykeltıraş, enstalasyon sanatçısı ve avangard Christo Vladimirov Javacheff, 13 Haziran 1935’te Bulgaristan'ın Gabrovo şehrinde dünyaya geldi. Eğitimine 1952'de Sofya'daki Sanat Akademisi'nde başlayan Javacheff, 4 yıl sonra Çekoslovakya’ya göç etti. Kardeşine yazdığı bir mektupta Bulgaristan'da fikirlerinin hiç kimse tarafından anlaşılmadığını söyledi.
Prag’da ve daha sonra Viyana’da bulaşık yıkamadan araba temizlemeye kadar bulabildiği her işte çalıştı. Portre ressamı olarak da çalıştı ve oldukça başarılı oldu. 1958’de Paris’e taşındı. Orada bir generalin eşinin portresini çizerken onların kızı Jeanne-Claude ile tanıştı. İkisi evlendiler ve sanatlarını birlikte icra etmeye başladılar.
Christo ve Jeanne-Claude, telefonlardan köprülere ve binalara kadar nesnelerin paketlenmesini sanatsal bir teknik olarak kullanıyor. İlk sergileri 1961 yılında Almanya'nın Köln kentinde gerçekleşti. Paketlenmiş nesnelerin avangard stili insanlara çok ilginç ve etkileyici geldi. Sonraki yıllarda ikili daha büyük projeler yürütmeye başladı.
1970’te Vadi Perdesi üzerinde çalışmaya başladılar: dağlık Colorado Eyalet Karayolu 325'e asılacak turuncu kumaştan bir perde olan Vadi Perdesi. 1985’te Paris’te Pont Neuf köprüsünün paketlenmesi onların kariyerinde bir dönüm noktası oldu. Christo 31 Mayıs 2020’de 84 yaşında vefat etti. Hayatında hiç Bulgarca röportaj vermedi.
`,
    images: [
      "https://media.cnn.com/api/v1/images/stellar/prod/200531160626-artist-christo-obit.jpg?q=w_3000,h_1962,x_0,y_0,c_fill",
      "https://cdn.theatlantic.com/media/img/photo/2020/06/christo/a03_AP20152794245302/main_1500.jpg",
      "https://borgospieper.com/sites/default/files/2020-06/Christo.jpg",
      "https://cdn.theatlantic.com/media/img/photo/2020/06/christo/a02_13321223/main_1500.jpg",
    ],
    center: false,
    audioUrl:
      "https://drive.google.com/file/d/1zyeSHZUOQhg7aQRC-UlNBL-EAAGvPWO9/view?usp=drive_link",
  },

  {
    id: "5",
    prompt: `Yazma: Beğendiğiniz bir fotoğraf hakkında bir metin yazın. Metinde bu fotoğraftaki detayları anlatın ve neden bu fotoğrafı seçtiğinizi açıklayın. 
Konuşma: Konuşma partnerinizle Sedat Pakay'ın James Baldwin'in İstanbul yılları albümü hakkında konuşun. `,
    name: "İstanbul'da Amerikalı bir yazar",
    title: "Glenn Gould Kayıt Stüdyosunda",
    text: `Ofis koltuğunda oldukça şen görünen Kanadalı piyanist Glenn Gould, karenin odak noktasında. Sağ elinle bir defter ve sol elinle bir kalem tutmuş ve bir bacağını öbür bacağının üstüne atmış. Ayaklarını önündeki masaya koymuş rahat ve havalı görünüyor. Gould arkasındaki masaya yaslanmış ve açık düğmeli ceketi sandalyeden dışarı fırlamış. Her tarafta çeşitli müzik aletleri görülüyor.
    Karede yatay konumlandırılmış kayıt aletleriyle duvardaki dikey çizgiler arasındaki tezat dikkat çekiyor. Arka plandaki duvar rafında sandık gibi görünen bir müzik kayıt aleti var. Rafın altında iki plak çalar görülüyor. Fotoğraftaki en çarpıcı detay stüdyonun tekdüze atmosferi  ve Gould’un rahatlığı arasındaki zıtlık. Bu karede Glenn Gould’un sanatını tutkuyla sevdiğinin belli olması beni çok etkiledi. Fotoğrafa bakmak bana gelecekte o kadar çok sevdiğim bir iş bulmak istediğimi düşündürdü.   
`,
    images: [
      "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-182919-502319233.jpg?w=1581&h=1054&crop=1",
    ],
    center: false,
    audioUrl:
      "https://drive.google.com/file/d/1SJr6QKWdCauGfcs7uteFUoXoNfXvWaWh/view?usp=sharing",
  },
  {
    id: "6",
    prompt: `Yazma görevi: Bir takı tasarımcısı hakkında 3 paragraflık bir metin yazın. Birinci paragrafta tasarımcıyı tanıtın. İkinci paragrafta tasarımları hakkında yorum yapın. Üçüncü paragrafta bu tasarımcı ve onun tasarımlarını neden ilgi çekici bulduğunuzu anlatın. 
Konuşma görevi: Konuşma partnerinizle Sevan Bıçakçı ve onun tasarımları hakkında konuşun. Partnerinizin nasıl takı tasarımlarını beğendiğini öğrenin ve kendi beğendiğiniz bir tasarımcıdan ve onun tasarımlarından bahsedin. `,
    name: "Sevan Bıçakçı",
    title: "Paloma Picasso",
    text: `Takı tasarım alanında öne çıkan isimlerden biri Paloma Picasso, dünyaca ünlü ressam ve heykeltıraş Pablo Picasso’nun kızıdır. Çocukluğunda resme ilgi duyan Paloma Picasso, sanatsal becerilerini geliştirirken takı tasarımı tutkusunu keşfetti. Özel takı tasarımı okulunda eğitim almaya başladı ve bir yıl sonra ünlü moda tasarımcısı Yves Saint Laurent’in yardımıyla ilk koleksiyonunu sergiledi. 1980’de Tiffany & Co’ya ortak olan Paloma Picasso’nun  tasarımları dünya çapında ilgi gördü.
Picasso’nun değerli taşlara ve soyut geometrik şekillere olan tutkusu eserlerinin belirgin özelliğidir. Paloma Picasso’nun tasarımlarında Akdeniz kültürüne olan ilgisi de öne çıkmaktadır. Tiffany & Co. için tasarladığı Zeytin Yaprağı koleksiyonunun Fas’taki yaşamından ve daha genel olarak Akdeniz kültüründen ilham aldığı söylenebilir. Paloma Picasso’nun eserleri takı tasarımı alanında yenilikler yaratmıştır. Koleksiyonlarında ateşli turuncu opalleri ve çarpıcı pembe turmalinler gibi iddialı taşları kullanan sanatçı, gösteriş ve sadelik arasında bir denge kurarak özgün bir tarz yaratmıştır.
Paloma Picasso ilerleyen yaşına rağmen çalışmaya devam etmekte ve Tiffany & Co. için her yıl iki koleksiyon tasarlamaktadır.  
`,

    images: [
      "https://www.famousfashiondesigners.org/images/paloma-picasso.jpg",
      "https://cdn.sanity.io/images/dqllnil6/production/63d869c485ee7fa9bc72db5cdefc294fbeb6c9fb-1919x1365.png?w=3840&q=60&auto=format",
      "https://cdn.tatlerasia.com/asiatatler/i/my/2018/11/06145806-story-image-68462_cover_650x400.jpg",
      "https://i0.wp.com/immrfabulous.com/wp-content/uploads/2013/04/paloma_picasso_tiffany__co_ring_-2.jpg?ssl=1",
    ],
    center: false,
    audioUrl:
      "https://drive.google.com/file/d/1YqsCRJ2qs60s1aljWKHutDRjCl0MyaUN/view?usp=sharing",
  },
  {
    id: "7",
    prompt: `Konuşma görevi: Konuşma partnerinizle sevdiğiniz bir dizinin konusu, oyuncuları ve mesajları hakkında konuşun. `,
    name: "Bir Başkadır",
    title: null,
    text: null,
    images: [],
    center: false,
    audioUrl:
      "https://drive.google.com/file/d/1va5i9gKkxokpzwDzPogjube1se7vSEWx/view?usp=sharing",
  },
  {
    id: "9",
    prompt: `Konuşma partnerinize derste tanıttığınız sanat çalışmasını anlatın. `,
    name: "İki Deniz Arası",
    title: "Olafur Eliasson - Buza Bak",
    text: `Bazı ekolojik tahribatlar gözümüzün önünde olmadığı için dikkatimizi çekmiyor. Çevresel sorunlarla ilgilenen Danimarkalı-İzlandalı sanatçı Olafur Eliasson, 2014 yılında bu sorunla ilgili ilginç bir proje fikri geliştirdi. 
O ve ekibi Grönland'dan 12 büyük buzul getirdi ve onları Londra’da ve Paris’te çeşitli parklara yerleştirdi. 
Eliasson heykeltıraş ve fotoğrafçı olmasına rağmen bu projede yalnızca yerleştirme yaptı. Tek malzemenin kullanıldığı bu enstalasyon projesinin amacı katılımcıların buzulların eriyişini deneyimlemesi. Devasa buzların yavaş yavaş erimesi katılımcıları derinden etkiliyor.
`,
    images: [
      "https://res.cloudinary.com/olafureliasson-net/image/private/q_auto:eco,c_fit,h_640,w_640/img/ice-watch_12841.jpg",
      "https://res.cloudinary.com/olafureliasson-net/image/private/q_auto:eco,c_fit,h_640,w_640/img/ice-watch_18018.jpg",
      "https://cdn.mos.cms.futurecdn.net/MZzCJtu3xEGM6grCCVFoCE.jpg",
      "https://static.dezeen.com/uploads/2018/12/ice-watch-olafur-eliasson-art-installations_dezeen_2364_col_7-1704x1136.jpg",
    ],
    center: false,
    audioUrl:
      "https://drive.google.com/file/d/1QdFGMxBHetMPkYy-1MWxAvQHY82jGWyX/view?usp=sharing",
  },
  {
    id: "10",
    prompt: `Konuşma partnerinizle derste öğrendiğiniz mimarlar ve yapılar hakkında kısaca konuşun. Daha sonra konuşma partnerinize portfolyonuzda tanıttığınız bina hakkında bilgi verin ve yapı hakkındaki görüşlerinizi paylaşın.`,
    name: "Mimari Tasarım",
    title: "Ulusal Kültür Sarayı",
    text: `Bulgar mimar Aleksandar Barov ve ekibi tarafından tasarlanan Ulusal Kültür Sarayı Sofya’nın merkezinde bulunmaktadır. Brütalist ve geç modernist mimari tarzlarının izlerini taşıyan yapı ilk kez 1981 yılında kapılarını ziyaretçilere açtı. Ulusal Kültür Sarayı projesinin fikrini o dönemin devlet başkanın kızı Ludmila Jivkova önerdi ancak günümüzde bu bina sadece komünist döneminin mirasının bir parçası değil aynı zamanda başkentin en önemli kültür merkezidir.
Yapı konserlerden büyük kitap fuarlarına kadar her türlü kültürel etkinliklere ve çeşit sanatsal projelere ev sahipliği yapmaktadır. Büyüleyici atmosfere sahip olan Ulusal Kültür Sarayı Sofya’nın en ilgi çekici sembollerinden biridir.
`,
    images: [
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/f41bxmwno3pai1v57gjw/National%20Palace%20of%20Culture%20Admission%20in%20Sofia%20(Direct%20Entry).jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0f/6a/ee/5d/national-palace-of-culture.jpg",
      "https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/conv-center/185/1858017/1858017_MTG_National-Palace-of-Culture-Sofia_Z9C1B4.jpg?tr=w-940%2Ch-529%2Cfo-auto%2Cdi-ami-fallback.png",
      "https://kongres-magazine.eu/wp-content/uploads/2020/09/national_centre_sofia-1.png?x27798",
    ],
    center: false,
    audioUrl:
      "https://drive.google.com/file/d/1Od2_TmLJJgw4QY0c7176MXpnwCQB4yrL/view?usp=sharing",
  },
  {
    id: "11",
    prompt: `Yazma: İstanbul'daki Avrupalı Oryantalist ressamlardan birinin İstanbul’daki rutin bir gününü anlatan bir paragraf yazın. Paragrafınızda ressamın İstanbul’daki hayatını oryantalist bir bakış açısıyla anlatın.
Konuşma: Konuşma partnerinize Fransız ve Türk Oryantalist resimler arasındaki benzerlikleri ve farklılıkları açıklayın. `,
    name: "Oryantalist Resim",
    title: "Oryantalist Ressamın Sıradan Bir Günü",
    text: `Buhurdanlıktan gelen gül kokusu beni erken uyandırdı. Konağımın penceresinden İstanbul’un muhteşem manzarasını keyifle izledim. Süleymaniye’nin minareleri gizemli bir sisin arkasında saklanıyordu. Fırçalarımı ve boyalarımı alıp çıktım. Kahvehaneye doğru yürürken bir sebilde yüzüme su çarptım ve iyice uyandım. Kahvemi içerken etrafımdaki turkuaz çini süslemelerden ilham aldım. O gün önemli bir işim vardı. Padişahın elçi kabul odasını çizme görevi beni bekliyordu. Vakit kaybetmeden Topkapı Sarayı’na doğru yola çıktım. Boğazın sunduğu büyüleyici manzaraya bıkmadan uzun uzun baktım. Çizime başladıktan sonra sarayın egzotik renkleri, atmosferi ve kokusu başımı döndürdü. İşten sonra bir çayhanede dinlendim ve akşam ezanını dinledim. Daha sonra hilalin aydınlattığı yolu takip ederek konağıma döndüm.
`,
    images: [
      "https://i.guim.co.uk/img/static/sys-images/Observer/Columnist/Columnists/2012/7/3/1341311154105/The-Snake-Charmer-008.jpg?width=465&dpr=1&s=none&crop=none",
      "https://www.daytonartinstitute.org/wp-content/uploads/2020/08/1951_15-1000.jpg",
      "https://solomontreasureny.com/wp-content/uploads/2023/05/bg1a8961web_master.jpg",
      "https://sothebys-com.brightspotcdn.com/90/05/78/33bff79a8d2b061ab1b2b2169720963861fd4529d0481722524cd9a13f/007l19100-b2nd9-reshoot.jpg",
    ],
    center: false,
    audioUrl:
      "https://drive.google.com/file/d/1joY3n5wN-aL_yPI3kT2XvkkJ14wEBuFf/view?usp=sharing",
  },
  {
    id: "12",
    prompt: `Yazma: Geleneksel ve çağdaş sanat formlarını harmanlayan bir sanatçıyı ve onun öne çıkan bir eserini tanıtın.`,
    name: "Garip Edebiyatı",
    title: "Klasik müzik & Pop",
    text: `İsveçli çellist, piyanist ve besteci Josep Castanyer Alonso, Almanya'nın Köln kentinde bulunan Müzik ve Dans Üniversitesi’de eğitim aldı. Alonso 2019 yılından beri  Stockholm Kraliyet Filarmoni Orkestrası'nın bir üyesi ve çoğunlukla bir çellist olarak çeşitli müzik projelerinde yer alıyor. Ancak, onun en çok tanınan özelliği onun asıl işiyle alakalı değil.
Alonso, popüler modern şarkıları klasik bestecilerin tarzlarında yorumlayarak piyano parçaları yazıyor. Parçalarını YouTube kanalına yüklüyor ve videoları yüzbinlerce izleyiciye ulaşıyor. En popüler videosu “I’m a Barbie girl” şarkısını 6 ayrı klasik bestecinin tarzında çalıyor. Diğer meşhur çalışmalarından ikisi “All I want for Christmas” ve “Angry Birds” video oyunun tema şarkısıdır. Videolarında hem parçaları çalıyor hem de çalarken kullandığı kompozisyon tekniklerini açıklıyor. 
Geçen dönem Alonso’nun çalışmaları bana ilham verdi ve müzik dersimin bitirme projesi olarak bir meme şarkısı seçip onu Johann Sebastian Bach tarzında çaldım. “Lazy Town” dizisinden “We are Number One” şarkısının melodisini kullanarak yaptığım parçayı buradan dinleyebilirsiniz: We Are Number One X Bach
`,
    images: [
      "https://www.konserthuset.se/globalassets/kungliga-filharmonikerna/josep_1200x700.jpg",
      "https://i.ytimg.com/vi/yZi4Z1e5KO8/hqdefault.jpg",
      "https://i.ytimg.com/vi/tVoypHSiFU8/maxresdefault.jpg",
      "https://i.ytimg.com/vi/WRfsibwR5x4/hqdefault.jpg",
    ],
    center: false,
    audioUrl: null,
  },
  {
    id: "13",
    prompt: `Geçen haftanın sunum görevini tamamlayın: Sergiyi ziyaret edin. Sergi hakkında genel bilgi verin. İlginizi çeken bir bölümü daha detaylı anlatın. Sunum için sergiden videolar çekin ve üzerine voiceover ile sesinizi ekleyin.
Bu hafta için Garip Akımı tekniklerini kullanarak bir şiir yazın. Orhan Veli'nin İstanbul'u Dinliyorum şiirini okuyun ve sesinizi kaydedin. `,
    name: "El yazmaları",
    title: "Yaprak Sarma",
    text: `Bezdirme kokusuna uyanıyordum;
Giyinelip gidiyordum hemen kahvaltıya.
Neneme eline sağlık deyip çıkıyordum
Kardeşimle futbol oynamaya.

Eğlence içinde zaman uçup gidiyordu;
Öğle vakit yaprak sarma bizi bekliyordu.
Yarın da bunu hazırla, diyordum neneme;
Bayılırdım, bayılırdım, yaprak sarma yemeye.

Sonra dostlarımla çekirge avlıyorduk;
Şaka değil bendim o işin uzmanı.
Kardeşimle tartışıyorduk, dövüşüyorduk
Ama çabıcıkça geliyordu barış zamanı.

Eğlence içinde zaman uçup gidiyordu;
Mis gibi akşam yemeği bizi bekliyordu.
Öğleden sarma kaldı mı, soruyordum neneme;
Bayılırdım, bayılırdım, yaprak sarma yemeye.

Az kaldı yirmiye geçiyorum babaanne;
Çocukluğumu bıraktım yarım kalmış bir halde.
Çekildim ve seninle kaldı o Kırcaalide.
Üçaktan inip hemen size, hemen size!
`,
    images: [
      "https://cookingorgeous.com/wp-content/uploads/2022/01/yaprak-sarma-stuffed-grape-leaves-19-500x500.jpg",
    ],
    center: true,
    audioUrl: null,
  },
];
