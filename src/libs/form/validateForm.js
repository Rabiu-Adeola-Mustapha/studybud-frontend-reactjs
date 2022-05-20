import {
  testAlpha,
  testAlphaNumeric,
  testAlphaDash,
  testNumeric,
  testEmail,
  testPhone,
  testString,
  testBool,
  testGhanaCard,
  testDigitalAddress,
  testFile,
} from './validationRules';

const decamelize = (str, separator) => {
  separator = typeof separator === 'undefined' ? ' ' : separator;
  if (str.includes('_')) {
    return str.replace('_', ' ');
  }
  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();
};
let errors = {};
const validateForm = (values, rules) => {
  for (const ruleKey in rules) {
    for (const valueKey in values) {
      if (ruleKey === valueKey) {
        errors[`${valueKey}`] = [];
        const rulesArray = rules[ruleKey].split('|');
        rulesArray.forEach(rule => {
          let mainRule = '';
          let mainRuleMessage = '';
          if (rule.includes('>')) {
            mainRule = rule.split('>')[0];
            mainRuleMessage = rule.split('>')[1];
          } else {
            mainRule = rule;
          }
          if (mainRule === 'required' && !values[valueKey]) {
            mainRuleMessage.length > 0
              ? errors[`${valueKey}`].push(mainRuleMessage)
              : errors[`${valueKey}`].push(
                  `The ${decamelize(valueKey)} field is required`,
                );
          } else if (values[valueKey]) {
            if (mainRule === 'alpha' && !testAlpha(values[valueKey])) {
              mainRuleMessage.length > 0
                ? errors[`${valueKey}`].push(mainRuleMessage)
                : errors[`${valueKey}`].push(
                    `The ${decamelize(
                      valueKey,
                    )} field must be alphabetic characters`,
                  );
            }
            if (mainRule === 'alpha_num' && !testAlphaNumeric(values[valueKey])) {
              mainRuleMessage.length > 0
                ? errors[`${valueKey}`].push(mainRuleMessage)
                : errors[`${valueKey}`].push(
                    `The ${decamelize(valueKey)} field must be alphanumeric`,
                  );
            }
            if (mainRule === 'alpha_dash' && !testAlphaDash(values[valueKey])) {
              mainRuleMessage.length > 0
                ? errors[`${valueKey}`].push(mainRuleMessage)
                : errors[`${valueKey}`].push(
                    `The ${decamelize(
                      valueKey,
                    )} field must be alphanumeric with dashes or underscore`,
                  );
            }
            if (mainRule === 'string' && !testString(values[valueKey])) {
              mainRuleMessage.length > 0
                ? errors[`${valueKey}`].push(mainRuleMessage)
                : errors[`${valueKey}`].push(
                    `The ${decamelize(valueKey)} field must be string`,
                  );
            }
            if (mainRule === 'numeric' && !testNumeric(values[valueKey])) {
              mainRuleMessage.length > 0
                ? errors[`${valueKey}`].push(mainRuleMessage)
                : errors[`${valueKey}`].push(
                    `The ${decamelize(valueKey)} field must be numeric`,
                  );
            }
            if (mainRule === 'email' && !testEmail(values[valueKey])) {
              mainRuleMessage.length > 0
                ? errors[`${valueKey}`].push(mainRuleMessage)
                : errors[`${valueKey}`].push(
                    `The ${decamelize(valueKey)} field must be a valid email`,
                  );
            }
            if (mainRule === 'bool' && !testBool(values[valueKey])) {
              mainRuleMessage.length > 0
                ? errors[`${valueKey}`].push(mainRuleMessage)
                : errors[`${valueKey}`].push(
                    `The ${decamelize(valueKey)} field must be a boolean`,
                  );
            } 
            if (mainRule === 'id_card' && !testGhanaCard(values[valueKey])) {
              mainRuleMessage.length > 0
                ? errors[`${valueKey}`].push(mainRuleMessage)
                : errors[`${valueKey}`].push(
                    `The ID field must be a valid Ghana Card`,
                  );
            }
            if (mainRule === 'digital_address' && !testDigitalAddress(values[valueKey])) {
              mainRuleMessage.length > 0
                ? errors[`${valueKey}`].push(mainRuleMessage)
                : errors[`${valueKey}`].push(
                    `The address field must be a valid digital address`,
                  );
            }
            if (mainRule === 'email_phone') {
              const emailStart = /^[A-Za-z]+$/
              const phoneStart = /^0\d{9}$/
              
              if (emailStart.test(values[valueKey]) || values[valueKey].includes('@')) {
                if (!testEmail(values[valueKey])) {
                  mainRuleMessage.length > 0
                  ? errors[`${valueKey}`].push(mainRuleMessage)
                  : errors[`${valueKey}`].push(
                    `The ${decamelize(valueKey)} field must be a valid email`,
                    );
                }
              }
              else{
                if (phoneStart.test(values[valueKey])) {
                  if(!phoneStart.test(values[valueKey])){
                    mainRuleMessage.length > 0
                    ? errors[`${valueKey}`].push(mainRuleMessage)
                    : errors[`${valueKey}`].push(
                      `The ${decamelize(valueKey)} field must be a valid phone number`,
                      );
                  }
                }else{
                  mainRuleMessage.length > 0
                    ? errors[`${valueKey}`].push(mainRuleMessage)
                    : errors[`${valueKey}`].push(
                      `The ${decamelize(valueKey)} field must be a valid phone number`,
                      );
                }
              }
              
            }
            if (mainRule === 'phone' && !testPhone(values[valueKey])) {
              mainRuleMessage.length > 0
                ? errors[`${valueKey}`].push(mainRuleMessage)
                : errors[`${valueKey}`].push(
                    `The ${decamelize(
                      valueKey,
                    )} field must be a valid phone number`,
                  );
            }

            if (mainRule.includes(':')) {
              const key = mainRule.split(':')[0];
              const value = mainRule.split(':')[1];
              switch (key.toLowerCase()) {
                case 'min':
                  if (values[valueKey].length < parseInt(value)) {
                    mainRuleMessage.length > 0
                      ? errors[`${valueKey}`].push(mainRuleMessage)
                      : errors[`${valueKey}`].push(
                          `The ${decamelize(
                            valueKey,
                          )} must be ${value} characters minimum`,
                        );
                  }
                  break;
                case 'max':
                  if (values[valueKey].length > parseInt(value)) {
                    mainRuleMessage.length > 0
                      ? errors[`${valueKey}`].push(mainRuleMessage)
                      : errors[`${valueKey}`].push(
                          `The ${decamelize(
                            valueKey,
                          )} must be ${value} characters maximum`,
                        );
                  }
                  break;
                case 'match':
                  if (values[valueKey] !== values[value]) {
                    mainRuleMessage.length > 0
                      ? errors[`${valueKey}`].push(mainRuleMessage)
                      : errors[`${valueKey}`].push(
                          `The ${decamelize(valueKey)} dose not match ${value}`,
                        );
                  }
                  break;
                case 'docs':
                  const regex = /(\.pdf|\.doc|\.docx)$/i;
                  if (values[valueKey].name) {
                    // if (
                    //     !regex.exec(values[valueKey].name)
                    // ) {
                    //     mainRuleMessage.length > 0
                    //         ? errors[`${valueKey}`].push(
                    //               mainRuleMessage
                    //           )
                    //         : errors[`${valueKey}`].push(
                    //               `The ${decamelize(
                    //                   valueKey
                    //               )} must be of type ${value}`
                    //           );
                    // }
                  } else {
                    // let check = true;
                    // console.log(values[valueKey], value);
                    // for (const key in values[valueKey]) {
                    //     if (
                    //         regex.exec(
                    //             values[valueKey][`${key}`]
                    //                 .name
                    //         )
                    //     ) {
                    //         check = false;
                    //     }
                    // }
                    // if (!check) {
                    //     mainRuleMessage.length > 0
                    //         ? errors[`${valueKey}`].push(
                    //               mainRuleMessage
                    //           )
                    //         : errors[`${valueKey}`].push(
                    //               `The ${decamelize(
                    //                   valueKey
                    //               )} must be of type pdf, doc`
                    //           );
                    // }
                  }
                  break;
                default:
                  break;
              }
            }
          }
        });
      }
    }
  }
  return errors;
};

export default validateForm;
