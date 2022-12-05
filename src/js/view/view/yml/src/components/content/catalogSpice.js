import oil from "../../img/png/product/oil.png";
import oil2 from "../../img/png/product/oil2.png";
import spice from "../../img/png/product/spice.png";

import CorianderCorn from "../../img/png/catalog/card/spice/CorianderCorn/Кориандр зерно.png";
import CorianderGround from "../../img/png/catalog/card/spice/CorianderGround/Кориандр молотый.png";
import DillCorn from "../../img/png/catalog/card/spice/DillCorn/Укроп зерно.png";
import DillGround from "../../img/png/catalog/card/spice/DillGround/Укроп молотый.png";
import FennelCorn from "../../img/png/catalog/card/spice/FennelCorn/Фенхель зерно.png";
import FennelGround from "../../img/png/catalog/card/spice/FennelGround/Фенхель молотый.png";
import MustardCorn from "../../img/png/catalog/card/spice/MustardCorn/Горчица зерно.png";
import MustardGround from "../../img/png/catalog/card/spice/FennelGround/Фенхель молотый.png";
import LinenCorn from "../../img/png/catalog/card/spice/LinenCorn/Лен.png";

export const coriander1 = {
  'en': {
    id: `spiceCorianderCorn`,
    name: `Сoriander`,
    materialShort: `seeds`,
    material: `Seeds`,
    description: `Coriander seeds are spherical, yellow-brown seeds containing two seed "embryos" each with anise-like odour and mild, nutty flavour`,
    application: [`Medicine`, `Cosmetology`, `Culinary Arts`],
    applicationDescription:
      `
    <span class="text-description">
      Coriander seeds are widely used as a spice for flavouring and fortification of meat and fish dishes, cheeses, marinade sauces, bakery and confectionery products. It is also used in the production of certain types of beer and liqueurs (in Germany).
    </span>
    `,
    slides: [CorianderCorn, oil2, oil],
  },
  'ru': {
    id: `spiceCorianderCorn`,
    name: `Кориандр`,
    materialShort: `зерно`,
    material: `зерно`,
    description: `Плод кориандра - шаровидная желто-бурая двусемянка, состоящая из двух односемянных нераскрывающихся плодиков. Имеет похожий на анис запах с легким ароматом ореха`,
    application: [`Медицина`, `Косметология`, `Кулинария`],
    applicationDescription:
      `
    <span class="text-description">
      Семена кориандра находят широкое применение как пряность для ароматизации и
      витаминизации мясных и рыбных блюд, сыров, маринадов, хлебобулочных и кондитерских изделий. Применяется
      также при изготовлении некоторых сортов пива и ликёров (в Германии).
    </span>
    <span class="text-description">
      <span class="weight--600">Кориандровый шрот (жмых)</span>
      содержит жирного масла свыше 6,0%, сырой клетчатки
      примерно 16%, сырого белка до 13% и эфирного масла около 0,018%. Кориандровый шрот - ценный корм для
      молочного скота, свиней, овец, птицы. Его используют в качестве составной части комбикормов. В последнее
      время получены хорошие результаты при использовании шрота на подкормку рыбы в прудах и водоемах.
    </span>
    `,
    slides: [CorianderCorn, oil2, oil],
  },
};

export const coriander2 = {
  'en': {
    id: `spiceCorianderGround`,
    name: `Сoriander`,
    materialShort: `powder`,
    material: `Powder`,
    grade: [`Top grade`, `1 grade`, `2 grade`],
    description: `Fragrant, yellow-brown spice, obtained from coriander seeds, with the characteristic vibrant scent and spicy, slightly peppery flavour`,
    application: [`Medicine`, `Cosmetology`, `Culinary Arts`],
    applicationDescription:
      `
    <span class="text-description">
      Coriander seeds are widely used as a spice for flavouring and fortification of meat and fish dishes, cheeses, marinade sauces, bakery and confectionery products. It is also used in the production of certain types of beer and liqueurs (in Germany).
    </span>
    `,
    slides: [CorianderGround, oil2, oil],
  },
  'ru': {
    id: `spiceCorianderGround`,
    name: `Кориандр`,
    materialShort: `молотый`,
    material: `молотый`,
    grade: [`Высший сорт`, `1 сорт`, `2 сорт`],
    description: `Душистая специя желто-бурого цвета, получаемая из плодов кориандра, с характереным насыщенным ароматом и жгуче-пряным вкусом`,
    application: [`Медицина`, `Косметология`, `Кулинария`],
    applicationDescription:
      `
    <span class="text-description">
      Семена кориандра находят широкое применение как пряность для ароматизации и
      витаминизации мясных и рыбных блюд, сыров, маринадов, хлебобулочных и кондитерских изделий. Применяется
      также при изготовлении некоторых сортов пива и ликёров (в Германии).
    </span>
    <span class="text-description">
      <span class="weight--600">Кориандровый шрот (жмых)</span>
      содержит жирного масла свыше 6,0%, сырой клетчатки
      примерно 16%, сырого белка до 13% и эфирного масла около 0,018%. Кориандровый шрот - ценный корм для
      молочного скота, свиней, овец, птицы. Его используют в качестве составной части комбикормов. В последнее
      время получены хорошие результаты при использовании шрота на подкормку рыбы в прудах и водоемах.
    </span>
    `,
    slides: [CorianderGround, oil2, oil],
  },
};

