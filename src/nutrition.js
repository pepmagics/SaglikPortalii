const foods = [
    {
        name: 'Tavuk Göğsü',
        description: 'Yağsız protein kaynağı.',
        imageUrl: 'https://www.diyetkolik.com/site_media/media/2023/04/05/tavukgogsu.jpg',
        kategori: 'protein',
        kalori: 165,
        protein: 31,
        karbonhidrat: 0,
        yag: 3.6
    },
    {
        name: 'Pide',
        description: 'Üzerine çeşitli malzemeler eklenerek yapılan Türk ekmeği.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPs-qk0hcg61LqVDD7XOmUGFgjaUxeAhnZw&s',
        kategori: 'tahıl',
        kalori: 250,
        protein: 10,
        karbonhidrat: 45,
        yag: 8
    },
    {
        name: 'Döner',
        description: 'Dikey bir şişte pişirilen ince dilimlenmiş et yemeği.',
        imageUrl: 'https://media1.tenor.com/m/d7cbqVhtN5EAAAAd/gyros-shawarma.gif', 
        kategori: 'protein',
        kalori: 300,
        protein: 20,
        karbonhidrat: 5,
        yag: 22
    },
    {
        name: 'Etli Nohut',
        description: 'Nohut ve et ile yapılan sulu yemek.',
        imageUrl: 'https://www.ardaninmutfagi.com/wp-content/uploads/2019/09/etli-nohut-yemegi-i.jpg',
        kategori: 'protein',
        kalori: 200,
        protein: 15,
        karbonhidrat: 20,
        yag: 6
    },
    {
        name: 'Çılbır',
        description: 'Yoğurt ve tereyağlı sos ile servis edilen haşlanmış yumurta.',
        imageUrl: 'https://image.hurimg.com/i/hurriyet/75/750x422/5ea009312269a218ac53a1a2.jpg',
        kategori: 'protein',
        kalori: 150,
        protein: 8,
        karbonhidrat: 5,
        yag: 10
    },
    {
      name: 'Kabak Mücveri',
      description: 'Rendelenmiş kabak ve un ile yapılan kızartılmış sebze köftesi.',
      imageUrl: 'https://media.istockphoto.com/id/1409829413/tr/foto%C4%9Fraf/many-vegetable-flitters-in-the-plate-with-white-sauce-m%C3%BCcver-or-mucver.jpg?s=612x612&w=0&k=20&c=Jgku2zUKYq2jRe-fPXvBz0AkIdNv4KZfUL7tVCRTw4Y=',
      kategori: 'sebze',
      kalori: 180,
      protein: 5,
      karbonhidrat: 15,
      yag: 12
  },
  {
      name: 'Patates Kızartması',
      description: 'Kızartılmış patates dilimleri.',
      imageUrl: 'https://media.istockphoto.com/id/618214356/tr/foto%C4%9Fraf/basket-of-famous-fast-food-french-fries.jpg?s=2048x2048&w=is&k=20&c=74st_PyYoGfVTsyov6OCs51vqaBpreWk-RY9NEdOGB4=',
      kategori: 'sebze',
      kalori: 320,
      protein: 4,
      karbonhidrat: 50,
      yag: 15
  },
  {
      name: 'Köfte',
      description: 'Baharatlı kıymadan yapılan yuvarlak et köftesi.',
      imageUrl: 'https://media.istockphoto.com/id/513554430/tr/foto%C4%9Fraf/close-up-of-turkish-meatballs.jpg?s=612x612&w=0&k=20&c=yYi0S3CUL6yMVmMHn9f4jiAEfZJ-V62CMJCIRpKimkk=',
      kategori: 'protein',
      kalori: 220,
      protein: 15,
      karbonhidrat: 10,
      yag: 15
  },
  {
      name: 'Çiğ Köfte',
      description: 'Baharatlı bulgur ve ince kıyılmış sebzelerle yapılan çiğ köfte.',
      imageUrl: 'https://media.istockphoto.com/id/1444457374/tr/foto%C4%9Fraf/turkish-raw-meatballs-on-a-wooden-background-turkish-cuisine-delicacies-local-name-ci-k%C3%B6fte.jpg?s=2048x2048&w=is&k=20&c=pyYYtKCE9DXwZboWSNoHOlJi0iNbTxfUK6uu740RK78=',
      kategori: 'tahıl',
      kalori: 180,
      protein: 8,
      karbonhidrat: 25,
      yag: 5
  },
  {
      name: 'Börek',
      description: 'Yufka ve çeşitli iç malzemelerle yapılan hamur işi.',
      imageUrl: 'https://media.istockphoto.com/id/1332168456/tr/foto%C4%9Fraf/delicious-turkish-food-tray-pastry.jpg?s=2048x2048&w=is&k=20&c=850HBmtdag20Q0oNCp3vD_y8N_IgdWxZrZySVQnnQro=',
      kategori: 'tahıl',
      kalori: 300,
      protein: 10,
      karbonhidrat: 35,
      yag: 15
  },
  {
      name: 'Gözleme',
      description: 'İnce açılmış hamurun içine çeşitli malzemeler konarak sacda pişirilen yufka.',
      imageUrl: 'https://i.lezzet.com.tr/images-xxlarge/gozleme-15809a3f-a2cd-4144-83f0-5ff9f1b3f8e3',
      kategori: 'tahıl',
      kalori: 250,
      protein: 8,
      karbonhidrat: 40,
      yag: 10
  },
  {
      name: 'Tavuklu Pilav',
      description: 'Tavuk eti ve pirinç ile yapılan pilav.',
      imageUrl: 'https://media.istockphoto.com/id/845193480/tr/foto%C4%9Fraf/par%C3%A7a-pilav-tavuk.jpg?s=2048x2048&w=is&k=20&c=TeFkgmXDB3QlDVG23loS7I_5vsU8KmX0p3vivyL3i9E=',
      kategori: 'tahıl',
      kalori: 350,
      protein: 15,
      karbonhidrat: 45,
      yag: 10
  },
  {
      name: 'Sucuklu Pide',
      description: 'Sucuk ve peynir ile yapılan pide.',
      imageUrl: 'https://media.istockphoto.com/id/973347002/tr/foto%C4%9Fraf/pide-sosis-lida-past%C4%B1rmal%C4%B1-pide-ile.jpg?s=2048x2048&w=is&k=20&c=kyyQRizqhMRf_bYWIxUXZ7XJZl3ncLcXH3HhTGBiFno=',
      kategori: 'tahıl',
      kalori: 400,
      protein: 20,
      karbonhidrat: 50,
      yag: 20
  },
  {
      name: 'Şehriyeli Tavuk Çorbası',
      description: 'Tavuk eti ve şehriye ile yapılan çorba.',
      imageUrl: 'https://media.istockphoto.com/id/1152466976/tr/foto%C4%9Fraf/krem-ve-sebzeli-tavuk-%C3%A7orbas%C4%B1.jpg?s=2048x2048&w=is&k=20&c=X-iJ8BeagxmIakj3Da-KtnaSiNgxFzrvkrNRjgOV-hM=',
      kategori: 'çorba',
      kalori: 150,
      protein: 10,
      karbonhidrat: 15,
      yag: 5
  },
  {
      name: 'Sütlaç',
      description: 'Pirinç ve süt ile yapılan tatlı.',
      imageUrl: 'https://media.istockphoto.com/id/1188895844/tr/foto%C4%9Fraf/sutlac.jpg?s=2048x2048&w=is&k=20&c=mZG7oWiwYOE7tHIAbGZCeaYXvhK_UMP36hqzJuzAKfs=',
      kategori: 'tatlı',
      kalori: 200,
      protein: 5,
      karbonhidrat: 35,
      yag: 5
  },
  {
      name: 'Helva',
      description: 'Un ve şeker ile yapılan tatlı.',
      imageUrl: 'https://media.istockphoto.com/id/1217672472/tr/foto%C4%9Fraf/t%C3%BCrk-%C3%BCnl%C3%BC-geleneksel-ev-yap%C4%B1m%C4%B1-un-helvas%C4%B1-rustik-arka-plan-tabaktabakceviz-ile-servis.jpg?s=2048x2048&w=is&k=20&c=l_UQrYr8NjG2ZJd4VhRdPe8f7e4erYWZot6XIY2hK6c=',
      kategori: 'tatlı',
      kalori: 300,
      protein: 4,
      karbonhidrat: 50,
      yag: 12
  },
  {
      name: 'Acılı Ezme',
      description: 'Domates, biber, soğan ve baharatlarla yapılan acılı sos.',
      imageUrl: 'https://media.istockphoto.com/id/1306565945/tr/foto%C4%9Fraf/arrabbiata-sosu-ah%C5%9Fap-bir-kapta-baharatl%C4%B1-italyan-domates-sosu.jpg?s=2048x2048&w=is&k=20&c=3YggTpMCqpFrBauF6lUyhSyfATyBWdVhUIOtdNe5-mc=',
      kategori: 'sebze',
      kalori: 50,
      protein: 1,
      karbonhidrat: 10,
      yag: 2
  },
  {
      name: 'Tandır Kebabı',
      description: 'Odun fırınında yavaşça pişirilmiş et yemeği.',
      imageUrl: 'https://media.istockphoto.com/id/1537273446/tr/foto%C4%9Fraf/turkish-foods-lamb-shank-tandoori-on-bulgur-wheat-rice.jpg?s=612x612&w=0&k=20&c=oVwTDYgICAMymiQGf2DVpH-qqondJdW1Q4Ih_-46Xh4=',
      kategori: 'protein',
      kalori: 350,
      protein: 25,
      karbonhidrat: 0,
      yag: 25
  },
    {
        name: 'Cacık',
        description: 'Yoğurt, salatalık ve nane ile yapılan soğuk meze.',
        imageUrl: 'https://media.istockphoto.com/id/1793359930/tr/foto%C4%9Fraf/traditional-delicious-appetizer-tzatziki.jpg?s=612x612&w=0&k=20&c=vOhej0tpirvlLcDqivrLregw73k-v6feyyHpITFOMCU=',
        kategori: 'sebze',
        kalori: 60,
        protein: 3,
        karbonhidrat: 5,
        yag: 3
    },
    {
        name: 'Bakla Ezmesi',
        description: 'Bakla, zeytinyağı ve limon ile yapılan meze.',
        imageUrl: 'https://media.istockphoto.com/id/1398503594/tr/foto%C4%9Fraf/taditional-fava-with-olive-oil-mashed-broad-beans-fava-appetizer.jpg?s=612x612&w=0&k=20&c=rq2BDe3WuXbHHnLaFkOpGefsZOMNinUZeYNvJuYXEpY=',
        kategori: 'sebze',
        kalori: 100,
        protein: 5,
        karbonhidrat: 15,
        yag: 4
    },
    {
        name: 'Zeytinyağlı Enginar',
        description: 'Zeytinyağı ve limonla pişirilen enginar.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7U27qWIwAz0vEIvhbQxHXA-WqtbcXNhNRzA&s',
        kategori: 'sebze',
        kalori: 70,
        protein: 2,
        karbonhidrat: 10,
        yag: 4
    },

    {
        name: 'Brokoli',
        description: 'Vitamin ve mineraller açısından zengin.',
        imageUrl: 'https://media.istockphoto.com/id/579165978/tr/foto%C4%9Fraf/broccoli.jpg?s=612x612&w=0&k=20&c=OlnLUHLLAqB-QvuIrN0UYWZaZlXx4HxvyZ9KT0JhD_Q=',
        kategori: 'sebze',
        kalori: 55,
        protein: 3.7,
        karbonhidrat: 11.1,
        yag: 0.6
    },
    {
        name: 'Kinoa',
        description: 'Protein ve lif açısından zengin.',
        imageUrl: 'https://media.istockphoto.com/id/1384541758/tr/foto%C4%9Fraf/quinoa-seeds-poured-out-of-a-jar-close-up.jpg?s=612x612&w=0&k=20&c=aBcX_rCMk0KLG4drJVfEaYEePM_2joPLivRfHsu7Y1k=',
        kategori: 'tahıl',
        kalori: 120,
        protein: 4.1,
        karbonhidrat: 21.3,
        yag: 1.9
    },
    {
        name: 'Somon',
        description: 'Omega-3 yağ asitleri açısından zengin.',
        imageUrl: 'https://media.istockphoto.com/id/184315175/tr/foto%C4%9Fraf/fillet-of-salmon-with-asparagus.jpg?s=2048x2048&w=is&k=20&c=UmGJ9yFr5O5H6-fkxViQEC9j5b5HUhJeNb0n_OSRRLY=',
        kategori: 'protein',
        kalori: 208,
        protein: 20,
        karbonhidrat: 0,
        yag: 13
    },
    {
        name: 'Ispanak',
        description: 'Vitamin ve mineraller açısından zengin.',
        imageUrl: 'https://media.istockphoto.com/id/1036165902/tr/foto%C4%9Fraf/pirin%C3%A7-so%C4%9Fan-ve-domates-sal%C3%A7as%C4%B1-ev-yap%C4%B1m%C4%B1-sa%C4%9Fl%C4%B1kl%C4%B1-paz%C4%B1-t%C3%BCrk-g%C4%B1da-pazi.jpg?s=2048x2048&w=is&k=20&c=_pCr4MFWlCnghYjrBr1TGD5qLUkU-_83lw6_emU6Mjg=',
        kategori: 'sebze',
        kalori: 23,
        protein: 2.9,
        karbonhidrat: 3.6,
        yag: 0.4
    },
    {
        name: 'Esmer Pirinç',
        description: 'Lif açısından zengin tam tahıl.',
        imageUrl: 'https://media.istockphoto.com/id/173589620/tr/foto%C4%9Fraf/brown-rice.jpg?s=612x612&w=0&k=20&c=e4BadHVV5HRBQpSXFzW5-444rkyN2IzLB9b9HcLrArQ=',
        kategori: 'tahıl',
        kalori: 112,
        protein: 2.6,
        karbonhidrat: 23,
        yag: 0.9
    },
    {
        name: 'Yoğurt',
        description: 'Protein ve probiyotikler açısından zengin.',
        imageUrl: 'https://media.istockphoto.com/id/154961211/tr/foto%C4%9Fraf/delicious-homemade-creamy-yoghurt.jpg?s=612x612&w=0&k=20&c=gIj12xWJCwGcWaW-wMS5bk3RFtibtr7rToMh_bpXsSM=',
        kategori: 'süt ürünleri',
        kalori: 59,
        protein: 10,
        karbonhidrat: 3.6,
        yag: 0.4
    },
    {
        name: 'Badem',
        description: 'Sağlıklı yağlar ve lif açısından zengin.',
        imageUrl: 'https://media.istockphoto.com/id/171292794/tr/foto%C4%9Fraf/almond.jpg?s=612x612&w=0&k=20&c=kKV9iXg8VgTcjLFGil_WzgPhEcaNdshCMO8-fl4kO1c=',
        kategori: 'kuruyemiş',
        kalori: 579,
        protein: 21,
        karbonhidrat: 22,
        yag: 50
    },
    {
        name: 'Zeytinyağlı Yaprak Sarma',
        description: 'İnce bulgur, soğan, maydanoz ve çeşitli baharatlarla yapılan sarma.',
        imageUrl: 'https://media.istockphoto.com/id/184853679/tr/foto%C4%9Fraf/dolma-stuffed-grape-leaves.jpg?s=612x612&w=0&k=20&c=sosLXeNcs0Oi4DC4kDwdEfhOIx2LB7XxZCWf9OjxQls=',
        kategori: 'sebze',
        kalori: 150,
        protein: 3,
        karbonhidrat: 22,
        yag: 5
    },
    {
        name: 'Menemen',
        description: 'Domates, biber ve yumurta ile yapılan geleneksel Türk yemeği.',
        imageUrl: 'https://media.istockphoto.com/id/1305760986/tr/foto%C4%9Fraf/menemen-siyah-arka-plan-%C3%BCzerinde-bak%C4%B1r-tavada-yumurta-domates-ye%C5%9Fil-biber-ve-baharat.jpg?s=612x612&w=0&k=20&c=pcEjASdvuvJzZyT0hww_dVqc2fcR767awVUoJC5pMfY=',
        kategori: 'protein',
        kalori: 180,
        protein: 9,
        karbonhidrat: 6,
        yag: 14
    },
    {
        name: 'Mercimek Çorbası',
        description: 'Kırmızı mercimek, soğan ve havuç ile yapılan besleyici çorba.',
        imageUrl: 'https://media.istockphoto.com/id/856009070/tr/foto%C4%9Fraf/mercimek-%C3%A7orbas%C4%B1.jpg?s=612x612&w=0&k=20&c=-AT1E7g2xWAYAW6WK55eexpDTCX_EoqNdsfGI9Nsca0=',
        kategori: 'çorba',
        kalori: 140,
        protein: 9,
        karbonhidrat: 20,
        yag: 3
    },
    {
        name: 'Pilav',
        description: 'Beyaz pirinç ve tereyağı ile yapılan geleneksel Türk pilavı.',
        imageUrl: 'https://media.istockphoto.com/id/1361129080/tr/foto%C4%9Fraf/traditional-delicious-turkish-food-turkish-style-rice-pilaf.jpg?s=612x612&w=0&k=20&c=2RMcS5cv3mcujuQksAv2PyzQap6M6ktsmGxBb3uPBHE=',
        kategori: 'tahıl',
        kalori: 200,
        protein: 3,
        karbonhidrat: 37,
        yag: 5
    },
    {
        name: 'Kuzu Şiş',
        description: 'Izgarada pişirilen kuzu etinden yapılan şiş kebap.',
        imageUrl: 'https://media.istockphoto.com/id/457066043/tr/foto%C4%9Fraf/meat-skewers.jpg?s=612x612&w=0&k=20&c=UAXibWAVjDJkQGAeSL0hvKr3hwM30YiOVJyom1bC9EQ=',
        kategori: 'protein',
        kalori: 250,
        protein: 20,
        karbonhidrat: 0,
        yag: 18
    },
    {
        name: 'Taze Fasulye',
        description: 'Domates ve soğanla pişirilen taze fasulye yemeği.',
        imageUrl: 'https://media.istockphoto.com/id/1269034614/tr/foto%C4%9Fraf/t%C3%BCrk-ye%C5%9Fil-fasulye-beyaz-arka-plan-%C3%BCzerinde-%C3%A7anak.jpg?s=612x612&w=0&k=20&c=UwlmlI2JGeE5-T4l80x0Sp3Z-rSl-kfugwhv7iEeads=',
        kategori: 'sebze',
        kalori: 90,
        protein: 2,
        karbonhidrat: 13,
        yag: 4
    },
    {
        name: 'Bulgur Pilavı',
        description: 'Bulgur, soğan ve domates ile yapılan pilav.',
        imageUrl: 'https://media.istockphoto.com/id/1389678074/tr/foto%C4%9Fraf/traditional-turkish-bulgur-pilaf-with-tomato-sauce-in-plate.jpg?s=612x612&w=0&k=20&c=tzLImRjYB5sw8sdMX9icx-bqIjcjfI8hUyjUwc-ucPM=',
        kategori: 'tahıl',
        kalori: 150,
        protein: 4,
        karbonhidrat: 30,
        yag: 1
    },
    {
        name: 'Kebap',
        description: 'Çeşitli etlerin baharatla harmanlanıp pişirilmesi.',
        imageUrl: 'https://media.istockphoto.com/id/1384981720/tr/foto%C4%9Fraf/traditional-delicious-turkish-foods-adana-kebab.jpg?s=612x612&w=0&k=20&c=fUGr62fM7tJoT8wUO1SVSqtzynwcEX-AZr22FBxbAk8=',
        kategori: 'protein',
        kalori: 350,
        protein: 25,
        karbonhidrat: 5,
        yag: 25
    },
    {
        name: 'Lahmacun',
        description: 'İnce hamur üzerine kıyma, soğan, domates ve baharatlar.',
        imageUrl: 'https://media.istockphoto.com/id/1361075522/tr/foto%C4%9Fraf/turkish-foods-turkish-pizza-lahmacun.jpg?s=612x612&w=0&k=20&c=YyK15DqOf2TlP_STM9DLIZQw3v6ZkaiK9W04GpsJPts=',
        kategori: 'tahıl',
        kalori: 300,
        protein: 15,
        karbonhidrat: 45,
        yag: 10
    },
    {
        name: 'Baklava',
        description: 'İnce hamur ve şerbetle yapılan tatlı.',
        imageUrl: 'https://media.istockphoto.com/id/1218839959/tr/foto%C4%9Fraf/t%C3%BCrk-usul%C3%BC-antep-f%C4%B1st%C4%B1%C4%9F%C4%B1-ve-antep-f%C4%B1st%C4%B1%C4%9F%C4%B1-baklavas%C4%B1.jpg?s=612x612&w=0&k=20&c=qZz3m0l4QuVqXwf0LEpDqxsuFpOgKPEBWHk9GESuKEw=',
        kategori: 'tatlı',
        kalori: 400,
        protein: 5,
        karbonhidrat: 60,
        yag: 20
    },
    {
        name: 'Karnıyarık',
        description: 'Kıyma, soğan ve domatesle doldurulmuş patlıcan.',
        imageUrl: 'https://media.istockphoto.com/id/151544293/tr/foto%C4%9Fraf/turkish-main-course-karn%C4%B1yar%C4%B1k.jpg?s=612x612&w=0&k=20&c=h-tuUUJWY1KHHvve57wIBxXcDZ2IQOSrVP0mGGTJdz8=',
        kategori: 'sebze',
        kalori: 250,
        protein: 10,
        karbonhidrat: 15,
        yag: 15
    },
    {
        name: 'Güllaç',
        description: 'Süt, gül suyu ve nişastalı yapraklarla yapılan tatlı.',
        imageUrl: 'https://media.istockphoto.com/id/1393266747/tr/foto%C4%9Fraf/turkish-traditional-ramadan-dessert-gullac.jpg?s=612x612&w=0&k=20&c=Nvl5Zxdqh5zpKHRj1v93V4H6pkvzlB15cCRq7Yky_Oo=',
        kategori: 'tatlı',
        kalori: 200,
        protein: 6,
        karbonhidrat: 30,
        yag: 5
    },
    {
        name: 'Patlıcan Musakka',
        description: 'Kıyma ve patlıcanla yapılan bir çeşit güveç.',
        imageUrl: 'https://media.istockphoto.com/id/1170222889/tr/foto%C4%9Fraf/arni-me-melitzanes-patl%C4%B1can-ile-ha%C5%9Flanm%C4%B1%C5%9F-kuzu.jpg?s=612x612&w=0&k=20&c=kBwMXxMFHTUdU0KBeRvGvDWTBhVw87V1mP6Yg5smRg8=',
        kategori: 'sebze',
        kalori: 280,
        protein: 12,
        karbonhidrat: 20,
        yag: 18
    },
    {
        name: 'Kısır',
        description: 'Bulgur, domates, maydanoz ve nane ile yapılan soğuk salata.',
        imageUrl: 'https://media.istockphoto.com/id/1349241960/tr/foto%C4%9Fraf/traditional-delicious-turkish-foods-bulgur-salad.jpg?s=612x612&w=0&k=20&c=abdzo4GAgIvWDcfqfGkZKjJisS1bXrANDFZrR3KZqPg=',
        kategori: 'tahıl',
        kalori: 150,
        protein: 4,
        karbonhidrat: 30,
        yag: 1
    },
    {
        name: 'Mantı',
        description: 'Küçük hamur parçalarının içi kıyma ile doldurulup yoğurt ve sosla servis edilen yemek.',
        imageUrl: 'https://media.istockphoto.com/id/1345115754/tr/foto%C4%9Fraf/turkish-dumplings-manti.jpg?s=612x612&w=0&k=20&c=-RWmJDgIk7Xm1AlleEyWlH4Wo38sAbzUefvvuTQc76g=',
        kategori: 'tahıl',
        kalori: 350,
        protein: 15,
        karbonhidrat: 50,
        yag: 15
    },
    {
        name: 'Sucuklu Yumurta',
        description: 'Sucuk ve yumurtayla yapılan kahvaltılık yemek.',
        imageUrl: 'https://media.istockphoto.com/id/1432274951/tr/foto%C4%9Fraf/fried-eggs-with-turkish-sausage-with-bread-and-tea-on-dark-stone-table.jpg?s=612x612&w=0&k=20&c=XCbLEm1xiuKYmel4CCjrLmDW2qUNA-ndtQ3iVGoOtdE=',
        kategori: 'protein',
        kalori: 300,
        protein: 18,
        karbonhidrat: 1,
        yag: 25
    },
    {
        name: 'İmam Bayıldı',
        description: 'Zeytinyağlı patlıcan yemeği.',
        imageUrl: 'https://media.istockphoto.com/id/629390610/tr/foto%C4%9Fraf/imam-bayildi-with-vegetables-and-sesame-close-up-horizontal.jpg?s=612x612&w=0&k=20&c=voLEoFwFT91dV6PRImdKwWwTHaL8dDvBiy6-VmEDtgY=',
        kategori: 'sebze',
        kalori: 200,
        protein: 3,
        karbonhidrat: 20,
        yag: 15
    },
    {
        name: 'Kadayıf',
        description: 'Şerbetli tatlı.',
        imageUrl: 'https://media.istockphoto.com/id/1404682160/tr/foto%C4%9Fraf/traditional-style-kadayif-dessert.jpg?s=612x612&w=0&k=20&c=e4sV4ajb5O5GU8iuzjkphFq1qJ2MpT1ql1T7uNmMXfY=',
        kategori: 'tatlı',
        kalori: 450,
        protein: 6,
        karbonhidrat: 70,
        yag: 18
    },
    {
        name: 'Çoban Salata',
        description: 'Domates, salatalık, biber ve soğan ile yapılan salata.',
        imageUrl: 'https://media.istockphoto.com/id/1188245789/tr/foto%C4%9Fraf/salatal%C4%B1k-domates-k%C4%B1rm%C4%B1z%C4%B1-so%C4%9Fan-biber-maydanozlu-pide-ve-beyaz-peynirli-t%C3%BCrk-shepards.jpg?s=612x612&w=0&k=20&c=JnRH4Wz_u1sUNuj3WZSljv2bNFmmlq34yq0KD2zXiHI=',
        kategori: 'sebze',
        kalori: 50,
        protein: 1,
        karbonhidrat: 10,
        yag: 1
    },
    {
        name: 'Hünkar Beğendi',
        description: 'Közlenmiş patlıcan ve kuzu etiyle yapılan yemek.',
        imageUrl: 'https://media.istockphoto.com/id/1389303933/tr/foto%C4%9Fraf/many-kinds-of-food-at-the-hands-of-family-members-local-foods-named-h%C3%BCnkar-be%C4%9Fendi-or.jpg?s=612x612&w=0&k=20&c=cirFDiOOoxFtgLiz4bdbH5pPyFA2F_iMB70OBp_4TWU=',
        kategori: 'protein',
        kalori: 400,
        protein: 25,
        karbonhidrat: 20,
        yag: 25
    },
    {
        name: 'Muhallebi',
        description: 'Süt ve nişasta ile yapılan tatlı.',
        imageUrl: 'https://media.istockphoto.com/id/878728270/tr/foto%C4%9Fraf/tatl%C4%B1-ev-yap%C4%B1m%C4%B1-muz-puding.jpg?s=612x612&w=0&k=20&c=w8o21fFTQV7jnIg8GzptP9T-gmqECS1eLgL4Augu81I=',
        kategori: 'tatlı',
        kalori: 150,
        protein: 4,
        karbonhidrat: 20,
        yag: 6
    },
    {
        name: 'Revani',
        description: 'İrmik ve şerbetle yapılan tatlı.',
        imageUrl: 'https://media.istockphoto.com/id/1478645831/tr/foto%C4%9Fraf/revani-dessert-on-wood-background-traditional-ramadan-dessert-revani-dessert-with.jpg?s=612x612&w=0&k=20&c=AZcIsB155ioY9k4VL_M2xkj7OjrAcB7BOn4JVbAKtlg=',
        kategori: 'tatlı',
        kalori: 300,
        protein: 5,
        karbonhidrat: 50,
        yag: 10
    }
    ,
    {
        name: 'Biber Dolması',
        description: 'İç malzeme ile doldurulmuş biber.',
        imageUrl: 'https://media.istockphoto.com/id/511279947/tr/foto%C4%9Fraf/turk-305-sh-food-stuffed-peppers.jpg?s=612x612&w=0&k=20&c=nwtsE1c5sVQ1pmMNfGT9m8YqpJZ23nEaKDoeIwBXUq0=',
        kategori: 'sebze',
        kalori: 150,
        protein: 4,
        karbonhidrat: 25,
        yag: 6
    }
    ,
    {
        name: 'Etli Patates',
        description: 'Patates ve et ile yapılan yemek.',
        imageUrl: 'https://media.istockphoto.com/id/95617180/tr/foto%C4%9Fraf/beef-stew.jpg?s=612x612&w=0&k=20&c=ZlF-_NhyJaoOdaR6PThIl4DGZSpOgD9oLuU7G5I8ddI=',
        kategori: 'protein',
        kalori: 250,
        protein: 20,
        karbonhidrat: 30,
        yag: 10
    }
    ,
    {
        name: 'Kuru Fasulye',
        description: 'Kuru fasulye ve et ile yapılan geleneksel Türk yemeği.',
        imageUrl: 'https://media.istockphoto.com/id/1222166985/tr/foto%C4%9Fraf/t%C3%BCrk-g%C4%B1da-kuru-fasulye-pilav-sucuk-ile-masada.jpg?s=612x612&w=0&k=20&c=J88RKerxcVHOjiMZx6IJRy8UZzVuUbybC1xVZV971rI=',
        kategori: 'protein',
        kalori: 300,
        protein: 12,
        karbonhidrat: 50,
        yag: 6
    }
    ,
    {
        name: 'Güveç',
        description: 'Sebze ve etin güveçte pişirilmesiyle yapılan yemek.',
        imageUrl: 'https://media.istockphoto.com/id/1360850373/tr/foto%C4%9Fraf/top-view-of-turkish-dish-guvech-baked-meat-with-eggplant-and-traditionally-served-in.jpg?s=612x612&w=0&k=20&c=-hLXuerNj7SKLcNC6BAr3tW-MdYHUelbb4g3E0K5Mi8=',
        kategori: 'protein',
        kalori: 350,
        protein: 20,
        karbonhidrat: 20,
        yag: 18
    }
    ,
    {
        name: 'Havuç Tarator',
        description: 'Yoğurt ve havuçla yapılan meze.',
        imageUrl: 'https://media.istockphoto.com/id/1304266781/tr/foto%C4%9Fraf/geleneksel-lezzetli-t%C3%BCrk-yemekleri-kasede-sar%C4%B1msakl%C4%B1-yo%C4%9Furtlu-taze-havu%C3%A7-salatas%C4%B1-koyu.jpg?s=612x612&w=0&k=20&c=lnkZokm7OybdMAV9GhNY_sAMIUfnZCDzNoyzhPMOjT0=',
        kategori: 'sebze',
        kalori: 90,
        protein: 3,
        karbonhidrat: 10,
        yag: 5
    }
    ,
    {
        name: 'Zeytinyağlı Barbunya',
        description: 'Barbunya fasulyesi ile yapılan zeytinyağlı yemek.',
        imageUrl: 'https://media.istockphoto.com/id/1057064406/tr/foto%C4%9Fraf/barbunya-fasulye-veya-otlar-yak%C4%B1n-%C3%A7ekim-bir-kase-ile-domates-soslu-borlotti-ihtiva-eder.jpg?s=612x612&w=0&k=20&c=gomHVM2lxa1K6hN3lz9nGvv_XjK8Neo38meEohGXc5w=',
        kategori: 'sebze',
        kalori: 200,
        protein: 6,
        karbonhidrat: 30,
        yag: 8
    }
    ,
    {
        name: 'Fırında Karnabahar',
        description: 'Fırında pişirilmiş karnabahar yemeği.',
        imageUrl: 'https://media.istockphoto.com/id/1285489687/tr/foto%C4%9Fraf/f%C4%B1r%C4%B1nda-pi%C5%9Firilen-karnabahar-ve-patates-graten.jpg?s=612x612&w=0&k=20&c=F_-YK0kuiW803-s8EOpNdI77tKDAbYh9Cobtm1GnCig=',
        kategori: 'sebze',
        kalori: 180,
        protein: 5,
        karbonhidrat: 15,
        yag: 12
    }
    ,
    {
        name: 'Kuzu İncik',
        description: 'Yavaş pişirilmiş kuzu incik.',
        imageUrl: 'https://media.istockphoto.com/id/1017796378/tr/foto%C4%9Fraf/kuzu-1-bacak.jpg?s=612x612&w=0&k=20&c=JL7MoG-_GnSJ9Bo1IE40B7faY8c_PErN8TboyVD8YMU=',
        kategori: 'protein',
        kalori: 450,
        protein: 30,
        karbonhidrat: 0,
        yag: 35
    }
    ,
    {
        name: 'Fırında Tavuk',
        description: 'Fırında pişirilmiş tavuk yemeği.',
        imageUrl: 'https://media.istockphoto.com/id/1268693109/tr/foto%C4%9Fraf/k%C4%B1zarm%C4%B1%C5%9F-tavuk.jpg?s=612x612&w=0&k=20&c=hF7yhIbnBXIdwOey7ezJNsDMe6sGo3KiXpwFZMk3uqk=',
        kategori: 'protein',
        kalori: 300,
        protein: 25,
        karbonhidrat: 5,
        yag: 15
    }
    ,
    {
        name: 'Kuzu Pirzola',
        description: 'Izgarada pişirilmiş kuzu pirzola.',
        imageUrl: 'https://media.istockphoto.com/id/1396611600/tr/foto%C4%9Fraf/bbq-grilled-lamb-chops-steaks-in-a-plate-dark-background-top-view-copy-space.jpg?s=612x612&w=0&k=20&c=YyzLdBF_tnmynv0EI3tKrT-cxiVN0d7x61CsRg-xH8Q=',
        kategori: 'protein',
        kalori: 350,
        protein: 28,
        karbonhidrat: 0,
        yag: 25
    }
    ,
    {
        name: 'Kuzu Kavurma',
        description: 'Kızartılmış kuzu eti.',
        imageUrl: 'https://media.istockphoto.com/id/1349283605/tr/foto%C4%9Fraf/muslims-traditional-sacrifice-holiday-food-lamb-turkish-roasted-meat-in-copper-pot-on.jpg?s=612x612&w=0&k=20&c=MB_U1-_0PgalSo-xIJk1ZKCWVLqKzJYdRcVygfhVzPo=',
        kategori: 'protein',
        kalori: 400,
        protein: 30,
        karbonhidrat: 0,
        yag: 30
    }
    ,
    {
        name: 'Tavuk  Sote',
        description: 'Tavuk ve mantar ile yapılan sote.',
        imageUrl: 'https://media.istockphoto.com/id/820000846/tr/foto%C4%9Fraf/asya-tarz%C4%B1-sote-tavuk-wok-sebze-ile.jpg?s=612x612&w=0&k=20&c=ZPhV2jbOv0b4C-8eHbPLQ5Pdl_zsu182bsIHN_AP79Y=',
        kategori: 'protein',
        kalori: 250,
        protein: 20,
        karbonhidrat: 10,
        yag: 15
    }
    ,
    {
        name: 'Arnavut Ciğeri',
        description: 'Küçük parçalar halinde kızartılmış ciğer.',
        imageUrl: 'https://media.istockphoto.com/id/1757423749/tr/foto%C4%9Fraf/liver-pan-turkish-traditional-food-liver-over-rice.jpg?s=612x612&w=0&k=20&c=kL-zzdwvggRQGbOIeDmuIQLBGpUyTqzVQASvJkFDYZU=',
        kategori: 'protein',
        kalori: 250,
        protein: 20,
        karbonhidrat: 5,
        yag: 15
    },
    {
      name: 'İskender Kebap',
      description: 'Tereyağı ve domates sosu ile servis edilen döner kebap.',
      imageUrl: 'https://media.istockphoto.com/id/838109198/tr/foto%C4%9Fraf/t%C3%BCrk-iskender-kebap.jpg?s=612x612&w=0&k=20&c=q4y3NCrnt2onbLdviUeIH86241hiFTSM-DJegRHZh3Q=',
      kategori: 'protein',
      kalori: 500,
      protein: 25,
      karbonhidrat: 50,
      yag: 20
  }
  ,
    {
        name: 'İçli Köfte',
        description: 'İç harç ile doldurulmuş bulgur köftesi.',
        imageUrl: 'https://media.istockphoto.com/id/1476019725/tr/foto%C4%9Fraf/kibbeh-stuffed-meatballs-kibbeh-delicious-middle-eastern-food-icli-kofte.jpg?s=612x612&w=0&k=20&c=xJYaDNJr46_EfIrSYFq9RYBenfpDGZovUbycqTMMIOE=',
        kategori: 'protein',
        kalori: 200,
        protein: 10,
        karbonhidrat: 25,
        yag: 10
    }
    ,
    {
        name: 'Fırında Makarna',
        description: 'Beşamel sos ile fırınlanmış makarna.',
        imageUrl: 'https://media.istockphoto.com/id/1344718080/tr/foto%C4%9Fraf/pasta-casserole-with-bolognese-and-bechamel-sauce-and-mozzarella-cheese-topping.jpg?s=612x612&w=0&k=20&c=5P-VDqHDZIRlKREFL-6l2cW-8mB4BNN52WZo6DbGsHM=',
        kategori: 'tahıl',
        kalori: 400,
        protein: 15,
        karbonhidrat: 60,
        yag: 15
    }
    ,
    {
        name: 'Tarhana Çorbası',
        description: 'Tarhana ile yapılan geleneksel Türk çorbası.',
        imageUrl: 'https://media.istockphoto.com/id/605989916/tr/foto%C4%9Fraf/turkish-traditional-tarhana-soup.jpg?s=612x612&w=0&k=20&c=iUBTmJ6JzNdbKXYs2462biq6rmXtUqKLtguh5URMYzo=',
        kategori: 'çorba',
        kalori: 120,
        protein: 4,
        karbonhidrat: 18,
        yag: 3
    }
    ,
    {
        name: 'Zeytinyağlı Pırasa',
        description: 'Zeytinyağı ile pişirilmiş pırasa yemeği.',
        imageUrl: 'https://media.istockphoto.com/id/1205225830/tr/foto%C4%9Fraf/gemide-t%C3%BCrk-geleneksel-p%C4%B1rasa-pirin%C3%A7-ve-havu%C3%A7-meze-yemek.jpg?s=612x612&w=0&k=20&c=82VUF9h7krn22L4wtoNQcF-PEUuh7lJpmHS_JGHMnjc=',
        kategori: 'sebze',
        kalori: 90,
        protein: 2,
        karbonhidrat: 15,
        yag: 5
    }
    ,
    {
        name: 'Fındık',
        description: 'Vitamin ve mineral açısından zengin.',
        imageUrl: 'https://media.istockphoto.com/id/184322245/tr/foto%C4%9Fraf/bag-of-hazelnuts-on-wooden-table.jpg?s=612x612&w=0&k=20&c=o-qsNKnCpQ5bGFnIamlwnAsbVBJJuGJK7IHDSKMVt9Y=',
        kategori: 'kuruyemiş',
        kalori: 628,
        protein: 15,
        karbonhidrat: 17,
        yag: 61
    }
    ,
    {
        name: 'Ceviz',
        description: 'Omega-3 yağ asitleri açısından zengin.',
        imageUrl: 'https://media.istockphoto.com/id/478097270/tr/foto%C4%9Fraf/handful-of-walnuts-kernels.jpg?s=612x612&w=0&k=20&c=IMCbIQwwoxgwD8b2JZ_mLVoWX-GNh0jAEDX_DmNvX5c=',
        kategori: 'kuruyemiş',
        kalori: 654,
        protein: 15,
        karbonhidrat: 14,
        yag: 65
    }
    ,
    {
        name: 'Leblebi',
        description: 'Nohutla yapılan atıştırmalık.',
        imageUrl: 'https://media.istockphoto.com/id/1286590811/tr/foto%C4%9Fraf/siyah-kasede-kavrulmu%C5%9F-sar%C4%B1-nohut-ta%C5%9F-arka-plan.jpg?s=612x612&w=0&k=20&c=jzWUV8MoJDu5P4Sn8uZp8RmaiwipJwGcfjvUCFuIlEk=',
        kategori: 'kuruyemiş',
        kalori: 355,
        protein: 21,
        karbonhidrat: 58,
        yag: 5
    }
    ,
    {
        name: 'Yer Fıstığı',
        description: 'Protein ve lif açısından zengin.',
        imageUrl: 'https://media.istockphoto.com/id/1314840229/tr/foto%C4%9Fraf/hafif-bir-arka-plan-yak%C4%B1n-%C3%A7ekim-%C3%BCzerinde-yer-f%C4%B1st%C4%B1%C4%9F%C4%B1.jpg?s=612x612&w=0&k=20&c=WLITAwg41Hv1QEQ8W4GnfPYw9EDydieYqV_atJbodbY=',
        kategori: 'kuruyemiş',
        kalori: 567,
        protein: 26,
        karbonhidrat: 16,
        yag: 49
    }
    ,
    {
        name: 'Ezogelin Çorbası',
        description: 'Kırmızı mercimek, bulgur ve baharatlarla yapılan çorba.',
        imageUrl: 'https://media.istockphoto.com/id/1374562894/tr/foto%C4%9Fraf/traditional-soup-named-tarhana-%C3%A7orbas%C4%B1-and-ezogelin-soup.jpg?s=612x612&w=0&k=20&c=gd5oWfNVQzRKCprZKM8W-EGCIDZe2PvlZZnagpI2qXM=',
        kategori: 'çorba',
        kalori: 160,
        protein: 8,
        karbonhidrat: 23,
        yag: 5
    }
    ,
    {
        name: 'Yayla Çorbası',
        description: 'Yoğurt, pirinç ve nane ile yapılan çorba.',
        imageUrl: 'https://media.istockphoto.com/id/509240086/tr/foto%C4%9Fraf/homemade-hot-soup-in-a-bowl.jpg?s=612x612&w=0&k=20&c=nmLjAxgpqC9L0sasARnVu5T0vcYilGoxpBdRfKyP8fU=',
        kategori: 'çorba',
        kalori: 120,
        protein: 4,
        karbonhidrat: 16,
        yag: 4
    }
    ,
    {
        name: 'Balık Çorbası',
        description: 'Balık, sebze ve baharatlarla yapılan çorba.',
        imageUrl: 'https://media.istockphoto.com/id/1090567838/tr/foto%C4%9Fraf/cullen-skink-boyanmam%C4%B1%C5%9F-t%C3%BCts%C3%BClenmi%C5%9F-mezgit-%C3%A7orbas%C4%B1.jpg?s=612x612&w=0&k=20&c=qUFrUvjG5dDkrwyBVTc1YAZ8k57CZrstXE2_yg68LPc=',
        kategori: 'çorba',
        kalori: 150,
        protein: 12,
        karbonhidrat: 10,
        yag: 8
    }
    ,
    {
        name: 'Beyaz Peynir',
        description: 'Türk kahvaltısının vazgeçilmezi, tuzlu ve lezzetli bir peynir.',
        imageUrl: 'https://media.istockphoto.com/id/1356167393/tr/foto%C4%9Fraf/greek-feta-cheese-olives-and-aurugula.jpg?s=612x612&w=0&k=20&c=aoE4B4PiqEkRIuqnGE4V1mevm6pGBEyM4MP1cmAiaFI=',
        kategori: 'süt ürünleri',
        kalori: 264,
        protein: 14,
        karbonhidrat: 1.6,
        yag: 21
    },
    {
        name: 'Kaşar Peyniri',
        description: 'Tost ve sandviçlerde sıklıkla kullanılan sarı renkli peynir.',
        imageUrl: 'https://media.istockphoto.com/id/182661217/tr/foto%C4%9Fraf/sliced-cheese-tomatoes-and-herbs-in-a-cutting-board.jpg?s=612x612&w=0&k=20&c=nZIvFu453067ybvn6X19ho6BA-_z203saIUiwlC9u24=',
        kategori: 'süt ürünleri',
        kalori: 400,
        protein: 25,
        karbonhidrat: 2,
        yag: 33
    },
    {
        name: 'Labne Peyniri',
        description: 'Kremamsı dokusu ile kahvaltılarda ve tatlılarda kullanılan peynir.',
        imageUrl: 'https://media.istockphoto.com/id/1125596339/tr/foto%C4%9Fraf/labne-peynir-toplar%C4%B1-ile-kahverengi-ekmek-ye%C5%9Fil-zeytin-ve-hardal-tohumu.jpg?s=612x612&w=0&k=20&c=MEbszgTHLyE2b96yFbjVx7pZxn7wiZvOMevO82_2G8Y=',
        kategori: 'süt ürünleri',
        kalori: 300,
        protein: 10,
        karbonhidrat: 4,
        yag: 27
    },
    {
        name: 'Tulum Peyniri',
        description: 'Özellikle Ege Bölgesi’nde üretilen, keskin tatlı bir peynir.',
        imageUrl: 'https://ozisiksut.com.tr/wp-content/uploads/2021/11/1K2B7188.jpg',
        kategori: 'süt ürünleri',
        kalori: 362,
        protein: 19,
        karbonhidrat: 1.5,
        yag: 30
    },
    {
        name: 'Ayran',
        description: 'Yoğurt, su ve tuz ile yapılan ferahlatıcı içecek.',
        imageUrl: 'https://media.istockphoto.com/id/1270306337/tr/foto%C4%9Fraf/bak%C4%B1r-bardakta-t%C3%BCrk-ayran%C4%B1.jpg?s=612x612&w=0&k=20&c=Ayhb6JIkdpZ6GjdV4ntx0CHTMPF-U9Q7LlaPvNvpCeY=',
        kategori: 'süt ürünleri',
        kalori: 36,
        protein: 3,
        karbonhidrat: 4,
        yag: 0.8
    },
    {
        name: 'Kefir',
        description: 'Fermente süt içeceği, probiyotik açısından zengin.',
        imageUrl: 'https://media.istockphoto.com/id/683593390/tr/foto%C4%9Fraf/ek%C5%9Fi-s%C3%BCt-i%C3%A7ecek-veya-%C5%9Fi%C5%9Fe-yo%C4%9Furt-kefir-taneleri-ve-s%C3%BCt-ah%C5%9Fap-arka-plan-%C3%BCzerinde-gelebilir.jpg?s=612x612&w=0&k=20&c=scTV9-8f2eGB8uQy0Irk2bmqSd8xLDamIR1OCqU6yVg=',
        kategori: 'süt ürünleri',
        kalori: 60,
        protein: 3.5,
        karbonhidrat: 7,
        yag: 2
    },
    {
        name: 'Tereyağı',
        description: 'Süt kremasının çırpılması ile elde edilen yağ.',
        imageUrl: 'https://media.istockphoto.com/id/906372070/tr/foto%C4%9Fraf/tereya%C4%9F%C4%B1.jpg?s=612x612&w=0&k=20&c=pXbtjWSQ-9Mm652GDltUgtOV9CJvrB1ecpx6p8Mj9Ds=',
        kategori: 'süt ürünleri',
        kalori: 717,
        protein: 0.85,
        karbonhidrat: 0.06,
        yag: 81
    },
    {
        name: 'Kaymak',
        description: 'Süt kaynatılarak elde edilen kalın kremamsı tabaka.',
        imageUrl: 'https://media.istockphoto.com/id/1295969334/tr/foto%C4%9Fraf/t%C3%BCrk-kremal%C4%B1-s%C3%BCt-%C3%BCr%C3%BCnleri-p%C4%B1ht%C4%B1la%C5%9Fm%C4%B1%C5%9F-krema-s%C3%BCt-barda%C4%9F%C4%B1-ile-t%C3%BCrk-kahvalt%C4%B1s%C4%B1-i%C3%A7in.jpg?s=612x612&w=0&k=20&c=vbmyptxbjrn0GxekpL2UjLsY7de3gfH5grBFOARQpxU=',
        kategori: 'süt ürünleri',
        kalori: 445,
        protein: 2.1,
        karbonhidrat: 2.9,
        yag: 46
    },
    {
        name: 'Lor Peyniri',
        description: 'Yüksek proteinli, düşük yağlı peynir.',
        imageUrl: 'https://media.istockphoto.com/id/518148812/tr/foto%C4%9Fraf/fresh-cottage-cheese-on-old-wooden-table.jpg?s=612x612&w=0&k=20&c=36t0YzU7hOQpIlDutqIA8kKbpwxWZeEtSD62-p9o7G0=',
        kategori: 'süt ürünleri',
        kalori: 94,
        protein: 11,
        karbonhidrat: 3,
        yag: 4
    },
    {
        name: 'Süt',
        description: 'Besin değeri yüksek, doğal bir içecek.',
        imageUrl: 'https://media.istockphoto.com/id/1198789194/tr/foto%C4%9Fraf/kefir-s%C3%BCt-veya-t%C3%BCrk-ayran-i%C3%A7ece%C4%9Fi-bir-%C5%9Fi%C5%9Feden-cam-barda%C4%9Fa-d%C3%B6k%C3%BCl%C3%BCr-bir-cam-rustik-ah%C5%9Fap.jpg?s=612x612&w=0&k=20&c=Mbocv83BtASlnbs-ykfLYyPtaJoX_ELS4yJFP3PFpDg=',
        kategori: 'süt ürünleri',
        kalori: 42,
        protein: 3.4,
        karbonhidrat: 5,
        yag: 1
    },
    {
        name: 'Çedar Peyniri',
        description: 'Zengin aromalı, keskin bir peynir.',
        imageUrl: 'https://media.istockphoto.com/id/672526776/tr/foto%C4%9Fraf/beyaz-arka-plan-%C3%BCzerinde-izole-%C3%A7edar-peyniri.jpg?s=612x612&w=0&k=20&c=D1Y5h46EKcFpYll1ZeCbw88cpK9TXJp6_SzGU37OgEU=',
        kategori: 'süt ürünleri',
        kalori: 403,
        protein: 25,
        karbonhidrat: 1.3,
        yag: 33
    },
    {
        name: 'Mozzarella Peyniri',
        description: 'İtalyan kökenli, yumuşak peynir.',
        imageUrl: 'https://media.istockphoto.com/id/638156848/tr/foto%C4%9Fraf/italian-mozzarella-burrata.jpg?s=612x612&w=0&k=20&c=Q55NuzUZXP3XkhY2l6laumS6dd63esv9NKM2brLJJZ0=',
        kategori: 'süt ürünleri',
        kalori: 280,
        protein: 28,
        karbonhidrat: 3,
        yag: 17
    }

];

module.exports = foods;