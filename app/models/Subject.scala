package models

import play.api.libs.json.{Json, OWrites, Reads}

case class Subject(name: String, book: String, credits: Int)

object Subject {

  implicit val readSubject: Reads[Subject] = Json.reads[Subject]

  implicit val writeSubject: OWrites[Subject] = Json.writes[Subject]

  val computerScience = Subject("Computer Science", "Introduction to Computer Fundamentals", 3)

  val history = Subject("History", "History of Nepal", 3)

  val geography = Subject("Geography", "Geography of Nepal", 3)

  val maths = Subject("Maths", "Introduction to Algebra & Arithmetics", 3)

  val subjects = List(computerScience, history, geography, maths)

}