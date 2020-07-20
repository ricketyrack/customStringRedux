import { Component, ReactNode, createElement } from "react";
import { CustomStringReduxPreviewProps } from "../typings/CustomStringReduxProps";

export class preview extends Component<CustomStringReduxPreviewProps> {

    render(): ReactNode {
        return <div>
                    Your string here
               </div>;
    }

}

export function getPreviewCss(): string {
    return require("./ui/CustomStringRedux.css");
}
