import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {
	archivedInformation,
	documents,
	financeReports,
	structureInfo,
} from '@modules/home/components/Reports/data';

const Reports = () => {
	return (
		<SplitBlocks
			title="Документи"
			subTitle="Актуальні документи фінансової компанії"
			anchor="reports"
		>
			<Accordion title="Діяльність фінансової компанії">
				<p>Послуги з переказу коштів Товариством не здійснюються.</p>
				<br />
				<p>
					Товариство має чинну ліцензію. ЛІЦЕНЗІЯ НА ДІЯЛЬНІСТЬ ФІНАНСОВОЇ КОМПАНІЇ,
					з правом надання фінансової послуги НАДАННЯ КОШТІВ ТА БАНКІВСЬКИХ МЕТАЛІВ У
					КРЕДИТ, дата видачі ліцензії 20.05.2024. Строк лії ліцензії необмежений.
					Посилання на Комплексно інформаційну систему Національного банку України{' '}
					<a href="https://kis.bank.gov.ua" target="_blank" rel="noreferrer">
						https://kis.bank.gov.ua
					</a>
				</p>
				<br />
				<p>
					Для отримання повної інформації щодо Товариства, ліцензування, реєстрацію
					та авторизацію якого здійснює Національний банк України, рекомендуємо
					використовувати всі засоби пошуку, які розміщені сторінці за посиланням{' '}
					<a
						href="https://bank.gov.ua/ua/supervision/nonbanks/registers-lists"
						target="_blank"
						rel="noreferrer"
					>
						https://bank.gov.ua/ua/supervision/nonbanks/registers-lists
					</a>
				</p>
			</Accordion>

			<Accordion title="Керівництво">
				<p>Директор ТОВ &quot;Фортекс-Фінанс&quot; - Момот Оксана Михайлівна</p>
				<br />
				<p>
					Головний бухгалтер ТОВ &quot;Фортекс-Фінанс&quot; - Салій Ольга Петрівна
				</p>
			</Accordion>

			<Accordion title="Документи фінансової установи">
				<DocumentsList list={documents} />
			</Accordion>

			<Accordion title="Фінансова звітність">
				<DocumentsList groupList={financeReports} />
			</Accordion>

			<Accordion title="Структура власності">
				<DocumentsList list={structureInfo} />
			</Accordion>

			<Accordion title="Архівна інформація">
				<DocumentsList list={archivedInformation} />
			</Accordion>
		</SplitBlocks>
	);
};

export default Reports;
