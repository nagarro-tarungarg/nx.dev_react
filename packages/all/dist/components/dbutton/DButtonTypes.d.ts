import { MouseEventHandler } from "react";
import { BaseComponentProps } from "../../types";
export declare type DButtonTypes = Omit<BaseComponentProps, "type" | "onClick"> & {
    title: string;
    type?: "submit" | "reset" | "button" | undefined;
    primary?: boolean;
    disabled?: boolean;
    icon?: SVGAnimatedString;
    onClick: MouseEventHandler<HTMLButtonElement>;
};
