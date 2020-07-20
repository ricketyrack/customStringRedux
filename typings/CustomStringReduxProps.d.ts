/**
 * This file was generated from CustomStringRedux.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export type HtmlTagEnum = "div" | "h1" | "h2" | "h3" | "h4" | "p" | "span";

export interface CustomStringReduxContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    sourceExpression: DynamicValue<string>;
    htmlTag: HtmlTagEnum;
}

export interface CustomStringReduxPreviewProps {
    class: string;
    style: string;
    sourceExpression: string;
    htmlTag: HtmlTagEnum;
}
