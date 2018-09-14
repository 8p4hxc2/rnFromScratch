# rnFromScratch

1. Install react-native-cli
    npm install -g react-native-cli

2. Initialize a Project
    react-native init rnFromScratch

3. Add a local.properties file in android folder with the url of the android sdk inside
    sdk.dir = ~/Android/Sdk

4. Run the app

To run your app on iOS:
   cd ~/rnFromScratch/rnFromScratch
   react-native run-ios
   - or -
   Open ios/rnFromScratch.xcodeproj in Xcode
   Hit the Run button

To run your app on Android:
   cd ~/rnFromScratch/rnFromScratch
   Have an Android emulator running (quickest way to get started), or a device connected
   react-native run-android

5. CTRL + M to open dev tool on emulator & activate hot reloading




















66. get PID of a port and kill it

    sudo lsof -i :8081
    kill -9 PID

88. set repo for the project folder in .git/config if necessary

    ....

    [remote "origin"]
        url = https://8p4hxc2@github.com/8p4hxc2/rnFromScratch.git
        fetch = +refs/heads/*:refs/remotes/origin/*
    ....
    [user]
        name = 8p4hxc2
        email = email@email.com
    [credential]
        username = 8p4hxc2
        helper = cache --timeout=3000000 # cache pour linux