export const dill1 = {
  'en': {
    id: `spiceDillCorn`,
    name: `Dill`,
    materialShort: `seeds`,
    material: `Seeds`,
    description: `Dill seeds (cremocarp) consist of two half-fruits (mericarps). The seeds are greyish-brown colour and have the characteristic slightly sweet odour and bitter and spicy flavour`,
    application: [`Medicine`, `Culinary Arts`],
    applicationDescription:
      `
    <span class="text-description">
      Dill seeds are used as a seasoning to add savoury taste and aroma to  meat, fish and vegetable dishes, sauces and marinade sauces. They are also used in baking.
    </span>
  `,
    slides: [DillCorn, oil2, oil],
  },
  'ru': {
    id: `spiceDillCorn`,
    name: `Укроп`,
    materialShort: `зерно`,
    material: `зерно`,
    description: `Плод укропа - вислоплодник, состоящий из двух полуплодиков-мерикарпиев серовато-коричневого цвета. Зерно имеет характерный сладковатый аромат и пряный с горчинкой вкус`,
    application: [`Медицина`, `Кулинария`],
    applicationDescription:
      `
    <span class="text-description">
      Семена укропа применяют в качестве приправы – для создания пикантного вкуса и аромата мясным, рыбным и овощным блюдам, соусам и маринадам, а также в выпечке
      Кориандровый шрот (жмых) содержит жирного масла свыше 6,0%, сырой клетчатки примерно 16%, сырого белка до 13% и эфирного масла около 0,018%. Кориандровый шрот - 
      ценный корм для молочного скота, свиней, овец, птицы. Его используют в качестве составной части комбикормов. В последнее время получены хорошие 
      результаты при использовании шрота на подкормку рыбы в прудах и водоемах.
    </span>
  `,
    slides: [DillCorn, oil2, oil],
  },
};

export const dill2 = {
  'en': {
    id: `spiceDillGround`,
    name: `Dill`,
    materialShort: `powder`,
    material: `Powder`,
    grade: [`1 grade`, `2 grade`, `3 grade`],
    description: `Spicy, white and yellowish-brown seasoning with the characteristic slightly sweet odour and rich and bitterish flavour`,
    application: [`Medicine`, `Culinary Arts`],
    applicationDescription:
      `
    <span class="text-description">
      Dill seeds are used as a seasoning to add savoury taste and aroma to  meat, fish and vegetable dishes, sauces and marinade sauces. They are also used in baking.
    </span>
  `,
    slides: [DillGround, oil2, oil],
  },
  'ru': {
    id: `spiceDillGround`,
    name: `Укроп`,
    materialShort: `молотый`,
    material: `молотый`,
    grade: [`1 сорт`, `2 сорт`, `3 сорт`],
    description: `Пряная приправа желтовато-коричневого цвета с характерным сладковатый ароматом и насыщенным с горчинкой вкусом`,
    application: [`Медицина`, `Кулинария`],
    applicationDescription:
      `
    <span class="text-description">
      Семена укропа применяют в качестве приправы – для создания пикантного вкуса и аромата мясным, рыбным и овощным блюдам, соусам и маринадам, а также в выпечке
      Кориандровый шрот (жмых) содержит жирного масла свыше 6,0%, сырой клетчатки примерно 16%, сырого белка до 13% и эфирного масла около 0,018%. Кориандровый шрот - 
      ценный корм для молочного скота, свиней, овец, птицы. Его используют в качестве составной части комбикормов. В последнее время получены хорошие 
      результаты при использовании шрота на подкормку рыбы в прудах и водоемах.
    </span>
  `,
    slides: [DillGround, oil2, oil],
  },
};

