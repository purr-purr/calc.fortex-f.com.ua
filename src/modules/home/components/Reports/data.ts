import { importDoc } from '@utils/formatters';
import { IDocumentsListGroup, type IDocumentsList } from '@utils/types';

export const financeReports: IDocumentsListGroup[] = [
	{
		groupTitle: '2024',
		list: [
			{
				title:
					'Звіт незалежного аудитора щодо річної звітності ТОВ ФОРТЕКС-ФІНАНС за рік, що закінчився 31.12.2024',
				link: importDoc(
					'Звіт незалежного аудитора щодо річної звітності ТОВ' +
						' ФОРТЕКС-ФІНАНС за рік, що закінчився 31.12.2024.pdf',
				),
			},
			{
				title: 'Звіт з надання впевненості',
				link: importDoc('Звіт з надання впевненості.pdf'),
			},
		],
	},
	{
		groupTitle: '2023',
		list: [
			{
				title:
					'Звіт з надання впевненості за результатами перевірки дотримання вимог Правил складання та подання звітності учасниками ринку небанківських фінансових послуг до Національного банку України за 2023 р',
				link: importDoc('Звіт з надання впевності.pdf'),
			},
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2023 рік',
				link: importDoc('Звіт незалежного аудитора.pdf'),
			},
		],
	},
	{
		groupTitle: '2022',
		list: [
			{
				title:
					'Звіт з надання впевненості за результатами перевірки дотримання вимог Правил складання та подання звітності учасниками ринку небанківських фінансових послуг до Національного банку України за 2022 р.',
				link: importDoc('Zvit z nadannya vpevnenosti Fortex-finance.pdf'),
			},
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2022 рік',
				link: importDoc('Zvit auditora Fortex-finance.pdf'),
			},
		],
	},
	{
		groupTitle: '2021',
		list: [
			{
				title:
					'Звіт з надання впевненості за результатами перевірки дотримання вимог Правил складання та подання звітності учасниками ринку небанківських фінансових послуг до Національного банку України за 2021 р.',
				link: importDoc('Звіт з надання впевненості за 2021.pdf'),
			},
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2021 рік',
				link: importDoc('Звіт_незалежного_аудитора_за_2021_р.pdf'),
			},
		],
	},
	{
		groupTitle: '2020',
		list: [
			{
				title:
					'Звіт незалежного аудитора з надання обгрунтованої впевненості щодо звітних даних за 2020 рік',
				link: importDoc(
					'Звіт з надання впевненності незалежного аудитора щодо річних звітних даних за 2020 рік.pdf',
				),
			},
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2020 рік',
				link: importDoc('Аудиторський звіт за 2020 рік.PDF'),
			},
		],
	},
	{
		groupTitle: '2019',
		list: [
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2019 рік',
				link: importDoc('Аудит висновок за 2019+примітки+.pdf'),
			},
			{
				title:
					'Звіт незалежного аудитора з надання обгрунтованої впевненості щодо звітних даних за 2019 рік::',
				link: importDoc(
					'Звіт незалежного аудитора з надання обгрунтованої впевненості щодо звітних даних - 2019.pdf',
				),
			},
		],
	},
	{
		groupTitle: '2018',
		list: [
			{
				title:
					'Звіт незалежного аудитора з надання обгрунтованої впевненості щодо звітних даних за 2018 рік:',
				link: importDoc(
					'Звіт незалежного аудитора з надання обгрунтованої впевненості щодо звітних даних - 2018.pdf',
				),
			},
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2018 рік:',
				link: importDoc('Аудит висновок за 2018+примітки+.pdf'),
			},
		],
	},
	{
		groupTitle: '2017',
		list: [
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2017 рік:',
				link: importDoc('Аудит висновок за 2017.pdf'),
			},
		],
	},
	{
		groupTitle: '2016',
		list: [
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2016 рік:',
				link: importDoc(
					'Аудиторський висновок що до фінансової звітності за 2016 рік.pdf',
				),
			},
		],
	},
	{
		groupTitle: '2015',
		list: [
			{
				title: 'Аудиторський висновок щодо фінансової звітності за 2015 рік:',
				link: importDoc('Аудит висновок 31 12 2015.pdf'),
			},
		],
	},
];

export const structureInfo: IDocumentsList[] = [
	{
		title: 'Структура власності ТОВ «ФОРТЕКС-ФІНАНС» станом на 17.03.2025',
		link: importDoc('1_Struktura vlasnosti na 17.03.2025.pdf'),
	},
	{
		title:
			'Відомості про остаточних ключових учасників ТОВ «ФОРТЕКС-ФІНАНС» станом на 17.03.2025',
		link: importDoc(
			'2_Vidomosti pro ostatochn.kliuch. uchasnykiv na 17.03.2025.pdf',
		),
	},
	{
		title:
			'Відомості  про власників істотної участі ТОВ «ФОРТЕКС-ФІНАНС» станом на 17.03.2025',
		link: importDoc(
			'3_Vidomosti pro vlasnykiv istotn. uchasti na 17.03.2025.pdf',
		),
	},
];

