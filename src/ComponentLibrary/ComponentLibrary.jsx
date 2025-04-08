import React from "react";
import './ComponentLibrary.css';
import { Colors } from "../constants/colors";
import NavBar from "../CommonComponents/NavBar/NavBar";
import ContentContainer from "../Portfolio/ContentContainer/ContentContainer";
import ButtonToggle from "../CommonComponents/ButtonToggle/ButtonToggle";
import DropdownMenu from "../CommonComponents/DropdownMenu/DropdownMenu";
import HorizontalSeparator from "../CommonComponents/HorizontalSeparator/HorizontalSeparator";
import Icon from "../CommonComponents/Icon/Icon";
import InstructionsBox from "../CommonComponents/InstructionsBox/InstructionsBox";
import MacSteps from "../CommonComponents/InstructionsBox/InstructionJson/MacInstructions.json";
import SimpleSquare from "../CommonComponents/SimpleSquare/SimpleSquare";
import Spacer from "../CommonComponents/Spacer/Spacer";
import VerticalSeparator from "../CommonComponents/VerticalSeparator/VerticalSeparator";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function ComponentLibrary() {

  let DemoOptions = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
];

  return (
    <div className="ComponentLibrary">
      <NavBar />
      <h1>ComponentLibrary</h1>
      <h1>You could use Storyboard for this but I am choosing to have it here</h1>
      <div className="Example">
        <h1> Content Container </h1>
        <div className="ContentDemo">
          <ContentContainer contentDisplay="Display" color={Colors.background}/>
        </div>
      </div>
      
      <div className="Example">
        <h1> Button Toggle </h1>
        <div className="ContentDemo">
          <ButtonToggle isExpanded={true} onClick={() => {console.log("clicked!")}}/>
        </div>
      </div>

      <div className="Example">
        <h1> Dropdown Menu </h1>
        <div className="ContentDemo">
          <DropdownMenu options={DemoOptions} languageChange={() => {console.log("language changed!")}}/>
        </div>
      </div>

      <div className="Example">
        <h1> Horizontal Separator </h1>
        <div className="ContentDemo">
          <HorizontalSeparator color={Colors.background}/>
        </div>
      </div>

      <div className="Example">
        <h1> Icon </h1>
        <div className="ContentDemo">
        <Icon pic="arrow" rotation="down" isButton="true" />
        </div>
      </div>

      <div className="Example">
        <h1> Instructions Box </h1>
        <div className="ContentDemo">
          <InstructionsBox steps={MacSteps.steps} />
        </div>
      </div>

      <div className="Example">
        <h1> Simple Square </h1>
        <div className="ContentDemo">
        <SimpleSquare text="React" pic="react"/>
        </div>
      </div>

      <div className="Example">
        <h1> Spacer </h1>
        <div className="ContentDemo">
          <Spacer spacer="100px" color={Colors.background}/>
        </div>
      </div>

      <div className="Example">
        <h1> Vertical Separator </h1>
        <div className="ContentDemo">
          <VerticalSeparator color={Colors.ACCENTTWO} style={{"height": "100px"}}/>
        </div>
      </div>

      <div className="Example">
        <h1> MUI Table </h1>
        <div className="ContentDemo">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <div className="Example">
        <h1> MUI Box with Text Fields </h1>
        <div className="ContentDemo">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
              />
              <TextField
                disabled
                id="outlined-disabled"
                label="Disabled"
                defaultValue="Hello World"
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </div>
          </Box>
        </div>
      </div>

    </div>
  );
}

export default ComponentLibrary;