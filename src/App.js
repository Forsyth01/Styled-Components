
import './App.css';
import * as React from 'react';
import { Navbars } from './Components/Navbar';
import { Cards } from './Components/Cards';
import { Pop } from './Components/Popover';
import Accord from './Components/Accordion';
import OpenDialog from './Components/OpenDialog';
import DropMenu from './Components/DropMenu';
import SelectDropDownMenu from './Components/SelectDropDownMenu';
import ToggleSwitch from './Components/ToggleSwitch';
import Tabss from './Components/Tabs';
import ToolTip from './Components/ToolTip';
import { Loading } from './Components/Loading';
import { Footer } from './Components/Footer';





function App() {
  return (
    <div className="App space-y-10">
      <Navbars />
      <ToggleSwitch />
      <ToolTip />
      <Loading />
      <Pop />
      <OpenDialog />
      <DropMenu />
      <Cards />
      <Accord />
      <SelectDropDownMenu />
      <Tabss />
      <Footer />
    </div>
  );
}

export default App;
