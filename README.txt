Install cypress: 
npm init -y
npm install cypress@12.17.4
npx cypress install (if this version of cypress is not already installed on your local)

To run/open the tests, there are multiple terminal command options:

1. (RECOMMENDED) Open cypress UI and see each test by clicking on it: 

    npx cypress open --browser electron --e2e
                 If need to configure: select e2e, press NEXT as many times as needed, and select ELECTRON browser
                 You will have the list with the 3 tests on the left. Clicking each one will run it. 
                 This way you have the option of seeing and keeping the logs on the screen for each test.

2. Run headless and see terminal logs: 

    npx cypress run --browser electron --e2e 
            
