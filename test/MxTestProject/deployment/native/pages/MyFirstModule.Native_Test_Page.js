import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { OfflineObjectListProperty } from "mendix/OfflineObjectListProperty";
import { StaticImageProperty } from "mendix/StaticImageProperty";
import { WidgetVariableProperty } from "mendix/WidgetVariableProperty";

import { Button } from "mendix/Button";
import { ClickableArea } from "mendix/ClickableArea";
import { Container } from "mendix/Container";
import { Image } from "mendix/Image";
import { NativeList } from "mendix/NativeList";
import { Text } from "mendix/Text";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent } from "C:/msys64/home/Rick.Wilson/projects/customStringRedux/test/MxTestProject/deployment/native/layouts/Atlas_UI_Resources.NativePhone_FullPage.js";

import * as styles from "C:/msys64/home/Rick.Wilson/projects/customStringRedux/test/MxTestProject/theme/styles.js";

import Atlas_UI_Resources$Native_Content$illustration_calendar$png from "C:/msys64/home/Rick.Wilson/projects/customStringRedux/test/MxTestProject/deployment/native/img/Atlas_UI_Resources$Native_Content$illustration_calendar.png";

const { $Container, $Image, $Text, $NativeList, $ClickableArea, $Button } = asPluginWidgets({ Container, Image, Text, NativeList, ClickableArea, Button });

