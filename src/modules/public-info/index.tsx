import { useEffect } from 'react';
import Image from 'next/image';

import { COMPANY_FULL_NAME } from '@utils/const';

import CARD2GO_IMG from './assets/card-2-go.jpg';
import INSHA_EN_IMG from './assets/insha-en.jpg';
import INSHA_UA_IMG from './assets/insha-ua.jpg';
import s from './PublicInfo.module.scss';

const PublicInfo = () => {
	useEffect(() => {
		const link = document.createElement('a');
		const fileName = '10. Publichna informatsiia ta pro diialnist.pdf';
		link.href = '../assets/documents/' + fileName;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}, []);

	return (
		<section className={s.container}>
			<article className={s.inner}>
				<h2 className={s.title}>
					Публічна інформація та інша інформація щодо умов та порядку діяльності,
					включно щодо фінансових послуг, які надаються ТОВ «ФОРТЕКС-ФІНАНС» клієнту{' '}
				</h2>
				<div className={s.table}>
					<table>
						<tbody>
							<tr>
								<td>
									<strong>1.</strong>
								</td>
								<td>
									<strong>Повне найменування Товариства</strong>
									<strong>Скорочене найменування Товариства</strong>
								</td>
								<td>
									<strong>
										ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ &quot;ФОРТЕКС-ФІНАНС&quot;
									</strong>
									<strong>{COMPANY_FULL_NAME}</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>2.</strong>
								</td>
								<td>
									<strong>Код ЄДРПОУ</strong>
								</td>
								<td>
									<strong>39859779</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>3.</strong>
								</td>
								<td>
									<strong>Інформація про торговельні марки:</strong>
									<p>
										(знаки для товарів і послуг), які використовуються надавачем
										фінансових послуг для надання ним відповідних видів фінансових послуг,
										шляхом розміщення на власному вебсайті наявного зображення позначень,
										які є об’єктом торговельної марки, свідоцтва про реєстрацію/заявки на
										торговельну марку (знак для товарів та послуг) (за наявності) або
										документів, які підтверджують наявність інших правових підстав
										використання торг. марок (знаків для товарів і послуг)
									</p>
								</td>
								<td>
									<strong>
										Товариство має зареєстровані торговельні марки але не використовує та
										не має наміру їх використовувати.
									</strong>
									<p>1) Свідоцтво на торговельну марку № 284013</p>
									<a href="https://iprop-ua.com/tm/nnzyg63u/">
										https://iprop-ua.com/tm/nnzyg63u/
									</a>
									<Image src={INSHA_UA_IMG} width="217" height="217" alt="img" />
									<p>
										Дата реєстрації знака 12.10.2020. Очікувана дата закінчення строку дії
										свідоцтва 02.10.2028. Дата публікації та номер бюлетеня 12.10.2020,
										бюл. № 19/2020.
									</p>
									<p>2) Свідоцтво на торговельну марку №284012</p>
									<a href="https://iprop-ua.com/tm/mp5kp4uy/">
										https://iprop-ua.com/tm/mp5kp4uy/
									</a>
									<Image src={INSHA_EN_IMG} width="226" height="223" alt="img" />
									<p>
										Дата реєстрації знака 12.10.2020. Очікувана дата закінчення строку дії
										свідоцтва 02.10.2028. Дата публікації та номер бюлетеня 12.10.2020,
										бюл. № 19/2020.
									</p>
									<p>3) Свідоцтво на торговельну марку № 286624</p>
									<a href="https://iprop-ua.com/tm/0ljg1m57/">
										https://iprop-ua.com/tm/0ljg1m57/
									</a>
									<Image src={CARD2GO_IMG} width="247" height="250" alt="img" />
									<p>
										Дата реєстрації знака 25.11.2020. Очікувана дата закінчення строку дії
										свідоцтва 06.11.2028. Дата публікації та номер бюлетеня 25.11.2020,
										бюл. № 22/2020.
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<strong>4.</strong>
								</td>
								<td>
									<strong>
										Відомості про державну реєстрацію в Єдиному державному реєстрі:
									</strong>
								</td>
								<td>
									<p>Дата реєстрації 25.06.2015</p>
									<p>Номер запису 1 070 102 0000 058386</p>
									<p>Код ЄДРПОУ 39859779</p>
								</td>
							</tr>
							<tr>
								<td>
									<strong>5.</strong>
								</td>
								<td>
									<strong>Адреса місцезнаходження відповідно до відомостей ЄДР</strong>
									<strong>
										Фактична адреса місце провадження господарської діяльності з надання
										фінансових послуг
									</strong>
								</td>
								<td>
									<p>
										Україна, 02157, місто Київ, Харківське шосе, будинок 19, приміщення
										2005, офіс 1
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<strong>6.</strong>
								</td>
								<td>
									<strong>
										Адреса, за якою приймаються скарги споживачів фінансових послуг
									</strong>
								</td>
								<td>
									<p>
										Україна, 02157, місто Київ, Харківське шосе, будинок 19, приміщення
										2005, офіс 1
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<strong>7.</strong>
								</td>
								<td>
									<strong>Номер контактного телефону</strong>
								</td>
								<td>
									<strong>+38 066 536 49 23</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>8.</strong>
								</td>
								<td>
									<strong>
										Номер контактного телефону зв&apos;язку доступні для захищеної
										категорії осіб
									</strong>
								</td>
								<td>
									<strong>+38 066 536 49 23</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>9.</strong>
								</td>
								<td>
									<strong>Адреса електронної пошти</strong>
								</td>
								<td>
									<a href="mailto:fortexfinance@ukr.net">fortexfinance@ukr.net</a>
								</td>
							</tr>
							<tr>
								<td>
									<strong>10.</strong>
								</td>
								<td>
									<strong>
										Перелік власних вебсайтів Товариства, які використовуються надавачем
										фін. послуг та на яких здійснюється інформування про умови та порядок
										діяльності надавача фін. послуг, умови та порядок надання ним
										фінансових послуг, а також обслуговування клієнтів
									</strong>
								</td>
								<td>
									<a href="https://www.fortex-f.com.ua/">https://www.fortex-f.com.ua/</a>
								</td>
							</tr>
							<tr>
								<td>
									<strong>11.</strong>
								</td>
								<td>
									<strong>
										Перелік керівників фінансової установи та її відокремлених підрозділів
									</strong>
								</td>
								<td>
									<p>Директор - Момот Оксана Михайлівна</p>
									<p>Головний бухгалтер - Салій Ольга Петрівна</p>
									<p>Відокремлені підрозділи – відсутні.</p>
								</td>
							</tr>
							<tr>
								<td>
									<strong>12.</strong>
								</td>
								<td>
									<strong>
										Інформація щодо включення фінансової установи до відповідного
										державного реєстру фінансових установ
									</strong>
								</td>
								<td>
									<p>
										Товариство включене до Державного реєстру фінансових установ, який
										веде Національний банк України. Свідоцтво про реєстрацію фінансової
										установи серії <strong>ФК №В0000212</strong>, дата видачі свідоцтва{' '}
										<strong>13.04.2021</strong>, дата прийняття та номер рішення про
										внесення фінансової установи до Державного реєстру фінансових установ{' '}
										<strong>20.08.2015 № 2022</strong>, реєстраційний номер{' '}
										<strong>13103177</strong>.
									</p>
									<p>
										<strong>
											Посилання на Комплексно інформаційну систему Національного банку
											України:
										</strong>{' '}
										<a href="https://kis.bank.gov.ua">https://kis.bank.gov.ua</a>
									</p>
									<p>
										Для отримання повної інформації щодо Товариства, ліцензування,
										реєстрацію та авторизацію якого здійснює Національний банк України,
										рекомендуємо використовувати всі засоби пошуку, які розміщені сторінці
										за посиланням{' '}
										<a href="https://bank.gov.ua/ua/supervision/nonbanks/registers-lists">
											https://bank.gov.ua/ua/supervision/nonbanks/registers-lists
										</a>
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<strong>13.</strong>
								</td>
								<td>
									<strong>
										Інформація щодо наявності в особи, яка надає фінансові послуги, права
										на надання відповідної фінансової послуги
									</strong>
								</td>
								<td>
									<p>
										Товариство має чинну ліцензію.{' '}
										<strong>ЛІЦЕНЗІЯ НА ДІЯЛЬНІСТЬ ФІНАНСОВОЇ КОМПАНІЇ</strong>, з правом
										надання фінансової послуги{' '}
										<strong>НАДАННЯ КОШТІВ ТА БАНКІВСЬКИХ МЕТАЛІВ У КРЕДИТ</strong>, дата
										видачі ліцензії <strong>20.05.2024</strong>. Строк ліцензії
										необмежений.
									</p>
									<p>
										Посилання на Комплексно інформаційну систему Національного банку
										України: <a href="https://kis.bank.gov.ua">https://kis.bank.gov.ua</a>
									</p>
									<p>
										Для отримання повної інформації щодо Товариства, ліцензування,
										реєстрацію та авторизацію якого здійснює Національний банк України,
										рекомендуємо використовувати всі засоби пошуку, які розміщені сторінці
										за посиланням{' '}
										<a href="https://bank.gov.ua/ua/supervision/nonbanks/registers-lists">
											https://bank.gov.ua/ua/supervision/nonbanks/registers-lists
										</a>
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<strong>14.</strong>
								</td>
								<td>
									<strong>
										Відомості про склад наглядової ради та виконавчого органу надавача
										фінансових послуг
									</strong>
								</td>
								<td>
									<p>Наглядова рада не утворювалась</p>
								</td>
							</tr>
							<tr>
								<td>
									<strong>15.</strong>
								</td>
								<td>
									<strong>
										Перелік послуг, що надаються фінансовою установою, порядок та умови їх
										надання
									</strong>
								</td>
								<td>
									<p>
										Товариство надає єдиний вид фінансової послуги:{' '}
										<strong>НАДАННЯ КОШТІВ ТА БАНКІВСЬКИХ МЕТАЛІВ У КРЕДИТ</strong>.
									</p>
									<p>
										Товариство здійснює кредитування юридичних осіб, фізичних
										осіб-підприємців. Товариство не здійснює кредитування споживачів.
										Порядок та умови надання фінансової послуги розміщені на сайті
										Товариства.
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<strong>16.</strong>
								</td>
								<td>
									<strong>
										Відомості про власників істотної участі (у тому числі осіб, які
										здійснюють контроль за фінансовою установою)
									</strong>
								</td>
								<td>
									<p>
										<strong>Момот Оксана Михайлівна</strong>
									</p>
									<p>
										Частка володіння: <strong>100,00%</strong>
									</p>
									<p>
										Країна громадянства: <strong>Україна</strong>
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<strong>17.</strong>
								</td>
								<td>
									<strong>
										Відомості про фінансові показники діяльності фінансової установи та її
										економічний стан, які підлягають обов’язковому оприлюдненню
									</strong>
								</td>
								<td>
									<p>
										З інформацією про основні показники діяльності Товариства на підставі
										поданої до Національного банку України звітності можна ознайомитись за
										посиланням:{' '}
										<a href="https://bank.gov.ua/ua/statistic/supervision-statist/data-supervision">
											https://bank.gov.ua/ua/statistic/supervision-statist/data-supervision
										</a>
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<strong>18.</strong>
								</td>
								<td>
									<strong>
										Відомості про режим робочого часу надавача фінансових послуг, протягом
										якого здійснюється надання відповідних видів фінансових послуг, а саме
										робочі та вихідні дні, робочі години та години перерви
									</strong>
								</td>
								<td>
									<p>
										<strong>Робочі дні (крім святкових і неробочих днів):</strong>{' '}
										понеділок - п’ятниця з 09:00 до 18:00
									</p>
									<p>
										<strong>Обідня перерва:</strong> з 13:00 до 14:00
									</p>
									<p>
										<strong>Вихідні дні:</strong> субота та неділя
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<strong>19.</strong>
								</td>
								<td>
									<strong>
										Відомості про відокремлені підрозділи фінансової установи
									</strong>
								</td>
								<td>
									<p>
										<strong>Відсутні відокремлені підрозділи</strong>
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<strong>20.</strong>
								</td>
								<td>
									<strong>Річна фінансова та консолідована фінансова звітність</strong>
								</td>
								<td>
									<strong>
										Річна фінансова та консолідована фінансова звітність Товариства разом
										з аудиторським звітом, що підтверджує її достовірність, у строки,
										визначені Законом України «Про бухгалтерський облік та фінансову
										звітність в Україні», розміщена на власному сайті Товариства.
									</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>21.</strong>
								</td>
								<td>
									<strong>
										Інша інформація про надавача фінансових послуг, що підлягає
										оприлюдненню відповідно до законодавства України, шляхом розкриття
										звітних даних про його діяльність
									</strong>
								</td>
								<td>
									<strong>
										Інша інформація про Товариство, що підлягає оприлюдненню відповідно до
										законодавства України, шляхом розкриття звітних даних про діяльність
										Товариства, що складається та подається відповідно до вимог законів з
										питань регулювання ринків фінансових послуг розміщена на власному
										сайті Товариства.
									</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>22.</strong>
								</td>
								<td>
									<strong>
										Відомості про порушення провадження в справі про банкрутство
									</strong>
								</td>
								<td>
									<strong>Не порушено справи про банкрутство Товариства.</strong>
									<br />
									Не здійснюється введення процедури санації Товариства.
								</td>
							</tr>
							<tr>
								<td>
									<strong>23.</strong>
								</td>
								<td>
									<strong>
										Відомості про початок процедури ліквідації надавача фін. послуг
									</strong>
								</td>
								<td>
									<strong>Рішення про ліквідацію Товариства не приймалося.</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>24.</strong>
								</td>
								<td>
									<strong>Перелік осіб, які надають посередницькі послуги</strong>
								</td>
								<td>
									<strong>
										Фінансова послуга надається Товариством без участі посередників.
									</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>25.</strong>
								</td>
								<td>
									<strong>Інформація про умови та порядок надання фін. послуг</strong>
								</td>
								<td>
									<strong>
										На сайті Товариства розміщена копія внутрішніх правил, та ціни/тарифи
										надання фінансової послуги.
									</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>26.</strong>
								</td>
								<td>
									<strong>
										Контактна інформацію органу, який здійснює державне регулювання
									</strong>
								</td>
								<td>
									<strong>
										Національний банк України: 01601, м. Київ, вулиця Інститутська, 9
										<br />
										Тел.: 0 800 505 240, email:{' '}
										<a href="mailto:nbu@bank.gov.ua">nbu@bank.gov.ua</a>
										<br />
										Головне управління Держпродспоживслужби в м. Києві: м. Київ, вул.
										Некрасовська, 10/8.; Тел.: +38 (044) 486-54-86,{' '}
										<a href="mailto:info@kyiv-dpss.gov.ua">info@kyiv-dpss.gov.ua</a>
									</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>27.</strong>
								</td>
								<td>
									<strong>
										Вартість, ціна/тарифи, розмір плати щодо фінансових послуг
									</strong>
								</td>
								<td>
									<strong>
										На сайті Товариства розміщена інформація про вартість, ціну/тарифи,
										розмір плати щодо продуктів ТОВ «ФОРТЕКС-ФІНАНС» за видом фінансової
										послуги.
									</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>28.</strong>
								</td>
								<td>
									<strong>
										Інформація про механізми захисту прав споживачів фінансових послуг
									</strong>
								</td>
								<td>
									<strong>
										На сайті Товариства розміщена інформація про механізми захисту прав
										споживачів фінансових послуг Товариства.
									</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>29.</strong>
								</td>
								<td>
									<strong>Загальна сума зборів, платежів та інших витрат</strong>
								</td>
								<td>
									<strong>
										Порядок сплати податків і зборів за рахунок фізичної особи в
										результаті отримання фінансової послуги здійснюється відповідно до
										вимог чинного законодавства.
									</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>30.</strong>
								</td>
								<td>
									<strong>Договір про надання фінансових послуг</strong>
									<br />
									<strong>а) наявність у клієнта права на відмову від договору</strong>
								</td>
								<td>
									<strong>
										Клієнт має право відмовитися від Договору надання фінансової послуги
										протягом 14 календарних днів з дня його укладення шляхом подання
										письмової заяви за адресою Товариства.
									</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>31.</strong>
								</td>
								<td>
									<strong>Договір про надання фінансових послуг</strong>
									<br />
									<strong>б) строк використання права на відмову</strong>
								</td>
								<td>
									<strong>
										Протягом 14 календарних днів з дня укладення договору, подаючи
										письмову заяву за адресою Товариства.
									</strong>
								</td>
							</tr>
							<tr>
								<td>
									<strong>32.</strong>
								</td>
								<td>
									<strong>Договір про надання фінансових послуг</strong>
									<br />
									<strong>в) мінімальний строк дії договору</strong>
								</td>
								<td>
									<strong>Мінімальний строк кредитування: 3 дні</strong>
								</td>
							</tr>

							<tr>
								<td>
									<strong>33.</strong>
								</td>
								<td>
									<strong>Договір про надання фінансових послуг:</strong>
									<br />
									<strong>
										г) Наявність у клієнта права розірвати чи припинити договір, права
										дострокового виконання договору, а також наслідки таких дій
									</strong>
								</td>
								<td>
									Дострокове припинення надання фінансової послуги здійснюється внаслідок
									розірвання Договору. Порядок і підстави розірвання Договору
									визначаються Договором. У разі розірвання Договору клієнт та Товариство
									зобов’язуються провести взаємні розрахунки:
									<ul>
										<li>
											Товариство за заявою клієнта переказує залишок коштів клієнта на
											банківський рахунок.
										</li>
										<li>
											Клієнт повинен погасити усю існуючу заборгованість перед Товариством.
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<td>
									<strong>34.</strong>
								</td>
								<td>
									<strong>Договір про надання фінансових послуг:</strong>
									<br />
									<strong>ґ) Порядок внесення змін та доповнень до договору</strong>
								</td>
								<td>
									Зміни та доповнення вносяться до Договору за взаємною згодою сторін.
								</td>
							</tr>
							<tr>
								<td>
									<strong>35.</strong>
								</td>
								<td>
									<strong>Договір про надання фінансових послуг:</strong>
									<br />
									<strong>
										Неможливість збільшення фіксованої процентної ставки без письмової
										згоди споживача фінансової послуги
									</strong>
								</td>
								<td>
									Процентна ставка, встановлена Договором, є фіксованою та не може бути
									збільшеною без письмової згоди клієнта.
								</td>
							</tr>
							<tr>
								<td>
									<strong>36.</strong>
								</td>
								<td colSpan={2}>
									До фінансових послуг Товариством не застосовуються гарантійні фонди або
									компенсаційні схеми. Якщо клієнт не надає необхідні документи,
									Товариство має право відмовити в укладенні Договору. Механізм захисту
									прав споживачів: позасудовий розгляд звернень клієнтів і
									консультування.
								</td>
							</tr>
							<tr>
								<td>
									<strong>37.</strong>
								</td>
								<td>
									<strong>
										Умови надання додаткових фінансових послуг та їх вартість
									</strong>
								</td>
								<td>Товариство не надає додаткових фінансових послуг.</td>
							</tr>
							<tr>
								<td>
									<strong>38.</strong>
								</td>
								<td>
									<strong>
										Розмір винагороди фінансової установи у разі пропозиції фінансових
										послуг іншими установами
									</strong>
								</td>
								<td>
									Товариство не надає і не пропонує фінансові послуги, які надаються
									іншими фінансовими установами.
								</td>
							</tr>
							<tr>
								<td>
									<strong>39.</strong>
								</td>
								<td>
									<strong>
										Правові наслідки та порядок розрахунків при достроковому припиненні
										надання фінансової послуги
									</strong>
								</td>
								<td>
									Позичальник може достроково повернути кредит, сплативши відсотки за
									фактичний залишок і термін користування кредитом. Штрафи чи комісії за
									дострокове повернення відсутні.
								</td>
							</tr>
							<tr>
								<td>
									<strong>40.</strong>
								</td>
								<td colSpan={2}>
									<p style={{ textAlign: 'center' }}>
										<strong>
											Механізми захисту прав споживачів (клієнтів) ТОВ «ФОРТЕКС-ФІНАНС»
										</strong>
									</p>
									<p>
										Кожен клієнт має право звернутися до Товариства для розгляду звернень.
										Спори вирішуються шляхом переговорів за участю Товариства.
									</p>
									<p>
										Механізми захисту прав споживачів включають позасудовий розгляд
										звернень відповідно до Закону України «Про звернення громадян».
										Контакти для звернень:
									</p>
									<ul>
										<li>Письмово, поштою на адресу Товариства;</li>
										<li>
											Електронною поштою:{' '}
											<a href="mailto:fortexfinance@ukr.net">fortexfinance@ukr.net</a>;
										</li>
										<li>
											Телефоном: <a href="tel:+380976470934">+380665364923</a>.
										</li>
									</ul>
									<br />
									<p>
										Також клієнт може звернутися до Національного банку України або
										судових органів через офіційний сайт.
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<strong>41.</strong>
								</td>
								<td>
									<strong>
										Посилання на структури власності Товариства на сайті Національного
										банку України
									</strong>
								</td>
								<td>
									<a href="https://bank.gov.ua/ua/supervision/licensing-nonbanking/shareholders-nfp/39859779">
										https://bank.gov.ua/ua/supervision/licensing-nonbanking/shareholders-nfp/39859779
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</article>

			<article className={s.inner}>
				<h2 className={s.title}>
					Інформація про фінансову послугу, яку надає ТОВ «ФОРТЕКС-ФІНАНС» клієнту
				</h2>
				<p>
					Вартість, ціна/тарифи, розмір плати (проценти, винагорода) щодо продуктів
					ТОВ «ФОРТЕКС-ФІНАНС» за видом фінансової послуги з надання коштів та
					банківських металів у кредит, що пропонуються юридичним особам та фізичним
					особам-підприємцям.
				</p>

				<div className={s.table}>
					<table>
						<tbody>
							<tr>
								<td>
									<strong>Мінімальна сума кредиту</strong>
								</td>
								<td>1 тис. грн.</td>
							</tr>
							<tr>
								<td>
									<strong>Максимальна сума кредиту</strong>
								</td>
								<td>10 000 тис. грн.</td>
							</tr>
							<tr>
								<td>
									<strong>Мінімальний строк кредитування</strong>
								</td>
								<td>3 дні</td>
							</tr>
							<tr>
								<td>
									<strong>Максимальний строк кредитування</strong>
								</td>
								<td>5 років</td>
							</tr>
							<tr>
								<td>
									<strong>Забезпечення за кредитом</strong>
								</td>
								<td>відсутнє</td>
							</tr>
							<tr>
								<td>
									<strong>Процентна ставка</strong>
								</td>
								<td>Фіксована, від 14% до 47% річних на залишок заборгованості</td>
							</tr>
						</tbody>
					</table>
				</div>
				<br />
				<p>
					Для кредитів, які пропонуються ТОВ «ФОРТЕКС-ФІНАНС» клієнтам розмір плати,
					ціни/тарифи, вартість можуть бути встановлені індивідуально за результатами
					розгляду заявки на отримання кредиту та документів до неї.
				</p>
			</article>
		</section>
	);
};

export default PublicInfo;
