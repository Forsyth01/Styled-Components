import { Tooltip, Button } from "@material-tailwind/react";

export default function ToolTip() {
    return (
        <div className="m-auto w-[80%]">

            <Tooltip
                content="Material Tailwind"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}
            >
                <Button variant="gradient">Show Tooltip</Button>
            </Tooltip>

        </div>
    );
}