import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppBar from "./AppBar";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState, type SyntheticEvent } from "react";
import SaveIcon from "@mui/icons-material/Save";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const App = () => {
	// Хранилище для логина
	const [username, setUserName] = useState("");
	// Хранилище для пароля
	const [userpassword, setPassword] = useState("");

	// Имитация загрузки на сервер(с помощью флага)
	const [loading, setLoading] = useState(false);

	// Флаг для изменения формы логинизации или регистрация
	const [loginFormName, setloginFormName] = useState("login");

	// Сохраняет логин в переменную username
	const handleUserNameChange = (e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setUserName(e.currentTarget.value);
	};
	const handlePasswordChange = (e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setPassword(e.currentTarget.value);
	};

	const handleLoggin = () => {
		setLoading(true);
		// Имитация отмены закгрузки на сервер
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};
	// Функция для измения значения флага
	const handleChange = (_event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
		setloginFormName(newAlignment);
	};

	return (
		<>
			<AppBar />
			<div style={{ marginTop: "100px" }}></div>

			<Container maxWidth="sm">
				<ToggleButtonGroup
					disabled={loading}
					size="small"
					color="primary"
					value={loginFormName}
					exclusive
					onChange={handleChange}
					aria-label="Platform"
					fullWidth
					sx={{ marginBottom: 2 }}
				>
					<ToggleButton value="login">Login</ToggleButton>
					<ToggleButton value="register">Register</ToggleButton>
				</ToggleButtonGroup>
				{loginFormName === "login" ? (
					<Stack spacing={2}>
						<TextField
							// Пока идёт загрузка(loading), disabled запрещает ввод
							disabled={loading}
							// value нужен для синхронизации того что мы напечатали с пермееной username, т.к. пока всё хранится в input
							value={username}
							onChange={handleUserNameChange}
							size="small"
							label="email"
							variant="filled"
							slotProps={{
								input: {
									startAdornment: (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									),
								},
							}}
						/>
						<TextField
							disabled={loading}
							value={userpassword}
							onChange={handlePasswordChange}
							size="small"
							label="password"
							variant="filled"
							type="password"
							slotProps={{
								input: {
									startAdornment: (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									),
								},
							}}
						/>
						<Button onClick={handleLoggin} variant="contained" loading={loading} loadingPosition="start">
							{loading ? "Loading" : "Login"}
						</Button>
					</Stack>
				) : (
					<Stack spacing={2}>
						<TextField
							// Пока идёт загрузка(loading), disabled запрещает ввод
							disabled={loading}
							// value нужен для синхронизации того что мы напечатали с пермееной username, т.к. пока всё хранится в input
							value={username}
							onChange={handleUserNameChange}
							size="small"
							label="email"
							variant="filled"
							slotProps={{
								input: {
									startAdornment: (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									),
								},
							}}
						/>
						<TextField
							disabled={loading}
							value={userpassword}
							onChange={handlePasswordChange}
							size="small"
							label="password"
							variant="filled"
							type="password"
							slotProps={{
								input: {
									startAdornment: (
										<InputAdornment position="start">
											<AccountCircle />
										</InputAdornment>
									),
								},
							}}
						/>
						<Button onClick={handleLoggin} variant="contained" loading={loading} loadingPosition="start">
							{loading ? "Loading" : "Register"}
						</Button>
					</Stack>
				)}
			</Container>
		</>
	);
};

export default App;