export const archivedInformation: IDocumentsList[] = [
	{
		title: 'Правила надання коштів в позику (редакція до 17.03.2025)',
		link: importDoc('3_Pravila kredit 06 2024.pdf'),
	},
	{
		title: 'Інформація про Товариство (редакція до 17.03.2025)',
		link: importDoc('4_Інформація про Товариство_318054212043.pdf'),
	},
	{
		title: 'Інформація про структуру власності станом на 01.01.2025',
		link: importDoc('5_структура власності на 01.01.2025.pdf'),
	},
	{
		title: 'Інформація про структуру власності станом на 04.07.2024',
		link: importDoc('6_Структура власності 04.07.2024.pdf'),
	},
];

export const documents: IDocumentsList[] = [
	{
		title: 'Примітки Фортекс Фінанс 2024',
		link: importDoc('примітки Фортекс Фінанс 2024.pdf'),
	},
	{
		title: 'Звіт про власний капітал',
		link: importDoc('Звіт_про_власний_капітал.pdf'),
	},
	{
		title: 'Звiт про рух грошових коштiв',
		link: importDoc('Звiт_про_рух_грошових_коштiв.pdf'),
	},
	{
		title: 'Звіт про фінансові результати',
		link: importDoc('Звіт_про_фінансові_результати.pdf'),
	},
	{
		title: 'Баланс',
		link: importDoc('Баланс.pdf'),
	},
	{
		title: 'Свідоцтво про реєстрацію фінансової установи',
		link: importDoc('Свідоцтво 13 04 2021.pdf'),
	},
	{
		title:
			'Правила надання коштів в кредит (для юр. осіб та' +
			' фіз.осіб-підприємців)',
		link: importDoc('PRAVYLA  kredyt.pdf'),
	},
	{
		title: 'Виписка з ЄДР ТОВ "Фортекс-Фінанс"',
		link: importDoc('Виписка з ЄДР ТОВ _Фортекс-Фінанс_.pdf'),
	},
	{
		title: 'Ліцензія на діяльність фінансової компанії ',
		link: importDoc(
			'Ліцензія надання коштів у позику, в тому числі і на умовах фінансового кредиту.pdf',
		),
	},
	{
		title: 'Порядок обробки і захисту персональних даних',
		link: importDoc('11.Poriadok obrobky i zakhystu personalnykh danykh.pdf'),
	},
	{
		title: 'Порядок розгляду звернень споживачів',
		link: importDoc('12.Poriadok rozghliadu zvernen spozhyvachiv.pdf'),
	},
	{
		title: 'Механізми захисту прав споживачів',
		link: importDoc('13.Mekhanizmy_zakhystu_prav_spozh.pdf'),
	},
	{
		title: 'Вимоги щодо етичної поведінки',
		link: importDoc('14.Vymohy shchodo etychnoi povedinky.pdf'),
	},
	{
		title:
			'Перелік контактних даних кредитодавця, нового кредитора, за якими приймаються\n' +
			'звернення споживачів фінансових послуг',
		link: importDoc('15.Perelik kontaktnykh danykh.pdf'),
	},
	{
		title: 'Порядок і спосіб погашення простроченої заборгованості',
		link: importDoc('16.Poriadok i sposib pohashennia zaborhovanosti.pdf'),
	},
	{
		title:
			'Порядок відступлення права вимоги за договором про споживчий кредит новому\n' +
			'кредитодавцю',
		link: importDoc('17.Poriadok vidstuplennia prava vymohy.pdf'),
	},
	{
		title: 'Умови початку врегулювання простроченої заборгованості',
		link: importDoc(
			'18.Umovy pochatku vrehuliuvannia prostrochenoi zaborhovanosti.pdf',
		),
	},
	{
		title: 'Відомості про залучені колекторські компанії',
		link: importDoc('19.Vidomosti pro kolektorski kompanii.pdf'),
	},
	{
		title: 'Порядок обробки і захисту персональних даних ',
		link: importDoc('1_Poriadok obrobky i zakhystu personalnykh danykh.pdf'),
	},
	{
		title: 'Порядок розгляду звернень споживачів ',
		link: importDoc('2_Poriadok rozghliadu zvernen spozhyvachiv.pdf'),
	},
	{
		title: 'Механізми захисту прав споживачів',
		link: importDoc('4_Mekhanizmy zakhystu prav spozh.pdf'),
	},
	{
		title:
			'Вимоги щодо взаємодії із Позичальником (Боржником) та іншими особами при врегулювання простроченої заборгованості.',
		link: importDoc(
			'5_Vymohy do etychnoi povedinky ta poriadok vzaiemodii_2025.pdf',
		),
	},
	{
		title:
			'Перелік контактних даних Товариства (Кредитодавця), нового кредитора, за якими приймаються звернення споживачів фінансових послуг щодо діяльності залученої колекторської компанії.',
		link: importDoc('6_Perelik danykh.pdf'),
	},
	{
		title:
			'Порядок і спосіб погашення простроченої заборгованості у ТОВ «ФОРТЕКС-ФІНАНС»',
		link: importDoc('7_Poriadok i sposib_.pdf'),
	},
];
