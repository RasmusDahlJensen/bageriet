import { ContainerStyle } from "./Styled/Container.style";
import { Home } from "./Pages/Home";
import { Navbar } from "./Components/Navbar";

function App() {
	return (
		<ContainerStyle>
			<Navbar />
			<Home></Home>
		</ContainerStyle>
	);
}

export default App;
