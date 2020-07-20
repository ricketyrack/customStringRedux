import { __awaiter } from '../../../../node_modules/tslib/tslib.es6';
import { Platform, Dimensions } from 'react-native';
import { stringify } from '../../node_modules/querystringify/index';

const SPRINTR_FEEDBACK_URL = "https://sprintr.home.mendix.com/submitissue/";
function sendToSprintr(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const shortname = data.feedbackMsg ? data.feedbackMsg.substring(0, 200) : "";
        const description = data.feedbackMsg ? data.feedbackMsg.substring(200) : "";
        const body = {
            apiversion: "1.0",
            application: data.sprintrAppId,
            username: "Unknown Native User",
            emailaddress: "unknown@example.com",
            userroles: "",
            shortname,
            description,
            img: data.screenshot,
            browser: "React Native for " + Platform.OS,
            screensize: Dimensions.get("window").width + "x" + Dimensions.get("window").height,
            issuetype: "issue",
            documentType: "Page",
            documentName: "Unknown Native Page"
        };
        return fetch(SPRINTR_FEEDBACK_URL, {
            method: "POST",
            body: stringify(body),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            mode: "no-cors",
            referrer: "no-referrer"
        })
            .then(response => response.ok)
            .catch(() => false);
    });
}

export { sendToSprintr };
