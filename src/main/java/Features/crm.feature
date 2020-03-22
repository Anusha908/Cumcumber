Feature: CRM login
@tag001
Scenario: Verify CRM login
 Given the user opens the browser
 When the user opens the application
 Then the user enters the username "sha131131@gmail.com" and password "Saibaba13"
 And click on Login button
 Then Verify the title
 
 @tag002
 Scenario Outline: Verify contacts page
 Given the user opens the browser
 When the user opens the application
 Then the user enters the username "sha131131@gmail.com" and password "Saibaba13"
 And click on Login button
 Given click on contacts link
 Then click on New
 Then enter the "<firstname>", "<lastname>" 
 Then click on save
 
 
  Examples:
  |firstname|lastname|
  |Anu|P|
  |skele|P|
  
