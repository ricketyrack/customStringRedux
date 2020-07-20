import { Component, ReactNode, createElement } from "react";
import { CustomStringReduxContainerProps } from "../typings/CustomStringReduxProps";
import { HtmlTagEnum } from "../typings/CustomStringReduxProps";
//import { ValueStatus } from "mendix";
import "./ui/CustomStringRedux.css";

export default class CustomStringRedux extends Component<CustomStringReduxContainerProps> {

    constructor(props : CustomStringReduxContainerProps) {
    
        super(props);

    }

    render(): ReactNode {
        let myWidgetName     = 'CustomStringRedux';
        let myHtmlTag        = this.props.htmlTag;
        let myStyle          = this.props.style;
        let myTabIndex       = this.props.tabIndex;
        let sourceExpression = this.props.sourceExpression.value;
        
        console.debug(myWidgetName + ": render htmlTag: " + myHtmlTag.toString() + " value: " + sourceExpression);
    
        let returnVal = <div></div>; // nothing by default -- just to declare the variable
        switch(myHtmlTag) {
            case "div" as HtmlTagEnum: {
                returnVal = <div style={myStyle} className={this.props.class} tabIndex={myTabIndex}>{sourceExpression}</div>;
                break;
            }
            case "h1" as HtmlTagEnum: {
                returnVal = <h1 style={myStyle} tabIndex={myTabIndex} className={this.props.class}>{sourceExpression}</h1>;
                break;
            }
            case "h2" as HtmlTagEnum: {
                returnVal = <h2 style={myStyle} tabIndex={myTabIndex} className={this.props.class}>{sourceExpression}</h2>;
                break;
            }
            case "h3" as HtmlTagEnum: {
                returnVal = <h3 style={myStyle} tabIndex={myTabIndex} className={this.props.class}>{sourceExpression}</h3>;
                break;
            }
            case "h4" as HtmlTagEnum: {
                returnVal = <h4 style={myStyle} tabIndex={myTabIndex} className={this.props.class}>{sourceExpression}</h4>;
                break;
            }
            case "p" as HtmlTagEnum: {
                returnVal = <p style={myStyle} tabIndex={myTabIndex} className={this.props.class}>{sourceExpression}</p>;
                break;
            }
            case "span" as HtmlTagEnum: {
                returnVal = <span style={myStyle} tabIndex={myTabIndex} className={this.props.class}>{sourceExpression}</span>;
                break;
            }
            default: {
                returnVal = <div style={myStyle} tabIndex={myTabIndex} className={this.props.class}>{sourceExpression}</div>;
                break;
            }
        } // switch

        console.debug(myWidgetName + ": end of render");

        return returnVal;
    
    } // render

}
