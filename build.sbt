name := """play-react-integration"""
organization := "com.ramzavil"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.4"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test
libraryDependencies += "com.typesafe.play" %% "play-json" % "2.6.7"


// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.ramzavil.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.ramzavil.binders._"
