import { Switch } from "@material-tailwind/react";
 
export default function ToggleSwitch() {
    return (
    <div className="m-auto w-[80%]">
    <Switch id="auto-update" label="Automatic Update" />
    </div>
    );
}