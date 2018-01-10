# Mongoose Subdocument Example

> ### Overview
>
> An example of using *sub docs* in a Mongo DB with Mongoose
>
> Currently there are hard coded IDs that will have to be changed to match the IDs from your DB in the `controllers/user.js` file
>
>### Initial Setup
>
> 1. Fork this repo
> 1. Clone your forked version of the repo
>       1. `git clone https://github.com/[your user name]/mongoose-subdocuments-example.git`
> 1. Change directories to the newly cloned repo
>       1. `cd mongoose-subdocuments-example`
> 1. Install all dependencies
>       1. `npm install`
> 1. Start your Mongo DB | *see below if you do not have a local version of Mongo installed*
>       1. `mongod`
> 1. Start the NodeJS server
>       1. `npm start`
>
> After setting up the project and a DB you will have to add data in the following order: *use `localhost:9000/get-user` to view your user, update all necessary IDs as you go*
>
> 1. Create User: `localhost:9000/new-user`
> 1. Add a binder to your user: `localhost:9000/add-binder`
> 1. Add a tab to the binder: `localhost:9000/add-tab`
> 1. Add a page to the tab: `localhost:9000/add-page`
> 1. Add a note to the page: `localhost:9000/add-note`
> 1. Try editing the page color: `localhost:9000/edit-page?color=yellow`
> 1. Try editing the note: `localhost:9000/edit-note?title=some%20new%20title&content=some%20new%20content`
>
> ### Mongo DB Setup
> 
> If you do not have a local MongoDB setup you have a couple options:
>
> 1. The easiest option is to use <a href="https://mlab.com/">https://mlab.com/</a>. mLab is an online MongoDB that is free to use (for development) and easy to setup.
> 1. The second option is to install a local version of MongoDB. Depending on your system this can be a little tricky.
>       1. <a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew">Install on Mac</a>
>       1. <a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/">Install on Windows</a>
>       1. <a href="https://docs.mongodb.com/manual/administration/install-on-linux/">Install on Linux</a>
>
