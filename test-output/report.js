$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/Features/crm.feature");
formatter.feature({
  "name": "CRM login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify contacts page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag002"
    }
  ]
});
formatter.step({
  "name": "the user opens the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "the user opens the application",
  "keyword": "When "
});
formatter.step({
  "name": "the user enters the username \"sha131131@gmail.com\" and password \"Saibaba13\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "click on contacts link",
  "keyword": "Given "
});
formatter.step({
  "name": "click on New",
  "keyword": "Then "
});
formatter.step({
  "name": "enter the \"\u003cfirstname\u003e\", \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click on save",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname"
      ]
    },
    {
      "cells": [
        "Anu",
        "P"
      ]
    },
    {
      "cells": [
        "skele",
        "P"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify contacts page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag002"
    }
  ]
});
formatter.step({
  "name": "the user opens the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.CRMstepdef.the_user_opens_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user opens the application",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.CRMstepdef.the_user_opens_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the username \"sha131131@gmail.com\" and password \"Saibaba13\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.CRMstepdef.the_user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.CRMstepdef.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on contacts link",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.CRMstepdef.click_on_contacts_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on New",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.CRMstepdef.click_on_New()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the \"Anu\", \"P\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.CRMstepdef.enter_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on save",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.CRMstepdef.click_on_save()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify contacts page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag002"
    }
  ]
});
formatter.step({
  "name": "the user opens the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.CRMstepdef.the_user_opens_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user opens the application",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.CRMstepdef.the_user_opens_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the username \"sha131131@gmail.com\" and password \"Saibaba13\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.CRMstepdef.the_user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.CRMstepdef.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on contacts link",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.CRMstepdef.click_on_contacts_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on New",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.CRMstepdef.click_on_New()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the \"skele\", \"P\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.CRMstepdef.enter_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on save",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.CRMstepdef.click_on_save()"
});
formatter.result({
  "status": "passed"
});
});