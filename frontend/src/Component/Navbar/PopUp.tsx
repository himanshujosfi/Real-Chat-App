
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const PopUp = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button  > <IoReorderThreeOutline /> More Option</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    {/* <div className="space-y-2">
                        <h4 className="leading-none font-medium">Dimensions</h4>
                        <p className="text-muted-foreground text-sm">
                            Set the dimensions for the layer.
                        </p>
                    </div> */}
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Link to={"/login"} >Log In</Link>

                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Link to={"/register"} >Register</Link>

                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

