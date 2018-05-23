package models

import models.Subject._
import play.api.libs.json.{Json, OWrites, Reads}

case class Student(name: String, grade: Int, subject: List[Subject])

object Student {

  val shyam = Student("Shyam Shrestha", 9, List(computerScience, history, geography))

  val ram = Student("Ram Kumar", 8, List(computerScience, history, geography))

  val students = List(shyam, ram)

  implicit val readStudent: Reads[Student] = Json.reads[Student]

  implicit val writeStudent: OWrites[Student] = Json.writes[Student]

 }