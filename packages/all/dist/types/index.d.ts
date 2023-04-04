import { MouseEventHandler } from "react";
export declare enum Theme {
    LIGHT = 0,
    DARK = 1
}
export interface BaseComponentProps {
    className?: string;
    tabIndex: number;
    language: string;
    role: string;
    id: string;
    style: string;
    theme: Theme;
    type: string | undefined;
    autoFocus: boolean;
    visible: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
    onFocus: (e: Event) => void;
    onMouseOver: (e: Event) => void;
    onMouseOut: (e: Event) => void;
    onLoad: (e: Event) => void;
    onKeydown: (e: Event) => void;
}
