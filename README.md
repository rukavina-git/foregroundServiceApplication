## Foreground Service Example


# Overview
This repository provides a simple demonstration of integrating a native Kotlin module into a React Native application. The project comprises a bare React Native CLI application, featuring a basic starting screen housing a single button. Upon button press, a Kotlin-written foreground service is initiated, triggering the display of a notification.

# How It Works
Bare React Native CLI application.
Starting screen with a single button.
Button click triggers a foreground service written in Kotlin.
The foreground service displays a notification.


# General steps:
1. Create basic RN app
2. Add dependecies to build.gradle
3. Create Kotlin module called ForegroundService.kt with implementation of foreground service
4. Add MyAppPackage.kt, this is what we need to bind Kotlin module to React Native application
5. Update MainApplication.java to link package that we created in previous step.
6. Now that we linked package, we can use it in our React Native app. Import it in our App.tsx(Or wherever in our React Native app we want to use it.)
7. After importing it, we can call native functions that we annotated with @ReactMethod
