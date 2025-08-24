import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// // Значение темы по умолчанию
const darkTheme = createTheme({
	colorSchemes: {
		dark: true,
	},

});

createRoot(document.getElementById("root")!).render(
	<>
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</>
);