export const fennel1 = {
  'en': {
    id: `spiceFennelCorn`,
    name: `Fennel`,
    materialShort: `seeds`,
    material: `Seeds`,
    description: `Fennel seeds are cylindrical, greenish-brown seeds up to 8 mm long, containing two seed "embryos" each. They have a spicy and slightly sweet odour, rich and slightly bitter flavour`,
    application: [`Medicine`, `Culinary Arts`],
    applicationDescription:
      `
    <span class="text-description">
      Fennel seeds are widely used as a spice in the production of liqueurs and confectionery (mainly cookies, pies and puddings). It is not for nothing that it’s quite often used for cooking fish dishes (especially carp) and vegetables, sauces (like mayonnaise), soups, marinade sauces and sometimes dried fruit drinks.
    </span>
  `,
    slides: [FennelCorn, oil2, oil],
  },
  'ru': {
    id: `spiceFennelCorn`,
    name: `Фенхель`,
    materialShort: `зерно`,
    material: `зерно`,
    description: `Плоды фенхеля — цилиндрические, зеленовато-бурые двусемянки длиной до 8 мм. Обладают пряным сладковатым ароматом и насыщенным с легкой горчинкой вкусом`,
    application: [`Медицина`, `Кулинария`],
    applicationDescription:
      `
    <span class="text-description">
      Плоды фенхеля применяют как пряность в производстве ликеров, кондитерских изделий, главным образом печенья, пирогов и пудингов. 
      По праву пользуется популярностью для приготовления блюд из рыбы (в особенности карпа) и овощей, соусов (например, майонеза), 
      супов, маринадов, а иногда и компотов. 
    </span>
  `,
    slides: [FennelCorn, oil2, oil],
  },
};

export const fennel2 = {
  'en': {
    id: `spiceFennelGround`,
    name: `Fennel`,
    materialShort: `powder`,
    material: `Powder`,
    description: `Fragrant fennel seeds seasoning of greenish-ocher colour with spicy and slightly sweet odour, rich and slightly bitter flavour`,
    application: [`Medicine`, `Culinary Arts`],
    applicationDescription:
      `
    <span class="text-description">
      Widely used as a spice in the production of liqueurs and confectionery (mainly cookies, pies and puddings). It is not for nothing that it’s quite often used for cooking fish dishes (especially carp) and vegetables, sauces (like mayonnaise), soups, marinade sauces and sometimes dried fruit drinks.
    </span>
  `,
    slides: [FennelGround, oil2, oil],
  },
  'ru': {
    id: `spiceFennelGround`,
    name: `Фенхель`,
    materialShort: `молотый`,
    material: `молотый`,
    description: `Душистая приправа из плодов фенхеля зеленовато-охристого цвета с пряным сладковатым ароматом и насыщенным с легкой горчинкой вкусом`,
    application: [`Медицина`, `Кулинария`],
    applicationDescription:
      `
    <span class="text-description">
      Применяют как пряность в производстве ликеров, кондитерских изделий, главным образом печенья, пирогов и пудингов. По праву пользуется популярностью 
      для приготовления блюд из рыбы (в особенности карпа) и овощей, соусов (например, майонеза), супов, маринадов, а иногда и компотов. 
    </span>
  `,
    slides: [FennelGround, oil2, oil],
  },
};

export const Mustard1 = {
  'en': {
    id: `spiceMustardCorn`,
    name: `Mustard`,
    materialShort: `seeds`,
    material: `Seeds`,
    description: `Mustard seeds are spherical (1.2-1.8 mm in diameter) and light (the weight of 1000 seeds is 2-4 g). They come in 3 types: reddish-brown, black with a glaucous bloom and yellow with a dimpled surface. The seeds have sharp and spicy taste`,
    application: [`Medicine`, `Manufacturing`, `Culinary Arts`],
    applicationDescription:
      `
    <span class="text-description">
      Both whole and ground seeds are used in culinary arts. Mustard is used in salad dressings and mayonnaise. It is added to cheese sauces and sauces for cabbage and cauliflower, artichoke or leek. It goes well with cold meats and sausages.
    </span>
  `,
    slides: [MustardCorn, oil2, oil],
  },
  'ru': {
    id: `spiceMustardCorn`,
    name: `Горчица`,
    materialShort: `зерно`,
    material: `зерно`,
    description: `Плоды горчицы - шаровидные (1,2-1,8 мм в диаметре) легкие (масса 1000 семян составляет 2-4 г) бывают 3х видов: красновато-коричневые, черные с сизым налетом и желтые с ячеистой поверхностью. Семена обладают острым, пикантным вкусом`,
    application: [`Медицина`, `Промышленность`, `Кулинария`],
    applicationDescription:
      `
    <span class="text-description">
      В кулинарии используют и целые, и молотые семена. Горчицу кладут в приправы для салатов и в майонезы. Ее добавляют в сырные соусы и соусы для белокачанной и цветной капусты, топинамбура или лука-порея. Она хорошо сочетается с холодным мясом и колбасами
      Кориандровый шрот (жмых) содержит жирного масла свыше 6,0%, сырой клетчатки примерно 16%, сырого белка до 13% и эфирного масла около 0,018%. Кориандровый шрот - ценный корм для молочного скота, свиней, овец, птицы. Его используют в качестве составной 
      части комбикормов. В последнее время получены хорошие результаты при использовании шрота на подкормку рыбы в прудах и водоемах.
    </span>
  `,
    slides: [MustardCorn, oil2, oil],
  },
};

