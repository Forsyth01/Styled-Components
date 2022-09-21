import { Select, Option } from "@material-tailwind/react";

export default function SelectDropDownMenu() {
    return (
        <div className="m-auto w-[80%]">
            <div className="w-72">
                <Select
                    label="Select Version"
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                    }}
                >
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                </Select>
            </div>
        </div>
    );
}