const main = () => [
    <$Container key="0_1"
        $widgetId="0_1"
        name="container3"
        style={[ styles.Container, styles.backgroundPrimary, styles.flexMain ]}
        onClick={undefined}
        content={[
            <$Container key="0_2"
                $widgetId="0_2"
                name="container1"
                style={[ styles.Container, styles.borderBottom, styles.alignChildrenCenter, styles.spacingInnerTopLarge, styles.spacingInnerBottomLarge ]}
                onClick={undefined}
                content={[
                    <$Image key="0_3"
                        $widgetId="0_3"
                        name="image1"
                        style={[ styles.Image, styles.spacingOuterBottomMedium ]}
                        source={StaticImageProperty({
                            image: Atlas_UI_Resources$Native_Content$illustration_calendar$png
                        })}
                        onClick={undefined} />,
                    <$Text key="0_4"
                        $widgetId="0_4"
                        name="text2"
                        style={[ styles.Text, styles.textBold, styles.spacingOuterBottomMedium, styles.textCenter ]}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "8 hours of Annual \r\nHoliday/Paid Time Off" ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.text2" }
                        })} />,
                    <$Text key="0_5"
                        $widgetId="0_5"
                        name="text3"
                        style={[ styles.Text, styles.textContrastLow, styles.textSmall ]}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "Balance on date of request: 178 hours." ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.text3" }
                        })} />,
                    <$Text key="0_6"
                        $widgetId="0_6"
                        name="text4"
                        style={[ styles.Text, styles.textContrastLow, styles.textSmall ]}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "Requested by Dave the Wave on May 17 2019" ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.text4" }
                        })} />
                ]} />,
            <$NativeList key="0_0"
                $widgetId="0_0"
                name="listView2"
                style={[ styles.ListView ]}
                listInfo={OfflineObjectListProperty({
                    entity: "MyFirstModule.Person",
                    friendlyId: "MyFirstModule.Native_Test_Page.listView2",
                    constraints: []
                })}
                itemTemplate={() => [
                    <$ClickableArea key="0_7"
                        $widgetId="0_7"
                        name=""
                        content={[
                            <$Text key="0_8"
                                $widgetId="0_8"
                                name="text1"
                                style={[ styles.Text ]}
                                text={DynamicTextProperty({
                                    scope: "0_0",
                                    template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.text1", "parameters": { "1": "MyFirstModule.Person/FirstName" }, "formats": { "1": t( [ {} ] ) } }
                                })} />,
                            <$Text key="0_9"
                                $widgetId="0_9"
                                name="text5"
                                style={[ styles.Text ]}
                                text={DynamicTextProperty({
                                    scope: "0_0",
                                    template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.text5", "parameters": { "1": "MyFirstModule.Person/LastName" }, "formats": { "1": t( [ {} ] ) } }
                                })} />,
                            <$Text key="0_10"
                                $widgetId="0_10"
                                name="text6"
                                style={[ styles.Text ]}
                                text={DynamicTextProperty({
                                    scope: "0_0",
                                    template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.text6", "parameters": { "1": "MyFirstModule.Person/Address1" }, "formats": { "1": t( [ {} ] ) } }
                                })} />,
                            <$Text key="0_11"
                                $widgetId="0_11"
                                name="text7"
                                style={[ styles.Text ]}
                                text={DynamicTextProperty({
                                    scope: "0_0",
                                    template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.text7", "parameters": { "1": "MyFirstModule.Person/Address2" }, "formats": { "1": t( [ {} ] ) } }
                                })} />,
                            <$Text key="0_12"
                                $widgetId="0_12"
                                name="text8"
                                style={[ styles.Text ]}
                                text={DynamicTextProperty({
                                    scope: "0_0",
                                    template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.text8", "parameters": { "1": "MyFirstModule.Person/City" }, "formats": { "1": t( [ {} ] ) } }
                                })} />,
                            <$Text key="0_13"
                                $widgetId="0_13"
                                name="text9"
                                style={[ styles.Text ]}
                                text={DynamicTextProperty({
                                    scope: "0_0",
                                    template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.text9", "parameters": { "1": "MyFirstModule.Person/State" }, "formats": { "1": t( [ {} ] ) } }
                                })} />,
                            <$Text key="0_14"
                                $widgetId="0_14"
                                name="text10"
                                style={[ styles.Text ]}
                                text={DynamicTextProperty({
                                    scope: "0_0",
                                    template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.text10", "parameters": { "1": "MyFirstModule.Person/PostalCode" }, "formats": { "1": t( [ {} ] ) } }
                                })} />,
                            <$Text key="0_15"
                                $widgetId="0_15"
                                name="text11"
                                style={[ styles.Text ]}
                                text={DynamicTextProperty({
                                    scope: "0_0",
                                    template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.text11", "parameters": { "1": "MyFirstModule.Person/Telephone1" }, "formats": { "1": t( [ {} ] ) } }
                                })} />,
                            <$Text key="0_16"
                                $widgetId="0_16"
                                name="text12"
                                style={[ styles.Text ]}
                                text={DynamicTextProperty({
                                    scope: "0_0",
                                    template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.text12", "parameters": { "1": "MyFirstModule.Person/isDeleted" }, "formats": { "1": t( [ {} ] ) } }
                                })} />,
                            <$Text key="0_17"
                                $widgetId="0_17"
                                name="text13"
                                style={[ styles.Text ]}
                                text={DynamicTextProperty({
                                    scope: "0_0",
                                    template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.text13", "parameters": { "1": "MyFirstModule.Person/DeletedTime" }, "formats": { "1": t( [ { "type": "date" } ] ) } }
                                })} />
                        ]}
                        onClick={undefined} />
                ]}
                amount={WidgetVariableProperty({
                    widgetId: "0_0",
                    slot: "amount",
                    type: "Decimal",
                    initialValue: 10
                })}
                pageSize={10}
                id={DerivedUniqueIdProperty({
                    widgetId: "0_0"
                })}
                scrollDirection={"vertical"}
                numberOfColumns={1}
                onPullDown={undefined} />,
            <$Container key="0_18"
                $widgetId="0_18"
                name="container2"
                style={[ styles.Container, styles.spacingInnerBottomMedium, styles.spacingInnerTopMedium, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]}
                onClick={undefined}
                content={[
                    <$Button key="0_19"
                        $widgetId="0_19"
                        name="actionButton2"
                        style={[ styles.ActionButton, styles.spacingOuterBottom ]}
                        caption={DynamicTextProperty({
                            template: { "elements": t( [ [ "Approve" ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.actionButton2" }
                        })}
                        icon={undefined}
                        onClick={ActionProperty({
                            action: { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => require("C:/msys64/home/Rick.Wilson/projects/customStringRedux/test/MxTestProject/deployment/native/nanoflows/MyFirstModule.NF_Approve_Person").NF_Approve_Person } },
                            abortOnServerValidation: false,
                            friendlyId: "On click at MyFirstModule.Native_Test_Page.actionButton2"
                        })}
                        disabledDuringAction={true} />,
                    <$Button key="0_20"
                        $widgetId="0_20"
                        name="actionButton3"
                        style={[ styles.ActionButton, styles.btnSecondary ]}
                        caption={DynamicTextProperty({
                            template: { "elements": t( [ [ "Decline" ] ] ), "friendlyId": "MyFirstModule.Native_Test_Page.actionButton3" }
                        })}
                        icon={undefined}
                        onClick={undefined}
                        disabledDuringAction={true} />
                ]} />
        ]} />
];

export const $$title = t([
    "Page Title"
] );

export const $$style = [];

export const $$page = () => mainContent(main);
