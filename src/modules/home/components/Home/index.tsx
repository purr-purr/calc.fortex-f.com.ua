import About from '@modules/home/components/About';
import Contacts from '@modules/home/components/Contacts';
import Intro from '@modules/home/components/Intro';
import Notice from '@modules/home/components/Notice';
import Reports from '@modules/home/components/Reports';

const Home = () => {
	return (
		<>
			<Intro />
			<About>
				<Reports />
			</About>
			<Notice />
			<Contacts />
		</>
	);
};

export default Home;
