import { createElement } from "react";
const React = { createElement };


import { Placeholder } from "mendix/Placeholder";
import { asPluginWidgets, t } from "mendix/native";

import * as styles from "C:/msys64/home/Rick.Wilson/projects/customStringRedux/test/MxTestProject/theme/styles.js";

const { $Placeholder } = asPluginWidgets({ Placeholder });

export const mainContent = (main) => [
    <$Placeholder key="0_0"
        $widgetId="0_0"
        name="Main"
        content={main()} />
];

