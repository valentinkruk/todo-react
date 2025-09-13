import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Stack, Tooltip } from "@mui/material";

import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useColorScheme } from "@mui/material/styles";

const ButtonAppBar = () => {
	const { mode, setMode } = useColorScheme();
	if (!mode) {
		return null;
	}
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar sx={{ position: "fixed", minHeight: 30 }}>
				<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
					<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
						<div style={{ display: "flex", gap: 15 }}>
							<MenuIcon />
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								Todos
							</Typography>
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								About
							</Typography>
						</div>
					</IconButton>

					<div style={{ display: "flex", alignItems: "center" }}>
						<FormControl>
							<RadioGroup
								aria-labelledby="demo-theme-toggle"
								name="theme-toggle"
								row
								value={mode}
								onChange={(event) => {
									setMode(event.target.value as "light" | "dark");
									console.log(mode);
								}}
							>
								<FormControlLabel value="light" control={<Radio />} label="Light" />
								<FormControlLabel value="dark" control={<Radio />} label="Dark" />
							</RadioGroup>
						</FormControl>

						<Button color="inherit">Login</Button>
						<Tooltip title="User">
							<Avatar src={""} />
						</Tooltip>
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default ButtonAppBar;
