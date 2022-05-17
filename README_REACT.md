## React new Project

```bash
# install xcode
xcode-select --install
eval "$(/opt/homebrew/bin/brew shellenv)"

# update ruby
brew install ruby

vi .zshrc
export PATH=/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/3.0.0/bin:$PATH
export LDFLAGS="-L/opt/homebrew/opt/ruby/lib"
export CPPFLAGS="-I/opt/homebrew/opt/ruby/include"

# install node watchman
brew install node
brew install watchman

# Mac M1
gem install ffi
gem install cocoapods

# install npx
yarn global add expo-cli

# install react-cli global 
yarn global add react-native-cli

# install react
yarn -W add react@17.0.2 react-dom@17.0.2

# create react project with specific version
npx react-native init devopsapp --version 0.67.0
cd devopsapp
# Tab 1
npx react-native start
# Tab 2
npx react-native run-ios
```
```bash
cd devops-app/packages/app

# install helm
yarn -W add realm@10.9.1

# install dependencies
yarn -W add react-router-native
yarn -W add react-native-gesture-handler react-native-safe-area-context @react-native-community/masked-view react-native-screens react-native-reanimated react-navigation-stack react-navigation react-router-dom

# update 
cd ios && pod install

# run
yarn react-native run-ios


# Clean
```bash

yarn clean:root
yarn clean
yarn cache clean
rm -rf ~/Library/Developer/Xcode/DerivedData/*
cd ios/ && rm -rf Pods Podfile.lock
pod cache clean --all
pod deintegrate && pod setup && pod install
```


# Links
- Setup: 
    - https://medium.com/@davidjasonharding/developing-a-react-native-app-on-an-m1-mac-without-rosetta-29fcc7314d70
    - https://reactnative.dev/docs/environment-setup
    - https://aboutreact.com/example-of-realm-database-in-react-native/#How-to-Use-Realm