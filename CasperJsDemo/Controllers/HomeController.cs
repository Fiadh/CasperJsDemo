using System.Web.Mvc;

namespace CasperJsDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Echo(string shout)
        {
            ViewBag.Shout = shout;
            return View("Echo");
        }
    }
}