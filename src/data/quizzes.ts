// Ücretsiz testlerin içerikleri. Puanlama tamamen tarayıcıda yapılır; cevaplar hiçbir yere gönderilmez.
//
// İki test türü var:
//  - "choice": Her seçenek bir kategoriye puan verir, en yüksek kategori sonuçtur.
//  - "scale":  Her ifade 1-5 arası puanlanır; boyut (dimension) toplamlarına göre sonuç aralığı seçilir.

export type ChoiceQuiz = {
  kind: 'choice';
  categories: Record<string, { title: string; text: string; tips: string[] }>;
  questions: { text: string; options: { text: string; category: string }[] }[];
};

export type ScaleQuiz = {
  kind: 'scale';
  scaleLabels: string[];
  dimensions: Record<
    string,
    {
      title: string;
      bands: { max: number; level: string; tone: 'good' | 'mid' | 'high'; text: string; tips: string[] }[];
    }
  >;
  // reverse: true ise puan ters çevrilir (5 → 1)
  questions: { text: string; dimension: string; reverse?: boolean }[];
};

export type Quiz = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  intro: string;
  ageNote: string;
  disclaimer: string;
} & (ChoiceQuiz | ScaleQuiz);

const likert = ['Hiç', 'Nadiren', 'Bazen', 'Sık sık', 'Her zaman'];

