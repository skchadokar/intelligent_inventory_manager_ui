import { validateEmail, validateURL } from "./functions";

export const handleValidation = (conditions) => {
    let errors = {};
    let isError = false;
    for (let i = 0; i < conditions.length; i++) {
        let obj = conditions[i];
        switch (obj.condition) {
            case 'required':
                if (!obj.value) {
                    errors[conditions[i].name] = conditions[i].text + ' Required';
                    isError = true;
                }
                break;
            case 'email':
                if (obj.value && !validateEmail(obj.value)) {
                    errors[conditions[i].name] = 'Invalid Email';
                    isError = true;
                }
                break;
            case 'url':
                if (obj.value && !validateURL(obj.value)) {
                    errors[conditions[i].name] = 'Invalid Url';
                    isError = true;
                }
                break;
            case 'match':
                if (obj.value && obj.value2 && obj.value !== obj.value2) {
                    errors[conditions[i].name] = conditions[i].text + ' Not Macthing';
                    isError = true;
                }
                break;
            case 'minlength':
                if (obj.value && (obj.min > obj.value.length)) {
                    errors[conditions[i].name] = 'Should be ' + obj.min + ' or more Characters';
                    isError = true;
                }
                break;

            default:
                break;
        }
    }
    return { isError, errors };
}
