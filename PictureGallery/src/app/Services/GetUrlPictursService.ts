import {Picture} from '../models/Picture'

export class UrlService {

    private picture: Array<Picture> = [];
    
    constructor() {

        this.picture = 
        [
            new Picture("Клод Моне","Водяные лилии",1914,"«Кувшинки» (фр. Nymphéas) — цикл из приблизительно 250 картин французского художника-импрессиониста Клода Моне (1840—1926), выполненных в технике масляной живописи. Картины, изображающие цветник усадьбы Моне в Живерни, составляли главный предмет творческих усилий художника в последние тридцать лет его жизни. Многие из работ были созданы, когда Моне уже страдал от катаракты.","../../assets/PaintingsByArtists/CloudeMonet/1.jpg",0),
            new Picture("Леонардо да Винчи","Джоко́нда",1503,"(итал. Mona Lisa, La Gioconda, полное название — «Портре́т госпожи́ Ли́зы дель Джоко́ндо», итал. Ritratto di Monna Lisa del Giocondo) — картина Леонардо да Винчи, одно из самых известных произведений живописи. Точная дата написания неизвестна (по некоторым сведениям, написана между 1503 и 1505 годами). Ныне хранится в Лувре. Считается, что на картине изображена Лиза Герардини, супруга флорентийского торговца шёлком Франческо дель Джокондо.","../../assets/PaintingsByArtists/LeonardoDaVinci/1.jpg",1),
            new Picture("Леонардо да Винчи","Спаситель мира", 1490,"«Спаситель мира» — картина, полностью либо частично атрибутируемая как произведение итальянского художника и учёного Высокого Возрождения Леонардо да Винчи, различными исследователями датируемая в пределах 1499—1510 годов","../../assets/PaintingsByArtists/LeonardoDaVinci/2.jpg",2),
            new Picture("Сальвадор Дали","Дом для эротомана", 1932,"Картина передает каталонский пейзаж, скалы которых превращаются в фантастическое изображение, в котором доминируют две сущности. Конечности фигуры слева трансформируются в лошадь, виолончель и автомобиль, а выходящие из него два копья пронизывают непонятный, но несколько антропоморфный камень справа.","../../assets/PaintingsByArtists/SalvadorDali/1.jpg",3),
            new Picture("Сальвадор Дали","Скрытые лица", 1941,"Description","../../assets/PaintingsByArtists/SalvadorDali/2.jpg",4),
            new Picture("Сальвадор Дали","Лебеди, отражающиеся в слонах", 1937,"Образы-галлюцинации, порождаемые «параноидально-критическим методом» Дали, делятся на два основных типа: самостоятельный образ, который изменяется в соответствии с таинственными законами зрительного восприятия, как «Большой параноик», и группы из двух или более непохожих друг на друга объектов, в которых художник выявляет неожиданное сходство.","../../assets/PaintingsByArtists/SalvadorDali/3.jpg",5),
            
        ];

    }
    public GetUrl(): Picture[] {

        return this.picture;
    }



}