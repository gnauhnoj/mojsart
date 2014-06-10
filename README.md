mojsart
=======

This repository contains mojsart, a crowd-sourced music visualization engine. The idea behind mojsart came out of a desire to find new ways to visualize music libraries. The end result is a web application which allows users to tangibly see how one song in a collection compares to the rest. Users upload songs, provide feedback on how one song compares to another, and see in real time how the combination of machine and user feedback is graphically represented. 

See the current version of mojsart [here](http://mojsart.com/).

#### Screenshots
![Visualize your collection](https://www.dropbox.com/s/bkm2zlbcx900s63/visualize.png)
![Upload more songs](https://www.dropbox.com/s/ehwlehy05n83txv/upload.png)
![Vote which songs are similar to you](https://www.dropbox.com/s/rl6xumukhohatop/vote.png)

#### Technologies Used
Our application's tech stack is the following:
- Front-end: AngularJS
- Back-end: Express
- Database: MongoDB
- Song data: Echo Nest
- Visualization: D3.js

#### Challenges Faced
As a whole, the team faced three primary technical challenges:
- File Uploads with Angular
- D3 and Angular Integration
- Asynchronus batch file processing with a 3rd party API dependency