export const quizzes: Quiz[] = [
  {
    slug: 'ogrenme-tercihi',
    title: 'Öğrenme Tercihi Testi',
    icon: '🧠',
    short: 'Bilgiyi en rahat hangi yolla alıyorsun? Görerek mi, dinleyerek mi, yaparak mı?',
    intro:
      'Her soruda sana en yakın gelen seçeneği işaretle. Doğru ya da yanlış cevap yok; amaç kendini daha iyi tanımak.',
    ageNote: '10 yaş ve üzeri (küçükler velisiyle)',
    disclaimer:
      'Araştırmalar, en iyi öğrenmenin tek bir yoldan değil birden fazla yolu birleştirmekten geldiğini gösteriyor. Bu test sana bir "etiket" koymak için değil, en rahat ettiğin yolu fark edip onu diğer yollarla desteklemen için var.',
    kind: 'choice',
    categories: {
      gorsel: {
        title: 'Görerek öğrenmeyi seviyorsun 👀',
        text: 'Şemalar, renkler, tablolar ve resimler bilgiyi aklında tutmana yardım ediyor. Bir konuyu "gözünün önüne getirebildiğinde" daha iyi hatırlıyorsun.',
        tips: [
          'Konuları zihin haritası (mind map) ile özetle.',
          'Farklı konular için farklı renkte kalem kullan.',
          'Formülleri ve tarihleri büyük kartlara yazıp odana as.',
          'Bunu dinleyerek de destekle: özetini sesli anlat.',
        ],
      },
      isitsel: {
        title: 'Dinleyerek öğrenmeyi seviyorsun 👂',
        text: 'Anlatım, tartışma ve sesli tekrar sana iyi geliyor. Bir konuyu birine anlattığında ya da tartıştığında daha kalıcı öğreniyorsun.',
        tips: [
          'Konuyu sesli oku ya da kendine anlatır gibi tekrar et.',
          'Özetlerini telefona kaydedip yolda dinle.',
          'Bir arkadaşınla ya da ailenle "öğretmencilik" oyna.',
          'Bunu görsel olarak da destekle: dinlediğini 3 maddede yaz.',
        ],
      },
      kinestetik: {
        title: 'Yaparak öğrenmeyi seviyorsun ✋',
        text: 'Deneyerek, hareket ederek ve uygulayarak öğrenmek sana göre. Uzun süre hareketsiz oturmak seni zorlayabilir.',
        tips: [
          'Kısa çalışma blokları kullan (25 dk çalış, 5 dk hareket et).',
          'Konuyu okuduktan hemen sonra soru çözerek uygula.',
          'Ayakta ya da yürürken tekrar yapmayı dene.',
          'Bunu görsel olarak da destekle: çözdüğün soruların şemasını çiz.',
        ],
      },
    },
    questions: [
      {
        text: 'Yeni bir oyunun kurallarını öğrenirken ne yaparsın?',
        options: [
          { text: 'Kuralları ya da resimli açıklamayı okurum', category: 'gorsel' },
          { text: 'Birinin anlatmasını dinlerim', category: 'isitsel' },
          { text: 'Hemen oynamaya başlar, oynarken öğrenirim', category: 'kinestetik' },
        ],
      },
      {
        text: 'Derste en çok hangi durumda aklında kalır?',
        options: [
          { text: 'Öğretmen tahtaya şema ya da resim çizdiğinde', category: 'gorsel' },
          { text: 'Öğretmen konuyu güzel anlattığında ve soru-cevap yapıldığında', category: 'isitsel' },
          { text: 'Deney, etkinlik ya da uygulama yaptığımızda', category: 'kinestetik' },
        ],
      },
      {
        text: 'Bir yeri tarif ederken genelde nasıl anlatırsın?',
        options: [
          { text: 'Kâğıda küçük bir harita çizerim', category: 'gorsel' },
          { text: 'Adım adım sözlü tarif ederim', category: 'isitsel' },
          { text: 'Elimle yönleri gösteririm ya da birlikte gidelim derim', category: 'kinestetik' },
        ],
      },
      {
        text: 'Sınava çalışırken en sevdiğin yöntem hangisi?',
        options: [
          { text: 'Renkli notlar, tablolar ve özet kartları', category: 'gorsel' },
          { text: 'Sesli tekrar yapmak ya da birine anlatmak', category: 'isitsel' },
          { text: 'Bol bol soru çözmek, yazarak çalışmak', category: 'kinestetik' },
        ],
      },
      {
        text: 'Bir şarkıyı ya da şiiri ezberlemen gerekiyor. Ne yaparsın?',
        options: [
          { text: 'Sözleri yazar, satırlara bakarak ezberlerim', category: 'gorsel' },
          { text: 'Tekrar tekrar dinler, sesli söylerim', category: 'isitsel' },
          { text: 'Ritim tutarak ya da hareket ederek ezberlerim', category: 'kinestetik' },
        ],
      },
      {
        text: 'Boş zamanında en çok ne yapmaktan hoşlanırsın?',
        options: [
          { text: 'Çizim yapmak, video izlemek, fotoğraf çekmek', category: 'gorsel' },
          { text: 'Müzik ya da podcast dinlemek, sohbet etmek', category: 'isitsel' },
          { text: 'Spor, el işi, bir şeyler inşa etmek', category: 'kinestetik' },
        ],
      },
      {
        text: 'Ders çalışırken dikkatini en çok ne dağıtır?',
        options: [
          { text: 'Dağınık bir masa ya da göz önünde hareket eden şeyler', category: 'gorsel' },
          { text: 'Gürültü ve konuşma sesleri', category: 'isitsel' },
          { text: 'Uzun süre yerimde oturmak zorunda kalmak', category: 'kinestetik' },
        ],
      },
      {
        text: 'Yeni bir telefon ya da uygulamayı nasıl öğrenirsin?',
        options: [
          { text: 'Ekran görüntülü kılavuza ya da videoya bakarım', category: 'gorsel' },
          { text: 'Bilen birine sorar, anlattırırım', category: 'isitsel' },
          { text: 'Kurcalayarak, deneyerek çözerim', category: 'kinestetik' },
        ],
      },
      {
        text: 'Birini ilk kez gördüğünde sonra en çok neyini hatırlarsın?',
        options: [
          { text: 'Yüzünü ve giydiklerini', category: 'gorsel' },
          { text: 'Adını ve ses tonunu', category: 'isitsel' },
          { text: 'Birlikte ne yaptığımızı', category: 'kinestetik' },
        ],
      },
      {
        text: 'Bir konuyu anlamadığında ilk ne istersin?',
        options: [
          { text: 'Bir örnek resim ya da şema görmek', category: 'gorsel' },
          { text: 'Birinin farklı kelimelerle tekrar anlatmasını', category: 'isitsel' },
          { text: 'Kendi başıma bir örnek çözmeyi denemek', category: 'kinestetik' },
        ],
      },
    ],
  },

  {
    slug: 'sinav-kaygisi',
    title: 'Sınav Kaygısı Testi',
    icon: '😰',
    short: 'Sınav öncesi ve sırasında yaşadığın gerginlik ne düzeyde? Nasıl yönetebilirsin?',
    intro:
      'Aşağıdaki ifadeleri son birkaç aydaki sınavlarını düşünerek cevapla. Her ifadenin sana ne sıklıkla uyduğunu işaretle.',
    ageNote: '10 yaş ve üzeri',
    disclaimer:
      'Bu test tıbbi ya da psikolojik bir teşhis aracı değildir; farkındalık için hazırlanmıştır. Kaygı günlük hayatı ciddi şekilde etkiliyorsa bir çocuk ve ergen psikoloğuna ya da doktora danışılmalıdır.',
    kind: 'scale',
    scaleLabels: likert,
    dimensions: {
      kaygi: {
        title: 'Sınav kaygısı düzeyi',
        bands: [
          {
            max: 26,
            level: 'Düşük',
            tone: 'good',
            text: 'Sınavlar seni biraz heyecanlandırıyor ama bu heyecan seni engellemiyor. Hafif heyecan aslında dikkati artırır; bu iyi bir durum.',
            tips: [
              'Mevcut çalışma düzenini korumaya devam et.',
              'Sınav haftası için uykuna ve beslenmene dikkat et.',
            ],
          },
          {
            max: 42,
            level: 'Orta',
            tone: 'mid',
            text: 'Sınavlar sende belirgin bir gerginlik yaratıyor ve bazen performansını etkiliyor olabilir. Doğru tekniklerle bu kaygı kolayca yönetilebilir.',
            tips: [
              'Sınavdan önce 4-7-8 nefes egzersizini dene: 4 saniye nefes al, 7 saniye tut, 8 saniyede ver.',
              'Çalışmayı son güne bırakma; küçük parçalara böl.',
              'Evde süre tutarak deneme sınavı çöz; gerçek sınav daha tanıdık gelir.',
              '"Başaramayacağım" düşüncesini "Hazırlandım, elimden gelenin en iyisini yapacağım" ile değiştir.',
            ],
          },
          {
            max: 60,
            level: 'Yüksek',
            tone: 'high',
            text: 'Sınav kaygısı seni zorluyor ve bildiklerini göstermeni engelliyor olabilir. Bu senin suçun değil ve yalnız değilsin. Bu kaygı, doğru destekle çalışılabilen bir konu.',
            tips: [
              'Bu sonucu bir yetişkinle (veli, öğretmen, rehber öğretmen) paylaş.',
              'Nefes egzersizlerini sınav anında değil, her gün kısa süre çalış; ihtiyaç anında otomatik çıksın.',
              'Uyku, beslenme ve hareket kaygıyı doğrudan etkiler; bu üçüne dikkat et.',
              'Bir koçla birlikte sana özel bir sınav hazırlık ve kaygı yönetimi planı yapabilirsin.',
            ],
          },
        ],
      },
    },
    questions: [
      { text: 'Sınavdan önceki gece uyumakta zorlanırım.', dimension: 'kaygi' },
      { text: 'Sınav sırasında kalbim hızlı çarpar, ellerim terler ya da midem bulanır.', dimension: 'kaygi' },
      { text: 'Aslında bildiğim şeyleri sınav anında hatırlayamam.', dimension: 'kaygi' },
      { text: 'Sınavda başarısız olursam ailemin ya da öğretmenimin ne düşüneceğini çok dert ederim.', dimension: 'kaygi' },
      { text: 'Sınav kâğıdını ilk gördüğümde zihnim boşalır.', dimension: 'kaygi' },
      { text: 'Sınav sırasında başkalarının benden hızlı yazdığını düşünüp paniğe kapılırım.', dimension: 'kaygi' },
      { text: 'Sınav yaklaştıkça ders çalışmayı erteleyip kaçmak isterim.', dimension: 'kaygi' },
      { text: 'Sınav sonrası yaptığım hataları uzun süre kafamda döndürürüm.', dimension: 'kaygi' },
      { text: 'Sınav günü karnım ağrır ya da başım ağrır.', dimension: 'kaygi' },
      { text: 'Ne kadar çalışsam da "yeterince hazır değilim" hissederim.', dimension: 'kaygi' },
      { text: 'Sınav sırasında zamanın yetmeyeceği korkusu yaşarım.', dimension: 'kaygi' },
      { text: 'Sınavlardan önce kendimi sakin ve hazır hissederim.', dimension: 'kaygi', reverse: true },
    ],
  },

  {
    slug: 'motivasyon-zaman',
    title: 'Motivasyon ve Zaman Yönetimi Testi',
    icon: '⏰',
    short: 'Ders çalışma isteğin ve zamanını planlama becerin ne durumda? Hangisine odaklanmalısın?',
    intro: 'Her ifadenin sana ne sıklıkla uyduğunu işaretle. İki ayrı alanda sonuç göreceksin: motivasyon ve planlama.',
    ageNote: '11 yaş ve üzeri',
    disclaimer: 'Bu test farkındalık amaçlıdır; kesin bir değerlendirme yerine geçmez.',
    kind: 'scale',
    scaleLabels: likert,
    dimensions: {
      motivasyon: {
        title: 'Motivasyon',
        bands: [
          {
            max: 14,
            level: 'Destek gerekiyor',
            tone: 'high',
            text: 'Şu an ders çalışmak için içinden gelen bir istek bulmakta zorlanıyorsun. Bu tembellik değil; çoğu zaman hedef belirsizliği ya da "nasılsa olmuyor" duygusudur.',
            tips: [
              'Büyük hedef yerine bu haftaya ait küçük bir hedef koy ("Perşembeye kadar 20 soru").',
              'Her küçük başarıyı bir yere yaz; ilerlemeyi görmek motivasyonu artırır.',
              'Okulun seni ilgilendiren bir hedefle (meslek, hobi) nasıl bağlantılı olduğunu düşün.',
            ],
          },
          {
            max: 22,
            level: 'Gelişmekte',
            tone: 'mid',
            text: 'Bazı dönemlerde motivasyonun yüksek, bazı dönemlerde düşük. İstikrarı artırmak için net hedefler ve küçük ödüller işine yarayabilir.',
            tips: [
              'Hafta başında 3 net hedef belirle, hafta sonunda kontrol et.',
              'Zor dersi, enerjinin en yüksek olduğu saate koy.',
            ],
          },
          {
            max: 30,
            level: 'Güçlü',
            tone: 'good',
            text: 'Ders çalışma isteğin ve hedef bilincin güçlü. Bu enerjiyi doğru planla birleştirirsen çok verimli olursun.',
            tips: ['Uzun vadeli hedefini (ör. okul ya da bölüm tercihi) yazılı hale getir.'],
          },
        ],
      },
      planlama: {
        title: 'Zaman yönetimi ve planlama',
        bands: [
          {
            max: 14,
            level: 'Destek gerekiyor',
            tone: 'high',
            text: 'Plan yapmakta ve uygulamakta zorlanıyorsun; işler son güne kalabiliyor. İyi haber: planlama tamamen öğrenilebilir bir beceri.',
            tips: [
              'Her akşam ertesi gün için sadece 3 iş yaz.',
              '25 dakika çalış, 5 dakika mola ver (Pomodoro tekniği).',
              'Çalışırken telefonu başka odaya bırak.',
            ],
          },
          {
            max: 22,
            level: 'Gelişmekte',
            tone: 'mid',
            text: 'Temel bir düzenin var ama plan her zaman uygulanamıyor. Haftalık bir şablon kullanmak işini kolaylaştırır.',
            tips: [
              'Haftalık plan şablonu kullan ve buzdolabına as.',
              'Ödev ve sınav tarihlerini tek bir takvimde topla.',
            ],
          },
          {
            max: 30,
            level: 'Güçlü',
            tone: 'good',
            text: 'Zamanını iyi yönetiyorsun ve planlarına büyük ölçüde uyuyorsun. Tebrikler!',
            tips: ['Planına düzenli tekrar zamanları eklemeyi unutma.'],
          },
        ],
      },
    },
    questions: [
      { text: 'Ders çalışmaya başlamak için birinin bana hatırlatmasına gerek kalmaz.', dimension: 'motivasyon' },
      { text: 'Okulda neden bu dersleri öğrendiğimin bana bir faydası olacağını düşünürüm.', dimension: 'motivasyon' },
      { text: 'Zor bir soruyla karşılaştığımda hemen vazgeçmem.', dimension: 'motivasyon' },
      { text: 'Gelecekte ne yapmak istediğime dair bir hedefim var.', dimension: 'motivasyon' },
      { text: '"Nasılsa başaramam" diye düşünüp çalışmayı bıraktığım olur.', dimension: 'motivasyon', reverse: true },
      { text: 'Yeni bir şey öğrendiğimde kendimi iyi hissederim.', dimension: 'motivasyon' },
      { text: 'Haftalık ya da günlük bir çalışma planım vardır.', dimension: 'planlama' },
      { text: 'Ödevlerimi son güne bırakırım.', dimension: 'planlama', reverse: true },
      { text: 'Ders çalışırken telefonum ya da oyunlar sık sık dikkatimi dağıtır.', dimension: 'planlama', reverse: true },
      { text: 'Sınav tarihlerimi ve ödev teslimlerimi bir yere not ederim.', dimension: 'planlama' },
      { text: 'Ne kadar süre çalışacağımı önceden belirlerim.', dimension: 'planlama' },
      { text: 'Planladığım çalışmayı çoğunlukla gerçekten yaparım.', dimension: 'planlama' },
    ],
  },
];
