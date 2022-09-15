import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
} from "@material-tailwind/react";

export const Pop = () => {
    return (
        <div className="m-auto w-[80%] my-10">
            <Popover>
                <PopoverHandler>
                    <Button variant="gradient">Show Popover</Button>
                </PopoverHandler>
                <PopoverContent>
                    This is a very beautiful popover, show some love.
                </PopoverContent>
            </Popover>
        </div>
    );
}