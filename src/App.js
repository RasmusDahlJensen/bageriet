import { ContainerStyle } from "./Styled/Container.style";
import { Navbar } from "./Components/Navbar";
import { AppRouter } from "./Routing/AppRouter";
import { Footer } from "./Components/Footer";

function App() {
	return (
		<ContainerStyle>
			<Navbar />
			<AppRouter />
			<Footer />
		</ContainerStyle>
	);
}

export default App;
