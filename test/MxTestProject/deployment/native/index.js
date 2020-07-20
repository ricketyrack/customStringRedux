import { NativeUI, startApp, t } from "mendix/native";
import { navigationStyle } from "C:/msys64/home/Rick.Wilson/projects/customStringRedux/test/MxTestProject/theme/styles.js";

startApp({
    "cacheBust": "637308417142972258",
    "languages": [
        "en_US"
    ],
    "navigationStyle": navigationStyle,
    "getTabs": () => ( [] ),
    "onStartupNativeClient": () => {
        NativeUI.registerPage("MyFirstModule.Native_Test_Page", require("C:/msys64/home/Rick.Wilson/projects/customStringRedux/test/MxTestProject/deployment/native/pages/MyFirstModule.Native_Test_Page"), {"showBottomBar":false});
    }
});