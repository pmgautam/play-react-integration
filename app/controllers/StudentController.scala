package controllers

import javax.inject._
import models.Student._
import models.Subject._
import play.api._
import play.api.i18n.I18nSupport
import play.api.libs.json.Json
import play.api.mvc._

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class StudentController @Inject()(cc: ControllerComponents) extends AbstractController(cc) with I18nSupport{

  /**
    * returns JSON of students
    */
  def studentsIndex() = Action { implicit request: Request[AnyContent] =>
    Ok(Json.toJson(students))
  }

  /**
    * returns JSON of subjects
    */
  def subjectsIndex() = Action { implicit request: Request[AnyContent] =>
    Ok(Json.toJson(subjects))
  }
}