export const Mustard2 = {
  'en': {
    id: `spiceMustardGround`,
    name: `Mustard`,
    materialShort: `powder`,
    material: `Powder`,
    description: `White and yellowish-brown mustard seed seasoning with a sharp bitter odour and piquant pungency`,
    application: [`Medicine`, `Cosmetology`, `Manufacturing`, `Culinary Arts`],
    applicationDescription:
      `
    <span class="text-description">
      Both whole and ground seeds are used in culinary arts. Mustard is used in salad dressings and mayonnaise. It is added to cheese sauces and sauces for cabbage and cauliflower, artichoke or leek. It goes well with cold meats and sausages.
    </span>
  `,
    slides: [MustardGround, oil2, oil],
  },
  'ru': {
    id: `spiceMustardGround`,
    name: `Горчица`,
    materialShort: `молотая`,
    material: `молотая`,
    description: `Приправа из плодов горчицы белого, желтовато-коричневого цвета с резким горьковатым запахом и острым, пикатным вкусом`,
    application: [`Медицина`, `Косметология`, `Промышленность`, `Кулинария`],
    applicationDescription:
      `
    <span class="text-description">
      В кулинарии используют и целые, и молотые семена. Горчицу кладут в приправы для салатов и в майонезы. Ее добавляют в сырные соусы и соусы для белокачанной и цветной капусты, топинамбура или лука-порея. Она хорошо сочетается с холодным мясом и колбасами
      Кориандровый шрот (жмых) содержит жирного масла свыше 6,0%, сырой клетчатки примерно 16%, сырого белка до 13% и эфирного масла около 0,018%. Кориандровый шрот - ценный корм для молочного скота, свиней, овец, птицы. Его используют в качестве составной 
      части комбикормов. В последнее время получены хорошие результаты при использовании шрота на подкормку рыбы в прудах и водоемах.
    </span>
  `,
    slides: [MustardGround, oil2, oil],
  },
};

export const Linen1 = {
  'en': {
    id: `spiceLinenCorn`,
    name: `Flax`,
    materialShort: `seeds`,
    material: `Seeds`,
    description: `Flax seeds are smooth and shiny, 3.3-5 mm long, ovoid or oblong-elliptical, slightly unequal-edged, strongly flattened, rounded at the base, sharp at the top, from light brown to dark brown, sometimes greenish yellow colour`,
    application: [`Medicine`, `Cosmetology`, `Manufacturing`, `Culinary Arts`],
    applicationDescription:
      `
    <span class="text-description">
      Flaxseed oil is used in various industries, such as paints and varnishes, food and pharmaceuticals, but most commonly it’s used for the drying oil production (base for varnishes and paints), as well as for the soap production. 
      Coriander oil cake (press cake) contains over 6.0% fatty oil, about 16% crude fiber, up to 13% crude protein and about 0.018% essential oil.
      Coriander oil cake is a valuable feed for dairy cattle, pigs, sheep, poultry. It is used as an ingredient in compound animal feed. Good results have been obtained recently when using oil cake for feeding fish in ponds and other water bodies.    
    </span>
  `,
    slides: [LinenCorn, oil2, oil],
  },
  'ru': {
    id: `spiceLinenCorn`,
    name: `Лен`,
    materialShort: `зерно`,
    material: `зерно`,
    description: `Плоды льна - гладкие и блестящие, 3,3—5 мм длиной, яйцевидные или удлинённо-эллиптические, несколько неравнобокие, сильно сплюснутые, округлённые при основании, островатые на верхушке, от светло-коричневого до тёмно-бурого, изредка зеленовато-жёлтого цвета`,
    application: [`Медицина`, `Косметология`, `Промышленность`, `Кулинария`],
    applicationDescription:
      `
    <span class="text-description">
      Льняное масло используется в пищевой, лакокрасочной и фармацевтической промышленности,  но чаще всего его используют для приготовления олифы (основы для лаков и красок), а также для изготовления мыла
      Кориандровый шрот (жмых) содержит жирного масла свыше 6,0%, сырой клетчатки примерно 16%, сырого белка до 13% и эфирного масла около 0,018%. Кориандровый шрот - ценный корм для молочного скота, свиней, овец, птицы. Его используют в качестве составной части комбикормов. В последнее время получены хорошие результаты при использовании шрота на подкормку рыбы в прудах и водоемах.
    </span>
  `,
    slides: [LinenCorn, oil2, oil],
  },
};