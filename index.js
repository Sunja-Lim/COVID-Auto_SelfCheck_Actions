require("dotenv").config();
const {
    NAME: CODENAME,
    BIRTH: CODEBIRTH,
    REGION: CODEREGION,
    SCHOOL: CODESCHOOL,
    LEVEL: CODELEVEL
  } = process.env;

const SelfTest = require("covid_selfcheck");
SelfTest(CODENAME, CODEBIRTH, CODEREGION, CODESCHOOL, CODELEVEL).then(result => {console.log(result)});
