#!/bin/bash

coffee --watch --compile --output app/ coffee/ &>>compile.log &
coffee --watch --compile app.coffee &>>compile.log &
tail -f compile.log
